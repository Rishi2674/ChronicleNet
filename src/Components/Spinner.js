import React, { Component } from 'react'
import spinner from '../assets/spinner2.gif'


export default class Spinner extends Component {
  render() {
    return (
      <div className=" text-center mx-auto">
        <img src={spinner} alt='..' className='m-auto'/>
      </div>
    )
  }
}
