import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HospitalModule} from './hospital/hospital.module';
import {DoctorModule} from './doctor/doctor.module';
import {PatientModule} from './patient/patient.module';
import {SpecialityModule} from './speciality/speciality.module';
import {VisitNoteModule} from './visit-note/visit-note.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'hospital',
    pathMatch: 'full'
  },
  {
    path: 'hospital',
    loadChildren: () => HospitalModule,
  },
  {
    path: 'doctor',
    loadChildren: () => DoctorModule,
  },
  {
    path: 'patient',
    loadChildren: () => PatientModule,
  },
  {
    path: 'speciality',
    loadChildren: () => SpecialityModule,
  },
  {
    path: 'visit',
    loadChildren: () => VisitNoteModule,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HospitalModule,
    DoctorModule,
    PatientModule,
    SpecialityModule,
    VisitNoteModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
