import Axios from "../../axios-orders";

export const loadOrders = (userId) => {
  return function (dispatch, getState) {
    // zahialgiin tataj ehellee gedgiig medegdene
    // eniig huleej awaad spineer ajillaj ehelne
    dispatch(loadOrdersStart());
    const token = getState().signupReducer.token;

    // this.setState({ loading: true });
    Axios.get(
      `/orders.json?&auth=${token}&orderBy="userId"&equalTo="${userId}"`
    )
      .then((response) => {
        dispatch(loadOrdersSuccess(Object.entries(response.data).reverse()));
        // this.setState({ orders: Object.entries(response.data).reverse() });
      })
      .catch((err) => dispatch(loadOrdersError(err)))
      .finally(() => {
        // this.setState({ loading: false });
      });
  };
};

export const loadOrdersSuccess = (loadedOrders) => {
  return {
    type: "LOAD_ORDERS_SUCCESS",
    orders: loadedOrders,
  };
};

export const loadOrdersStart = () => {
  return {
    type: "LOAD_ORDERS_START",
  };
};

export const loadOrdersError = (error) => {
  return {
    type: "LOAD_ORDERS_ERROR",
    error: error,
  };
};

// Zahialgiig hadgalah heseg

export const saveOrder = (newOrder) => {
  return function (dispatch, getState) {
    // Spinner ergelduulne
    dispatch(saveOrderStart());
    const token = getState().signupReducer.token;

    // Firebase ruu hadgalna
    // setLoading(true);
    Axios.post(`/orders.json?auth=${token}`, newOrder)
      .then((response) => {
        dispatch(saveOrderSuccess());
        console.log("Амжилттай хадгалагдлаа!");
      })
      .catch((error) => {
        dispatch(saveOrderError(error));
      });
  };
};

export const saveOrderStart = () => {
  return {
    type: "SAVE_ORDER_START",
  };
};
export const saveOrderSuccess = () => {
  return {
    type: "SAVE_ORDER_SUCCESS",
  };
};
export const saveOrderError = (error) => {
  return {
    type: "SAVE_ORDER_ERROR",
    error,
  };
};
