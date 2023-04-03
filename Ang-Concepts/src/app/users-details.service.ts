import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDetailsService {

  constructor() { }

  getData() {

    return {
      name: 'Sam',
      age: 23,
      id: 101
    }
  }
}
