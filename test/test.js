'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = require('chai').should();
const expect = require('chai').expect;
const server = require('../app');

const {
    fakeCharacter,
    erorCharacter,
    fakeMovie,
    erorMovie,
    fakeSpell,
    erorSpell,
    updateCharacter,
    erorUpdateCharacter,
    updateMovie,
    erorUpdateMovie,
    updateSpell,
    erorUpdateSpell
} = require('./testData');

chai.should();
chai.use(chaiHttp);


describe("API TEST", () => {

    /*
    * Test the add new character
    */
    describe("POST /", () => {
        it("It should POST ", (done) => {
            const character = fakeCharacter
            chai.request(server)
                .post("/api/character/newCharacter")
                .send(character)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.data.should.be.a('object');
                    response.body.data.name.should.be.a('string');
                    response.body.data.description.should.be.a('string');
                    response.body.data.movies.should.be.a('array');
                    response.body.data.actor.should.be.a('string');
                    response.body.data.image.should.be.a('string');
                    done();
                });
        });

        it("It should not POST ", (done) => {
            const character = erorCharacter
            chai.request(server)
                .post("/api/character/newCharacter")
                .send(character)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.should.have.property('error');
                    response.body.should.be.a('object');
                    done();
                });
        });
    });


    /*
    * Test the update character
    */
    describe("PUT /", () => {
        it("It should PUT an existing character", (done) => {
            const character = updateCharacter.data
            chai.request(server)
                .put("/api/character/" + updateCharacter.existedId)
                .send(character)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.updateCharacter.should.be.a('object');
                    response.body.updateCharacter.name.should.be.a('string');
                    response.body.updateCharacter.description.should.be.a('string');
                    response.body.updateCharacter.movies.should.be.a('array');
                    response.body.updateCharacter.actor.should.be.a('string');
                    response.body.updateCharacter.image.should.be.a('string');
                    done();
                });
        });
        it("It should not PUT ", (done) => {
            const character = erorUpdateCharacter.data
            chai.request(server)
                .put("/api/character/" + updateCharacter.existedId)
                .send(character)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.should.have.property('error');
                    response.body.should.be.a('object');
                    done();
                });
        });
    });


});

