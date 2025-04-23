import React from 'react'
import '../styles.css'

export const Actions = ({attackTurn}) => {
  return (
    <div className = "container-ab">
        <div style={{ paddingTop: '30%'}}>
            <button className = "button-ab"></button>
        </div>
        <div style={{ paddingBottom: '30%'}}>
            <button className = "button-ab" onClick={() => attackTurn()}></button>
        </div>
    </div>
  )
}
