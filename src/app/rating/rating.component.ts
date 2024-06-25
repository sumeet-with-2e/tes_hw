import { Component, Input } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class ratings__item {
  @Input() rate!: number;
  @Input() name!: string;
  @Input() content!: string;


  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
  get marked_stars(): number[] {
    console.log('rate', this.rate);
    return Array(Math.floor(this.rate));
  }

  get unmarked_stars(): number[] {
    return Array(5 - Math.floor(this.rate));
  }
}
