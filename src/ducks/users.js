const initialState = {
    user: {},
    trips: [],
    selected: 0
  };
  
  const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
  const UPDATE_TRIPS_DATA = 'UPDATE_TRIPS_DATA';
  const UPDATE_SELECTED= 'UPDATE_SELECTED'
  export function updateUserData(user) {
    return {
      type: UPDATE_USER_DATA,
      payload: user
    };
  }
  export function updateTripsData(trips) {
  return {
    type: UPDATE_TRIPS_DATA,
    payload: trips 
  }
}
  export function updateSelected(selected) {
  return {
    type: UPDATE_SELECTED,
    payload: selected 
  }
}
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case UPDATE_USER_DATA:
        return Object.assign({}, state, { user: action.payload });
      case UPDATE_TRIPS_DATA:
        return Object.assign({}, state, { trips: action.payload })
      case UPDATE_SELECTED:
        return Object.assign({}, state, { selected: action.payload })
        default:
        return state;
    }
  }