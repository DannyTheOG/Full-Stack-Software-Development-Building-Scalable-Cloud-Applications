import { assert, expect, should } from 'chai';

import { add, addArray } from '../src/app.js';

// you can use context or describe, means the same thing
context( 'app.js', () => {
  describe( 'add()', () => {
    it( 'should add 1 + 2', () => {
      const result = add( 1, 2 );

      assert.equal( result, 3 );
      expect( result ).to.equal( 3 );
      should().equal( result, 3 );
    });

    // pending task
    it.skip( '@TECHDEBT: handle strings', () => {
      const result = add( 1, '2' );

      assert.strictEqual( result, 3 );
      expect( result ).to.equal( 3 );
      should().equal( result, 3 );
    })
  });
})

context( 'app.js', () => {
  describe( 'add() with hooks', () => {
    let result = 0;

    before( function() {
      // runs once before the first test in this block
      console.log( 'before', result );
    });
    after( function() {
      // runs once after the last test in this block
      console.log( 'after', result );
    });
    afterEach( function() {
      // runs after each test in this block
      console.log( 'after each', result );
      result = null;
    });


    it( 'should add 1 + 2', () => {
      const result = add( 1, 2 );

      assert.equal( result, 3 );
      expect( result ).to.equal( 3 );
      should().equal( result, 3 );
    });
  })
})


context( 'app.js', () => {
  describe( 'addArray() with dynamic tests', () => {
    const tests = [
      { args: [1,2], expected: 3},
      { args: [1,2,3], expected: 6},
      { args: [1,2,3,4], expected: 10},
    ];

    tests.forEach( ({ args, expected}) => {
      it( `correctly adds ${args.join(' + ')}`, () => {
        const result = addArray( args );

        expect( result ).to.equal( expected );
      })
    })
  })
})