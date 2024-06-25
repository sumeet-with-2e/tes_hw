import { Component, Input } from '@angular/core';
import { Rating } from '../rating-list/rating-list.component';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-average-rating',
  templateUrl: './average-rating.component.html',
  styleUrl: './average-rating.component.scss'
})
export class ratings__average {
  @Input() ratings!: Rating[];
  avgrate: number = 0;
  
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }

  findavgrate() : number {
    let sum = 0;
    for (let i = 0; i < this.ratings.length; i++) {
      sum += this.ratings[i].rate;
    }
    return sum / this.ratings.length;
  }

  get marked_stars(): number[] {
    this.avgrate = this.findavgrate();
    console.log(this.ratings);
    return Array(Math.floor(this.avgrate));
  }

  get unmarked_stars(): number[] {
    return Array(5 - Math.floor(this.avgrate));
  }

}
