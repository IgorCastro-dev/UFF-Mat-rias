import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  if(inject(AuthService).isAuthenticated()){
    if(inject(AuthService).isAdmin()){
      return true;
    }else{
      inject(Router).navigate(["/materias-edit"]);
      return false;
    }
  }else{
    inject(Router).navigate(["/login"]);
    return false;
  }
};
