const asyncHandler = require('express-async-handler');

//@desc Get all contacts
//@routes GET /api/contacts
//@access public
const getContacts = async (req, res) => {
  res.status(200).json({ message: "Get all of the contacts" });
};

//@desc Create new contacts
//@routes POST /api/contacts
//@access public
const createContact = asyncHandler( async (req, res) => {
  console.log("Requested body is: ", req.body);
  const {name, email, phone} = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are needed!");
  }
  res.status(201).json({ message: "Create contact" });
});

//@desc Get contact
//@routes GET /api/contacts/:id
//@access public
const getContact = asyncHandler( async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

//@desc Update contact
//@routes PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler( async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//@desc Delete contact
//@routes DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler( async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
