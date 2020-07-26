import { Component, OnInit } from '@angular/core';
import {Patient} from '../../shared/patient';
import {PatientService} from '../../services/patient.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: Patient[];
  constructor(private patientService: PatientService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.patientService.getPatientList().subscribe(res => {
      if (res.success) {
        this.patients = res.object;
      }
    });
  }

  updatePatient(id: number){
    this.router.navigate(['patient/update', id]);
  }
  createPatient(){
    this.router.navigate(['patient/create']);
  }

  patientDetails(id: number){
    this.router.navigate(['patient/details', id]);
  }

}
