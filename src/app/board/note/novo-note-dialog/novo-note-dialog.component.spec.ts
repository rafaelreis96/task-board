import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoNoteDialogComponent } from './novo-note-dialog.component';

describe('NovoNoteDialogComponent', () => {
  let component: NovoNoteDialogComponent;
  let fixture: ComponentFixture<NovoNoteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoNoteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoNoteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
