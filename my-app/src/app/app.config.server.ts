import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

export const config = {
  providers: [
    provideHttpClient(),           // ✅ provides HttpClient
    provideAnimations(),          // ✅ required for Material animations
    importProvidersFrom(MatSnackBarModule) // ✅ to use MatSnackBar in standalone
  ]
};
