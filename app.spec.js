const { sum, isEven, animals, isOrdaredById, getOrders, applyDiscount,fetchData } = require("./app")
const { greeting } = require("./app")
const db  = require('./db')
const {default: axios } = require('axios');
// made mock for the axios module kolo
jest.mock('axios');
/*
mockReset
.mock property
mockImplementation
mock modul
*/

// describe('isEven',()=>{
//     it (' it should return true for 4', ()=>{
//         expect(isEven(4)).toBeTruthy();
//     })
//     it ('it should return false for 5', ()=>{
//         expect(isEven(5)).toBeTruthy();
//     })
//     it ('it should return false for 7', ()=>{
//         expect(isEven(7)).toBeFalsy();
//     })
// })
describe('isOrdaredById',()=>{
    it ('it should return order by id 1', ()=>{
        const res = isOrdaredById(1);
        //expect(res).toEqual({id:1, price:10}); //specific
        expect(res).toMatchObject({id:1, price:10}); // not specific
        expect(res).toHaveProperty('id', 1); 

    })
    it ('it should throw Error if id is not defined', ()=>{
        expect(()=>isOrdaredById()).toThrow(); // function call the error function
        expect(()=>isOrdaredById()).toThrowError('id is not defined'); // function call the error function

    })
    
    
    
})
describe('getOrders',()=>{
    it('should return some orders', async ()=>{
        // const orders = await getOrders();
        //expect(orders.length).toBe(2)
        //expect ((await getOrders()).length ).toBe(2)
       //await expect ( getOrders()).resolves.toContain({id:1, price:10})
       //await expect ( getOrders()).resolves.toContainEqual({id:1, price:10})
    })
    
})
describe('applyDiscount',()=>{
   it('should return dicount 10% for order price 10', ()=>{
    ////mock////  problem it will change in the memory so when you call it again it will return the fake values

    // const myFunc = jest.fn();
    // myFunc.mockReturnValue(5);
    // db.getOrders = function(orderid){
    //     return {id:orderid, price:10};
    // }
    // const order = applyDiscount(1);
    // expect(order).toEqual({id:1, price:9})
    // console.log(myFunc());
    /////same as the above but use reset
    db.getOrders = jest.fn().mockReturnValue({id:1, price:10 })
    db.updateOrder = jest.fn();
    const order = applyDiscount(1);
    expect(order).toEqual({id:1, price:9})
    //db.getOrders.mockReset(); //=>
    //console.log(db.getOrders.mock)
    //expect(db.getOrders.mock.calls.length).toBe(1)
    expect(db.getOrders.mock.calls[0][0]).toBe(1);
    //expect(db.updateOrder.mock.calls.length).toBe(1);
    //expect(db.updateOrder.mock.calls[0][0]).toEqual({id:1, price:9});
    expect(db.updateOrder).toHaveBeenCalled();
    expect(db.updateOrder).toHaveBeenCalledWith({id:1, price:9});
    //////mockImplementation/////
    db.getOrders = jest.fn().mockImplementation((id)=>{
        if(id<5){
            return {id, price:10}
        }else{
            return {id, price:8}
        }
    })
   })
   it('should return price 8', ()=>{
        expect(applyDiscount(10)).toEqual({id:10, price:8})
        expect(db.getOrders.mock.calls.length).toBe(1);
   })
      
})
describe('fetchData',()=>{
    it('should return some data', async ()=>{
    axios.get.mockResolvedValue({id:5})
     const data = await fetchData();
     expect(data).toEqual({id:5})
     
    })
})

// test ('sum - should return 2 + 3 = 5', ()=>{
//     const result = sum(3,3);
//     //expect(result).toBe(5);
//     expect(result).toBeGreaterThanOrEqual(5);
//     expect(sum(0.1, 0.3)).toBe(0.4);
//     //expect(sum(0.102, 0.3)).toBe(0.4);//!!
//     expect(sum(0.1, 0.3)).toBeCloseTo(0.4);

// });
test ('greeting - it should return hello ahmed', ()=>{
    //expect(greeting('ahmed')).toBe('hello ahmed');
    expect(greeting('ahmed')).toMatch('hello ahmed')
})
// test ('isEven - it should return true for 4', ()=>{
//     expect(isEven(4)).toBeTruthy();
// })
// test ('isEven - it should return false for 5', ()=>{
//     expect(isEven(5)).toBeTruthy();
// })
// test ('isEven - it should return false for 7', ()=>{
//     expect(isEven(7)).toBeFalsy();
// })

// test('validation',()=>{
//    let x = 10;
//    let x = null; 
//    let x = 2;

//     expect(x).toBeDefined();
//     expect(x).toBeUndefined();
//     expect(x).toBeNull();
//     expect(x).not.toBeNull();
// })

//////////array///////////
test ('animals - it should return true for cat', ()=>{
    expect(animals).toContain('cat');
})
