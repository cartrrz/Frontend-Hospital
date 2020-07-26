import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HospitalListComponent} from './hospital-list/hospital-list.component';
import {HospitalCreateComponent} from './hospital-create/hospital-create.component';
import {HospitalUpdateComponent} from './hospital-update/hospital-update.component';


const routes: Routes = [
  {
    path: '',
    component: HospitalListComponent,
  },
  {
    path: 'create',
    component: HospitalCreateComponent,
  },
  {
    path: 'update/:id',
    component: HospitalUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalRoutingModule { }
