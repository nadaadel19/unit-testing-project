const getOrders = (orderid)=>{
    return {id: orderid, price:100}
}
const updateOrder = (order) =>{
    console.log("order has been updated")
}
module.exports ={
    getOrders,
    updateOrder
}
