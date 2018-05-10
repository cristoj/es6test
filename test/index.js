import romanCalculator from '../src/js/romanCalculator';
import assert          from 'assert';

describe( 'romanCalculator', function () {
  let RomanCalculator;

  beforeEach( () => {
    RomanCalculator = new romanCalculator();
  } );


  it( 'convert 1 to I', function () {
    //Arrange

    //Act
    let result = RomanCalculator.romanNumbers( 1 );

    //Assert
    assert.equal( result, "I" );
  } );
  it( 'convert 2 to II', function () {
    //Arrange

    //Act
    let result = RomanCalculator.romanNumbers( 2 );

    //Assert
    assert.equal( result, "II" );
  } );
  it( 'convert 3 to III', function () {
    //Arrange
    //Act
    let result = RomanCalculator.romanNumbers( 3 );
    //Assert
    assert.equal( result, "III" );
  } );
  it( 'convert 4 to IV', function () {
    //Arrange
    //Act
    let result = RomanCalculator.romanNumbers( 4 );
    //Assert
    assert.equal( result, "IV" );
  } );
  it( 'convert 5 to V', function () {
    //Arrange
    //Act
    let result = RomanCalculator.romanNumbers( 5 );
    //Assert
    assert.equal( result, "V" );
  } );
  it( 'convert 6 to VI', function () {
    //Arrange
    //Act
    let result = RomanCalculator.romanNumbers( 6 );
    //Assert
    assert.equal( result, "VI" );
  } );
  it( 'convert 9 to IX', function () {
    //Arrange
    //Act
    let result = RomanCalculator.romanNumbers( 9 );
    //Assert
    assert.equal( result, "IX" );
  } );
  it( 'convert 10 to X', function () {
    //Arrange
    //Act
    let result = RomanCalculator.romanNumbers( 10 );
    //Assert
    assert.equal( result, "X" );
  } );
  it( 'convert 11 to XI', function () {
    //Arrange
    //Act
    let result = RomanCalculator.romanNumbers( 11 );
    //Assert
    assert.equal( result, "XI" );
  } );


} );
