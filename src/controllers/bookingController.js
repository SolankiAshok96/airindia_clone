const BookingService = require("../service/booking")

const createBooking = async(req,res) =>{
       try{
             const booking = await BookingService.createBooking(req.body);
             res.status(200).json({
             success: true,
             message: "booking created successfully",
             data : booking
            })   

       }catch(e){
          console.log(e)
          res.status(500).json({
             success:false,
             message:"Something went wrong"
          })
       }
}

const boardingPass = async(req,res) =>{
    try{
        const booking = await BookingService.boardingPass(req.params.id);
        res.status(200).json({
         success: true,
         message: "successfully fetched boarding pass successfully",
         data : booking
        })   

   }catch(e){
      console.log(e)
      res.status(500).json({
         success:false,
         message:"Something went wrong"
      })
   }
}



const cancelBooking = async(req,res) =>{
    try{
        const booking = await BookingService.cancelBooking(req.params.id);
        res.status(200).json({
         success: true,
         message: "successfully cancel booking",
         data : booking
        })   

   }catch(e){
      console.log(e)
      res.status(500).json({
         success:false,
         message:"Something went wrong"
      })
   }
}





module.exports = {createBooking,cancelBooking,boardingPass}