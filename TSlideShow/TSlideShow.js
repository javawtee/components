import React, { Component } from 'react'

import './TSlideShowStyling.css' // optional, CSS file has 2 default animations: fadeIn and fadeOut

//const fetch = require('node-fetch');

export class TSlideShow extends Component {
    state = {
        animations: [
          'fadeIn', 'fadeOut'
        ],
        imageSrc: [],
        nextImage: '',
        nextAnimation: '',
        duration: '4s', // adjustable, duration of each animation
        interval: 4000, // adjustable, interval === duration * 1000(ms)
    }

    componentWillMount(){
      /* 
      *	fetch imageSrc codes go here
      */
      this.setState({nextImage: this.getNextImage(), nextAnimation: this.getNextAnimation()})
    }

    componentDidMount(){
      setInterval(() => this.setState({nextImage: this.getNextImage(), nextAnimation: this.getNextAnimation()}), this.state.interval)
    }

    getNextImage = () => {
      return this.state.imageSrc[this.Randomize(0, this.state.imageSrc.length)]
    }

    getNextAnimation = () => {
      return this.state.animations[this.Randomize(0, this.state.animations.length)]
    }

    Randomize = (min, max) => {
      return Number.parseInt(min + Math.random() * (max - min))
    }

    getAnimation = () => {
      return {
        animationName: this.state.nextAnimation,
        animationDuration: this.state.duration,
        animationIterationCount: 'infinite'
      }
    }
  render() {
    console.log(this.state.nextAnimation)
    return (
      <div className='SSWrapper'>
          <img className='SSImage' src={this.state.nextImage}
          style={this.getAnimation()}
          alt='error-loading'/>     
      </div>
    )
  }
}

export default TSlideShow
