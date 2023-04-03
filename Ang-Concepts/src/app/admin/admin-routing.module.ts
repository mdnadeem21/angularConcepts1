import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { ReactivefromComponent } from '../reactivefrom/reactivefrom.component';
const routes: Routes = [
  {path : 'login', component : LoginComponent },
  {path : 'list', component : ListComponent},
  {path : 'reactiveForm',component : ReactivefromComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
