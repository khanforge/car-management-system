import express from 'express';
import { authenticate } from '../middlewares/authMiddleware.js';
import User from '../models/user.js';
import Car from '../models/cars.js';

const router = express.Router();

router.get('/get-cars', authenticate, async (req, res) => {
    const cars = Car.find({user: req.user.id});
    res.json(cars);
})

router.post('/add-car', authenticate, async(req,res)=>{
    try{
        const {title, description, images, tags} = req.body;
        if(images.length > 10) return res.status(400).send("max 10 images allowed");
        const user = await User.findById(userId);
        if(!user || user != req.user) return res.status(404).send('user not found');
        const userId = user.id;
        const newCar = new Car({
            user: userId,
            title,
            description,
            images,
            tags
        }) 
        const savedCar = await newCar.save();

        user.cars.push(newCar._id);
        user.save();
        return res.status(201).send("car added successfully");
    }catch(e){
        console.log(e);
        res.status(500).send("internal server error");
    }
})

router.put("/update/:id", authenticate, async (req, res) => {
  const { title, description, tags } = req.body;
  const car = await Car.findByIdAndUpdate(req.params.id, { title, description, tags }, { new: true });
  res.json(car);
});


// Delete a car & remove its reference from User
router.delete("/delete/:id", authenticate, async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    // Ensure only the car owner can delete it
    if (car.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // Remove car reference from user's cars array
    await User.findByIdAndUpdate(car.user, { $pull: { cars: car._id } });

    // Delete the car from database
    await Car.findByIdAndDelete(req.params.id);

    res.json({ message: "Car deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
})



export default router;