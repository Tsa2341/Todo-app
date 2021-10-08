const { app } = require('../app') ;
const  chai = require("chai");
const chaiHttp = require("chai-http");
const { describe, it } = require("mocha");

chai.use(chaiHttp);

describe("Todo app testing",()=>{
    it("Should allow all http requests", (done)=>{
        chai.request(app)
            .get("/")
            .set("Headers",{"Access-Control-Allow-origin":"*"})
            .end((err,res)=>{
                chai.expect(res.statusCode).to.equal(200);
                chai.expect(res.body).to.be.an("object")
                done();
            })
    })

    it("Should give all template data", (done)=>{
        chai.request(app)
            .get("/data")
            .set("Headers",{"Access-Control-Allow-origin":"*"})
            .end((err,res)=>{
                chai.expect(res.body).to.be.an("object");
                done();
            })
    })
})