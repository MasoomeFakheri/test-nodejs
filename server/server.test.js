const request = require('supertest')
const expect = require('expect')

var app = require('./server').app

describe("HTTP", ()=>{

    describe("GET /", ()=>{
        it("Should return Hello World response", (done)=>{
            request(app)
                .get('/')
                .expect(404)
                .expect((res)=>{
                    expect(res.body).toEqual(expect.objectContaining({
                        error: 'Page not found.'
                    }))
                })
                .end(done)
        })
    })

    describe("GET /users", ()=>{
        it("Should return my users object", (done)=>{
            request(app)
                .get('/users')
                .expect(200)
                .expect((res)=>{
                    expect(res.body).toContainEqual({
                        name: 'Masoud',
                        age: 28
                    })
                })
                .end(done)
        })
    })
    
})

