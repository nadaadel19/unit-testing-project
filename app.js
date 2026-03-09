const db  = require('./db')
const sum = (a,b) => a+b;

const greeting = (name)=> `Hello ${name} !!!`

const flag = (number)=> number%2 ==0 ? true:false

const animals = ['cate', 'dog', 'monkey']

// object
const getobject  = (id)=>{
    if(!id){
        throw new Error("id is not defined")
    }
    return {id:1, price:10, date: "2025"}
}
const getOrders = async()=>{
    return [
        {id:1, price:20},
        {id:2, price:40},
    ]
}
const applydiscount = (orderid)=>{
    const order = db.getorder(orderid)
    if(order.price >=10){
        order.price -= order.price * 0.1
    }
    return order
}
module.exports = {
    sum, greeting, flag, animals, getobject, getOrders, applydiscount
}