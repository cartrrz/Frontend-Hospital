import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientListComponent} from './patient-list/patient-list.component';
import {PatientCreateComponent} from './patient-create/patient-create.component';
import {PatientDetailComponent} from './patient-detail/patient-detail.component';


const routes: Routes = [
  {
    path: '',
    component: PatientListComponent,
  },
  {
    path: 'create',
    component: PatientCreateComponent,
  },
  {
    path: 'details/:id',
    component: PatientDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
