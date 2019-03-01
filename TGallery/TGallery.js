import React, { Component } from 'react'

import './TGalleryStyling.css' // optional, CSS file has 2 default animations: fadeIn and fadeOut

//const fetch = require('node-fetch');

export class TGallery extends Component {
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

    componentDidMount(){
      /* 
      *	fetch imageSrc codes go here
      */
      this.intervalId = setInterval(() => this.setState({nextImage: this.getNextImage(), nextAnimation: this.getNextAnimation()}), this.state.interval)
    }

    componentWillMount(){
      clearInterval(this.intervalId)
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
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
      }
    }
  render() {
    return (
      <div className='SSWrapper'>
          <img className='SSImage' src={this.state.nextImage}
          style={this.getAnimation()}
          alt='error-loading'/>     
      </div>
    )
  }
}

export default TGallery
