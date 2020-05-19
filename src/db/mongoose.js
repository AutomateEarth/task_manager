const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-management-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User',  {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    }
})

const me = new User({
    name: 'Mike'
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error: ', error)
})

// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })

// const task = new Task({
//     description: 'Clean Pantry',
//     completed: false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })