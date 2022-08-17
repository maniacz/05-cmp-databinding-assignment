import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();

  intervalId;
  counterValue = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.intervalId = setInterval(() => this.count(), 1000);
  }

  count() {
    this.counterValue++;
    this.intervalFired.emit(this.counterValue);
    //console.log(this.counterValue);
  }

  onStopGame() {
    clearInterval(this.intervalId);
  }
}
