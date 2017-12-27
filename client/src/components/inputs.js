import React, { Component } from 'react';
import './input.css';

class Inputs extends Component {
    constructor(props){
        super(props);

        this.state = {
            userNumber: '',
            cur_check: 'No numbers checked',
            cur_color: 'lavender'
        };

        this.checkInput = this.checkInput.bind(this);
    }

    checkInput(){
        let inputNumber = this.state.userNumber;
        this.setState({userNumber: ''});

        if (!isNaN(inputNumber)){
            inputNumber = inputNumber.split('');

            if ( inputNumber.length === 12){
                let odds = null;
                let evens = null;

                for (let i=0; i<inputNumber.length - 1; i++){
                    if (i%2 === 0){
                        evens += parseInt(inputNumber[i]);
                    } else {
                        odds += parseInt(inputNumber[i]);
                    }
                }

                evens *= 3;
                const finalNum = evens + odds + parseInt(inputNumber[11]);

                if (finalNum % 10 === 0){
                    this.setState({
                        cur_check: 'Number was a valid UPC number code!',
                        cur_color: 'green'
                    })
                } else {
                    this.setState({
                        cur_check: 'Not a valid UPC number code',
                        cur_color: 'red'
                    })
                }
            } else {
                this.setState({
                    cur_check: 'Not a valid UPC number code',
                    cur_color: 'red'
                })
            }
        } else {
            this.setState({
                cur_check: 'Not a valid UPC number code',
                cur_color: 'red'
            })
        }
    }

    render(){
        return (
            <div className="input-container" style={{backgroundColor: this.state.cur_color}}>
                <h1>UPC Number Code Checker</h1>
                <input type="text" name="upc_code" placeholder="Input UPC number here" value={this.state.userNumber} onChange={ (e) => {this.setState({userNumber: e.target.value})}}/>
                <button onClick={ this.checkInput }>Check Number</button>
                <p>{this.state.cur_check}</p>
            </div>
        )
    }
}


export default Inputs;