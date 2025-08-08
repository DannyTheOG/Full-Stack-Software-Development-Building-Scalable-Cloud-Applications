const fooditemRepository = require("../database/repositories/fooditemRepository");
const expressAsyncHandler = require("express-async-handler");

const createFooditem = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.a HERE */

  try{
    // get foodItem object from request
    const { name, description, image, categoryID, cuisineID, isVeg } = req.body;

    // check if foodItem already exist

    // if exist

    // create foodItem
    const newFoodItem = await fooditemRepository.createFooditem(
      name,
      description,
      image,
      categoryID,
      cuisineID,
      isVeg
    );

    if( newFoodItem ) {
      res.status( 201 ).json({
        message: 'FoodItem created successfully'
      });
    } else {
      res.status( 400 ).json({
        message: 'Unable to create the foodItem'
      });
    }

  } catch( error ) {
    // console.error( error );
    res.status( 500 ).json({
      message: 'Error while creating the foodItem',
      error: error.message
    });
  }

});

const editFooditem = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.b HERE */

  try {
    const foodItem = await fooditemRepository.getFooditem( req.params.id );

    if ( foodItem ) {
      foodItem.name = req.body.name || foodItem.name;
      foodItem.description = req.body.description || foodItem.description;
      foodItem.image = req.body.image || foodItem.image;
      foodItem.categoryId = req.body.categoryId || foodItem.categoryId;
      foodItem.cuisineId = req.body.cuisineId || foodItem.cuisineId;
      foodItem.isVeg = req.body.isVeg || foodItem.isVeg;

      const updatedFoodItem = await fooditemRepository.editFooditem(
        foodItem._id,
        foodItem
      );
      if ( !updatedFoodItem ) throw new Error("Unable to update the foodItem");

      res.status( 200 ).json({
        message: "FoodItem successfully updated.",
      });
    } else {
      res.status( 400 ).json({
        message: "Unable to update the user foodItem"
      });
    }
  } catch ( error ) {
    // console.error(error);
    res.status( 500 ).json({
      message: "Error updating the foodItem",
      error: error.message,
    });
  }
});

const deleteFooditem = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.c HERE */

  try {
    const foodItemID = req.params.id;

    const updatedFooditem = await fooditemRepository.deleteFooditem( foodItemID );

    if( updatedFooditem )  {
      res.status( 200 ).json({
        message: "Fooditem deleted successfully"
      });

    } else {
      res.status( 400 ).json({
        message: "Unable to delete fooditem"
      })
    }


  } catch ( error ){
    // console.error( error );
    res.status( 500 ).json({
      message: "Error deleting the fooditem",
      error: error.message,
    });
  }
});

const getFooditem = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.d HERE */

  try {
    const foodItemID = req.params.id;

    const foodItem = await fooditemRepository.getFooditem( foodItemID );

    if( foodItem ) {
      res.status( 200 ).json({
        _id: foodItem._id,
        name: foodItem.name,
        description: foodItem.description,
        image: foodItem.image,
        categoryId: foodItem.categoryId,
        cuisineId: foodItem.cuisineId,
        isVeg: foodItem.isVeg
      });
    } else {
      res.status( 400 ).json({
        message: "FoodItem not found"
      })
    }

  }  catch( error ) {
    // console.error( error );
    res.status( 500 ).json({
      message: "Error fetching the fooditem",
      error: error.message,
    });
  }
});

const getAllFooditems = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.e HERE */

  try {
    // get all fooditems
    const fooditems = await fooditemRepository.getAllFooditems();

    if( fooditems )  {
      res.status( 200 ).json({
        message: 'Success',
        fooditems: fooditems
      });

    } else {
      res.status( 400 ).json({
        message: 'No fooditems found',
      });
    }

      
  } catch( error ) {
    // console.error( error );
    res.status( 500 ).json({
      message: "Error fetching the fooditems",
      error: error.message,
    });
  }
});

module.exports = {
  createFooditem,
  editFooditem,
  deleteFooditem,
  getFooditem,
  getAllFooditems,
};
