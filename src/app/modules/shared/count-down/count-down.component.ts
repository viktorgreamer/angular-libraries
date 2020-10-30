import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {
  private countDownTime: number;
  public seconds: any;
  public minutes: any;
  public hours: any;
  public days: any;

  private timerNumerics = {
    milliseconds: 1000,
    minuteInSeconds: 60,
    minutesInHours: 60,
    hoursInDay: 24,
  };

  @Input() set time(value: string) {
    this.countDownTime = new Date(value).getTime();
  }

  private getTimeDifference(): number  {
    return this.countDownTime - (new Date()).getTime();
  }

  constructor() { }

  ngOnInit(): void {
    setInterval( () => this.reCalculate(), 1000);
  }

  private reCalculate(): void {
    let diff = this.getTimeDifference() / 1000;

    this.days = String(Math.floor((diff / (24 * 3600)) % 24));
    diff = diff - this.days * 24 * 3600;
    this.hours = String(Math.floor(diff % (60 * 60)));
    this.minutes = String(Math.floor(diff % (60 * 60)) / 60);
    this.seconds = String(Math.floor(diff % 60));
    if (parseInt(this.seconds, 10) < 10) {
      this.seconds = '' + String(this.seconds);
    }

    if (parseInt(this.minutes, 10) < 10) {
      this.minutes = '' + String(this.minutes);
    }

    if (parseInt(this.hours, 10) < 10) {
      this.hours = '' + String(this.hours);
    }
    if (parseInt(this.days, 10) < 10) {
      this.days = '' + String(this.days);
    }




  }
}
