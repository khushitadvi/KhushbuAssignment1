const INIT_STATE = {
  carts: [],
};

export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    /* check type data if it is ADD_CART
        then add in list otherwise go to default state
    */
    case "ADD_CART":
      return {
        /* Add every data in list which are 
        clicked on add to cart button */
        ...state,
        carts: [...state.carts, action.payload],
      };
    default:
      return state;
  }
};
