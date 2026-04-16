const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
// my code  here  yes

app.use(cookieParser());    

app.get('/', (req, res) => {
  res.cookie('name', 'John Doe');
  res.send('Cookie has been set!');
});

app.get('/read', (req, res) => {
    console.log(req.cookies); // Assuming you have cookie-parser middleware set up     

  res.send("read cookie");
});

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
                      


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});