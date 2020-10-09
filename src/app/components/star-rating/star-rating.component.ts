import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input() private value = 0;
  constructor() { }

  ngOnInit(): void {
  }

  public getFullStarts(): number[] {
    const stars = Math.floor(this.value);
    return Array(stars).fill(0);
  }
  public getEmptyStarts(): number[] {
    const stars = 4 - Math.floor(this.value);
    return Array(stars).fill(0);
  }
  public isHalf(): boolean{
    return this.value !== Math.round(this.value);
  }
}
