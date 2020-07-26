import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {VisitNote} from '../../shared/visit-note';
import {VisitNoteService} from '../../services/visit-note.service';

@Component({
  selector: 'app-visit-note-list',
  templateUrl: './visit-note-list.component.html',
  styleUrls: ['./visit-note-list.component.css']
})
export class VisitNoteListComponent implements OnInit {

  visits: VisitNote[];
  constructor(private visitService: VisitNoteService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.visitService.getVisitList().subscribe(res => {
      if (res.success) {
        this.visits = res.object;
      }
    });
  }

  updateVisit(id: number){
    this.router.navigate(['visit/update', id]);
  }
  createVisit(){
    this.router.navigate(['visit/create']);
  }

  visitDetails(id: number){
    this.router.navigate(['visit/details', id]);
  }

}
