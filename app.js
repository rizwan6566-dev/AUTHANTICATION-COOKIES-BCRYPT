const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// my code  here  yes
//jwt
app.use(cookieParser()); 
app.get('/', (req, res) => {
    let token = jwt.sign({email: "mrizwan@gmail.com"}, "secret");
    res.cookie("jwt", token);
    res.send("done");
});
app.get('/read', (req, res) => {
    let data= jwt.verify(req.cookies.jwt, "secret");
    console.log(data);
  });

   //cookies
app.get('/', (req, res) => {
  res.cookie('name', 'Rizwan');
  res.send('Cookie has been set!');
});

app.get('/read', (req, res) => {
    console.log(req.cookies); // Assuming you have cookie-parser middleware set up    
  res.send("read cookie");
});
//bcrypt
app.get("/", function (req, res) {
    bcrypt.genSalt(10, function(err, salt) {
   bcrypt.hash('rizwan', salt, function(err, hash) {
        console.log(hash);  
bcrypt.compare('rizwan','$2b$10$CGbcDmE8wxtW92h/Y/FgBO5K3TGdfPweGlgJlhYnvVj.YTAsSeCL.' , function(err, result) {
    console.log(result); // result == true
});
        res.send("Hash generated and printed in console");
    });
});
});
                      

//port
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});