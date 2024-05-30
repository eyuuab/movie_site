const initialState = {
  choices: 'tv/top_rated',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CHOICES':
      return {
        ...state,
        choices: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;