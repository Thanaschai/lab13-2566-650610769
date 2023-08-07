"use client";

import { MovieRow } from "@/components/MovieRow";
import { movieDB } from "@/libs/movieDB";

export default function SearchResultPage({ params }) {
  //tip1 : before filtering movie, replace all "%20" with " " (space) in the input
  // const processedSearchInput = ...

  /*
  tip2 : Use "includes" string method to check substring
  Example : "ABC".includes("AB") -> return true

  tip3 : To implement case insensitive searching, use "toLocaleLowerCase" string method
  to convert movie title and searchInput to lower case 
  const filteredMovies = movieDB.filter((movie) =>
    you code here...
  );
  */
  const paramsin = params.searchInput.replaceAll("%20", " ");
  const pll = movieDB.filter((movie) =>
    movie.title.toLocaleLowerCase().includes(paramsin.toLocaleLowerCase())
  );

  return (
    <div>
      <p className="fw-bold fs-4 text-center my-0">
        Searching &quot; {paramsin} &quot;
      </p>
      <p className="fw-bold fs-4 text-center">Found {pll.length} result(s)</p>
      {pll.map((movie, i) => (
        <MovieRow
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movie.rating}
          number={i + 1}
        />
      ))}
      {/* Use  "filteredMovies" variable to map-loop rendering MovieRow component */}
    </div>
  );
}
