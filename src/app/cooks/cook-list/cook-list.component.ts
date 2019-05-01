import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromApp from '../../store/app.reducers';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Cook } from 'src/app/model/cook.model';

@Component({
  selector: 'app-cook-list',
  templateUrl: './cook-list.component.html',
  styleUrls: ['./cook-list.component.css']
})
export class CookListComponent implements OnInit {
  cookState: Observable<{cooks: Cook[]}>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.cookState = this.store.select('cooks');
  }

}
