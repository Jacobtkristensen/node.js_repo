const app = require("express")();

const drinks = [
  {
    id: 1,
    name: "Coca-Cola",
    price: 12.5,
    alcohol: false,
  },
  {
    id: 2,
    name: "Heineken",
    price: 19.95,
    alcohol: true,
  },
  {
    id: 3,
    name: "Tap water",
    price: 3.5,
    alcohol: false,
  },
  {
    id: 4,
    name: "Red wine",
    price: 69.69,
    alcohol: true,
  },
  {
    id: 5,
    name: "White wine",
    price: 29.99,
    alcohol: true,
  },
];

app.get("/drinks", (req, res) => {
  res.send(drinks);
});

app.get("/drinks/alcohol", (req, res) => {
  const drinksAlcohol = drinks.filter((drink) => drink.alcohol === true);
  res.send(drinksAlcohol);
}
);

app.get("/drinks/non-alcohol", (req, res) => {
  const drinksNonAlcohol = drinks.filter((drink) => drink.alcohol === false);
  res.send(drinksNonAlcohol);
}
);

app.get("/drinks/:id", (req, res) => {
  const id = Number(req.params.id);
  const drink = drinks.find((drink) => drink.id === id);
  if (drink) {
    res.send(drink);
  } else {
    res.send({ data: "Drink not found" });
  }
});

app.listen(8080);
