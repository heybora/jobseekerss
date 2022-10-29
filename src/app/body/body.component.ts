import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
name=undefined;
pass=undefined;
document:any;
  constructor(@Inject(DOCUMENT) document:Document,private router:Router) { 
    this.document=document
  
  }

  ngOnInit(): void {
  }
  submitdata(event:any){
    if(this.document.getElementById("name").value=="bhanu" && this.document.getElementById("pass").value=="bhanu123"){
      alert('login sucess');
      this.router.navigate(['home']);
    }else{
      alert('login failed');
    }
  }


}
