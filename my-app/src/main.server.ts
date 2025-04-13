import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { YourComponent } from './app/your-component/your-component.component';

const bootstrap = () => bootstrapApplication(YourComponent, config);

export default bootstrap;
