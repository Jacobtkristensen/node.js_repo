const app = require("express")();

const drinks = [
  {
    id: 1,
    name: "Coca Cola",
    price: 2.5,
    alcohol: false,
  },
  {
    id: 2,
    name: "Beer",
    price: 3.5,
    alcohol: true,
  },
  {
    id: 3,
    name: "Water",
    price: 1.5,
    alcohol: false,
  },
];

app.get("/drinks", (req, res) => {
    res.send(drinks);
    });

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
