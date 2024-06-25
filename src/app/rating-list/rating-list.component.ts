import { Component, Input } from '@angular/core';

export interface Rating {
  name: string;
  rate: number;
  content: string;
}

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrl: './rating-list.component.scss'
})

export class RatingListComponent {
  @Input() ratings: Rating[] = [
      {
        name: 'Sumeet Pachauri',
        rate: 1,
        content: `Title: Great Sound Quality, Comfortable Fit

I've been using the TechMaster 3000 Wireless Headphones for about a month now, and I'm thoroughly impressed. The sound quality is exceptional, with deep bass and clear highs. These headphones are also very comfortable, even during long listening sessions. The battery life is decent, lasting me about 8 hours on a full charge. My only gripe is that the touch controls can be a bit finicky at times, but overall, these are fantastic headphones for the price.

`
      },
      {
        name: 'Bhavya Mistry',
        rate: 4,
        content: `The TechMaster 3000 Wireless Headphones have exceeded my expectations in every way. The noise-canceling feature is superb, making my daily commute much more enjoyable. Pairing with my devices was seamless, and the connection is always stable. I also love the sleek design and how lightweight they feel. The sound is rich and immersive, perfect for both music and podcasts. I highly recommend these headphones to anyone looking for high-quality wireless audio.`
      },
      {
        name: 'Xu Zhang',
        rate: 1,
        content: `I really wanted to love the TechMaster 3000 Wireless Headphones, but unfortunately, I had some issues. While the sound quality and comfort were initially impressive, the headphones stopped working properly after just two weeks. The right earcup started to produce a static noise, which was very frustrating. Customer service was helpful and offered a replacement, but I'm still wary about the durability of these headphones. Hopefully, the replacement will last longer.`
      }
    ];
}
