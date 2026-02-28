db.users.insertOne({
  name: "Yasmine",
  email: "yasmine@tech.ma",
  address: {
    city: "Casablanca",
    country: "Morocco",
    postalCode: "20000"
  }
});

db.users.find().pretty();



db.orders.insertOne({
  orderNumber: "ORD-99X",
  total: 1500,
  currency: "MAD",
  status: "Processing",
  userId: ObjectId("PASTE_ID_HERE")
});

db.orders.find().pretty();