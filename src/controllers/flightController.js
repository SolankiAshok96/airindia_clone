const FlightService = require("../service/flightService")

const createFlight = async(req,res) =>{
       try{
             const flight = await FlightService.createFlight(req.body);
             res.status(200).json({
             success: true,
             message: "flight created successfully",
             data : flight
            })   

       }catch(e){
          console.log(e)
          res.status(500).json({
             success:false,
             message:"Something went wrong"
          })
       }
}

const getFlight = async(req,res) =>{
    try{
        const flight = await FlightService.getFlight(req.params.flightNumber);
        res.status(200).json({
         success: true,
         message: "successfully fetched flight",
         data : flight
        })   

   }catch(e){
      console.log(e)
      res.status(500).json({
         success:false,
         message:"Something went wrong"
      })
   }
}



const destroyFlight = async(req,res) =>{
    try{
        const flight = await FlightService.destroyFlight(req.query.flightNumber);
        res.status(200).json({
         success: true,
         message: "successfully deleted Airline",
         data : flight
        })   

   }catch(e){
      console.log(e)
      res.status(500).json({
         success:false,
         message:"Something went wrong"
      })
   }
}

const getAllFlight = async(req,res) =>{
    try{ 

       const flight = await FlightService.getAllFlight(req.query);
        res.status(200).json({
         success: true,
         message: "successfully fetched Airlines",
         data : flight
        })   

   }catch(e){
      console.log(e)
      res.status(500).json({
         success:false,
         message:"Something went wrong"
      })
   }
}



module.exports = {createFlight, getAllFlight , getFlight , destroyFlight}