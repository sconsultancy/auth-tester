import asyncHandler from "express-async-handler";

// @desc Auth user/set token
// route POST /api/users/auth
// @access public

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "authUsers" });
});

// @desc Register a new user
// route POST /api/users/
// @access public

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "registerUsers" });
});

// @desc Logout user
// route POST /api/users/logout
// @access public

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "logoutUsers" });
});
// @desc get user  profile
// route Get /api/users/profile
// @access private

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "userProfile" });
});

// @desc update user Profile
// route Put /api/users/profile
// @access private

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "updateUserProfile" });
});

export {
  authUser,
  logoutUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
};
