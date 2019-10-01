function square(x) {
  return x * x;
}
QUnit.test( "TestSquare", function( assert ) {
  var result = square(2);
  assert.equal( result, "4", "square(2) should be 4." );
});