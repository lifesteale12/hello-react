import React, { Component } from 'react';
import PropTypes from 'prop-types';
const AppContext = React.createContext();
//สร้าง Component - JSX
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:"Jatuporn Peutsing",
      count:0,
      attackPower:0,
      attackSpeed:0,
      criticalChance:0,
      criticalMultiply:0,
      defence:0,
      hp:0,
      dps:0,
      timekill:0,
      impactDamage:0,
      hitDamage:0,
      test:0,
      type:0,
      number: 10  
    };
  }
  sum(){
    let test = this.state.attackPower;
    let xx = this.state.attackSpeed;
    const attackPower = this.state.attackPower;
    const attackSpeed = this.state.attackSpeed;
    const criticalChance = this.state.criticalChance;
    const criticalMultiply = this.state.criticalMultiply;
    const defence = this.state.defence;
    const hp = this.state.hp;

    const hitDamage    = Number(attackPower) + (Number(attackPower) * (Number(criticalMultiply)-1) * (Number(criticalChance)/100));
    const dps          = Number(hitDamage) * Number(attackSpeed);
    const impactDamage = (Number(hitDamage)  - Number(defence)) * Number(attackSpeed);
    const timekill     = Number(hp)/Number(impactDamage);

this.setState({hitDamage:hitDamage});
this.setState({dps:dps});
this.setState({impactDamage:impactDamage});
this.setState({timekill:timekill});
console.log("hitDamage"+hitDamage);
console.log("dps"+dps);
console.log("impactDamage"+impactDamage);
console.log("timekill"+Number(timekill,2));
console.log("Test"+xx+test);
  }
  test(){
    let test = this.state.test;
    console.log("dps"+test);
    console.log(PropTypes);
    console.log(AppContext);
  }
  onFieldChange({target:{name, value}}){
    this.setState({[name]:[value]},this.sum);
  }
  onChange({target:{name, value}}){
    this.setState({[name]:[value]},this.test);
  }
  getColor(){
    var mystyle={
      fontSize:20,
      color:'#FF0000',
    }
    return {color:'#FF0000'}
  }
  render(){
    //set style
    return(
      // <AppContext.Provider>
        // {this.props.children}
        <div >
        <AttackerAttribute />
        <input type="text" name="test" value={this.state.test} onChange={this.onChange.bind(this)}></input>
      </div>
      // </AppContext.Provider>
      
    );
  }
}



class AttackerAttribute extends Component{
  
  render(){
    var mystyle={
      fontSize:20,
      color:'#FF0000',
    }
    return(
      // <App>
        <div>
          <table width="500px" border='1'>
          <tr>
            <th><h1 style={mystyle}>Attacker attribute</h1></th>
          </tr>
            <tr>
              <td>Attack Power number={this.props.number}</td>
              {/* <td><input type="text" name="attackPower" value={this.state.attackPower} onChange={this.onFieldChange.bind(this)}></input></td> */}
            </tr>
            <tr>
              <td>Attack Speed</td>
              {/* <td><input type="text" name="attackSpeed" value={this.state.attackSpeed} onChange={this.onFieldChange.bind(this)}></input></td> */}
            </tr>
            <tr>
              <td>Critical Change</td>
              {/* <td><input type="text" name="criticalChance" value={this.state.criticalChance} onChange={this.onFieldChange.bind(this)}></input></td> */}
            </tr><tr>
              <td>Critical Multiplier</td>
              {/* <td><input type="text" name="criticalMultiply" value={this.state.criticalMultiply} onChange={this.onFieldChange.bind(this)}></input></td> */}
            </tr>

          <tr>
            <td ><h1 style={mystyle}>Defencer attribute</h1></td>
          </tr>
          <tr>
            <td>HP</td>
            {/* <td><input type="text" name="hp" value={this.state.hp} onChange={this.onFieldChange.bind(this)}></input></td> */}
          </tr>
          <tr>
            <td>Defence</td>
            {/* <td><input type="text" name="defence" value={this.state.defence} onChange={this.onFieldChange.bind(this)}></input></td> */}
          </tr>
          <tr>
            <td ><h1 style={mystyle}>Attacker damage output</h1></td>
          </tr>
          <tr>
            <td>Damage per hit</td>
            {/* <td>{this.state.hitDamage}</td> */}
          </tr><tr>
            <td>DPS</td>
            {/* <td>{this.state.dps}</td> */}
          </tr>        
          <tr>
            <td ><h1 style={mystyle}> Time to kill</h1></td>
          </tr>
          <tr>
            {/* <td >{this.state.timekill}</td> */}
            <td > Second</td>
          </tr>      
        </table>
      </div>
    
      // </App>
    );
  }
}



export default App;
