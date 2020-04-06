import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
                <button name="(" onClick={e => this.props.onClick(e.target.name)} class="symbol">(</button>
                <button name=")" onClick={e => this.props.onClick(e.target.name)} class="symbol">)</button>
                <button name="CE" onClick={e => this.props.onClick(e.target.name)} class="symbol">CE</button>
                <button name="C" onClick={e => this.props.onClick(e.target.name)} class="symbol">C</button><br/>


                <button name="1" onClick={e => this.props.onClick(e.target.name)}class="number">1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}class="number">2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}class="number">3</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)}class="symbol">+</button><br/>


                <button name="4" onClick={e => this.props.onClick(e.target.name)}class="number">4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}class="number">5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}class="number">6</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)}class="symbol">-</button><br/>

                <button name="7" onClick={e => this.props.onClick(e.target.name)}class="number">7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}class="number">8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}class="number">9</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name)} class="symbol">x</button><br/>


                <button name="." onClick={e => this.props.onClick(e.target.name)} class="symbol">.</button>
                <button name="0" onClick={e => this.props.onClick(e.target.name)} class="number">0</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)} class="symbol">=</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)} class="symbol">÷</button><br/>
            </div>
        );
    }
}


export default KeyPadComponent;