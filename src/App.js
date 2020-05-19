import React from 'react';
import axios from 'axios';

import './App.css'

class App extends React.Component{
    // state of app
    state = { advice: '' }

    // Fetchin advice
    componentDidMount(){
        // call the fetch advice method
        this.fetchAdvice();
    }

    // method fetching advices
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) =>{
            // take out advice by destructuring the response
            const {advice} = response.data.slip
            this.setState({advice: advice});
            console.log("clicked")
        })
        .catch((error) => {
            console.log(error);
        });
    }

    // what to display/render
    render(){
        // take advice out of the state
        const {advice} = this.state;
        return(

            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>GIVE ME ADVICE!</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default App;