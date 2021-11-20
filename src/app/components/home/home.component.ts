import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  success: boolean = false;
	failure: boolean = false;
  registerUserData: any = {};

  val =["what is Your favourite color?","What is your pets name?","Who do you love the most?"]


  constructor(private _homeService: HomeService) { }

  ngOnInit(): void {
  }
  registerUser(){
    //console.log(this.registerUserData);
    this._homeService.register(this.registerUserData)
    .subscribe(
      (res) =>{
        console.log(res);
        this.success=true;
      },
      (err) =>{
			this.failure=true;
			console.log(err);
    })

  }
  uploadPhoto(){

  }
  onSelect(event:any): any{
  } 
    


}
