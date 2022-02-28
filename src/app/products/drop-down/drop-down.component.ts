import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  ICategory=[
    {id:2,Name:"SkinCareProduct"},
    {id:4,Name:"HairCareProduct"},
    {id:5,Name:"MakeUpProduct"},
    {id:8,Name:"NailsProduct"},
  ]
  constructor() { }
  selected="";
  // function to selected Item
Update(e:any){
  this.selected = e.target.value;
  }
}
  ngOnInit(); void {
  }


function ngOnInit() {
  throw new Error('Function not implemented.');
}

