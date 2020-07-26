import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorCreateComponent } from './doctor-create/doctor-create.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';


@NgModule({
  declarations: [
    DoctorListComponent,
    DoctorCreateComponent,
    DoctorDetailComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
