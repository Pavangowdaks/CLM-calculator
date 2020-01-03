import { NgModule } from '@angular/core';
import { CommonServicesModule } from './services/services';

@NgModule({
  imports: [
    CommonServicesModule,
  ],
  exports: [
    CommonServicesModule,
  ]
})

export class CommonModule {}
