import "./ItemCard.css";

const ItemCard = ({ item }) => {
  const { name, shortDescription, image, price, toppings } = item;

  //create a function for toppings to conditionally render toppings based on length of array
  //if toppings length is equal to zero show no text content for toppings
  //else return text content for toppings followed bu a colon seperated by a space listing out each toppings seperated by a comma and a sapce for each item in the toppings array aceept the last one

  return (
    <div className="ItemCard">
      <h1>{name}</h1>
      <li>{shortDescription} </li>
      <br />
      <img src={image} alt={name} />
      {/* <br /> */}
      <li>{price}</li>
      <li>
        Toppings:
        {toppings.map((topping) => (
          <li> {topping}</li>
        ))}
      </li>
    </div>
  );
};

export default ItemCard;
