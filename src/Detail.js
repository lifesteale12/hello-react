import React, { Component } from 'react';
const AppContext = React.createContext();

class AppProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: 10,
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
            inc:()=>{
                this.setState({number: this.state.number + 1})
                console.log(this.state);       
            },
            onPress:({target:{name, value}})=>{
                console.log([name]+[value]);
                this.setState({[name]:[value]},this.sum);
            }
        }
    }
    onTest(event){
        this.setState({attackPower: event.target.value});
        console.log(event);
        console.log(this.state.attackPower);
    }
    onChange({target:{name, value}}){
        this.setState({[name]:[value]},this.sum);
    }
    sum(){
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
        this.setState({timekill:timekill.toFixed(2)});

        console.log("attackPower "+attackPower);
        console.log("attackSpeed "+attackSpeed);
        console.log("criticalChance "+criticalChance);
        console.log("criticalMultiply "+criticalMultiply);
        console.log("defence "+defence);
        console.log("hp "+hp);
        console.log("hitDamage "+hitDamage);
        console.log("dps "+dps);
        console.log("impactDamage "+impactDamage);
        console.log("timekill "+timekill);
    }
    render(){
        return(
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

class Blue extends Component {
    render(){
        return(
            <div>
                <AppContext.Consumer>
                    {(context) => <button onClick={context.inc}>INC</button>}
                </AppContext.Consumer>
            </div>
        );
    }
}

class Detail extends Component {
    render(){
        var mystyle={
            fontSize: 20,
            color:"#FF0000"
        }
        return(
            <AppProvider>
                <div>
                <table width="500px" border='1'>
                    <tbody>
                        <tr>
                            <th><h1 style={mystyle}>Attacker attribute</h1></th>
                        </tr>
                            <tr>
                                <td>Attack Power </td>
                                <td>
                                    <AppContext.Consumer>
                                        {(context) => <input type="text" name='attackPower' onChange={context.onPress}/>}
                                    </AppContext.Consumer>
                                </td>
                            </tr>
                            <tr>
                                <td>Attack Speed</td>
                                <td>
                                    <AppContext.Consumer>
                                        {(context) => <input type="text" name='attackSpeed' onChange={context.onPress}/>}
                                    </AppContext.Consumer>                            
                                </td>
                            </tr>
                            <tr>
                                <td>Critical Change</td>
                                <td>
                                    <AppContext.Consumer>
                                        {(context) => <input type="text" name='criticalChance' onChange={context.onPress}/>}
                                    </AppContext.Consumer>               
                                </td>
                            </tr><tr>
                                <td>Critical Multiplier</td>
                                <td>
                                    <AppContext.Consumer>
                                        {(context) => <input type="text" name='criticalMultiply' onChange={context.onPress}/>}
                                    </AppContext.Consumer>
                                </td>
                            </tr>

                        <tr>
                            <td ><h1 style={mystyle}>Defencer attribute</h1></td>
                        </tr>
                        <tr>
                            <td>HP</td>
                            <td>
                                <AppContext.Consumer>
                                    {(context) => <input type="text" name='hp' onChange={context.onPress}/>}
                                </AppContext.Consumer>                     
                            </td>
                        </tr>
                        <tr>
                            <td>Defence</td>
                            <td>
                                <AppContext.Consumer>
                                    {(context) => <input type="text" name='defence' onChange={context.onPress}/>}
                                </AppContext.Consumer>                            
                            </td>
                        </tr>
                        <tr>
                            <td ><h1 style={mystyle}>Attacker damage output</h1></td>
                        </tr>
                        <tr>
                            <td>Damage per hit</td>
                            <td>
                                <AppContext.Consumer>
                                    {(context) => context.hitDamage}
                                </AppContext.Consumer>
                            </td>
                        </tr><tr>
                            <td>DPS</td>
                            <td>
                                <AppContext.Consumer>
                                    {(context) => context.dps}
                                </AppContext.Consumer>
                            </td>
                        </tr>        
                        <tr>
                            <td ><h1 style={mystyle}> Time to kill</h1></td>
                        </tr>
                        <tr>
                            <td>
                                <AppContext.Consumer>
                                    {(context) => context.timekill}
                                </AppContext.Consumer>
                            </td>
                            <td > Second</td>
                        </tr>   
                    </tbody>                       
                </table>
                    <AppContext.Consumer>
                        {(context) => context.number}
                    </AppContext.Consumer>
                <Blue />
            </div>
        
            </AppProvider>
        );
    }
}

class Defencer extends Component {
    render(){
        return(
            <div></div>
        );
    }
}

export default Detail;
