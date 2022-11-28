import React, { Component } from 'react'
import ColorBox from './ColorBox';
import "./pallets.css"
class Pallets extends Component{
    render() {
        const colorBox = this.props.pallets.colors.map(color => (
            <ColorBox background={color.color} name={color.name}/>
        ))
        return (
            <div className='Pallets'>
                {/* Navbar */}
                <div className='Pallets-Colors'>
                    {/* color Box */}
                    {colorBox}
                </div>
                {/* Footer */}
            </div>
        );
    }
}
export default Pallets