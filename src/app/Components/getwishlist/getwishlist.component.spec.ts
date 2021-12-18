import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { GetwishlistComponent } from './getwishlist.component';

fdescribe('GetwishlistComponent', () => {
  let component: GetwishlistComponent;
  let fixture: ComponentFixture<GetwishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetwishlistComponent ],
      imports:[HttpClientModule,RouterTestingModule,MatSnackBarModule,MatCardModule]
    })
    .compileComponents();
  });

  RouterTestingModule.withRoutes([
    { path: '/homepage/getallbooks', 
    component: GetwishlistComponent
  }
])


  beforeEach(() => {
    fixture = TestBed.createComponent(GetwishlistComponent);
   
    component = fixture.componentInstance;
    fixture.detectChanges();
   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getWishlist', () => {
    component.getWishlist()
    expect(component.getWishlist).toBeTruthy();
  });

  it('deleteWishlistItem', (book:any) => {
    component.deleteWishlistItem(book)
    expect(component.deleteWishlistItem).toBeTruthy();
  });

  it('onhome', () => {
    component.onhome()
    expect(component.onhome).toBeTruthy();
  });

});
