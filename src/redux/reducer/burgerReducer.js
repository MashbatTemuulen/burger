const initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    bacon: 0,
    meat: 0,
  },
  ingredientNames: {
    bacon: "Гахайн мах",
    cheese: "Бяслаг",
    meat: "Үхрийн мах",
    salad: "Салад",
  },
  totalPrice: 0,
  purchasing: false,
};

const INGREDIENT_PRICES = {
  salad: 150,
  cheese: 250,
  bacon: 800,
  meat: 1500,
};

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_INGREDIENT") {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.nemehOrts]: state.ingredients[action.nemehOrts] + 1,
      },
      totalPrice: state.totalPrice + INGREDIENT_PRICES[action.nemehOrts],
      purchasing: true,
    };
  } else if (action.type === "REMOVE_INGREDIENT") {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.hasahOrts]: state.ingredients[action.hasahOrts] - 1,
      },
      totalPrice: state.totalPrice - INGREDIENT_PRICES[action.hasahOrts],
      purchasing: state.totalPrice - INGREDIENT_PRICES[action.hasahOrts] > 0,
    };
  }
  return state;
};

export default reducer;
