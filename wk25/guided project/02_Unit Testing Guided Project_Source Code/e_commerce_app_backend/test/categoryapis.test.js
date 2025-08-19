/* WRITE YOUR CODE HERE */
const chai = require( "chai" );
const expect = chai.expect;
const request = require( "supertest" );


const { app } = require( "../server" );
const categoryModel = require( "../app/models/categoryModel" );


const originalConsoleLog = console.log;
const originalConsoleError = console.error;
let sessionToken;


describe( "Category APIs Test", () => {
  before( async () => {
    // delete all existing categories
    await categoryModel.deleteMany();

    // generate a sessionToken
    const credentials = {
        username: "testuser",
        password: "testu",
      }

    // get sessionToken
    const response = await request( app ).post("/api/v1/users/login").send( credentials );
    sessionToken = response.body.userData.sessionToken;
    console.log( "Token: ", sessionToken );

    console.log = function () {};
    console.error = function () {};
    console.log( "Inside Category Test Suite" );
  });


  after( async () => {
    console.log = originalConsoleLog;
    console.error = originalConsoleError;
  });

  const testCategory = {
    name: "testCategory",
    description: "Test Category Description"
  }


  describe( "POST /api/v1/categories", async () => {

    // test 1 - adding a new category
    it( "should add a new category", async () => {
      const result = await request( app ).post("/api/v1/categories").set( "Authorization", `Bearer ${sessionToken}`).send( testCategory );

      expect( result.status ).to.equal( 201 );
      expect( result.body.message ).to.equal("Category created successfully");
    });

    // test 2 - adding category without Authorization( sessionToken )
    it( "should return unauthorized", async () => {
      const result = await request( app ).post("/api/v1/categories").send( testCategory );

      expect( result.status ).to.equal( 401 );
    });
  });


  describe( "GET /api/v1/categories", async () => {
    
    // test 3 - get all categories
    it( "should retrieve all categories", async () => {
      const result = await request( app ).get("/api/v1/categories").set( "Authorization", `Bearer ${sessionToken}`)
      .expect( 200 )
      .expect( "Content-Type", /json/ );

      const categories = result.body.categories;

      expect( categories ).to.be.an( "array" );
      expect( categories ).length.greaterThanOrEqual(0);
    });

    // test 4 - get all categories without Authorization( sessionToken )
    it( "should return unauthorized", async () => {
      const result = await request( app ).get("/api/v1/categories")
      .expect( 401 );
    });

    // test 5 - valid categories
    it( "should contain valid categories", async () => {
      const response = await request( app ).get("/api/v1/categories").set("Authorization", `Bearer ${sessionToken}`)
      .expect( 200 )
      .expect( "Content-Type", /json/);

      const categories = await response.body.categories;
      expect( categories ).to.be.an("array");
      expect( categories ).length.greaterThanOrEqual(0);

      categories.forEach( category => {
        expect( category.name ).to.be.an("string");
        expect( category.description ).to.be.an("string");
      });
    });
  });
})