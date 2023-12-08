import userModel from "../models/userModel.js";

/////////////////////////////////////////////////////////////////////////////////////////

export const addUserController = async (req, res) => {
  try {
    const { name, email, phone, address, salary, designation } = req.body;

    // validations

    if (!name || !email || !phone || !address || !salary || !designation) {
      return res.status(401).json({ error: "Plz fill all the details" });
    }

    const existingUser = await userModel.findOne({ email });

    // checking existing user

    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already have user",
      });
    }

    const user = await new userModel({
      name,
      email,
      phone,
      address,
      salary,
      designation,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Added Successfully",
      user,
    });


  } catch (error) {
    console.log(`Error in user Addition ${error}`);
    res.status(500).send({
      success: false,
      message: "Error in user Addition",
      error,
    });
  }
};

/////////////////////////////////////////////////////////////////////////////////////////

export const getAllUsersController = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).send({
      success: true,
      message: "All users fetched successfully",
      count: users.length,
      users,
    });
  } catch (error) {
    console.log(`Error in getting all users ${error}`);
    res.status(500).send({
      success: false,
      message: "Error in getting all users",
      error,
    });
  }
};
