const sum = ( x, y ) => ( x + y );
const diff = ( x, y ) => sum( x, -y );
const mult = ( x, y ) => ( x * y );

module.exports = {
  diff,
  mult
}

