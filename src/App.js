import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather/CurrentWeather'
import axios from 'axios'
import FiveDayWeather from './FiveDayWeather/FiveDayWeather'
import SixteenDayWeather from './SixteenDayWeather/SixteenDayWeather'

import UserInput from './UserInput/UserInput'
import './App.css';

class App extends Component {

  state = {
    currentWeather:{},
    fiveDay:{}
  }

  componentDidMount(){

    Promise.all([
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=Phoenix,us&appid=${process.env.REACT_APP_API_KEY}&units=imperial`),
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Phoenix,us&appid=${process.env.REACT_APP_API_KEY}&units=imperial`)
    ])
    .then(result => {
      let [ fiveDay, current ] = result
      this.setState({
        currentWeather:current.data,
        fiveDay: fiveDay.data
      })

    })
  }


  changeCity = (city) =>{
    console.log('city in app:',city)
    Promise.all([
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${process.env.REACT_APP_API_KEY}&units=imperial`),
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=${process.env.REACT_APP_API_KEY}&units=imperial`)
    ])
    .then(result => {
      let [ fiveDay, current ] = result
      this.setState({
        currentWeather:current.data,
        fiveDay: fiveDay.data
      })

    })
  }


  render() {
    console.log('fiveDay WEDD: ',this.state.fiveDay);
    console.log('currentWeather: ', this.state.currentWeather);

    return (
      <div className="App">
        <h1> Weather </h1>
        <UserInput changeCity={this.changeCity} />
        {this.state.currentWeather ? <CurrentWeather currentWeather={this.state.currentWeather}/> : '..loading '}
        {this.state.fiveDay ? <FiveDayWeather fiveDay={this.state.fiveDay}/> : '...loading' }
      </div>
    );
  }
}

export default App;
