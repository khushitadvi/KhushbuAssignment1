/* First we create action, when clicked on add to cart type will send using payload
then go to reducer.js, in reducer check type, if type is valid data will be added
 in cart, then we add this reducer into main.js , so if in future if we want to create
 multiple reducer so we can add easily,
 then we go to store.js and add root reducer and export it, 
 then we go to use store value in all component so 
 we go to index.js, we provide store value */
export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

// remove iteams
export const DLT = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

// remove individual iteam

export const REMOVE = (iteam) => {
  return {
    type: "RMV_ONE",
    payload: iteam,
  };
};
