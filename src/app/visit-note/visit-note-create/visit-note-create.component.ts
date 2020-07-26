import { Component, OnInit } from '@angular/core';
import {Patient} from '../../shared/patient';
import {PatientService} from '../../services/patient.service';
import {Router} from '@angular/router';
import {Doctor} from '../../shared/doctor';
import {VisitNote} from '../../shared/visit-note';
import {DoctorService} from '../../services/doctor.service';
import {VisitNoteService} from '../../services/visit-note.service';

@Component({
  selector: 'app-visit-note-create',
  templateUrl: './visit-note-create.component.html',
  styleUrls: ['./visit-note-create.component.css']
})
export class VisitNoteCreateComponent implements OnInit {

  visit: VisitNote = new VisitNote();
  patients: Patient[];
  doctors: Doctor[];
  submitted = false;

  constructor(private patientService: PatientService,
              private doctorService: DoctorService,
              private visitNoteService: VisitNoteService,
              private router: Router) { }

  ngOnInit() {
    this.loadPatient();
    this.loadDoctor();
  }

  loadPatient() {
    this.patientService.getPatientList().subscribe(res => {
      if (res.success) {
        this.patients = res.object;
      }
    });
  }

  loadDoctor() {
    this.doctorService.getDoctorList().subscribe(res => {
      if (res.success) {
        this.doctors = res.object;
      }
    });
  }

  save() {
    this.visitNoteService.createVisit(this.visit)
      .subscribe(data => console.log(data), error => console.log(error));
    this.visit = new VisitNote();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/visit']);
  }

}
