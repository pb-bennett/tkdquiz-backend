import { Request, Response } from 'express';
import ExampleModel from '../models/exampleModel';

// GET all examples
export const getExamples = async (req: Request, res: Response) => {
  const examples = await ExampleModel.find();
  res.json(examples);
};

// POST a new example
export const createExample = async (req: Request, res: Response) => {
  const newExample = new ExampleModel(req.body);
  await newExample.save();
  res.status(201).json(newExample);
};
