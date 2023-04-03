import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck {
  isChild = true;
  channelName !: "";
  constructor() {
    console.log("Parent Constructor is called");
  }

  ngOnInit(): void {
    console.log("Parent OnInit is called");
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    console.log("Parent OnChanges is called");
  }

  ngDoCheck() {

    console.log("Parent OnDoChanges is called");
  }


  toggleChild() {
    this.isChild = !this.isChild;
  }

}
