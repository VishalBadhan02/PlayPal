const UserModel = require("../model/user")
const reply = require("../helper/reply")
const { CoursesModel } = require("../model/courses")
const { GoalsModel } = require("../model/goals")
const { CollegeModel } = require("../model/college")

const getProfile = async (req, res) => {
    try {
        const user = await UserModel.findOne({ _id: req.user.decoded._id }).select(['email', 'userName', 'createdAt','address','phoneNumber'])
        if (!user) {
            console.log(user)
            return res.status(402).json(reply.failure("User not exist "));
        }
        return res.status(200).json(reply.success("get profile", user))

    } catch (err) {
        return res.status(402).json(reply.failure(err.message))
    }
}

const getGoals = async (req, res) => {
    try {
        const goals = await GoalsModel.find()
        for (i = 0; i < goals.length; i++) {
            const courses_data = await CoursesModel.find({ goal_id: goals[i]._id })
            goals[i].course = courses_data
            console.log(goals)
        }
        return res.json(goals)
    } catch (err) {
        res.send(err.message)
    }
}

const getCourse = async (req, res) => {
    try {
        const courses = await CoursesModel.findById({ _id: req.params.courseId })
        const colleges = await CollegeModel.find({ course_id: courses.id })
        return res.json({ colleges, courses })

    } catch (err) {
        res.status(402).json({ error: err.message });
    }
}

module.exports = { getProfile, getGoals, getCourse }