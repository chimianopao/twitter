import { Injectable } from '@angular/core';
import { Tweet } from './tweet.model';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  
  private tweets: Tweet[] =  [
    {
      id: 1,
      content: 'Just had a great time at the beach!',
      author: 'John Doe',
      likes: 10,
      comments: 5
    },
    {
      id: 2,
      content: 'Excited for the weekend! Any fun plans?',
      author: 'Jane Smith',
      likes: 15,
      comments: 8
    },
    {
      id: 3,
      content: 'Enjoying a delicious meal at my favorite restaurant!',
      author: 'Alice Johnson',
      likes: 30,
      comments: 12
    },
    // Add more fake tweets as needed
  ];

  constructor() {
    // Retrieve tweets from localStorage on service initialization
    const storedTweets = localStorage.getItem('tweets');
    if (storedTweets) {
      this.tweets = JSON.parse(storedTweets);
    }
  }

  getTweets(): Tweet[] {
    return this.tweets;
  }

  addTweet(tweet: Tweet) {
    this.tweets.push(tweet);
    // Update localStorage with the updated tweets array
    localStorage.setItem('tweets', JSON.stringify(this.tweets));
  }

  updateTweetLikes(tweetId: number, newLikes: number) {
    const tweet = this.tweets.find((t) => t.id === tweetId);
    if (tweet) {
      tweet.likes = newLikes;
      // Update localStorage with the updated tweets array
      localStorage.setItem('tweets', JSON.stringify(this.tweets));
    }
  }

  getNextTweetId(): number {
    return this.tweets.length + 1;
  }

  getTweetsByAuthor(author: string): Tweet[] {
    return this.tweets.filter((tweet) => tweet.author === author);
  }
  
}