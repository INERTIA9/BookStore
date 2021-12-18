import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { QuickviewComponent } from './quickview.component';

describe('QuickviewComponent', () => {
  let component: QuickviewComponent;
  let fixture: ComponentFixture<QuickviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickviewComponent ],
      imports:[HttpClientModule,MatSnackBarModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('getbookdetail', () => {
    component.getbookdetail()
    expect(component.getbookdetail).toBeTruthy();
  });
  it(' addtoCart', () => {
    component.addtoCart()
    expect(component.addtoCart).toBeTruthy();
  });
  // it('updateCount', () => {
  //   component.updateCount()
  //   expect(component.updateCount).toBeTruthy();
  // });
  it('addtoWishlist', () => {
    component.addtoWishlist()
    expect(component.addtoWishlist).toBeTruthy();
  });
  it('addfeddback', () => {
    component.addfeddback()
    expect(component.addfeddback).toBeTruthy();
  });
  it('getfeeback', () => {
    component.getfeeback()
    expect(component.getfeeback).toBeTruthy();
  });


});
