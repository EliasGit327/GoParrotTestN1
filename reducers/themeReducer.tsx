const initialState = {
  theme: {
    primary: 'red'
  }
};

export const themeReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case 'AAA':
      const newState = {...state};
      newState.theme.primary = 'orange';
      return newState;
    default:
      return state;
  }
};
