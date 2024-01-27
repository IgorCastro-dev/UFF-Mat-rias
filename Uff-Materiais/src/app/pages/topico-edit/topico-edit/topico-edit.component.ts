import { MatDialog } from '@angular/material/dialog';
import { TopicoService } from './../../../services/topico/topico.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { Topico } from 'src/app/model/topico';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog/error-dialog.component';

@Component({
  selector: 'app-topico-edit',
  templateUrl: './topico-edit.component.html',
  styleUrl: './topico-edit.component.scss'
})

export class TopicoEditComponent {
  materiaId!:number;
  nome = localStorage.getItem("usuario");
  topicos$!: Observable<Topico[]>;
  constructor(private topicoService:TopicoService,public dialog: MatDialog,private route: ActivatedRoute){
    this.route.params.subscribe(params => {
      const materiaId = params['materiaId'];
      this.materiaId = materiaId;
      this.topicos$ = this.topicoService.getTopicosByMateria(materiaId)
      .pipe(
        catchError(error => {
          this.openError("Erro ao carregar os tópicos, tente novamente");
          return of([]);
        })
      );
    });
  }

  openError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
