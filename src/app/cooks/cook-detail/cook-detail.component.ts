import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as CookActions from '../store/cook.actions';
import * as fromApp from '../store/cook.reducers';
import { ActivatedRoute,Router, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Cook } from 'src/app/model/cook.model';

@Component({
  selector: 'app-cook-detail',
  templateUrl: './cook-detail.component.html',
  styleUrls: ['./cook-detail.component.css']
})
export class CookDetailComponent implements OnInit {
  cookState: Observable<{cooks: Cook[]}>;

  id: number;

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private store: Store<fromApp.State>) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        //this.cookState = this.store.select('cooks');
      }
    )
  }

}
