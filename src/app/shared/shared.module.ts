import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorLabelComponent } from './components/error-label/error-label.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ErrorLabelComponent],
  exports: [ErrorLabelComponent]
})
export class SharedModule {
}
