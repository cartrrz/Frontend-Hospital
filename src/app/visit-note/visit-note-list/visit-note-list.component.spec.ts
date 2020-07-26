import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitNoteListComponent } from './visit-note-list.component';

describe('VisitNoteListComponent', () => {
  let component: VisitNoteListComponent;
  let fixture: ComponentFixture<VisitNoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitNoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitNoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
