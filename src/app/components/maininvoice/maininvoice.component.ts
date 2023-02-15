import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/model/Invoice';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  selector: 'app-maininvoice',
  templateUrl: './maininvoice.component.html',
  styleUrls: ['./maininvoice.component.css']
})
export class MaininvoiceComponent implements OnInit {
  invoices: Invoice[] = []; // Can be moved depending on which component needs invoices
  sidebarOpen!: boolean;
  
  constructor(
    private invoiceService: InvoiceService,
  ) {}
 
 
 
  ngOnInit(): void {
    this.getInvoices();
  }
  getInvoices() {
    this.invoiceService.getInvoices().subscribe((response: Invoice[]) => {
      this.invoices = response;
    });
  }

}
