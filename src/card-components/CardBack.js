import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

export default class CardBack extends Component {

  generateRatingElement = () => {
    // implement meeeee! See the readme for instructions
    if (Number.isInteger(this.props.IMDBRating)) {
      return <img src={`${imgMapper[this.props.IMDBRating]}`} />
    }
    else if (this.props.IMDBRating == null) {
      return 'No Rating Found'
    }
  }

  generateGenresElement = () => {
    let returnString=""
    this.props.genres.forEach( element => returnString += `${element}, `)
    return returnString.slice(0, -2)
  }

  render() {
    return (
      <div className="card-back">
        <h3 className="title">{this.props.title}</h3>
        <span />
        <h4>{this.generateRatingElement()}</h4>
        <span />
        <h5 className="genres"> { this.generateGenresElement() }</h5>
      </div>
    )
  }
}
