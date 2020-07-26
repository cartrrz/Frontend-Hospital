import { Component, OnInit } from '@angular/core';
import {Hospital} from '../../shared/hospital';
import {HospitalService} from '../../services/hospital.service';
import {Router} from '@angular/router';
import {Speciality} from '../../shared/speciality';
import {SpecialityService} from '../../services/speciality.service';

@Component({
  selector: 'app-speciality-create',
  templateUrl: './speciality-create.component.html',
  styleUrls: ['./speciality-create.component.css']
})
export class SpecialityCreateComponent implements OnInit {

  speciality: Speciality = new Speciality();
  submitted = false;

  constructor(private specialityService: SpecialityService,
              private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.specialityService.createSpeciality(this.speciality)
      .subscribe(data => console.log(data), error => console.log(error));
    this.speciality = new Speciality();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['speciality']);
  }

}
