import {
    BUY_PRODUCT,
    UPDATE_CART,
    DELETE_CART,
} from '../action/ShopCar'

//定義state的初始值
const initialState = {
    cartDate: [],
};

//看接收到誰的action.type，就去處理他的資料
const ShopCar = (state=initialState,action) => {
    switch (action.type){
        case BUY_PRODUCT:
            const existing = state.cartDate.find(val => val.name === action.data.name);
            if(existing) {
                return { 
                    ...state,
                    cartDate: state.cartDate.map(val=> {
                            if (val.name === action.data.name) {
                                return {
                                ...val,
                                quantity: val.quantity + 1,
                                }
                            }
                            return {
                                ...val,
                            }
                    }),
                };
            }
            return { 
                ...state,
                cartDate: [
                    ...state.cartDate,
                    action.data,
                ],
            };
        case UPDATE_CART: 
            return { 
                ...state,
                cartDate: state.cartDate.map(val=> {
                    if (val.name === action.data.name) {
                        return {
                            ...action.data,
                        }   
                    }
                    return {
                        ...val,
                    }   
                }),
            };
        case DELETE_CART: 
            return {
                ...state,
                cartDate: state.cartDate.filter(val => {
                    return val.name !== action.data.name;
                }),
            };  
        default:
            return state;
    }
}

export default ShopCar;