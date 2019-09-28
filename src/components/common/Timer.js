
import React from 'react'

class Timer extends React.Component {

    // constructor(props){
    //     super(props);
    //     // setInterval(this.ticker, 1000);
    // }
    // defines internal state of the object 
    state={
        seconds: 0,
        timerStarted: false,
        timerID: null
    }

    ticker =()=>{
        this.setState(
            {
                seconds: this.state.seconds+1
            });
            
    }

    //click event handler 
    startTimer = ()=>{
        let timerId
        if(!this.state.timerStarted){
            timerId = setInterval(this.ticker,1000);
            this.setState(
                {
                    timerStarted:true,
                    timerID: timerId // timerId is set locally
                })
             console.log('timer on');
             console.log(this.state.timerID);
        }else{
            console.log('Timer Already On');
        }
        
    }
    
    pauseTimer = ()=>{
        //clear interval with timer id
        if(this.state.timerStarted){
            clearInterval(this.state.timerID);
            this.setState({
                timerStarted:false,
                timerID:null
            })
        }
    }
    render(){
        return (
            <div>
                <h2> Welcome {this.props.name}</h2>
                <br/>
                <p> Minute : Seconds </p>
                <p> {Math.floor((this.state.seconds)/60)}  :  {this.state.seconds%60} </p>
                {/* <p>Total Seconds : {this.state.seconds}</p> */}
                <button onClick={this.startTimer}> Start Timer </button>
                <button onClick={this.pauseTimer}> Pause Timer </button>

                
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

