import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:'50px'}}>
  {props.alertText &&  <div className="alert alert-warning alert-dismissible fade show" role="alert">
   <strong>{props.alertText.type} ! </strong>{props.alertText.message}
</div>}
</div>
  )
}
