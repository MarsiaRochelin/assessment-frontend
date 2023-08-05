import "./Menu.css";
import ItemCard from "../ItemCard/ItemCard";

const Menu = ({ menuData }) => {
  return (
    <div className="Header">
      <h1>Our menu</h1>
      <div className="Menu">
        {menuData.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
