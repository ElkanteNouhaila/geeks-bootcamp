import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/taskMasterDB')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ Connection Error:', err));

const taskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, "You must provide a task title"] 
  },
  description: String,
  status: { 
    type: String, 
    enum: ['pending', 'completed'], 
    default: 'pending' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Task = mongoose.model('Task', taskSchema);


const createTask = async (taskData) => {
  try {
    const task = await Task.create(taskData);
    console.log("✅ Task Created:", task);
  } catch (err) {
    console.error("❌ Error Creating Task:", err.message);
  }
};

const getAllTasks = async () => {
  const tasks = await Task.find();
  console.log("📋 Current Tasks:", tasks);
};

const completeTask = async (taskId) => {
  try {
    const updated = await Task.findByIdAndUpdate(
      taskId,
      { status: 'completed' },
      { new: true }
    );
    console.log("🚀 Task marked as completed:", updated);
  } catch (err) {
    console.error("❌ Error Updating Task:", err.message);
  }
};

const runChallenge = async () => {
  await createTask({ description: "This task has no title" });

  await createTask({ title: "Invalid Status Task", status: "in-progress" });

  await createTask({ title: "Learn Mongoose Validation", description: "Complete the daily challenge" });

  await getAllTasks();

  const tasks = await Task.find();
  if (tasks.length > 0) {
    await completeTask(tasks[0]._id);
    await getAllTasks();
  }
};

runChallenge();