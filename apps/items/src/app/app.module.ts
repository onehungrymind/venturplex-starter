import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreDataModule } from '@workspace/core-data';
import { CoreStateModule } from '@workspace/core-state';
import { MaterialModule } from '@workspace/material';
import { UiToolbarModule } from '@workspace/ui-toolbar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
