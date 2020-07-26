import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitNoteCreateComponent } from './visit-note-create.component';

describe('VisitNoteCreateComponent', () => {
  let component: VisitNoteCreateComponent;
  let fixture: ComponentFixture<VisitNoteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitNoteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitNoteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
