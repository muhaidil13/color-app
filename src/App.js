import React, { Component } from 'react'
import Pallets from './Pallets';
import seedsColors from './seedsColors';
import { Route, Switch } from 'react-router-dom';
import { generatepallete } from './colorhelpers';
import PalletList from "./palletList"
import SingleColorPallet from './singleColorPallet';
import './App.css';

class App extends Component{
  findFallet(id){
    return seedsColors.find(function(pallete){
        return pallete.id === id
    })
  }
  render() {
    return (
      <div className="App">
            <Switch>
                <Route exact path="/" render={(routeProps) =>  <PalletList pallet={seedsColors} {...routeProps}/>}/>
                <Route exact path="/pallete/:id" render={routeprops => <Pallets pallets={generatepallete(this.findFallet(routeprops.match.params.id))}/>}/>
                <Route exact path="/pallete/:palletid/:colorid" render={() => <SingleColorPallet/>}/>
            </Switch>
      </div>
      )
  }
}
export default App
