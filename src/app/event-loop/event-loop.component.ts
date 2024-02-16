import { Component } from '@angular/core';

@Component({
  selector: 'app-event-loop',
  templateUrl: './event-loop.component.html',
  styleUrls: ['./event-loop.component.css']
})
export class EventLoopComponent {

  seconds = new Date().getTime() / 1000;

  setTimeOut() {
    setTimeout(() => {
      // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
      console.log(`Ran after ${new Date().getTime() / 1000 - this.seconds} seconds`);
    }, 500);

    while (true) {
      if (new Date().getTime() / 1000 - this.seconds >= 2) {
        console.log("Good, looped for 2 seconds");
        break;
      }
    }
  }
  zeroDelay() {
    console.log("this is the start");
    setTimeout(() => {
      console.log("Callback 1: this is a msg from call back");
    }); // has a default time value of 0
    console.log("this is just a message");
    setTimeout(() => {
      console.log("Callback 2: this is a msg from call back");
    }, 0);
    console.log("this is the end");
  }
}
