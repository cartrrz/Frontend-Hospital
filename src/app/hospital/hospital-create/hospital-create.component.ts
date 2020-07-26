import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Hospital} from '../../shared/hospital';
import {HospitalService} from '../../services/hospital.service';

@Component({
  selector: 'app-hospital-create',
  templateUrl: './hospital-create.component.html',
  styleUrls: ['./hospital-create.component.css']
})
export class HospitalCreateComponent implements OnInit {

  hospital: Hospital = new Hospital();
  submitted = false;

  constructor(private hospitalService: HospitalService,
              private router: Router) { }

  ngOnInit() {
  }

  newHospital(): void {
    this.submitted = false;
    this.hospital = new Hospital();
  }

  save() {
    this.hospitalService.createHospital(this.hospital)
      .subscribe(data => console.log(data), error => console.log(error));
    this.hospital = new Hospital();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['hospital']);
  }

}
