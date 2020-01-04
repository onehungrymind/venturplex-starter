import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import Amplify from 'aws-amplify';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

@NgModule({
  imports: [CommonModule, AmplifyAngularModule],
  providers: [AmplifyService]
})
export class AmplifyModule {
  constructor() {
    Amplify.configure({});
  }
}
