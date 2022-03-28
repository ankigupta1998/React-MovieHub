import { Button, TextField } from "@material-ui/core";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../../Components/SingleContent/SingleContent";
import BasicPagination from "../../Components/BasicPagination/BasicPagination";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchSearch = async () => {
    try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=4d4fd0868172548277182ea9266b3e68&language=en-US&query=${searchText}&page=${page}&include_adult=false`
          );
          setContent(data.results);
          setNumOfPages(data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);

    fetchSearch();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <div className="search">
        <TextField
          style={{ flex: 1 }}
          className="searchBox"
          label="Search"
          variant="filled"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          onClick={fetchSearch}
          variant="contained"
          style={{ marginLeft: 10 }}
        >
          <SearchIcon fontSize="large" />
        </Button>
      </div>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              media_type="movie"
            />
          ))}
        {searchText && !content && <h2>No Movies Found</h2>}
      </div>
      {numOfPages > 1 && (
        <BasicPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search;
