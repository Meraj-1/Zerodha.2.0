const express = require("express");
const app = express();
const User = require("./schema")
const mongoose = require("mongoose");
const addminMiddleware = require("./user")
const uri = 'mongodb://username:password@localhost:27017/mydatabase';


// const uri = " mongodb://AuthenticationAuthorization:AuthenticationAuthorization@authenticationauthoriza.pnksp.mongodb.net/?retryWrites=true&w=majority&appName=AuthenticationAuthorization"
PORT = 3003 


const connectDB = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
    console.log("connected");
};

connectDB();


//signup
app.post("/signup", async (req, res)=> {
    try{
        const { Username, password, role} = req.body;
        const user =  new UserActivation({ username, password, role});
        await user.save();
        res.status(201).json({message: "New user registerd Successfully"});
    } catch(error) {
           res.status(500).json({message: "intenal server eror"});
    }
});


//login route 

app.post('/login', async  (req,res) => {
    const {username,password,role}= req.body;
    try{
        const user = await User.findOne({username})

        if (!user) {
            return res.status(401).json({message: "Invalid User name or password"})
        } 
        if (user.password !== password) {
            return res.status(401).json({message: "Invalid Password"});
        }
        if (user.role !== role) {
            return res.status(401).json({message: 'Invalid role'});
        }
        //Genrate JWt Token
        const token = jwt.sign(
            {id : user._id, username: user.username, role: user.role},
                process.env.jwt_SECRET);
                res.json({ token });
        }catch(error) {
            res.status(500).json({message: "Internal Server Error"});
        };
        });


   app.get('/admin', addminMiddleware,(req, res) => {
    const {username} = req.user;
    res.send(`This is an Admin Route. Welcome ${username}`);
   });


app.listen(PORT, ()=>{
    console.log("Authentication on the way")
});