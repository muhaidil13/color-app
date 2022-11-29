import React, { Component } from 'react'
import Pallets from './Pallets';
import seedsColors from './seedsColors';
import { generatepallete } from './colorhelpers';
class Main extends Component{
    render() {
        return (
            <div>
                 <Pallets pallets={generatepallete(seedsColors[4])}/>
            </div>
            
        );
    }
}
export default Main