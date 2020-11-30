import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent {

  Property: any = {
    Id: 1,
    Name: 'Sun House',
    Type: 'single',
    Price: 1000
  };


}
