import { Cook } from '../../model/cook.model';
import { Recipe } from '../../model/recipe.model';
import * as fromApp from '../../store/app.reducers';
import * as CookActions from './cook.actions';

export interface FeatureState extends fromApp.AppState {
    cooks: State;
}

export interface State {
    cooks: Cook[];
}

const initialState: State = {
    cooks: [
        new Cook(
            'AAA',
            'A DESC'
        ),
        new Cook(
            'BBB',
            'B DESC'
        )
    ]
}

export function cookReducer(state = initialState, action: CookActions.CookActions) {
    switch (action.type) {
        case(CookActions.SET_COOKS):
            return {
                ...state,
                cooks: [...action.payload]
            };
    }
}