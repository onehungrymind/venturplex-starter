import { async, TestBed } from '@angular/core/testing';
import { AmplifyModule } from './amplify.module';

describe('AmplifyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AmplifyModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AmplifyModule).toBeDefined();
  });
});
