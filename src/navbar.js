import React, { Component } from 'react'
import Slider from 'rc-slider';
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import "./navbar.css"
class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            format: "hex",
            open : false,
        }
        this.handleFormatchange = this.handleFormatchange.bind(this)
        this.closeSnack = this.closeSnack.bind(this)
    }
    handleFormatchange(e){
        this.setState({
            format:e.target.value,
            open:true
        })
        this.props.handlechange(e.target.value)
    }
    closeSnack(){
        this.setState({
            open:false
        })
    }
    render() {
        const {level, changeLevel} = this.props
        const {format} = this.state
        return (
            <header className='Navbar'>
                <div className='logo'>
                    <Link to="/">React Color App</Link>
                    
                </div>
                <div className='slider-container'>
                    <span>Level : {level}</span>
                    <div className='slider'>
                        <Slider 
                            defaultValue={level} 
                            min={100} 
                            step={100} 
                            max={900} 
                            onAfterChange={changeLevel}
                        />
                        
                    </div>

                </div>
                <div className='select-container'>
                        <Select value={format} onChange={this.handleFormatchange}>
                            <MenuItem value="hex">Hex - #ffff</MenuItem>
                            <MenuItem value="rgb">Rgb - rgb(255,255,255)</MenuItem>
                            <MenuItem value="rgba">Rgba - rgba(255,255,255,1)</MenuItem>
                        </Select>
                    </div>
                    <Snackbar 
                    anchorOrigin={{vertical: "bottom", horizontal:"left"}} 
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id='message-id'>Format Change to {format.toUpperCase()}</span>}
                    ContentProps={{
                        "aria-describedby":"message-id"
                    }}
                    onClose={this.closeSnack}
                    action={[<IconButton onClick={this.closeSnack} key="close" aria-label='close'>
                        <CloseIcon/>
                    </IconButton>]}
                    />
            </header>
            
        );
    }
}
export default Navbar