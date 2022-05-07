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
    allCharacter,
    allMovies,
    allSpells,
    getCharacterDetails,
    erorGetCharacterDetails,
    getMovieDetails,
    erorGetMovieDetails,
    getSpellDetails,
    erorGetSpellDetails,
    updateCharacter,
    erorUpdateCharacter,
    updateMovie,
    erorUpdateMovie,
    updateSpell,
    erorUpdateSpell,
    deleteCharacter,
    erorDeleteCharacter,
    deleteMovie,
    erorDeleteMovie,
    deleteSpell,
    erorDeleteSpell
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
     * Test the all character
     */
    describe("GET /", () => {
        it("It should GET characters", (done) => {
            const characters = allCharacter
            chai.request(server)
                .get("/api/character/allCharacters")
                .send(characters)
                .end((err, response) => {
                    response.should.have.status(200);
                                    response.body.allCharacters.should.be.a('array');
                                    response.body.should.have.property('status');
                                    expect(response.body.status).to.equal("success");
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

    /*
     * Test the delete character (change the deleteCharacter.existedId in testData.js while running)
     */
    // describe("DELETE /", () => {
    //     it("It should DELETE an existing character", (done) => {
    //         chai.request(server)
    //             .delete("/api/character/" + deleteCharacter.existedId)
    //             .end((err, response) => {
    //                 response.should.have.status(200);
    //                 response.body.should.be.a('object');
    //                 response.body.should.have.property('code');
    //                 response.body.should.have.property('success');
    //                 response.body.should.have.property('message');
    //                 response.body.deleteCharacter.should.be.a('object');
    //                 expect(response.body.code).to.equal(200);
    //                 expect(response.body.message).to.equal("Delete character");
    //                 done();
    //             });
    //     });
    //     it("It should not DELETE ", (done) => {
    //         chai.request(server)
    //             .delete("/api/character/" + erorDeleteCharacter.existedId)
    //             .end((err, response) => {
    //                 response.should.have.status(404);
    //                 response.body.should.have.property('code');
    //                 response.body.should.have.property('message');
    //                 response.body.should.have.property('error');
    //                 expect(response.body.code).to.equal(404);
    //                 expect(response.body.message).to.equal("Not Found");
    //                 done();
    //             });
    //     });
    // });

    /*
     * Test the add new movie
     */
    describe("POST /", () => {
        it("It should POST ", (done) => {
            const movie = fakeMovie
            chai.request(server)
                .post("/api/movie/newMovie")
                .send(movie)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.data.should.be.a('object');
                    response.body.data.name.should.be.a('string');
                    response.body.data.description.should.be.a('string');
                    response.body.data.characters.should.be.a('array');
                    response.body.data.spells.should.be.a('array');
                    response.body.data.image.should.be.a('string');
                    done();
                });
        });

        it("It should not POST ", (done) => {
            const movie = erorMovie
            chai.request(server)
                .post("/api/movie/newMovie")
                .send(movie)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.should.have.property('error');
                    response.body.should.be.a('object');
                    done();
                });
        });
    });

    /*
     * Test the all movies
     */
    describe("GET /", () => {
        it("It should GET movies", (done) => {
            const movies = allMovies
            chai.request(server)
                .get("/api/movie/allMovies")
                .send(movies)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.allMovies.should.be.a('array');
                    response.body.should.have.property('status');
                    expect(response.body.status).to.equal("success");
                    done();
                });
        });

    });

    /*
     * Test the update movie
     */
    describe("PUT /", () => {
        it("It should PUT ", (done) => {
            const movie = updateMovie.data
            chai.request(server)
                .put("/api/movie/" + updateMovie.existedId)
                .send(movie)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.updateMovie.should.be.a('object');
                    response.body.updateMovie.name.should.be.a('string');
                    response.body.updateMovie.description.should.be.a('string');
                    response.body.updateMovie.characters.should.be.a('array');
                    response.body.updateMovie.spells.should.be.a('array');
                    response.body.updateMovie.image.should.be.a('string');
                    done();
                });
        });


        it("It should not PUT ", (done) => {
            const movie = erorUpdateMovie.data
            chai.request(server)
                .put("/api/movie/" + updateMovie.existedId)
                .send(movie)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.should.have.property('error');
                    response.body.should.be.a('object');
                    done();
                });
        });
    });

    /*
     * Test the delete movie (change the deleteMovie.existedId in testData.js while running)
     */
    // describe("DELETE /", () => {
    //     it("It should DELETE an existing movie", (done) => {
    //         chai.request(server)
    //             .delete("/api/movie/" + deleteMovie.existedId)
    //             .end((err, response) => {
    //                 response.should.have.status(200);
    //                 response.body.should.be.a('object');
    //                 response.body.should.have.property('code');
    //                 response.body.should.have.property('success');
    //                 response.body.should.have.property('message');
    //                 response.body.deleteMovie.should.be.a('object');
    //                 expect(response.body.code).to.equal(200);
    //                 expect(response.body.message).to.equal("Delete movie");
    //                 done();
    //             });
    //     });
    //     it("It should not DELETE ", (done) => {
    //         chai.request(server)
    //             .delete("/api/movie/" + erorDeleteMovie.existedId)
    //             .end((err, response) => {
    //                 response.should.have.status(404);
    //                 response.body.should.have.property('code');
    //                 response.body.should.have.property('message');
    //                 response.body.should.have.property('error');
    //                 expect(response.body.code).to.equal(404);
    //                 expect(response.body.message).to.equal("Not Found");
    //                 done();
    //             });
    //     });
    // });

    /*
     * Test the add new spell
     */
    describe("POST /", () => {
        it("It should POST ", (done) => {
            const spell = fakeSpell
            chai.request(server)
                .post("/api/spell/newSpell")
                .send(spell)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.data.should.be.a('object');
                    response.body.data.name.should.be.a('string');
                    response.body.data.description.should.be.a('string');
                    response.body.data.movies.should.be.a('array');
                    done();
                });
        });

        it("It should not POST ", (done) => {
            const spell = erorSpell
            chai.request(server)
                .post("/api/spell/newSpell")
                .send(spell)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.should.have.property('error');
                    response.body.should.be.a('object');
                    done();
                });
        });
    });

    /*
     * Test the all spells
     */
    describe("GET /", () => {
        it("It should GET spells", (done) => {
            const spells = allSpells
            chai.request(server)
                .get("/api/spell/allSpells")
                .send(spells)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.allSpells.should.be.a('array');
                    response.body.should.have.property('status');
                    expect(response.body.status).to.equal("success");
                    done();
                });
        });

    });

    /*
     * Test the update spell
     */
    describe("PUT /", () => {
    it("It should PUT ", (done) => {
        const spell = updateSpell.data
        chai.request(server)
            .put("/api/spell/"+updateSpell.existedId)
            .send(spell)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.updateSpell.should.be.a('object');
                response.body.updateSpell.name.should.be.a('string');
                response.body.updateSpell.description.should.be.a('string');
                response.body.updateSpell.movies.should.be.a('array');
                done();
            });
    });


    it("It should not PUT ", (done) => {
        const spell = erorUpdateSpell.data
        chai.request(server)
            .put("/api/spell/"+updateSpell.existedId)
            .send(spell)
            .end((err, response) => {
                response.should.have.status(400);
                response.should.have.property('error');
                response.body.should.be.a('object');
                done();
            });
    });

});

    /*
     * Test the delete spell (change the deleteSpell.existedId in testData.js while running)
     */
    // describe("DELETE /", () => {
    //     it("It should DELETE an existing spell", (done) => {
    //         chai.request(server)
    //             .delete("/api/movie/" + deleteSpell.existedId)
    //             .end((err, response) => {
    //                 response.should.have.status(200);
    //                 response.body.should.be.a('object');
    //                 response.body.should.have.property('code');
    //                 response.body.should.have.property('success');
    //                 response.body.should.have.property('message');
    //                 response.body.deleteMovie.should.be.a('object');
    //                 expect(response.body.code).to.equal(200);
    //                 expect(response.body.message).to.equal("Delete spell");
    //                 done();
    //             });
    //     });
    //     it("It should not DELETE ", (done) => {
    //         chai.request(server)
    //             .delete("/api/spell/" + erorDeleteSpell.existedId)
    //             .end((err, response) => {
    //                 response.should.have.status(404);
    //                 response.body.should.have.property('code');
    //                 response.body.should.have.property('message');
    //                 response.body.should.have.property('error');
    //                 expect(response.body.code).to.equal(404);
    //                 expect(response.body.message).to.equal("Not Found");
    //                 done();
    //             });
    //     });
    // });
});