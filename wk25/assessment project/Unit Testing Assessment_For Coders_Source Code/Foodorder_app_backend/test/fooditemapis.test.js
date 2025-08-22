const chai = require("chai");
const request = require("supertest");

const expect = chai.expect;
const { app } = require("../server");
const FoodItemModel = require("../app/models/fooditemModel");
const CategoryModel = require("../app/models/categoryModel");
const CuisineModel = require("../app/models/cuisineModel");

const originalConsoleLog = console.log;
const originalConsoleError = console.error;

describe("FoodItem APIs Tests", function () {
  var sessionToken;
  var category;
  var cuisine;

  before(async () => {
    console.log = function () {};
    console.error = function () {};

    await FoodItemModel.deleteMany();

    let credentials = {
      username: "testuser",
      password: "testpassword",
    };

    // get sessionToken
    const res = await request(app).post("/api/v1/users/login").send(credentials);

    sessionToken = res.body.data.sessionToken;
    console.log("Token Generated", sessionToken);

    // get categoryId
    category = await CategoryModel.findOne({ isActive: true });

    // get cuisineId
    cuisine = await CuisineModel.findOne({ isActive: true })
  });

  after(async () => {
    console.log = originalConsoleLog;
    console.error = originalConsoleError;
  });


  describe("POST /api/v1/fooditems/", async () => {
    it("should add a new fooditem", async () => {

      const testFoodItem = { 
        name: "Test FoodItem",
        description: "Test FoodItem Description",
        image: "https://www.image.com/image",
        categoryId: category._id,
        cuisineId: cuisine._id,
        isVeg: true 
      };

      const res = await request(app)
        .post("/api/v1/fooditems/")
        .set("Authorization", `Bearer ${sessionToken}`)
        .send(testFoodItem);

      expect(res.status).to.equal(201);
      expect(res.body.message).to.equal("Fooditem created successfully");
    });

    it("should return 401 incase token is not provided in request", async () => {

      const testFoodItem = { 
        name: "Test FoodItem",
        description: "Test FoodItem Description",
        image: "https://www.image.com/image",
        categoryId: category._id,
        cuisineId: cuisine._id,
        isVeg: true 
      };
      
      const res = await request(app)
        .post("/api/v1/fooditems/")
        .send(testFoodItem);

      expect(res.status).to.equal(401);
    });
  });

  
  describe("GET /api/v1/fooditems", function () {
    it("should return 200 OK with fooditems", async function () {
      const response = await request(app)
        .get("/api/v1/fooditems")
        .expect(200)
        .expect("Content-Type", /json/);

      const fooditems = response.body.data;
      expect(fooditems).to.be.an("array");
      expect(fooditems).length.greaterThanOrEqual(0);

      fooditems.forEach((fooditem) => {
        expect(fooditem.name).to.be.an("string");
        expect(fooditem.description).to.be.an("string");
        expect(fooditem.image).to.be.an("string");
      });
      
    });
  });
});