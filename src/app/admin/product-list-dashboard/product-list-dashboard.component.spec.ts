import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListDashboardComponent } from './product-list-dashboard.component';

describe('ProductListDashboardComponent', () => {
  let component: ProductListDashboardComponent;
  let fixture: ComponentFixture<ProductListDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
