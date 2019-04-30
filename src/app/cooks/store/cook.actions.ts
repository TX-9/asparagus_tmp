import { Action } from '@ngrx/store';
import { Cook } from '../../model/cook.model';

export const ADD_COOK = 'ADD_COOK';
export const UPDATE_COOK = 'UPDATE_COOK';
export const DELETE_COOK = 'DELETE_COOK';
export const SET_COOKS = 'SET_COOKS';
export const STORE_COOKS = 'STORE_COOKS';
export const FETCH_COOKS = 'FETCH_COOKS';

export class AddCook implements Action {
    readonly type = ADD_COOK;
    constructor(public payload: Cook) {}
}

export class UpdateCook implements Action {
    readonly type = UPDATE_COOK;
    constructor(public payload: {index: number, updateCook: Cook}) {}
}

export class DeleteCook implements Action {
    readonly type = DELETE_COOK;
    constructor(public payload: number) {}
}

export class SetCooks implements Action {
    readonly type = SET_COOKS;
    constructor(public payload: Cook[]) {}
}

export class StoreCooks implements Action {
    readonly type = STORE_COOKS;
    
}

export class FetchCooks implements Action {
    readonly type = FETCH_COOKS;
}

export type CookActions = AddCook | UpdateCook | DeleteCook | SetCooks | StoreCooks | FetchCooks;