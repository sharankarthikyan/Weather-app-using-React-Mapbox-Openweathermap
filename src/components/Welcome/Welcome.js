import React from "react";
import mapboxicon from "../../assets/images/mapbox.png";
import reacticon from "../../assets/images/react.png";
import owmicon from "../../assets/images/owm.jpg";

const welcome = () => {
  return (
    <div>
      <div className="container align-items-center">
        <h1 className="display-2 pt-5 d-none d-sm-block">
          Welcome to Twinkle Weathers!
        </h1>
        <h2 className="pt-5 d-block d-sm-none">Welcome to Twinkle Weathers!</h2>
        <p className="lead pt-4 d-none d-sm-block">
          Piece of Sharan Industries.
        </p>
        <p className="pt-4 d-block d-sm-none">Piece of Sharan Industries.</p>
        <h1 className="display-4 pt-5  d-none d-sm-block">
          Mapbox
          <img src={mapboxicon} alt="" width="50" />
          + React
          <img src={reacticon} alt="" width="50" />
          + OpenWeatherMap
          <img src={owmicon} alt="" width="50" /> Weather App{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <path d="M2.396 12h-2.396v-2h2.396v2zm7.604-6.458v-3.542h-2v3.542h2zm-4.793.876l-2.156-2.156-1.414 1.414 2.156 2.156 1.414-1.414zm9.461-2.396l-2.115 2.114 1.414 1.414 2.115-2.114-1.414-1.414zm-11.7 10.907l-2.198 1.919 1.303 1.517 2.198-1.919-1.303-1.517zm21.032 2.793c0 2.362-1.95 4.278-4.354 4.278h-10.292c-2.404 0-4.354-1.916-4.354-4.278 0-.77.211-1.49.574-2.113-.964-.907-1.574-2.18-1.574-3.609 0-2.762 2.238-5 5-5 1.329 0 2.523.528 3.414 1.376.649-.24 1.35-.376 2.086-.376 3.171 0 5.753 2.443 5.921 5.516 2.034.359 3.579 2.105 3.579 4.206zm-18-5.722c0 .86.37 1.628.955 2.172.485-.316 1.029-.551 1.624-.656.088-1.61.843-3.042 1.994-4.046-.46-.288-.991-.47-1.573-.47-1.654 0-3 1.346-3 3zm16 5.722c0-2.076-1.979-2.618-3.489-2.512.218-1.439-.24-5.21-4.011-5.21-3.875 0-4.062 3.854-4.011 5.209-1.385-.084-3.489.395-3.489 2.513 0 1.256 1.056 2.278 2.354 2.278h10.291c1.299 0 2.355-1.022 2.355-2.278z" />
          </svg>
        </h1>
        <h3 className="pt-5 d-block d-sm-none">
          Mapbox
          <img src={mapboxicon} alt="" width="50" />
          + React
          <img src={reacticon} alt="" width="50" />
          + OpenWeatherMap
          <img src={owmicon} alt="" width="50" /> Weather App{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <path d="M2.396 12h-2.396v-2h2.396v2zm7.604-6.458v-3.542h-2v3.542h2zm-4.793.876l-2.156-2.156-1.414 1.414 2.156 2.156 1.414-1.414zm9.461-2.396l-2.115 2.114 1.414 1.414 2.115-2.114-1.414-1.414zm-11.7 10.907l-2.198 1.919 1.303 1.517 2.198-1.919-1.303-1.517zm21.032 2.793c0 2.362-1.95 4.278-4.354 4.278h-10.292c-2.404 0-4.354-1.916-4.354-4.278 0-.77.211-1.49.574-2.113-.964-.907-1.574-2.18-1.574-3.609 0-2.762 2.238-5 5-5 1.329 0 2.523.528 3.414 1.376.649-.24 1.35-.376 2.086-.376 3.171 0 5.753 2.443 5.921 5.516 2.034.359 3.579 2.105 3.579 4.206zm-18-5.722c0 .86.37 1.628.955 2.172.485-.316 1.029-.551 1.624-.656.088-1.61.843-3.042 1.994-4.046-.46-.288-.991-.47-1.573-.47-1.654 0-3 1.346-3 3zm16 5.722c0-2.076-1.979-2.618-3.489-2.512.218-1.439-.24-5.21-4.011-5.21-3.875 0-4.062 3.854-4.011 5.209-1.385-.084-3.489.395-3.489 2.513 0 1.256 1.056 2.278 2.354 2.278h10.291c1.299 0 2.355-1.022 2.355-2.278z" />
          </svg>
        </h3>
        <h5 className="pt-5 d-block d-sm-none">Thanks to Visit this page.</h5>
      </div>
    </div>
  );
};

export default welcome;
