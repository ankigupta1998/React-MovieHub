import axios from "axios";
import { useEffect, useState } from "react";
import BasicPagination from "../../Components/BasicPagination/BasicPagination";

import SingleContent from "../../Components/SingleContent/SingleContent";
import "./Trending.css"
const Trending = () => {
  const[page,setPage]= useState(1);
  const [content, setContent] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=4d4fd0868172548277182ea9266b3e68&page=${page}`
    );
      // console.log(data.results);
    setContent(data.results);
  };
  useEffect(() => {
    fetchData();
     // eslint-disable-next-line
  }, [page]);
  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content &&
          content.map((event) => (
            <SingleContent
              key={event.id}
              id={event.id}
              poster={event.poster_path}
              title={event.title || event.name}
              date={event.first_air_date}
              media_type={event.media_type}
              vote_average={event.vote_average}
            />
          ))}
      </div>
      <BasicPagination setPage={setPage} />
    </div>
  );
};
export default Trending;
