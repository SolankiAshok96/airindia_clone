const AirlineService = require("../service/airlineService")

const createAirline = async(req,res) =>{
       try{
             const airline = await AirlineService.createAirline(req.body);
             res.status(200).json({
             success: true,
             message: "Airline created successfully",
             data : airline
            })   

       }catch(e){
          console.log(e)
          res.status(500).json({
             success:false,
             message:"Something went wrong"
          })
       }
}

const getAirline = async(req,res) =>{
    try{
        const airline = await AirlineService.getAirline(req.params.name);
        res.status(200).json({
         success: true,
         message: "successfully fetched Airline",
         data : airline
        })   

   }catch(e){
      console.log(e)
      res.status(500).json({
         success:false,
         message:"Something went wrong"
      })
   }
}



const destroyAirline = async(req,res) =>{
    try{
        const airline = await AirlineService.destroyAirline(req.query.name);
        res.status(200).json({
         success: true,
         message: "successfully deleted Airline",
         data : airline
        })   

   }catch(e){
      console.log(e)
      res.status(500).json({
         success:false,
         message:"Something went wrong"
      })
   }
}

const getAllAirlines = async(req,res) =>{
    try{
        const airlines = await AirlineService.getAllAirline();
        res.status(200).json({
         success: true,
         message: "successfully fetched Airlines",
         data : airlines
        })   

   }catch(e){
      console.log(e)
      res.status(500).json({
         success:false,
         message:"Something went wrong"
      })
   }
}



module.exports = {createAirline , getAirline , getAllAirlines ,destroyAirline}