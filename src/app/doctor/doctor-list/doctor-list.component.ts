import { Component, OnInit } from '@angular/core';
import {Doctor} from '../../shared/doctor';
import {DoctorService} from '../../services/doctor.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors: Doctor[];
  constructor(private doctorService: DoctorService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.doctorService.getDoctorList().subscribe(res => {
      if (res.success) {
        this.doctors = res.object;
      }
    });
  }

  updateDoctor(id: number){
    this.router.navigate(['doctor/update', id]);
  }
  createDoctor(){
    this.router.navigate(['doctor/create']);
  }

  doctorDetails(id: number){
    this.router.navigate(['/doctor/details', id]);
  }

}
