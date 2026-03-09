const db  = require('./db')
const {default: axios } = require('axios');
// numbers
const sum = (a,b ) => a+b;
const greeting = (name) => `hello ${name}!`;
// const isEven = (number) => {
//     if (number % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// };
////////// async - await /////////
const getOrders = async () =>{
    return [
        {id: 1, price:10 },
        {id: 2, price:20 }
    ]
}
const isEven = (number)=>(number % 2 === 0 ? true: false);
const animals = ['cat', 'dog', 'monkey'];
const isOrdaredById = (id) => {
    //return {id:1, price:10}
    if(!id){
        throw new Error ('id is not defined');
    }
    return {id:1, price:10, date:2015}

};
/////mocks/////
const applyDiscount = (orderid)=>{
    const order = db.getOrders(orderid); // mock or fake
    if (order.price >=10){
        order.price -= order.price*0.1;
        db.updateOrder(order);
    }
    return order;
}
const fetchData = async()=>{
    const data = axios.get('https://url.com')
    return data;
}
module.exports ={
    sum,
    greeting,
    isEven, 
    animals, 
    isOrdaredById,
    getOrders,
    applyDiscount,
    fetchData
};
