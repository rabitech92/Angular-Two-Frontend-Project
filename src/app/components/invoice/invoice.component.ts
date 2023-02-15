import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceService } from 'src/app/service/invoice.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  @Output() triggerRender = new EventEmitter();
  @Input() invoice: any;
  date!: string;
  panelOpen: boolean = false;
  isDirty: boolean = false;
  displayDate!: string;

  constructor(
    private invoiceService: InvoiceService,
    public dialog: MatDialog
  ) {}
 
 
 
  ngOnInit(): void {
    this.displayDate = this.invoice.dueDate.split('-').reverse().join('-');
   
  }

  handleSyncButton(drawer : any) {
    this.isDirty = false;
    this.invoiceService.updateInvoice(this.invoice).subscribe(() => {
      drawer.close();
      setTimeout(() => {
        this.triggerRender.emit();
      }, 400);
    });
  }

  handleStatusButton() {
    this.invoice.isPaid = !this.invoice.isPaid;
    this.isDirty = true;
  }

  handlePicker(pickerDate : any) {
    this.invoice.dueDate = pickerDate.replace(/\//g, '-');
    this.displayDate = this.invoice.dueDate.split('-').reverse().join('-');
    this.isDirty = true;
  }

  openDialog(drawer : any) {
    let dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.handleDelete();
        drawer.close();
      }
      return;
    });
  }

  handleDelete() {
    this.invoiceService.deleteInvoice(this.invoice.id).subscribe(() => {
      // Timeout lets the contracting animation finish
      setTimeout(() => {
        this.triggerRender.emit();
      }, 400);
    });
  }

  handleEdit() {
    this.isDirty = true;
  }

  floatTotal(total : any) {
    return parseFloat(total).toFixed(2);
  }

}
