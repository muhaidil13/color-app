import React, { Component } from 'react'
import Pallets from './Pallets';
import seedsColors from './seedsColors';
import { Route, Switch } from 'react-router-dom';
import { generatepallete } from './colorhelpers';
import PalletList from "./palletList"
class Main extends Component{
    findFallet(id){
        return seedsColors.find(function(pallete){
            return pallete.id === id
        })
    }
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() =>  <PalletList pallet={seedsColors}/>}/>
                <Route exact path="/pallete/:id" render={routeprops => <Pallets pallets={generatepallete(this.findFallet(routeprops.match.params.id))}/>}/>
            </Switch>
            
            
        );
    }
}
export default Main