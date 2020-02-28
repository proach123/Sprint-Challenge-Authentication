const request = require('supertest')
const server = require('../api/server')

describe('jokes router', function(){
    it('should run the tests', function(){
        expect(true).toBe(true)
    })

    

    describe("jokes router is connnected", function(){
        it('should return 200', function(){
            return request(server).get('/').then(res =>{
                expect(res.status).toBe(200)
            })
        })
    })

    describe("jokes router returns json", function(){
        it('should return 200', function(){
            return request(server).get('/').then(res =>{
                expect(res.type).toMatch(/json/)
            })
        })
    })


})