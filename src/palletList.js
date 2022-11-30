import React, { Component } from 'react'
import MiniPallete from './minipallet';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
const styles = {
    root:{
        backgroundColor: "blue",
        height:"100vh",
        padding:"1rem",
        display:"flex",
        alignItems:"flex-start",
        justifyContent:"center"

    },
    container:{
        width:"50%",
        display:"flex",
        alignItems:"flex-start",
        flexDirection:"column",
        flexWrap:"wrap"
    },
    nav:{
        display:"flex",
        width:"100%",
        justifyContent:"space-between",
        color:"white",
        "& h1":{
            color:"black",
            padding:".2rem 0"
            
        }
    },
    pallet:{
        boxSizing:"border-box",
        width:"100%",
        display:"grid",
        gridTemplateColumns:"repeat(3, 30%)",
        gridGap:"3%"
    }


}
class PalletList extends Component{
    goToPallet(id){
        this.props.history.push(`/pallete/${id}`)
    }
    render() {
        const {pallet, classes} = this.props
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Color List</h1>    
                    </nav>
                    <div className={classes.pallet}>
                            {pallet.map(pal => (
                                <MiniPallete {...pal} handleClick={() => this.goToPallet(pal.id)}/>
                            ))}        
                    </div>
                </div>
                
            </div>
        );
    }
}
export default withStyles(styles) (PalletList)