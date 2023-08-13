import React from 'react'

export default function CheckBtn(props) {
  return (
    <div  className='mb-0'>
      <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.lightMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">enable {props.mode} mode</label>
</div>
    </div>
  )
}
