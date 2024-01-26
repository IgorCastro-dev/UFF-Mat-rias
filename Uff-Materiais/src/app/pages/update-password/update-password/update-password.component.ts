import { Updatepassword } from 'src/app/model/updatepassword';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog/error-dialog.component';
import { SuccessDialogComponent } from 'src/app/shared/components/success-dialog/success-dialog/success-dialog.component';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.scss'
})
export class UpdatePasswordComponent {
  formGroup: FormGroup;
  nomeBotao = "Atualizar Senha";
  password1 = new FormControl('', Validators.required);
  hide1 = true;
  password2 = new FormControl('', Validators.required);
  hide2 = true;
  constructor(private fb: FormBuilder,private usuarioService:UsuarioService,
    @Inject(SharedDataService) private sharedDataService:SharedDataService,
    public dialog: MatDialog){

    this.formGroup = this.fb.group({
      password1: ['', Validators.required],
      password2: ['', Validators.required],
    });
  }

  enviarNovaSenha(){
    if(this.password1.value !== this.password2.value){
      this.openError('Erro ao mudar a senha: '+'As senhas devem ser iguais')
    }else{
      const dados = this.sharedDataService.getMeuDado();
      const updatePassword:Updatepassword= {email:dados.email,code:dados.codigo.code,password:this.password1.value ?? ""};
      this.usuarioService.updatePassword(updatePassword).subscribe({
        next: () => {
          this.openSuccess('Senha mudada com sucesso! Pode retornar ao login')
        },
        error: (error: any) => {
          this.openError('Erro ao mudar a senha: '+error.error.detail)
        }
    });;
    }
  }

  openSuccess(successMsg:string) {
    this.dialog.open(SuccessDialogComponent, {
      data: successMsg
    });
  }

  openError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
