// import Axios from 'axios';
export const BUY_PRODUCT = 'BUY_PRODUCT'
export const UPDATE_CART = 'UPDATE_CART'
export const DELETE_CART = 'DELETE_CART'

//有接api的寫法
// export function updateCart(data) {
//     return dispatch => {
//         Axios({
//             url:'http://192.168.10.187:8888/api/cart',
//             method: 'POST',
//             data: data,
//             config: {
//             headers: { 
//                 'content-type': 'application/json',
//             },
//             }
//         })
//         .then((res) => {
//             console.log('123123123');
//             dispatch(updateCartSuccess());
//         })
//         .catch((err) => {
//             console.log("1111", err);
//         })
//     }
// }

// const updateCartSuccess = data => ({
//     type: updateCart_Success,
//     data,
//   });

export function buyProduct(data) {
    return{
        type : BUY_PRODUCT ,
        data,
    };
}

export function updateCart(data) {
    return{
        type : UPDATE_CART ,
        data,
    };
}

export function deleteCart(data) {
    return{
        type : DELETE_CART ,
        data,
    };
}