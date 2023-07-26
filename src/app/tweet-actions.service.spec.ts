import { TestBed } from '@angular/core/testing';

import { TweetActionsService } from './tweet-actions.service';

describe('TweetActionsService', () => {
  let service: TweetActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TweetActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
