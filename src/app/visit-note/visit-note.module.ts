import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitNoteRoutingModule } from './visit-note-routing.module';
import { VisitNoteCreateComponent } from './visit-note-create/visit-note-create.component';
import { VisitNoteListComponent } from './visit-note-list/visit-note-list.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [VisitNoteCreateComponent, VisitNoteListComponent],
  imports: [
    CommonModule,
    VisitNoteRoutingModule,
    FormsModule
  ]
})
export class VisitNoteModule { }
