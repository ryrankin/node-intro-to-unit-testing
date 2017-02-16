const should = require('chai').should();

const fizzBuzz = require('../fizzBuzzer');

describe('fizzBuzz', function(){

	it('should return "fizz-buzz" for multiples of 15', function(){
		const normalCases = [15, 30, 45];
		normalCases.forEach(function(input){
			fizzBuzz(input).should.equal('fizz-buzz');
		});
	});

	it('should return "buzz" for multiples of 5', function(){
		const normalCases = [5, 10, 20];
		normalCases.forEach(function(input){
			fizzBuzz(input).should.equal('buzz');
		});
	});

	it('should return "fizz" for multiples of 3', function(){
		const normalCases = [3, 6, 9, 12];
		normalCases.forEach(function(input){
			fizzBuzz(input).should.equal('fizz');
		});
	});

	it('should return number if not divisible by 3 or 5', function(){
		const unnormalCases = [1, 4, 7, 8];
		unnormalCases.forEach(function(input){
			fizzBuzz(input).should.equal(input);
		});
	});

	it('should result in error if input is not number', function(){
		const badInput = [true, false, 'bob', function() {}, [1, 2, 3]]
		badInput.forEach(function(input){
			(function(){
				fizzBuzz(input)
			}).should.throw(Error);
		});
	});
});