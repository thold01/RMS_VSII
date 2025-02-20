import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-panel.component.html',
  styleUrls: ['./question-panel.component.scss'],
})
export class QuestionPanelComponent {
  @Input() question: any = null;
  @Input() totalTime: number = 0;
  @Input() hasError = false;
  @Input() isTimeUp: boolean = false;

  private timer: any;
  timeLeft: string = '00:00';

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    let remainingTime = this.totalTime;

    this.updateTimeDisplay(remainingTime);

    this.timer = setInterval(() => {
      remainingTime--;

      if (remainingTime <= 0) {
        clearInterval(this.timer);
        this.isTimeUp = true;
        this.timeLeft = '00:00';
      } else {
        this.updateTimeDisplay(remainingTime);
      }
    }, 1000);
  }

  updateTimeDisplay(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    this.timeLeft = `${this.padTime(minutes)}:${this.padTime(sec)}`;
  }

  padTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  closePopup() {
    this.isTimeUp = false;
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
