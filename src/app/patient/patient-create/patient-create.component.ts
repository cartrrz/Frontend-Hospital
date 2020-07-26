import { Component, OnInit } from '@angular/core';
import {Patient} from '../../shared/patient';
import {PatientService} from '../../services/patient.service';
import {Router} from '@angular/router';
import {HospitalService} from '../../services/hospital.service';
import {Hospital} from '../../shared/hospital';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  patient: Patient = new Patient();
  hospitals: Hospital[];
  submitted = false;

  constructor(private patientService: PatientService, private hospitalService: HospitalService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.hospitalService.getHospitalList().subscribe(res => {
      if (res.success) {
        this.hospitals = res.object;
      }
    });
  }

  save() {
    this.patientService.createPatient(this.patient)
      .subscribe(data => console.log(data), error => console.log(error));
    this.patient = new Patient();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/patient']);
  }

}
