import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit():void{
    // to store data in local or sessional storage
    let myObj =[{name:'AJAY',gender:'male'},
                {name:'ADITI',gender:'female'}];
    localStorage.setItem('jsonData',JSON.stringify(myObj));
    // localStorage.setItem('UserId','local---AD123');
    // localStorage.setItem('name','local----asmita');
    sessionStorage.setItem('sessionData','session--BBBB-newww');
    // localStorage.removeItem('localData');

    sessionStorage.clear();
     console.log(JSON.parse(localStorage.getItem('jsonData')));
    //  console.log(localStorage.getItem('UserId'));
    //  console.log(localStorage.getItem('name'));
     console.log(sessionStorage.getItem('sessionData'));
  
  }

}
