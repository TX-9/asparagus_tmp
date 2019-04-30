import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromCook from '../store/cook.reducers';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cook-list',
  templateUrl: './cook-list.component.html',
  styleUrls: ['./cook-list.component.css']
})
export class CookListComponent implements OnInit {
  cookState: Observable<fromCook.State>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromCook.FeatureState>) { }

  ngOnInit() {
    this.cookState = this.store.select('cooks');
  }

}
