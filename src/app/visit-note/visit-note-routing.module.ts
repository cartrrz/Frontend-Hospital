import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VisitNoteListComponent} from './visit-note-list/visit-note-list.component';
import {VisitNoteCreateComponent} from './visit-note-create/visit-note-create.component';


const routes: Routes = [
  {
    path: '',
    component: VisitNoteListComponent,
  },
  {
    path: 'create',
    component: VisitNoteCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitNoteRoutingModule { }
