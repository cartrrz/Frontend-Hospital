import { Component, OnInit } from '@angular/core';
import {Speciality} from '../../shared/speciality';
import {SpecialityService} from '../../services/speciality.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-speciality-list',
  templateUrl: './speciality-list.component.html',
  styleUrls: ['./speciality-list.component.css']
})
export class SpecialityListComponent implements OnInit {

  specialitys: Speciality[];
  constructor(private specialityService: SpecialityService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.specialityService.getSpecialityList().subscribe(res => {
      if (res.success) {
        this.specialitys = res.object;
      }
    });
  }

  updateSpeciality(id: number){
    this.router.navigate(['speciality/update', id]);
  }
  createSpeciality(){
    this.router.navigate(['speciality/create']);
  }

  specialityDetails(id: number){
    this.router.navigate(['speciality/details', id]);
  }

}
