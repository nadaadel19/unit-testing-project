const {sum, greeting, flag, animals, getobject, getOrders, applydiscount} = require('./app')
const db = require('./db')
// test('sum - should return 5 for 2+3', ()=>{
//     // const result = sum(0.201,0.3)
//     // expect(result).toBeCloseTo(0)
// })

// test('greeting - should hello ahmed', ()=>{
//     // const result = sum(0.201,0.3)
//     // expect(greeting('ahmed')).toMatch('hello ahmed ')
// })
// describe('flag', ()=>{
//     it('should true for 4', ()=>{
//         expect(flag(4)).toBeTruthy()
//     })
//     // it('should true for 5', ()=>{
//     //     expect(flag(5)).toBeTruthy()
//     // })
//     it('should false for 5', ()=>{
//         expect(flag(5)).toBeFalsy()
//     })
// })


// test('animals array - should true for cate', ()=>{
//     expect(animals).toContain('cate')
// })

// test('validation', ()=>{
//     let x = 5
//    // expect(x).not.toBeUndefined()
//     expect(x).not.toBeNull()
// })

// describe("getobject", ()=>{
//    it("should return order of id 1", ()=>{
//         const res = getobject(1);
//         //expect(res).toBe({id:1, price:10})
//         //expect(res).toEqual({id:1, price:10})
//         //expect(res).toMatchObject({id:1, price:10})
//         expect(res).toHaveProperty("id",1)
//    })
//    it("should throw error if id is not defined", ()=>{
//     //make function its value is the caller of the other function
//     expect(()=>getobject()).toThrow() 

// })
// })

// describe("getorders" , ()=>{
//     it("should return some orders", async()=>{
//         //const orders = await getOrders()
//         //expect((await getOrders()).length).toBe(2)
//         await expect(getOrders()).resolves.toContainEqual({id:1, price:20})
//     })
// })
describe("applydiscount" , ()=>{
    it("should apply discount 10% forn order price 10", ()=>{
        db.getorder = function(orderid){
            return {id:orderid, price:10}
        }
        const order = applydiscount(1)
        expect(order).toEqual({id:1, price:9})
    })
})
