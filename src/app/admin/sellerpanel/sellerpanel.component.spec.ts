import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerpanelComponent } from './sellerpanel.component';

describe('SellerpanelComponent', () => {
  let component: SellerpanelComponent;
  let fixture: ComponentFixture<SellerpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
