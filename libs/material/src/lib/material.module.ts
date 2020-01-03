import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule,
  MatButtonToggleModule,
  // Imports not needing to be added to MODULES
  MatChipsDefaultOptions,
  MatFormFieldDefaultOptions,
  MAT_CHIPS_DEFAULT_OPTIONS,
  MAT_FORM_FIELD_DEFAULT_OPTIONS
} from '@angular/material';

const MODULES = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule,
  MatButtonToggleModule
];

// Set Default Material Options.
const matChipsOptions: MatChipsDefaultOptions = {
  separatorKeyCodes: [ENTER, COMMA]
};

const matFormFieldOptions: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};


@NgModule({
  imports: MODULES,
  exports: MODULES,
  providers: [
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: matChipsOptions
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: matFormFieldOptions
    }
  ],
})
export class MaterialModule {}
