import { async, TestBed } from '@angular/core/testing';
import { AwsAmplifyModule } from './aws-amplify.module';

describe('AwsAmplifyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AwsAmplifyModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AwsAmplifyModule).toBeDefined();
  });
});
