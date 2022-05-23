import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNovoStrokedComponent } from './button-novo-stroked.component';

describe('ButtonNovoStrokedComponent', () => {
  let component: ButtonNovoStrokedComponent;
  let fixture: ComponentFixture<ButtonNovoStrokedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonNovoStrokedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonNovoStrokedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
