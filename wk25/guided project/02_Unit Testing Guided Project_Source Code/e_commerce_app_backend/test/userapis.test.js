/* WRITE YOUR CODE HERE */
const chai = require( "chai" );
const expect = chai.expect;
const request = require( "supertest" );


const { app, start } = require( "../server" );
const userModel = require( "../app/models/userModel" );
const userSessionModel = require( "../app/models/userSessionModel" );


const originalConsoleLog = console.log;
const originalConsoleError = console.error;
let sessionToken;


describe( "User APIs Test", () => {
  before( async () => {
    // start application to begin the tests
    start();

    // delete all existing users
    await userModel.deleteMany();

    // delete all existing user sessions
    await userSessionModel.deleteMany();

    console.log = function () {};
    console.error = function () {};
    console.log( "Inside User Test Suite" );
  });


  after( async () => {
    console.log = originalConsoleLog;
    console.error = originalConsoleError;
  });


  // test user object
  const testUser = {
    username: "testuser",
    fullname: "test user",
    email: "test@email.com",
    password: "testu",
    isAdmin: true
  };


  describe( "POST /api/v1/users", async () => {
    
    // test 1 - adding a new user
    it( "should add a new user", async () => {
      const result = await request( app ).post("/api/v1/users").send( testUser );
      
      expect( result.status ).to.equal( 201 );
      expect( result.body.message ).to.equal("User is successfully registered");
    });

    // test 2 - check if user already exists
    it.skip( "@TECHDEBT: user already exists", async () => {

    })
  });

  
  describe( "POST /api/v1/users/login", async () => {
    // test 3 - user login
    it( "should perform a user login action", async () => {
      const credentials = {
        username: "testuser",
        password: "testu",
      }
      
      const result = await request( app ).post("/api/v1/users/login").send( credentials );
      
      expect( result.status ).to.equal( 200 );
      expect( result.body.message ).to.equal("User logged in successfully");
      
      // get userData from the result and compare
      const userData = result.body.userData;
      sessionToken = userData.sessionToken;
      
      expect( userData.username ).to.equal("testuser");
      expect( sessionToken ).to.be.an("string");
    });
  });

  
  describe( "GET /api/v1/users", async () => {

    // test 4 - get all users
    it( "should retrieve all users", async () => {
      const response = await request(app).get("/api/v1/users").set( "Authorization", `Bearer ${sessionToken}` )
      .expect( 200 )
      .expect( "Content-Type", /json/);

      const users = await response.body.users;
      expect( users ).to.be.an("array");
      expect( users ).length.greaterThanOrEqual(0);
    });

    // test 5 - valid users
    it( "should contain valid users", async () => {
      const response = await request(app).get("/api/v1/users").set("Authorization", `Bearer ${sessionToken}`)
      .expect( 200 )
      .expect( "Content-Type", /json/);

      const users = await response.body.users;
      expect( users ).to.be.an("array");
      expect( users ).length.greaterThanOrEqual(0);

      users.forEach( user => {
        expect( user.fullname ).to.be.an("string");
        expect( user.username ).to.be.an("string");
        expect( user.isAdmin ).to.be.an("boolean");
      });
    });
  });
  
})

