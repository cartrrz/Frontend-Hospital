import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ServicesModule} from './services/services.module';
import {SharedModule} from './shared/shared.module';
import {HospitalModule} from './hospital/hospital.module';
import {DoctorModule} from './doctor/doctor.module';
import {PatientModule} from './patient/patient.module';
import {SpecialityModule} from './speciality/speciality.module';
import {VisitNoteModule} from './visit-note/visit-note.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HospitalModule,
    DoctorModule,
    PatientModule,
    SpecialityModule,
    VisitNoteModule,
    ServicesModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
