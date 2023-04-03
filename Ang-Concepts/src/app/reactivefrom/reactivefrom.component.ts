import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactivefrom',
  templateUrl: './reactivefrom.component.html',
  styleUrls: ['./reactivefrom.component.css']
})
export class ReactivefromComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

  getDatas(){
    console.warn(this.loginForm.value);
  }

}
