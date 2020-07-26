import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpecialityListComponent} from './speciality-list/speciality-list.component';
import {SpecialityCreateComponent} from './speciality-create/speciality-create.component';


const routes: Routes = [
  {
    path: '',
    component: SpecialityListComponent,
  },
  {
    path: 'create',
    component: SpecialityCreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialityRoutingModule { }
