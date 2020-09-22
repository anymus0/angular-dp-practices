import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-directives',
  templateUrl: './pipes-directives.component.html',
  styleUrls: ['./pipes-directives.component.scss']
})
export class PipesDirectivesComponent implements OnInit {
  nums: Array<number>

  constructor() {
    this.nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }

  ngOnInit(): void {
  }

}
