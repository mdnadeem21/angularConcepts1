import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, DoCheck, AfterContentChecked, AfterContentInit, ContentChild, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements
 OnInit, 
 OnDestroy,
  OnChanges,
   DoCheck, 
   AfterContentInit, 
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked
   {
  
  counter = 0;
  interval : any;
  @Input()
  channelName !: "";
  
  @ContentChild('projectedContent') projectedContent : any ;

   
  constructor() {
    console.log("Child Constructor is called");
  }
 /*  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  } */

  ngOnInit(): void {
    console.log("Child OnInit is called");
    console.log("OnInit - " + this.projectedContent);


    
   /*  this.interval = setInterval(() =>{
      this.counter = this.counter+1;
      console.log(this.counter);
    },1000) */
  }

  ngOnDestroy(): void {
   // clearInterval(this.interval);
    console.log("Child onDestroy is called");
  }
  ngOnChanges(changes : SimpleChanges): void {
    console.log(changes);
    console.log("Child OnChanges is called");
    console.log("OnChanges - " + this.projectedContent);
  }

  ngDoCheck() {

    console.log("Child DoCheck is called");
    console.log("DoCheck - " + this.projectedContent);
  }

  ngAfterContentInit(): void {
    
      console.log("in After Content Init");
      console.log("AfterContentInit - " + this.projectedContent);
  }

  ngAfterContentChecked(): void {

    console.log("in After Content Checked");
    
  }

  ngAfterViewInit(){
    console.log(" in After View Init");
  }

  ngAfterViewChecked(){
    console.log("in After View Checked");

  }

}
