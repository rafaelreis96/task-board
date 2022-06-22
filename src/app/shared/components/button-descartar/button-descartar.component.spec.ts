import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDescartarComponent } from './button-descartar.component';

describe('ButtonDescartarComponent', () => {
  let component: ButtonDescartarComponent;
  let fixture: ComponentFixture<ButtonDescartarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDescartarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDescartarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
