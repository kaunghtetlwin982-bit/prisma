"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getAllProducts = void 0;
const client_1 = require("../client");
// Get All Products
const getAllProducts = async (req, res) => {
    const products = await client_1.prisma.product.findMany();
    res.json(products);
};
exports.getAllProducts = getAllProducts;
// Create Product
const createProduct = async (req, res) => {
    console.log("Received request body:", req.body); // Debugging line
    const { name, price, description } = req.body;
    const product = await client_1.prisma.product.create({
        data: { name, price: parseFloat(price), description }
    });
    res.json(product);
};
exports.createProduct = createProduct;
// Update Product
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const updated = await client_1.prisma.product.update({
        where: { id: Number(id) },
        data: { name, price: parseFloat(price) }
    });
    res.json(updated);
};
exports.updateProduct = updateProduct;
// Delete Product
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    await client_1.prisma.product.delete({ where: { id: Number(id) } });
    res.json({ message: "Deleted successfully" });
};
exports.deleteProduct = deleteProduct;
