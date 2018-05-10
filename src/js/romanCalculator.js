export default class RomanCalculator {
  /**
   * @constructs RomanCalculator
   */
  constructor () {

    /**
     * @member RomanCalculator#myBoolean
     * @type {boolean}
     * @default true
     */
    this.one_roman_number = 'I';
  }

  /**
   * @method RomanCalculator#sayHello
   * @returns {string} A friendly greeting.
   */
  sayHello ( string = 'a' ) {

    return 1;
  }

  repatNumber ( int = 1 ) {
    let repeatInt = 'hola'.repeat( int );
    //console.log('repeatInt', repeatInt);
    return repeatInt;
  }

  romanNumbers ( number = 1 ) {
    let five_roman_number = 'V';
    let ten_roman_number = 'X';

    if ( number < 4 ) return this.one_roman_number.repeat( number );
    else if ( number === 4 ) return "IV";
    else if ( number === 5 ) return "V";
    else if ( number > 5 && number < 9 ) return five_roman_number + this.one_roman_number.repeat( number - 5 );
    else if ( number === 9 ) return this.one_roman_number + ten_roman_number;
    else if ( number > 9 && number < 14 ) return ten_roman_number + this.one_roman_number.repeat( number - 10 );
  }
}
