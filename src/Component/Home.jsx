import React, { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('Doraemon');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [type, setType] = useState('');
  const apiKey = "1a2127e5";

  useEffect(() => {
    if (search === '') {
      setData(['']);
      return;
    }
    // fetch(`http://www.omdbapi.com/?s=${search}&y=${search}&${type ? `type=${type}&` : ''}&apikey=${apiKey}`)
    fetch(`https://www.omdbapi.com/?s=${search}&y=${search}&${type ? `type=${type}&` : ''}&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((dta) => {
        if (dta.Search) {
          setData(dta.Search);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search, type]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  const handleMovieLink = (movie) => {
    if (movie.Title) {
      const youtubeLink = `https://www.youtube.com/results?search_query=${encodeURIComponent(
        movie.Title + ' trailer'
      )}`;

      window.open(youtubeLink, '_blank');
    } else {
      // Handle the case when the movie title is undefined
      console.error('Movie title is undefined');
      // Optionally, you can provide a default search query or handle the situation differently
      // const youtubeLink = `https://www.youtube.com/results?search_query=default+trailer`;
      // window.open(youtubeLink, '_blank');
    }

    setSelectedMovie(null);
  };

  const handleTypeClick = (selectedType) => {
    setType(selectedType);
  };

  const filterOptions = ['movie', 'series', 'episode'];

  return (
    <>
      <div className="bg-gradient-to-b from-yellow-200 to-yellow-400 min-h-screen p-8 font-sans overflow-hidden">
        <h1 className="text-center font-extrabold text-xl sm:text-4xl text-purple-800 mb-0 sm:mb-8">
          🌟 Kid's Movie Paradise 🌟
        </h1>
        <div className="p-8 flex sm:flex-row flex-col gap-4 items-center">
          <input
            className="w-72 h-12 border p-3 rounded-md focus:outline-none focus:ring focus:border-purple-500"
            type="text"
            placeholder="Enter a movie title"
            value={search}
            onChange={handleChange}
          />
          <button className="border-2 p-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all">
            Search
          </button>
          <div className="flex gap-4 items-center">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                className={`text-sm font-semibold px-4 py-2 rounded-full ${type === filter
                    ? 'bg-pink-500 text-white'
                    : 'bg-purple-200 text-purple-800 hover:bg-purple-300 hover:text-purple-900'
                  }`}
                onClick={() => handleTypeClick(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-8 items-center">
          {data.map((m) => (
            <div
              key={m.imdbID}
              className="w-32 h-56 sm:w-72 sm:h-96 p-2 border border-purple-500 rounded-md cursor-pointer transform hover:scale-105 transition-transform overflow-hidden"
              onClick={() => handleMovieClick(m)}
            >
              <h1 className="font-bold text-xs sm:text-lg text-purple-800 mb-2">{m.Title}</h1>
              <p className="text-gray-600 text-sm mb-2">{m.Year}</p>
              <p className="text-gray-600 text-sm mb-2">{m.Released}</p>
              <p className="text-gray-600 text-sm mb-2">{m.Country}</p>
              <p className="text-gray-600 text-sm mb-2">{m.Awards}</p>
              <img
                className="w-full h-full sm:h-full pb-2 object-cover rounded-md"
                src={m.Poster}
                alt={`${m.Title} Poster`}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedMovie && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 p-8 rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3">
                <img
                  className="w-full h-auto rounded-lg shadow-lg"
                  src={selectedMovie.Poster}
                  alt={`${selectedMovie.Title} Poster`}
                />
              </div>
              <div className="md:ml-8 flex-1">
                <h2 className="text-4xl font-bold mb-4 text-gray-800">{selectedMovie.Title}</h2>
                <p className="text-xl font-semibold text-indigo-500 mb-4">{selectedMovie.Type}</p>
                <p className="text-xl font-semibold text-indigo-500 mb-4">{selectedMovie.Year}</p>
                <p className="text-gray-700">{selectedMovie.Plot}</p>
              </div>
            </div>
            <button
              className="mt-6 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => handleMovieLink(selectedMovie)}>Watch</button>

            <button
              className="mt-6 ml-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setSelectedMovie(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
