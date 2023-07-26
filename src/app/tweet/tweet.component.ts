import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TweetActionsService } from '../tweet-actions.service';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
  tweetContent: string = '';

  constructor(private router: Router, private tweetActionsService: TweetActionsService, private authService: AuthService) { }

  createTweet() {
    const loggedInUser = this.authService.getLoggedInUser();

    if (this.tweetContent.trim()) {
      const newTweet = {
        id: this.tweetActionsService.getTweets().length + 1, // Generate a unique ID for the new tweet
        content: this.tweetContent,
        author: loggedInUser.name, // Replace with the actual user's name or username
        likes: 0,
        comments: 0
      };

      // Add the new tweet to the feed
      //this.tweetActionsService.addTweet(newTweet);

      // Reset the tweetContent variable and navigate back to the feed page
      this.tweetContent = '';
      this.router.navigate(['/feed']);
    }
  }
}
