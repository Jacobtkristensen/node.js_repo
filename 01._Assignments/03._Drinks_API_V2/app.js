const express = require("express");
const app = express();

app.use(express.json());

const drinks = [
  {
    id: 1,
    name: "Mojito",
    ingredients: ["White rum", "Sugar", "Lime juice", "Soda water", "Mint"],
  },
  {
    id: 2,
    name: "Isbjørn",
    ingredients: ["Vodka", "Blue Curacao", "Lime cordial", "Soda water"],
  },
  {
    id: 3,
    name: "Old Fashioned",
    ingredients: ["Bourbon or Rye whiskey", "Angostura bitters", "Sugar cube", "Few dashes plain water"],
  },
];

app.get("/drinks", (req, res) => {
  res.send({ data: drinks });
});

app.get("/drinks/:id", (req, res) => {
  const providedDrinkId = Number(req.params.id);
  const foundDrink = drinks.find((drink) => drink.id === providedDrinkId);
  if (!foundDrink) {
    res.status(404).send({ data: "Drink not found" });
  } else {
    res.send({ data: foundDrink });
  }
});

app.post("/drinks", (req, res) => {
  const requestBody = req.body;
  const newDrinkId = drinks.reduce((maxId, drink) => Math.max(maxId, drink.id), 0) + 1;
  const newDrink = {
    id: newDrinkId,
    name: requestBody.name,
    ingredients: requestBody.ingredients,
  };

  if (newDrink.name && newDrink.ingredients) {
    drinks.push(newDrink);
    res.status(201).send({ data: newDrink });
  } else {
    res.status(400).send({ data: "Both name and ingredient must be provided." });
  }
});

app.put("/drinks/:id", (req, res) => {
  const providedDrinkId = Number(req.params.id);
  const requestBody = req.body;
  const foundIndex = drinks.findIndex((drink) => drink.id === providedDrinkId);

  if (foundIndex === -1) {
    res.status(404).send({ data: "Drink not found." });
  } else if (!requestBody.name || !requestBody.ingredients) {
    res.status(400).send({ data: "Both name and ingredients must be provided." });
  } else {
    const updatedDrink = {
      id: providedDrinkId,
      name: requestBody.name,
      ingredients: requestBody.ingredients,
    };
    drinks[foundIndex] = updatedDrink;
    res.status(200).send({ data: updatedDrink });
  }
});

app.delete("/drinks/:id", (req, res) => {
  const providedDrinkId = Number(req.params.id);

  if (isNaN(providedDrinkId)) {
    res.status(400).send({ data: "Drink id must be a number." });
  }
  const foundDrinkIndex = drinks.findIndex((drink) => drink.id === providedDrinkId);
  if (foundDrinkIndex === -1) {
    res.status(404).send({ data: "Drink not found" });
  }
  res.status(200).send({ data: "Drink deleted." });
  drinks.splice(foundDrinkIndex, 1);
});

app.listen("8080", (error) => {
  if (error) {
    console.log("Error starting express server");
    return;
  }
  console.log("Server is on running on port", 8080);
});
