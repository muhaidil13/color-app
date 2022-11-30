import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './navbar';
import "./pallets.css"

class Pallets extends Component{
    constructor(props){
        super(props);
        this.state = {level: 500}
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }
    changeLevel(newlevel){
        this.setState({level:newlevel})
    }
    changeFormat(e){
        // alert(e)
    }
    render() {
        const {colors, palletName, emoji, id} = this.props.pallets
        const {level} = this.state
        const colorBox = colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name} key={color.id} id={color.id} palletid={id}/>
        ))
        return (
            
            <div className='Pallets'>
                {/* Navbar */}
                <Navbar level={level} changeLevel={this.changeLevel} handlechange={this.changeFormat}/>

                <div className='Pallets-Colors'>
                    {/* color Box */}
                    {colorBox}
                </div>
                {/* Footer */}
                <div className='Pallets-footer'>
                    <p>{palletName}</p>
                    <span className='emoji'>
                        {emoji}
                    </span>
                </div>
            </div>
        );
    }
}
export default Pallets

