var expect = require('expect')
const utils = require('./utils')

describe('Utils',()=>{

    describe('#add', ()=>{
        it("Should add two numbers", ()=>{
            var res = utils.add(22, 11);
        
            expect(res).toBe(33);
            expect(typeof res).toBe('number')
        })
        
        it("Should async add two numbers", (done)=>{
            utils.addAsync(22, 11, (sum)=>{
                expect(sum).toBe(33)
                done();
            });
            
        })
    })
    
    
    it("Should square two numbers", ()=>{
        var res = utils.square(3);
        expect(res).toBe(9)
    })
    
    it("Should async square two numbers", (done)=>{
        utils.squareAsync(5, (sqr)=>{
            expect(sqr).toBe(25)
            done();
        });
        
    })
    
    it("Should be something", ()=>{
        expect(10).not.toEqual(9);
        expect([1,2,3]).toContain(2)
        expect({name: 'Masoud'}).not.toEqual({name:'masoud'})
        expect({
            location:'tehran',
            name:'masoud',
            age: 28
        }).toEqual(expect.objectContaining({
            age: 28
        }))
    })
    
    it("Should set firname and lastname", () =>{
        var user = {location: 'tehran', age: 28}
        var res = utils.setName(user, "Masoud Salehi")
    
        expect(res).toEqual(expect.objectContaining({
            firstname: "Masoud",
            lastname: "Salehi"
        }))
    })
})

