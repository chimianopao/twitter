import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TweetActionsService } from '../tweet-actions.service';
import { Tweet } from '../tweet.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  tweetContent: string = '';
  tweets: Tweet[] = [];

  constructor(private tweetActionsService: TweetActionsService, private authService: AuthService, private router: Router) {
    this.tweets = this.tweetActionsService.getTweets();
  }

  onLike(tweet: Tweet) {
    this.tweetActionsService.onLike(tweet);
    this.tweets = this.tweetActionsService.getTweets();
  }

  createTweet() {
    if(this.tweetContent.length > 280){
      alert("Tweet limit is 280 characters.");
      return;
    }
    const loggedInUser = this.authService.getLoggedInUser();
    if (this.tweetContent.trim() && loggedInUser) {
      const newTweet: Tweet = {
        id: this.tweetActionsService.getTweets().length + 1, // Generate a unique ID for the new tweet
        content: this.tweetContent,
        author: loggedInUser.name,
        likes: 0,
        comments: 0
      };
      this.tweets.unshift(newTweet); // Add the new tweet to the beginning of the array
      this.tweetActionsService.storeTweetsInLocalStorage(this.tweets);
      this.tweetContent = '';
      this.tweets = this.tweetActionsService.getTweets();
    }
  }
}
