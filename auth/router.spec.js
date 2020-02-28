const request = require('supertest')
const server = require('../api/server')

describe('auth router', function(){
    it('should run the tests', function(){
        expect(true).toBe(true)
    })



    describe("auth router is connnected", function(){
        it('should return 200', function(){
            return request(server).get('/').then(res =>{
                expect(res.status).toBe(200)
            })
        })
    })

    // describe('register should return a message', function(){
    //     it('should return an object', function(){
    //         return request(server).post('api/auth/register',{"username": 'patsy', "password": "rick"}).then(res =>{
    //             expect(res.body.username).toBe("patsy")
    //         })
    //     })
    // })

})