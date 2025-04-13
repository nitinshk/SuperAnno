import { bootstrapApplication } from '@angular/platform-browser';
import { YourComponent } from './app/your-component/your-component.component';
// import {errorSnackbar} from './app/error-snackbar/error-snackbar.component';

bootstrapApplication(YourComponent)
  .catch((err) => console.error(err));
