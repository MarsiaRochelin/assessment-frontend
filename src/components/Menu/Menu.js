import "./Menu.css";
import ItemCard from "../ItemCard/ItemCard";

const Menu = ({ menuData }) => {
  return (
    <div className="Menu">
      <h1>Our menu</h1>
      {menuData.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Menu;
