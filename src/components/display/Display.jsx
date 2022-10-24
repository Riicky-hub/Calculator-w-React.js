import './Display.css';
import React from 'react'

export default function Display(props) {
    return (
        <div className="display">{props.value}</div>
    )
}