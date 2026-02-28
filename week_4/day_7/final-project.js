import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/nexusMarketDB")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ Connection Error:", err));

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  image: String,
  createdAt: { type: Date, default: Date.now }
});

productSchema.index({ category: 1, price: -1 });

const Product = mongoose.model("Product", productSchema);

const seedProducts = async () => {
  const count = await Product.countDocuments();
  if (count === 0) {
    const categories = ["Electronics", "Home", "Stationery"];
    for (let i = 1; i <= 50; i++) {
      await Product.create({
        title: `Product ${i}`,
        category: categories[i % categories.length],
        price: Math.floor(Math.random() * 1000) + 50,
        stock: Math.floor(Math.random() * 100),
        image: `product${i}.png`
      });
    }
    console.log("✅ Seeded 50 products");
  }
};
seedProducts();

app.get("/api/products", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;

    const products = await Product.find()
      .select("title price image category stock") 
      .skip((page - 1) * limit)
      .limit(limit)
      .lean(); 

    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));