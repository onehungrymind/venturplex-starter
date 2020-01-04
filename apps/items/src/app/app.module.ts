import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreDataModule } from '@workspace/core-data';
import { CoreStateModule } from '@workspace/core-state';
import { MaterialModule } from '@workspace/material';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemsDetailsComponent } from './items/items-details/items-details.component';

@NgModule({
  declarations: [AppComponent, ItemsComponent, ItemsListComponent, ItemsDetailsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiToolbarModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
