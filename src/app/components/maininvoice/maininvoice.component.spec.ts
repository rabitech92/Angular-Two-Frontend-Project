import { ComponentFixture, TestBed } from '@angular/core/testing';
import { from } from 'rxjs';
import { InvoiceService } from 'src/app/service/invoice.service';

import { MaininvoiceComponent } from './maininvoice.component';

describe('MaininvoiceComponent', () => {
  let component: MaininvoiceComponent;
  let service: InvoiceService;
  

  beforeEach(async () => {
    // service = new InvoiceService(private http: HttpClient);
    component = new MaininvoiceComponent(service);   
  });it('should get invoices from the server ', () => {

    // Arrange
    const invoices = [
      {
        id: 195,
        name: 'Basker Onian',
        email: 'ttt@ttt.com',
        address: 'B6 Pencil Way',
        city: 'Worcestershire',
        code: 94105,
        country: 'United Kingdom',
        dueDate: '2022-03-18',
        description: 'fdsfdf',
        total: 1.33,
        isPaid: false,
      },
      {
        id: 196,
        name: 'Basker Onian',
        email: 'ttt@ttt.com',
        address: 'B6 Pencil Way',
        city: 'Worcestershire',
        code: 94105,
        country: 'United Kingdom',
        dueDate: '2022-03-03',
        description: '23',
        total: 23.0,
        isPaid: true,
      },
      {
        id: 200,
        name: 'Basker Onian',
        email: 'ttt@ttt.com',
        address: 'B6 Pencil Way',
        city: 'Worcestershire',
        code: 94105,
        country: 'United Kingdom',
        dueDate: '2022-03-19',
        description: 'dfsdf',
        total: 23.22,
        isPaid: true,
      },
    ];

    spyOn(service, 'getInvoices').and.callFake(() => {
      return from([invoices]);
    });
    // Act - makes the call
    component.ngOnInit();

    // Assert
    expect(component.invoices).toEqual(invoices);
  });

});