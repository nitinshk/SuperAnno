import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ErrorSnackbarComponent } from '../error-snackbar/error-snackbar.component';
import { YourPolicyService } from './your-policy.service';

@Component({
  selector: 'app-your-component',
  standalone:true,
  imports: [ErrorSnackbarComponent],
  templateUrl: './your-component.component.html',
  styleUrls: ['./your-component.component.scss']
  
})
export class YourComponent implements OnInit {
  error: string | null = null;

  constructor(
    private policyService: YourPolicyService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  submitForm(formData: any): void {
    if (this.validateForm(formData)) {
      this.policyService.submitTransaction(formData).subscribe({
        next: (response) => {
          console.log('Form submitted successfully:', response);
          this.error = null;
        },
        error: (error: HttpErrorResponse) => {
          let errorMessage = "An unexpected error occurred.";
          
          if (error.status === 400) {
            errorMessage = "Invalid request.";
          } else if (error.status === 401 || error.status === 403) {
            errorMessage = "Unauthorized access";
          } else if (error.status === 500) {
            errorMessage = Object.values(error.error).join('').replace(' ', '').split(',"').splice(2, 4).join('');
          } else if (error.status === 404) {
            errorMessage = "Resource not found";
          }
          
          this.showErrorMessage(errorMessage);
        }
      });
    } else {
      alert("Please fill out all the missing fields and try again.");
    }
  }

  validateForm(formData: any): boolean {
    // Your form validation logic here
    return true; // Replace with actual validation
  }

  showErrorMessage(message: string): void {
    const config: MatSnackBarConfig = {
      data: { message },
      duration: 0, // Won't auto-dismiss
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    };
    
    this.snackBar.openFromComponent(ErrorSnackbarComponent, config);
  }
}