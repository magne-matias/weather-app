import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react'
import moment from 'moment';
//usamos Semantic UI Library para diseñar la interfaz, especificamente la CARD que va a mostrar nuesra informacion del clima

const CardExampleCard = ({weatherData}) => (
    <div className="main">
        <p className="header">{weatherData.name}</p>
        <div>
          <p className="day">Day: {moment().format('dddd')}</p>
        </div>
  
        <div>
          <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
        </div>
        
    </div>
  )
export default CardExampleCard;