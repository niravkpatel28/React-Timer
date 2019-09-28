
import React from 'react'

class Timer extends React.Component {

    constructor(props){
        super(props);
        setInterval(this.ticker, 1000);
    }
    // defines internal state of the object 
    state={
        seconds: 0,
        minute:0
    }

    ticker =()=>{
        this.setState(
            {
                // seconds:Math.round((this.state.seconds+1)%60),
                seconds: this.state.seconds+1
                //minute: Math.round((this.state.seconds)/60)
            });
            
    }

    //click event handler 

    
    render(){
        
        return (
            <div>
                <h2> Welcome {this.props.name}</h2>
                <br/>
                <p> Minute : Seconds </p>
                <p> {Math.floor((this.state.seconds)/60)}  :  {this.state.seconds%60} </p>
                {/* <p>Total Seconds : {this.state.seconds}</p> */}
               
            </div> 
 
        )
    }

}

export default Timer;
// using functional component   


// const Timer = (props) => {
//     const [state, setstate] = useState(0);

//     let counter = 0;
    

    
//         useEffect(()=>{

//             return ()=>{

//             }
//         },[id,name])
    

//     return (
//         <div>
//             <h2> Welcome {props.name}</h2>
//             <br/>
//             <p> Timer {state}</p>
//         </div> 

//     )
// }

