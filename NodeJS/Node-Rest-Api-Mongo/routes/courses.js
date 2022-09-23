const ex= require("express")
const Course = require("../models/course")
const router = ex.Router();

router.get("/allcourses", async (req,res) => {
    try{
        const courses = await Course.find();
        res.json(courses);
    } catch(err) {
        res.json(err);
    }
});

//add a course
 router.post("/",async(req,res) => {
    try{
        Course.create(req.body);
    } catch (err) {
        res.json(err)
    }
 })

//creating my routes

module.exports = router;