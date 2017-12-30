import { combineReducers } from 'redux';

const searchClothes = (state = [], action) => {
    switch (action.type) {
        case 'DISPLAY_FETCHED_CLOTHES':
            return action.results;
        default:
            return state;
    }
}

const searchUsers = (state = [], action) => {
    switch (action.type) {
        default: 
            return state;
    }
}

const researches = combineReducers({
    searchClothes,
    searchUsers
})

export default researches