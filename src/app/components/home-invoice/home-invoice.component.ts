import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Invoice } from 'src/app/model/Invoice';

@Component({
  selector: 'app-home-invoice',
  templateUrl: './home-invoice.component.html',
  styleUrls: ['./home-invoice.component.css']
})
export class HomeInvoiceComponent implements OnInit {

  @Output() triggerRender = new EventEmitter();
  @Input() invoices!: Invoice[];
  @Input() sidebar: any;

  constructor() {}
 
  ngOnInit(): void {   
    
  }
  numberOfInvoices() {
    if (this.invoices.length === 1) {
      return 'There is only one invoice';
    } else if (this.invoices.length === 0) {
      return 'No invoices to display';
    }
    return `There are ${this.invoices.length} invoices.`
  }

  emitTriggerRender() {
    this.triggerRender.emit();
  }

}
