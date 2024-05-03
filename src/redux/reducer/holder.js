export const USER_DETAILS = 'USER_DETAILS';
export const ADD_MINISTRY_DATA = 'ADD_MINISTRY_DATA';

const initial_state = {
  userDetails: false,
  add_ministry_data: [],
};

const holderReducer = (state = initial_state, action) => {
  switch (action.type) {
    case USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    case ADD_MINISTRY_DATA:
      return {
        ...state,
        add_ministry_data: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default holderReducer;
