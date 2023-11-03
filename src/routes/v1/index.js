 const express = require('express');
 const router = express.Router();

const helpController = require("../../controllers/helpController")
const airlinesController = require("../../controllers/airlineController");
const flightController = require("../../controllers/flightController")
const reviewController = require("../../controllers/reviewController");
const bookingController = require("../../controllers/bookingController")

router.get("/help" , helpController.helpDetails);

router.post("/airline", airlinesController.createAirline)
router.get("/airline/:name", airlinesController.getAirline)
router.get("/airline/", airlinesController.getAllAirlines)
router.delete("/airline",airlinesController.destroyAirline)

router.post("/flight", flightController.createFlight)
router.get("/flight/:flightNumber", flightController.getFlight)
router.get("/flight/", flightController.getAllFlight)
router.delete("/flight",flightController.destroyFlight)
  
router.post("/review", reviewController.createReview)
router.get("/review/:flightId/:userId", reviewController.getReview)
router.get("/review/:flightId", reviewController.getAllReview)
router.delete("/review",reviewController.destroyReview)

router.post("/booking", bookingController.createBooking)
router.get("/booking/:id/boardingPass", bookingController.boardingPass)
router.delete("/booking/:id", bookingController.cancelBooking)



module.exports = router;