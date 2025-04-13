// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { ErrorSnackbarComponent } from './error-snackbar/error-snackbar.component';
import { YourComponent } from './your-component/your-component.component';

@NgModule({
  declarations: [
    AppComponent,
    YourComponent,
    ErrorSnackbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }