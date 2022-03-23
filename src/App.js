import { useEffect, useState } from "react";
import Message from "./Message";

const App = () => {
  const [total, setTotal] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [confirm, setConfirm] = useState("");

  useEffect(() => {
    let url = "https://cs-steam-api.herokuapp.com/games";
    if (confirm) {
      url = url + `?q=${confirm}`;
    }
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setTotal(data.total.toString());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [confirm]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirm(searchInput);
  };
  return (
    <div className="App container">
      <h1>Hello WORLD!</h1>
      <h3>Number of total result :</h3>
      {total ? (
        <Message className="success" name={total.length} />
      ) : (
        <Message className="error" name="Loading please wait ..." />
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchBox">Search: </label>
        <input
          name="searchBox"
          id="searchBox"
          value={searchInput}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
