import { TestBed } from '@angular/core/testing';

import { VisitNoteService } from './visit-note.service';

describe('VisitNoteService', () => {
  let service: VisitNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
