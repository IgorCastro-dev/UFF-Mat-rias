import { Updatepassword } from 'src/app/model/updatepassword';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

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
    @Inject(SharedDataService) private sharedDataService:SharedDataService,){

    this.formGroup = this.fb.group({
      password1: ['', Validators.required],
      password2: ['', Validators.required],
    });
  }

  enviarNovaSenha(){
    if(this.password1.value !== this.password2.value){
      alert("Senhas diferentes");
    }else{
      const dados = this.sharedDataService.getMeuDado();
      const updatePassword:Updatepassword= {email:dados.email,code:dados.codigo.code,password:this.password1.value ?? ""};
      this.usuarioService.updatePassword(updatePassword).subscribe({
        next: () => {
          console.log('Senha mudada com sucesso!');
          //this.router.navigate(['update-password']);
        },
        error: (error: any) => {
          console.error('Erro ao mudar a senha:', error);
          // Trate o erro conforme necessário
        }
    });;
    }
  }
}
