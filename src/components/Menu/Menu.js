import "./Menu.css";
import ItemCard from "../ItemCard/ItemCard";

const Menu = ({ menuData }) => {
  return (
    <div className="Menu">
      {menuData.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Menu;
