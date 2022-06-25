import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAdicionarComponent } from './button-adicionar.component';

describe('ButtonAdicionarComponent', () => {
  let component: ButtonAdicionarComponent;
  let fixture: ComponentFixture<ButtonAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAdicionarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
