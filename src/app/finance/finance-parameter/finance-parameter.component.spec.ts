import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceParameterComponent } from './finance-parameter.component';

describe('FinanceParameterComponent', () => {
  let component: FinanceParameterComponent;
  let fixture: ComponentFixture<FinanceParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceParameterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
