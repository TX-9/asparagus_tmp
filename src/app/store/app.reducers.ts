import { ActionReducerMap } from '@ngrx/store';
import * as fromCook from '../cooks/store/cook.reducers';
export interface AppState {
    cooks: fromCook.State
}

export const reducers: ActionReducerMap<AppState> = {
    cooks: fromCook.cookReducer
} 