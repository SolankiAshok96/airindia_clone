  const helpDetails = (req,res) =>{
        return res.status(200).send({
            message: "Successfully hitting the help api",
            success:true,
            data:{
                 contact : "+91xxxxxxxx"
            }
        })
  }

module.exports = {
    helpDetails
}  