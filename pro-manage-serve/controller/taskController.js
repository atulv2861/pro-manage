const Task = require("../model/taskSchema");
const Assessment = require("../model/assessmentSchema");
const mongoose = require('mongoose')
const moment = require('moment-timezone');
const createTask = async (req, res) => {
  try {  
    console.log("=================Api called========",req.url);
    console.log(req.body)
    const data = req.body
    const newTask = new Task({...data,createdBy:req.user._id});
    await newTask.save()
    res.status(201).json({
      success: true,
      task: newTask,     
      messages: "New task created!"
    })
  } catch (error) {    
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}
const updateTask = async (req, res) => {
  try {  
    console.log("=================Api called========",req.url);
    console.log(req.body)
    const {_id,...data} = req.body
    console.log(_id,data)
    const newTask = await Task.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(_id.toString())}, // Filter
      { $set: { ...data } }, // Update
      { new: true } // Options
    );
    res.status(201).json({
      success: true,
      task: newTask,     
      messages: "Task updated!"
    })
  } catch (error) { 
    console.log(error)   
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const deleteTask = async (req, res) => {
  try {  
    console.log("=================Api called========",req.url);
    console.log(req.body)
    const {taskId} = req.params
    console.log(taskId)
    const newTask = await Task.findByIdAndDelete(
      { _id: new mongoose.Types.ObjectId(taskId.toString()) }
    );
    if(!newTask){
      res.status(404).json({
        success: false,  
        messages: "Task Id not exist!"
      })
      return
    }
    res.status(201).json({
      success: true, 
      newTask:newTask,   
      messages: "Task Deleted!"
    })
  } catch (error) { 
    console.log(error)   
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const getAllTask = async(req,res)=>{
  try {
    console.log("=================Api called========",req.url);
    console.log(req.body,req._id)
    const userId = req.user._id;
    const pipeline =  [
      {
          $match: {
              $or:[
                {createdBy:userId?.toString()},
                {assignedTo:req.user.email}
              ]
            }
      },
      {
          $group: {
              _id: "$currentStatus",
              tasks: { $push: "$$ROOT" } // This will keep all documents in the group
          }
      },
      {
          $project: {
              _id: 0,
              currentStatus: "$_id",
              tasks: 1
          }
      },
      {
          $group: {
              _id: null,
              data: { $push: { k: "$currentStatus", v: "$tasks" } }
          }
      },
      {
          $replaceRoot: {
              newRoot: { $arrayToObject: "$data" }
          }
      }
  ];
   if(req.query && req.query.date){
     const date = req.query.date
     switch(date){
      case 'today':
        pipeline[0].$match.createdAt = {$gte: moment.tz(new Date(), "Asia/Kolkata").startOf('day').toDate()}
        break;
      case 'week':
        pipeline[0].$match.createdAt = {$gte:moment.tz(from_date, "Asia/Kolkata").subtract(7, 'days').startOf('day').toDate()}
        break;
      case 'month':
        pipeline[0].$match.createdAt = {$gte:moment.tz(from_date, "Asia/Kolkata").subtract(30, 'days').startOf('day').toDate()}
        break;
      default:{

       }  
      }
   }
    const tasks = await Task.aggregate(pipeline)
    res.status(201).json({
      success: true,
      tasks:tasks,
      })
  } catch (error) { 
    console.log(error)   
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}
//
const getTaskById = async(req,res)=>{
  try {
    console.log("=================Api called========",req.url);
    console.log(req.body)
    const task = await Task.findById(req.params.taskId);
    res.status(201).json({
      success: true,
      task:task,
      })
  } catch (error) { 
    console.log(error)   
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

// anlysis
const getTaskAnalysis = async(req,res)=>{
  try {
    console.log("=================Api called========",req.url);
    console.log(req.body,req._id)
    const userId = req.user._id;
    const pipeline =  [
      {
        $match: {
          $or:[
            {createdBy:userId?.toString()},
            {assignedTo:req.user.email}
          ]
        }
      },
        {
            $facet: {
                byCurrentStatus: [
                    {
                        $group: {
                            _id: "$currentStatus",
                            count: { $sum: 1 } // Count documents in each currentStatus group
                        }
                    },
                    {
                        $project: {
                            _id: 0,
                            currentStatus: "$_id",
                            count: 1
                        }
                    }
                ],
                byPriority: [
                    {
                        $group: {
                            _id: "$priority",
                            count: { $sum: 1 } // Count documents in each priority group
                        }
                    },
                    {
                        $project: {
                            _id: 0,
                            priority: "$_id",
                            count: 1
                        }
                    }
                ]
            }
        }
    ]
    const tasks = await Task.aggregate(pipeline)
    res.status(201).json({
      success: true,
      tasks:tasks,
      })
  } catch (error) { 
    console.log(error)   
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  getAllTask,
  getTaskById,
  getTaskAnalysis
};