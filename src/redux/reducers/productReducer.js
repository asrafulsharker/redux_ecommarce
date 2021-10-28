import { ActionTypes } from "../contants/action-types";
const initialState = {
    products:[{ 
        id : 1,
        title: "Nirob",
        category: "programmer",
    },
],
};
export const productReducer =(state=initialState, {type,payload}) =>{
    switch (type){
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}