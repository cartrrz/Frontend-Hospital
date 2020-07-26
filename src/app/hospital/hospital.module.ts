import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalRoutingModule } from './hospital-routing.module';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { HospitalCreateComponent } from './hospital-create/hospital-create.component';
import { HospitalUpdateComponent } from './hospital-update/hospital-update.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [HospitalListComponent, HospitalCreateComponent, HospitalUpdateComponent],
  imports: [
    CommonModule,
    HospitalRoutingModule,
    FormsModule
  ]
})
export class HospitalModule { }
