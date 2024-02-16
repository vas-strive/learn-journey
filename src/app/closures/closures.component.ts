import { Component } from '@angular/core';

@Component({
  selector: 'app-closures',
  templateUrl: './closures.component.html',
  styleUrls: ['./closures.component.css']
})
export class ClosuresComponent {

  crazyStuff() {
    //var is a global variable
    for (var i = 0; i < 3; i++) {
        const log = () => {
          console.log(i)// logs 3 ,three times
        }
        setTimeout(log, 100);
    }
  }
}
