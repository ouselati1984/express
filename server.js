const express=require('express')
const app=express()
const port=4000
//



const midd=(req,res,next)=>{
   let today = new Date();
    let time = today.getHours()
    let day = today.getDay()
    
  if(time>8 && time<17 && day>0 && day<6) 
  {
  res.sendFile(__dirname+'/public/index.html')
 
  }
    else 
    
   
    res.sendFile(__dirname+'/public/error.html')
    
    }
    app.use(midd)
    app.use(express.static('public'))
    
    //routes
app.use('/home',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
    })


   

    




app.listen(port, err=>{
    err? console.log(err): console.log(`the server is runnig on ${port}`)
})