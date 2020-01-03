import { NgModule } from '@angular/core';

import { DataPersistence } from '@nrwl/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootStoreConfig, StoreModule } from '@ngrx/store';

import { reducers } from '.';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
};

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([

    ]),
    StoreDevtoolsModule.instrument({ name: 'VenturPlex Starter Store' })
  ],
  providers: [DataPersistence]
})
export class CoreStateModule {}
