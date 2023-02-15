import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HomeInvoiceComponent } from './home-invoice.component';

describe('HomeInvoiceComponent', () => {
  let component: HomeInvoiceComponent;
  let fixture: ComponentFixture<HomeInvoiceComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [HomeInvoiceComponent],
    }).compileComponents;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInvoiceComponent);
    component = fixture.componentInstance;
    component.invoices = [
      {
        name: 'Basker Onian',
        email: 'ttt@ttt.com',
        address: 'B6 Pencil Way',
        city: 'Worcestershire',
        code: 94105,
        country: 'United Kingdom',
        dueDate: '2022-03-18',
        description: 'fdsfdf',
        total: 12.33,
        isPaid: false,
      },
      {
        name: 'Basker Onian',
        email: 'ttt@ttt.com',
        address: 'B6 Pencil Way',
        city: 'Worcestershire',
        code: 94105,
        country: 'United Kingdom',
        dueDate: '2022-03-18',
        description: 'fdsfdf',
        total: 21.33,
        isPaid: false,
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display number of invoices', () => {
    let resultToDisplay = component.numberOfInvoices();

    expect(
      fixture.debugElement.query(By.css('#invoices-number')).nativeElement
        .innerText
    ).toBe(resultToDisplay);
  });
});
