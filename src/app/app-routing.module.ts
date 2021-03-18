import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarSaldosComponent } from './conscedula/listar-saldos/listar-saldos.component';
import { ConscedulaComponent } from './conscedula/conscedula.component';



const routes: Routes = [
  {path: '', redirectTo: '/cons_cedula', pathMatch: 'full'},
  {path:'saldos_subctas',component:ListarSaldosComponent},
  {path:'cons_cedula',component:ConscedulaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
