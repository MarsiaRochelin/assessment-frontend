import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import Menu from "./components/Menu/Menu";

//TODO: add to .env file
const API_URL = "http://localhost:8887";

function App() {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/items`);
        const json = await res.json();
        const { data, error } = json;
        if (res.ok) {
          setMenuData(data);
          setLoading(false);
        } else {
          setError(error);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return <Menu menuData={menuData} />;
    }
  };

  //when error and loading state is truthy my container component isn't centering my content WHY?

  return (
    <div className="App">
      <Container center={Boolean(error || loading)}>
        {" "}
        {renderContent()}
      </Container>
    </div>
  );
}

export default App;
