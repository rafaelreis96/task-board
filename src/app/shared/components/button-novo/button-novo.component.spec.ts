import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNovoComponent } from './button-novo.component';

describe('ButtonNovoComponent', () => {
  let component: ButtonNovoComponent;
  let fixture: ComponentFixture<ButtonNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonNovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
