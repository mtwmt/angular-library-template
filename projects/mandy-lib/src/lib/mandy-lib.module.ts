import { NgModule } from '@angular/core';
import { MandyLibComponent } from './mandy-lib.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [MandyLibComponent, ButtonComponent],
  imports: [
  ],
  exports: [MandyLibComponent]
})
export class MandyLibModule { }
