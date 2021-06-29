import PropTypes from "prop-types";
const { arrayOf } = PropTypes;

export const localStorageProps = arrayOf(PropTypes.string);
//props = array of movies to display
//single movie json (typescript save us.)
export const fetchCityProps = {
  coord: {
    lon: PropTypes.number,
    lat: PropTypes.number,
  },
  weather: [
    {
      id: PropTypes.number,
      main: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.string,
    },
  ],
  base: PropTypes.string,
  main: {
    temp: PropTypes.number,
    feels_like: PropTypes.number,
    temp_min: PropTypes.number,
    temp_max: PropTypes.number,
    pressure: PropTypes.number,
    humidity: PropTypes.number,
  },
  visibility: PropTypes.number,
  wind: {
    speed: PropTypes.number,
    deg: PropTypes.number,
  },
  clouds: {
    all: PropTypes.number,
  },
  dt: PropTypes.number,
  sys: {
    type: PropTypes.number,
    id: PropTypes.number,
    message: PropTypes.number,
    country: PropTypes.string,
    sunrise: PropTypes.number,
    sunset: PropTypes.number,
  },
  timezone: PropTypes.number,
  id: PropTypes.number,
  name: PropTypes.string,
  cod: PropTypes.number,
};

const example = {
  adult: PropTypes.bool,
  backdrop_path: PropTypes.string,
  genre_ids: PropTypes.arrayOf(PropTypes.any),
  id: PropTypes.number,
  original_language: PropTypes.string,
  original_title: PropTypes.string,
  overview: PropTypes.string,
  popularity: PropTypes.number,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  title: PropTypes.string,
  video: PropTypes.bool,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
};
