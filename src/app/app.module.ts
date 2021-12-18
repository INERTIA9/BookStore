import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './Components/login-signup/login-signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomepageComponent } from './Components/homepage/homepage.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import { DisplaybooksComponent } from './Components/displaybooks/displaybooks.component';
import { QuickviewComponent } from './Components/quickview/quickview.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { GetwishlistComponent } from './Components/getwishlist/getwishlist.component';
import { GetcartComponent } from './Components/getcart/getcart.component';
import { ProfileComponent } from './Components/profile/profile.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { PlaceorderComponent } from './Components/placeorder/placeorder.component';
import {MatBadgeModule} from '@angular/material/badge';
import { FooterComponent } from './Components/footer/footer.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AdminComponent } from './Components/admin/admin.component';
import { UpdatebookadminComponent } from './Components/updatebookadmin/updatebookadmin.component';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    ForgotPasswordComponent,
    HomepageComponent,
    GetallbooksComponent,
    DisplaybooksComponent,
    QuickviewComponent,
    GetwishlistComponent,
    GetcartComponent,
    ProfileComponent,
    PlaceorderComponent,
    FooterComponent,
    AdminComponent,
    UpdatebookadminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    HttpClientModule,
    MatSnackBarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
    MatSelectModule,
    MatExpansionModule,
    MatRadioModule,
    MatButtonModule,
    MatBadgeModule,
    NgxPaginationModule,
    MatDialogModule
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
