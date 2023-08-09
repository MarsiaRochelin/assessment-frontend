import "./ItemCard.css";

const ItemCard = ({ item }) => {
  const { name, shortDescription, image, price, toppings } = item;

  const toTopOrNot = (toppings) => {
    if (toppings.length >= 1) {
      return (
        <li>
          Toppings: {""}
          {toppings.join(", ")}
        </li>
      );
    } else {
      return "";
    }
  };

  return (
    <div className="ItemCard">
      <h1>{name}</h1>
      <li>{shortDescription} </li>
      <br />
      <img src={image} alt={name} />
      <li className="line-break">{price}</li>
      {toTopOrNot(toppings)}
    </div>
  );
};

export default ItemCard;
