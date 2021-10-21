const { expect } = require('chai');
const cinema = require('./03.Cinema.js');


describe("Cinema tests", function () {
    describe("showMovies(movieArr)-A function that accepts an array", function () {
        it("The array includes the available movies in the cinema ", function () {
            expect(cinema.showMovies(['King King', 'The Tomorrow War'])).to.equal('King King, The Tomorrow War');
        })
        it("The array includes the available movies in the cinema ", function () {
            expect(cinema.showMovies(['King King'])).to.equal('King King');
        })
        it('If the length of the input array is zero, the function returns the string:', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        })

    })

    describe("ticketPrice(projectionType)- A function that accept string:", function () {
        it("The function checks whether the submitted projectionType is present in the schedule with the types of projections", function () {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
        })
        it("The function checks whether the submitted projectionType is present in the schedule with the types of projections", function () {
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
        })
        it("The function checks whether the submitted projectionType is present in the schedule with the types of projections", function () {
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        })
        it("the function throws an error in the following format ", function () {
            expect(() => cinema.ticketPrice(3)).to.throw();
        })
        it("the function throws an error in the following format ", function () {
            expect(() => cinema.ticketPrice('Error')).to.throw();
        })
    })


    describe("swapSeatsInHall Main Tests", () => {
        it("Not exist one input", () => {
            expect(cinema.swapSeatsInHall(4)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it("Not int input", () => {
            expect(cinema.swapSeatsInHall(4.4, 2.2)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it("Not in range input", () => {
            expect(cinema.swapSeatsInHall(0, 21)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it("String input", () => {
            expect(cinema.swapSeatsInHall("0", "21")).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it("Equal input", () => {
            expect(cinema.swapSeatsInHall(1, 1)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it("Negative input", () => {
            expect(cinema.swapSeatsInHall(-1, -2)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it("None input", () => {
            expect(cinema.swapSeatsInHall()).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it("One string input", () => {
            expect(cinema.swapSeatsInHall("1")).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it("One string one number input", () => {
            expect(cinema.swapSeatsInHall("1", 2)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it("One outrange one number input", () => {
            expect(cinema.swapSeatsInHall(0, 20)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it("One outrange one number input", () => {
            expect(cinema.swapSeatsInHall(1, 21)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it("One outrange one number input", () => {
            expect(cinema.swapSeatsInHall(1, 0)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it("Valid input", () => {
            expect(cinema.swapSeatsInHall(1, 2)).to.be.equal("Successful change of seats in the hall.");
        });
        it("Edge input", () => {
            expect(cinema.swapSeatsInHall(1, 20)).to.be.equal("Successful change of seats in the hall.");
        });
    })

})
// cinema ([‘King Kong’, ‘The Tomorrow War’, ‘Joker’,etc.])