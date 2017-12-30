import { combineEpics } from 'redux-observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { ajax } from 'rxjs/observable/dom/ajax';

const displayFetchedClothes = (results) => ({ type: 'DISPLAY_FETCHED_CLOTHES', results });

const fetchClothesByNameEpic = (action$) => 
    action$.ofType('FETCH_CLOTHES_BY_NAME')
        .mergeMap(action => 
            ajax.getJSON(`http://localhost:3000/clothes/search/${action.research}`)
                .map(res => displayFetchedClothes(res))
                //.error
                //.takeUntil
        )
    

const epics = combineEpics(
    fetchClothesByNameEpic
);

export default epics;