import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    // console.log(localStorage.getItem('UserId'));
    // console.log(localStorage.getItem('name'));
    console.log(JSON.parse(localStorage.getItem('jsonData')));
    console.log(sessionStorage.getItem('sessionData'));
//  if(sessionStorage.length>0)
//  {
//     alert("data available");
//  }
//  else{
//    alert("data not available");
//  }
if(window.localStorage)
{
  alert("supported");
}
  }

}
