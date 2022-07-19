import axios from "axios";
import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import "./style.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setMovies(null);
        setLoading(true);
        const response = await axios.get(
          "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
        );
        setMovies(response.data.data.movies);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    getMovies();
  }, []);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!movies) return null;
  return (
    <>
      <section>
        <div className="nameBox">페이지 제목</div>
      </section>
      <section>
        <div className="sortButton">
          <button type="button" children={"이름순"} onClick={() => {}} />
          <button type="button" children={"최신순"} />
          <button type="button" children={"별점순"} />
          <div>
            <select>
              <option value="fruit">Fruit</option>
              <option value="vegetable">Vegetable</option>
              <option value="meat">Meat</option>
            </select>
          </div>
        </div>
      </section>
      <section>
        리스트 영역
        <div className="list">
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Movie
                  id={movie.id}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.poster}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Home;
