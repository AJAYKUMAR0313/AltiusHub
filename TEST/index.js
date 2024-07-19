//creating a server
const express = require("express");
const app = express();
const port = 8000;
const users = require("./payload.json");
const path = require("path");
app.use(express.json());
//routes
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.post("/api/users/", (req, res) => {
  //  const newuser = Object.assign({ req.body);
  // tours.push(nuser);
  // res.json(tours)
  if (!req.body.email) {
    res.status(400);
    return res.json("error");
  }
  const user = {
    id: "Sample-2",
    name: "Sample 2",
    description: "This is sample data #2",
  };

  users.push(user);
  res.json(user);

  // console.log(req.body);
  // res.send(data);
  // return res.sendFile(path.join(__dirname, "/index.html"));
});

app.delete("/api/users/:id", (req, res) => {
  let id = req.params.id;
  console.log("hello");
  // console.log(users.find(id));
});
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`server started on port :${port}`);
});
