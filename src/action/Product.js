//因為沒有接api，所以用不到

// import Axios from 'axios';

// export const getProductDate_DATA = 'getProduct_DATA';


// const getProductDateSuccess = data => ({
//     type: getProductDate_DATA,
//     data,
//   });

// export function getProductDate() {
//     return dispatch => {
//         Axios({
//             url:'http://192.168.10.187:8888/api/product',
//             method: 'get',
//             config: {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Access-Control-Allow-Origin': '*',
//                 }
//             },
//         })     
//         .then((res) => {
//             dispatch(getProductDateSuccess(res.data));
//         })
//         .catch((err) => {
//             console.log("1111", err);
//         })
//     }
// }


