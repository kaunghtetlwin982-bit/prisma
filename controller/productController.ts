import { Request, Response } from 'express';
import { prisma } from '../client'

// Get All Products
export const getAllProducts = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany();
  res.json(products);
};

// Create Product
export const createProduct = async (req: Request, res: Response) => {
    console.log("Received request body:", req.body); // Debugging line
  const { name, price, description } = req.body;
  const product = await prisma.product.create({
    data: { name, price: parseFloat(price), description }
  });
  res.json(product);
};

// Update Product
export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const updated = await prisma.product.update({
    where: { id: Number(id) },
    data: { name, price: parseFloat(price) }
  });
  res.json(updated);
};

// Delete Product
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.product.delete({ where: { id: Number(id) } });
  res.json({ message: "Deleted successfully" });
};