import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccounceComponent } from './accounce.component';

describe('AccounceComponent', () => {
  let component: AccounceComponent;
  let fixture: ComponentFixture<AccounceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccounceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
