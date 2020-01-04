import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class UiToolbarModule {}
