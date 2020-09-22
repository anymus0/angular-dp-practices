import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-directives',
  templateUrl: './angular-directives.component.html',
  styleUrls: ['./angular-directives.component.scss']
})
export class AngularDirectivesComponent implements OnInit {
  nums: Array<number>

  constructor() {
    this.nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }

  ngOnInit(): void {
  }

}
