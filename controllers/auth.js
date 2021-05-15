const temporaryData = [
  {
    name: "sohan",
    email: "sohan@gmail.com",
    password: "12345",
  },
  {
    name: "ss",
    email: "ss@gmail.com",
    password: "54321",
  },
  {
    name: "asdf",
    email: "asdf@gmail.com",
    password: "98765",
  },
];

exports.signUp = (req, res) => {
  const {name,email,password}=req.body;
  const isValid = temporaryData.findIndex((ele) => (ele.email === email));
  if (isValid != -1) {
    res.status(400).json({
      error: "user already exists",
    });
  }
};

exports.signIn = (req, res) => {};
