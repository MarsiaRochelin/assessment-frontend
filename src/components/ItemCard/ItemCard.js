import "./ItemCard.css";

const ItemCard = ({ item }) => {
  const { name, shortDescription, image, price, toppings } = item;

  return (
    <div className="ItemCard">
      <h1>{name}</h1>
      <li>{shortDescription} </li>
      <img src={image} alt={name} />
      <li>{price}</li>
      <li>
        Toppings:
        {toppings.map((topping) => (
          <li> {topping} </li>
        ))}
      </li>
    </div>
  );
};

export default ItemCard;
