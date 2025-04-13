import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-error-snackbar',
  template: `
    <div class="error-container">
      <div class="error-content">
        <div class="error-message">{{ data.message }}</div>
      </div>
      <button class="close-button" (click)="close()">
        <span>×</span>
      </button>
    </div>
  `,
  styles: [`
    .error-container {
      display: flex;
      align-items: flex-start;
      background-color: #ffebee;
      color: #d32f2f;
      border: 1px solid #ef9a9a;
      border-radius: 4px;
      padding: 16px;
      max-width: 600px;
      box-shadow: 0 3px 5px rgba(0,0,0,0.2);
    }
    
    .error-content {
      flex: 1;
      max-height: 150px;
      overflow-y: auto;
    }
    
    .error-message {
      word-break: break-word;
    }
    
    .close-button {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #d32f2f;
      margin-left: 8px;
      padding: 0;
      line-height: 1;
    }
    
    ::-webkit-scrollbar {
      width: 6px;
    }
    
    ::-webkit-scrollbar-track {
      background: #ffebee;
    }
    
    ::-webkit-scrollbar-thumb {
      background: #ef9a9a;
      border-radius: 3px;
    }
  `],
  standalone: true
})
export class ErrorSnackbarComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: { message: string },
    private snackBarRef: MatSnackBarRef<ErrorSnackbarComponent>
  ) {}

  close(): void {
    this.snackBarRef.dismiss();
  }
}