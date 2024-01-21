const { Router } = require("express");
const router = Router();
const { User, Course } = require("../db");
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    //Check if user exists
    await User.create({
        username: username, 
        password: password
    })
    
    res.json({
        message: 'User created successfully'
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })

    if(user.length>0){
        console.log(user);
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);
    
        res.json({
            token
        })
    }
    else{
        res.status(411).json({
            message: "incorrect email or password"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;
    User.updateOne({
        username: username
    },{
        "$push": {
            purchasedCourses: courseId
        }
    }).catch(function(e) {
        console.log(e);
    });

    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try{
        const user = await User.findOne({
            username: req.username
        });
        console.log(typeof req.username, user.username); 
    
        const courses = await Course.find({
            _id: {
                "$in": user.purchasedCourses
            }
        });
    
        res.json({
            courses: courses
        })
    }
    catch(e){
        res.status(401).json({
            message: "Error occured"
        })
    }
});

module.exports = router