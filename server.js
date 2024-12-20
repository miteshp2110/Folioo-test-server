const express = require('express')

const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())



const data = {
    users:[
        {
            id:"mitesh",
            info:{
                name:"Mitesh Paliwal",
                description:"I am a Backend Developer"
            }
        },
        {
            id:"nikilesh",
            info:{
                name:"Nikilesh Reddy",
                description:"I am a Full Stack Developer"
            }
        }
    ]
}

function getData(uid){
    for(var i =0 ;i<data.users.length;i++){
        if(data.users[i].id === uid){
            return data.users[i].info
        }
    }

    return {
        message:"No such user"
    }
}

app.get("/user/:id",((req,res)=>{
    console.log("request arrived")
    const uid = req.params.id

    const uData = getData(uid)

    res.status(200).send(uData)


}))


app.listen(4000,()=>{
    console.log("Running on 4000")
})