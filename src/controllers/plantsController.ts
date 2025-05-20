import { Request, Response, NextFunction } from "express";
import { plants, Plant } from "../models/plants";

// Add a plant
export const getPlants = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(plants);
  } catch (error) {
    next(error);
  }
};

export const createPlant = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('holi');
    const { name } = req.body;
    const newPlant: Plant = { id: Date.now(), name, humidity: 100, time: Date.now().toString() }
    plants.push(newPlant);
    res.status(201).json(newPlant);
  } catch (error) {
    next(error);
  }
}
