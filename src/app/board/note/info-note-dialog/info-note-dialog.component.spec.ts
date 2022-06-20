import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNoteDialogComponent } from './info-note-dialog.component';

describe('InfoNoteDialogComponent', () => {
  let component: InfoNoteDialogComponent;
  let fixture: ComponentFixture<InfoNoteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoNoteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoNoteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
