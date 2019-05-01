import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import * as fromApp from '../../store/app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cook-edit',
  templateUrl: './cook-edit.component.html',
  styleUrls: ['./cook-edit.component.css']
})
export class CookEditComponent implements OnInit {
  id: number;
  editMode = false;
  cookForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          
        }
      );
  }

  initForm() {
    let cookName = '';
    let cookImagePath = '';
    let cookDesc = '';
    this.cookForm = new FormGroup({
      'name': new FormControl(cookName, Validators.required),
      'imagePath': new FormControl(cookImagePath, Validators.required),
      'desc': new FormControl(cookDesc, Validators.required)
    });
  }

}
