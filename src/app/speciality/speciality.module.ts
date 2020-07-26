import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialityRoutingModule } from './speciality-routing.module';
import { SpecialityListComponent } from './speciality-list/speciality-list.component';
import { SpecialityCreateComponent } from './speciality-create/speciality-create.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [SpecialityListComponent, SpecialityCreateComponent],
  imports: [
    CommonModule,
    SpecialityRoutingModule,
    FormsModule
  ]
})
export class SpecialityModule { }
