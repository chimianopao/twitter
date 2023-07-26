import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FeedComponent } from '../feed/feed.component';
import { TweetActionsService } from '../tweet-actions.service';
import { Tweet } from '../tweet.model';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  userTweets: Tweet[] = [];

  constructor(private authService: AuthService, private tweetActionsService: TweetActionsService) {}

  ngOnInit() {
    this.currentUser = this.authService.getLoggedInUser();
    this.userTweets = this.tweetActionsService.getTweets().filter((tweet) => tweet.author === this.currentUser.name);
  }

  onLike(tweet: Tweet) {
    this.tweetActionsService.onLike(tweet);
  }
}