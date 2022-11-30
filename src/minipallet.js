import React from 'react'
import { withStyles} from '@material-ui/styles'

const styles = {
    root: {
        backgroundColor: "white",
        border:"2px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        }
    },
    color:{
        backgroundColor: "grey",
        height:"150px",
        width:"100%",
        borderRadius:"5px",
        overflow:"hidden"
    },
    title:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        margin:"0",
        color:"black",
        paddingTop:"0.5rem",
        fontSize:"1rem",
        position:"relative"
    },
    emoji:{
        marginLeft:"0.5rem",
        fontSize:"1.5rem"
    },
    miniColorbox:{
        height:"25%",
        width:"20%",
        display:"inline-block",
        margin:"0 auto",
        position:"relative",
        marginBottom:"-3.5px"
    }
}

function MiniPallete(props){
    const {classes, paletteName, emoji, colors} = props
    const miniColorbox = colors.map(cb => (
        <div className={classes.miniColorbox} style={{backgroundColor:cb.color}} key={cb.name}></div>
    ))
    return(
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.color}>
                {/* Color Bos */}
                {miniColorbox}
            </div>
            <h5 className={classes.title}>
                {paletteName}<span className={classes.emoji}>{emoji}</span>
            </h5>
        </div>
    )
}
export default withStyles(styles)(MiniPallete);