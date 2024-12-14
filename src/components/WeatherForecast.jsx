import weatherForecasts from '../../weatherForecasts'
const WeatherForecasts = ({ weatherForecasts }) => {
  return (
    <div className="weather">
      {console.log('hey')}
      <ul>
        {weatherForecasts.map((weather) => {
          return (
            <li key={weather.name}>
              <h2>name {weather.name}</h2>
              <img src={weather.img} alt={weather.imgAlt} />
              <p>
                <span>conditions: </span>
                {weather.conditions}
              </p>
              <p>
                <span>time: </span>
                {weather.time}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default WeatherForecasts
