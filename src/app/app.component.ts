import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'propertyEventBinding';
  isText = 'text';
  data = 'Thapa Technical'
  isHidden : boolean = true
  texts = 'Hii, Good Evening';
  serverName = "no server selected"
  serverName2 = "Test Server"

  myFunction()
  {
    console.log("welcome to Thapa Technical")
    this.texts = this.data

  }

  myFun(event : any){
    console.log(event)
    console.log(event.target.value)
    event.target.value = "welcome to thapa tech...."
    console.log(event.target.value)


  }
  onUpdate(event:any){
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value; 
  }
}
