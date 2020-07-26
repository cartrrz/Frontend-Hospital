import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientCreateComponent } from './patient-create/patient-create.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [PatientListComponent, PatientCreateComponent, PatientDetailComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule
  ]
})
export class PatientModule { }
