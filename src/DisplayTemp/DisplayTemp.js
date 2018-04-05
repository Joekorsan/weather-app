import React from 'react'
import axios from 'axios'

const DisplayTemp = (props) => {

  const card = {
  'width': '60%',
  'margin': '15px auto',
  'border': '1px solid green',
  'boxShadow': ' 2px 3px #ccc',
  'background': '#ccc',
  'padding': '16px',
  'textAlign': 'center'

}
    let display = '';
    if (props.currentWeather) {
      display = (
        <div>
          <h1> Weather in {props.currentWeather.name} today </h1>
          <p>Humidity: {props.currentWeather.main.humidity} </p>
          <p>Temp: {props.currentWeather.main.temp} </p>
          <p>Max Temp: {props.currentWeather.main.temp_max} </p>
          <p>Min Temp: {props.currentWeather.main.temp_min} </p>
          <br></br>
          <p>{props.currentWeather.weather[0].description} today with wind speeds of {props.currentWeather.wind.speed}</p>
        </div>

      )
    }else if(props.cityName){
      display = (
        <div>
          <p>Humidity: {props.day.main.humidity} </p>
          <p>Temp: {props.day.main.temp} </p>
          <p>Max Temp: {props.day.main.temp_max} </p>
          <p>Min Temp: {props.day.main.temp_min} </p>
        </div>

      )
    }

    return(
      <div style={card}>

         {/* <h1> {props.currentWeather && props.currentWeather.main ? props.currentWeather.main.name : 'loading day'} </h1>  */}
        {display}

      </div>
    )

}


export default DisplayTemp;
