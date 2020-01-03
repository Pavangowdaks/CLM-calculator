import { NgModule } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';

@NgModule({
  providers: [
    AuthenticationService
  ]
})
export class CommonServicesModule { }
