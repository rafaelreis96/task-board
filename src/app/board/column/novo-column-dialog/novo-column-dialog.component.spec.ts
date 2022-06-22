import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoColumnDialogComponent } from './novo-column-dialog.component';

describe('NovoColumnDialogComponent', () => {
  let component: NovoColumnDialogComponent;
  let fixture: ComponentFixture<NovoColumnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoColumnDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoColumnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
