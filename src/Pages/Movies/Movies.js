import axios from "axios";
import { useEffect, useState } from "react";
import BasicPagination from "../../Components/BasicPagination/BasicPagination";
import SingleContent from "../../Components/SingleContent/SingleContent";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages,setNumOfPages]=useState();

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=4d4fd0868172548277182ea9266b3e68&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
    // console.log(data.results);
  };
  useEffect(() => {
    fetchMovies();
     // eslint-disable-next-line
  }, [page]);
  return (
    <div>
      <span className="pageTitle">Movies</span>
      <div className="trending">
        {content &&
          content.map((event) => (
            <SingleContent
              key={event.id}
              id={event.id}
              poster={event.poster_path}
              title={event.title}
              date={event.first_air_date}
              media_type={event.media_type}
              vote_average={event.vote_average}
            />
          ))}
      </div>
      {numOfPages > 1 && ( <BasicPagination setPage={setPage} numOfPages={numOfPages}/>)}
    </div>
  );
};
export default Movies;
