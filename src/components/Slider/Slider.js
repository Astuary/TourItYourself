import React from 'react'

function Slider(props) {
  return (
    <div className="my-5">
      <label htmlFor="customRange1">{props.label}</label>
      <input 
        type="range" 
        className="custom-range" 
        id="customRange1" 
        min={props.min ? props.min : 0}
        max={props.max ? props.max : 100}
        value={props.val} 
        onChange={(e) => props.onChange(e.target.value)} />
    </div>
  )
}

export default Slider;