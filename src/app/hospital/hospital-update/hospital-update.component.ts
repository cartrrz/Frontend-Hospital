import { Component, OnInit } from '@angular/core';
import {Hospital} from '../../shared/hospital';
import {ActivatedRoute, Router} from '@angular/router';
import {HospitalService} from '../../services/hospital.service';

@Component({
  selector: 'app-hospital-update',
  templateUrl: './hospital-update.component.html',
  styleUrls: ['./hospital-update.component.css']
})
export class HospitalUpdateComponent implements OnInit {

  id: number;
  hospital: Hospital;

  constructor(private route: ActivatedRoute, private router: Router,
              private hospitalService: HospitalService) { }

  ngOnInit() {
    this.hospital = new Hospital();

    this.id = this.route.snapshot.params['id'];

    this.hospitalService.getHospital(this.id)
      .subscribe(res => {
        if (res.success) {
          console.log(res.object);
          this.hospital = res.object;
        }

      }, error => console.log(error));
  }

  updateEmployee() {
    this.hospitalService.updateHospital(this.id, this.hospital)
      .subscribe(res => console.log(res), error => console.log(error));
    this.hospital = new Hospital();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(['hospital']);
  }

}
