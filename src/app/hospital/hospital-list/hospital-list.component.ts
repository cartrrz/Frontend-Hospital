import { Component, OnInit } from '@angular/core';
import {HospitalService} from '../../services/hospital.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Hospital} from '../../shared/hospital';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {

  hospitals: Hospital[];
  constructor(private hospitalService: HospitalService,
              private router: Router) {}

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


  updateHospital(id: number){
    this.router.navigate(['hospital/update', id]);
  }
  createHospital(){
    this.router.navigate(['hospital/create']);
  }
}
