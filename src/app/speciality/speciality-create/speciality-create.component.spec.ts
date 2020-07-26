import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityCreateComponent } from './speciality-create.component';

describe('SpecialityCreateComponent', () => {
  let component: SpecialityCreateComponent;
  let fixture: ComponentFixture<SpecialityCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialityCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialityCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
