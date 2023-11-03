const ReviewService = require("../service/reviewService")

const createReview = async(req,res) =>{
       try{
             const review = await ReviewService.createReview(req.body);
             res.status(200).json({
             success: true,
             message: "Review created successfully",
             data : review
            })   

       }catch(e){
          console.log(e)
          res.status(500).json({
             success:false,
             message:"Something went wrong"
          })
       }
}

const getReview = async(req,res) =>{
    try{
        const review = await ReviewService.getReview(req.params.userId , req.body.flightId);
        res.status(200).json({
         success: true,
         message: "successfully fetched Review",
         data : review
        })   

   }catch(e){
      console.log(e)
      res.status(500).json({
         success:false,
         message:"Something went wrong"
      })
   }
}



const destroyReview = async(req,res) =>{
    try{
        const review = await ReviewService.destroyReview(req.body.id);
        res.status(200).json({
         success: true,
         message: "successfully deleted review",
         data : review  
              })   

   }catch(e){
      console.log(e)
      res.status(500).json({
         success:false,
         message:"Something went wrong"
      })
   }
}

const getAllReview = async(req,res) =>{
    try{
        const review = await ReviewService.getAllReview(req.params.flightId);
        res.status(200).json({
         success: true,
         message: "successfully fetched Reviews",
         data : review
        })   

   }catch(e){
      console.log(e)
      res.status(500).json({
         success:false,
         message:"Something went wrong"
      })
   }
}



module.exports = {createReview, getAllReview,getReview, destroyReview}