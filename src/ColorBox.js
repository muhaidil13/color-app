import React, { Component } from 'react'
import "./colorbox.css"
class ColorBox extends Component{
    render() {
        return (
            <div style={{background: this.props.background}} className='Color-Box'>
                <span>{this.props.name}</span>
                <span>More</span>
            </div>
        );
    }
}
export default ColorBox