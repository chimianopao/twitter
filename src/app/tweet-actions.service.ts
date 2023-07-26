import { Injectable } from '@angular/core';
import { Tweet } from './tweet.model';

@Injectable({
  providedIn: 'root'
})
export class TweetActionsService {
  private readonly localStorageKey = 'tweets';
  private tweets: Tweet[] = [];

  constructor() {
    // Load tweets from localStorage on service initialization
    this.tweets = this.getTweets();
  }

  // Get tweets from localStorage
  getTweets(): Tweet[] {
    const storedTweets = localStorage.getItem(this.localStorageKey);
    return storedTweets ? JSON.parse(storedTweets) : [];
  }

  // Store tweets in localStorage
  storeTweetsInLocalStorage(tweets: Tweet[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(tweets));
  }

  onLike(tweet: Tweet): void {
    this.tweets = this.getTweets();
    const foundTweet = this.tweets.find((t) => t.id === tweet.id);
    if (foundTweet) {
      foundTweet.likes++;
      this.storeTweetsInLocalStorage(this.tweets); // Update the likes in localStorage
    }
  }





  // getTweets(): Tweet[] {
  //   return this.tweets;
  // }

  // addTweet(tweet: Tweet) {
  //   this.tweets.push(tweet);
  // }

  // onLike(tweet: Tweet) {
  //   const foundTweet = this.tweets.find((t) => t.id === tweet.id);
  //   if (foundTweet) {
  //     foundTweet.likes++;
  //   }
  // }

}
