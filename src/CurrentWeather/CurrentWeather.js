import React from 'react'
import axios from 'axios'
import DisplayTemp from '../DisplayTemp/DisplayTemp'

const CurrentWeather = (props) => {







    return(
      <div>
        <h1> current weather </h1>
        <p>Current temp: {props.currentWeather && props.currentWeather.main ? props.currentWeather.main.temp : '..loading'} </p>

        <DisplayTemp currentWeather={props.currentWeather && props.currentWeather.main ? props.currentWeather : '' }/>


      </div>
    )

}


export default CurrentWeather;
