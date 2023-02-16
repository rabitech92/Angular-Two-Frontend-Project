import {
  Component,
  OnInit,
  Output,
  ViewEncapsulation,
  EventEmitter,
  Input,
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { MAT_DATE_FORMATS } from '@angular/material/core';
import { DATE_FORMATS_FORM } from 'src/app/formats/date-formats';
import { Invoice } from 'src/app/model/Invoice';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS_FORM }],
  encapsulation: ViewEncapsulation.None,
})
export class AddInvoiceComponent implements OnInit {
  @Output() triggerRenderEvent = new EventEmitter();
  @Input() sidebar: any;
  invoice !:Invoice[]

  singleInvicw:Invoice = {
    id:'',
    name: '',
    email: '',
    address: '',
    code: 0,
    city: '',
    country: '',
    dueDate: '',
    description: '',
    total: 0,
    isPaid: false
  };

  
  

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.getAllInvoice();
  }

  emitTriggerRenderEvent() {
    this.triggerRenderEvent.emit();
  }

  onAddInvoice(addForm: NgForm) {
    let invoiceToAdd = addForm.value;

    console.log('AddForm---',addForm.value)

    // Prevents unchecked checkbox from sending null
    !invoiceToAdd.isPaid ? (invoiceToAdd.isPaid = false) : '';
    console.log('invoiceToAdd---',invoiceToAdd)

    // Sends the invoice
    this.invoiceService.addInvoice(invoiceToAdd).subscribe(() => {
      this.invoiceService.getInvoices();
      // Triggers render after adding
      this.emitTriggerRenderEvent();
      this.ngOnInit();
    });
  }

  getAllInvoice(){
    this.invoiceService.getInvoices().subscribe((data :Invoice[])=>{
      this.invoice=data;
      console.log('Allllllll---',this.invoice)
    });
  }

  

  printData(invoice: Invoice){
    console.log('printed Data---',this.singleInvicw)
    this.singleInvicw = invoice;
  }

  DeleteInv(invoice:Invoice): void{
    this.invoiceService.deleteInvoice(invoice.id)
    .subscribe(data=>{
      this.ngOnInit();
    });
  }
}
