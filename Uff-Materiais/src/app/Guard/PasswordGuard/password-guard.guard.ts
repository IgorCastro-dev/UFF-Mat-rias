import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

export const passwordGuardGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state) => {
  const dados = inject(SharedDataService).getMeuDado();
    return new Promise<boolean>((resolve) => {
      inject(UsuarioService).confirmaRecoveryCode(dados.codigo, dados.email).subscribe({
        next: (result) => {
          // A lógica a ser executada quando a chamada for bem-sucedida
          const permite: boolean = result === true;
          resolve(permite);
        },
        error: (error) => {
          console.error('Erro ao confirmar código de recuperação:', error);
          resolve(false);
        }
      });
    });
};
