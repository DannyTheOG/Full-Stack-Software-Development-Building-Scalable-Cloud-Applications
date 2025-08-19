/* WRITE YOUR CODE HERE */
const chai = require( "chai" );
const expect = chai.expect;
const request = require( "supertest" );


const { app, stop } = require( "../server" );
const productModel = require( "../app/models/productModel" );
const categoryModel = require( "../app/models/categoryModel" );


const originalConsoleLog = console.log;
const originalConsoleError = console.error;
let sessionToken;
let category;


describe( "Product APIs Test", () => {
  before( async () => {
    // delete all existing categories
    await productModel.deleteMany();

    // generate a sessionToken
    const credentials = {
        username: "testuser",
        password: "testu",
      }

    // get sessionToken
    const response = await request( app ).post("/api/v1/users/login").send( credentials );
    sessionToken = response.body.userData.sessionToken;
    console.log( "Token: ", sessionToken );

    // get categoryId
    category = await categoryModel.findOne({ isActive: true });

    console.log = function () {};
    console.error = function () {};
    console.log( "Inside Product Test Suite" );
  });


  after( async () => {
    console.log = originalConsoleLog;
    console.error = originalConsoleError;
    
    // stop the application to end the tests
    stop()
  });


  describe( "POST /api/v1/products", async () => {

    // test 1 - adding a new product
    it( "should add a new product", async () => {
      
      const testProduct = {
        name: "TestProduct",
        description: "Test Product Description",
        price: 120,
        quantityInStock: 49,
        image: "https://www.image.com/image",
        categoryId: category._id
      }

      const result = await request( app ).post("/api/v1/products").set( "Authorization", `Bearer ${sessionToken}`).send( testProduct );

      expect( result.status ).to.equal( 201 );
      expect( result.body.message ).to.equal("Product created successfully");
    });

    // test 2 - adding product without Authorization( sessionToken )
    it( "should return unauthorized", async () => {

      const testProduct = {
        name: "TestProduct",
        description: "Test Product Description",
        price: 120,
        quantityInStock: 49,
        image: "https://www.image.com/image",
        categoryId: category._id
      }

      const result = await request( app ).post("/api/v1/products").send( testProduct );

      expect( result.status ).to.equal( 401 );
    });
  });


  describe( "GET /api/v1/products", async () => {
    
    // test 3 - get all products
    it( "should retrieve all products", async () => {
      const result = await request( app ).get("/api/v1/products").set( "Authorization", `Bearer ${sessionToken}`)
      .expect( 200 )
      .expect( "Content-Type", /json/ );

      const products = result.body.products;

      expect( products ).to.be.an( "array" );
      expect( products ).length.greaterThanOrEqual(0);
    });

   
    // test 4 - valid products
    it( "should contain valid products", async () => {
      const response = await request( app ).get("/api/v1/products").set("Authorization", `Bearer ${sessionToken}`)
      .expect( 200 )
      .expect( "Content-Type", /json/);

      const products = await response.body.products;
      expect( products ).to.be.an("array");
      expect( products ).length.greaterThanOrEqual(0);

      products.forEach( product => {
        expect( product.name ).to.be.an("string");
        expect( product.description ).to.be.an("string");
      });
    });
  });
})