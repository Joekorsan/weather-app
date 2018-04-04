import React from 'react'
import DisplayTemp from '../DisplayTemp/DisplayTemp'


const FiveDayWeather = (props) => {

  let fivedayForcast = props.fiveDay && props.fiveDay.list ? props.fiveDay.list.filter(day => day.dt_txt.includes('12:00:00'))
  .map((day,indx)=> <DisplayTemp key={indx} day={day} cityName={props.fiveDay.city.name}  />) : null

  return(
    <div>
      <h3> Five day forcast in {(props.fiveDay.city && props.fiveDay.city.name)} </h3>
      {fivedayForcast}

    </div>
  )
}


export default FiveDayWeather
