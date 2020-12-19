import React from 'react'

function SliderInput(props) {
  return (
    <div className="my-5">
      <label htmlFor="customRange1">{props.label}</label>
      <div style={{ display:'flex', justifyContent: 'center', alignItems: 'center', gap: '0.25rem' }}>
        <span style={{ fontSize: '1.25rem' }}>{props.min ? props.min : 0}</span>
        <input 
          type="range" 
          className="custom-range" 
          id="customRange1" 
          min={props.min ? props.min : 0}
          max={props.max ? props.max : 100}
          step={props.step ? props.step : 5}
          value={props.val} 
          onChange={(e) => props.onChange(parseInt(e.target.value))} 
        />
        <span style={{ fontSize: '1.25rem' }}>{props.max ? props.max : 100}</span>
      </div>
    </div>
  )
}

export default SliderInput;
