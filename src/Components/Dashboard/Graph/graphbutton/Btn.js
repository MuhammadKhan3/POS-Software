import React from 'react'
import './Btn.css'
function Btn(props) {
    return (<div className="btn-group containerbtn" role="group" aria-label="Basic mixed styles example">
    <button type="button" class="btn btn-primary" onClick={props.Day}>Day</button>
  <button type="button" class="btn btn-primary" onClick={props.Month}>Month</button>
  <button type="button" class="btn btn-primary" onClick={props.Yearly}>Year</button>
  </div>)
}

export default Btn;