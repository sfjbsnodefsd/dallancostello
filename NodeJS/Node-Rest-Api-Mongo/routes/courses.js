const { json } = require("body-parser");
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
 router.post("/addcourse",async(req,res) => {
    try{
        Course.create(req.body);
        res.json(course);
    } catch (err) {
        res.json(err)
    }
 })

 //delete a course
 router.delete("/delete/:courseID",async(req,res) => {
    try{
        await Course.remove({_id:req.params.courseID});
        res.status(200).json({
            message: "deleted successfully"
        })
    } catch (err) {
        res.send(err)
    }
 })

 //update course
 //add a course
 router.put("/update/:courseID",async(req,res) => {
    const courseID = req.params.courseID;
    try{
        const course = await Course.updateOne(
            {"_id": courseID},
            req.body
        );
        res.json(course)
    } catch (err) {
        res.json(err)
    }
 })

//creating my routes

module.exports = router;