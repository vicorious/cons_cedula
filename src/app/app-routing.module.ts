import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarSaldosComponent } from './conscedula/listar-saldos/listar-saldos.component'


const routes: Routes = [
  {path:'saldos_subctas',component:ListarSaldosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
