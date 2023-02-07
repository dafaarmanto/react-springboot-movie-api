import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import api from "./api/axiosConfig";
import Layout from "./layout";

import "./App.css";
import Homepage from "./layout/Homepage";
import Header from "./layout/Header";

const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await api.get("/api/v1/movies");

    setMovies(response.data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Homepage movies={movies} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
