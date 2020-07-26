import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DoctorListComponent} from './doctor-list/doctor-list.component';
import {DoctorCreateComponent} from './doctor-create/doctor-create.component';
import {DoctorDetailComponent} from './doctor-detail/doctor-detail.component';


const routes: Routes = [
  {
    path: '',
    component: DoctorListComponent,
  },
  {
    path: 'create',
    component: DoctorCreateComponent,
  },
  {
    path: 'details/:id',
    component: DoctorDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
