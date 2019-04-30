import { Component, OnInit, Input } from '@angular/core';
import { Cook } from 'src/app/model/cook.model';

@Component({
  selector: 'app-cook-item',
  templateUrl: './cook-item.component.html',
  styleUrls: ['./cook-item.component.css']
})
export class CookItemComponent implements OnInit {
  @Input() cook: Cook;
  @Input() index: number;
  
  ngOnInit() {
  }

}
