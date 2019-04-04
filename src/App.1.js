import React, { Component } from 'react';

//สร้าง Component - JSX
class App extends Component {
  render(){
    //set style
    var mystyle={
      fontSize:100,
      color:'#FF0000'
    }
    return(
      
      <div>
        <Header />


        <h1 style={mystyle}>Hello World</h1>
        <h2>{200*50}</h2>
        <Content title="Course React" name="Jatuporn" price="Free"/>

        <Footer />
      </div>
    );
  }
}

class Header extends Component{
  constructor(){
    super();
    this.state = {
      name:"Jatuporn Peutsing",
      count:0
    };
  }
  render(){

    //จะทำการเปลี่ยน state name ภายใน 2 วินาที
    setTimeout(()=>{
      this.setState({name:"React Tutorial"});      
    },1000);
    
    //จะทำการรัน state count เพิ่มทีละ 1 
    setInterval(()=>{
      this.setState({count:this.state.count+1});
    },100);

    return(
      <div>
        <h1> Jatuporon </h1>

        {/* state name จะทำการเปลี่ยน state name ภายใน 2 วินาที */}
        <h2>{this.state.name}</h2>

        {/* state count เพ่ิมทีละ 1 ไปเรื่อยๆ */}
        <h3>{this.state.count}</h3> 
      </div>
    );
  }
}

class Content extends Component{
  render(){
    return(
      <div>
        <h1> Text </h1>
        <p>{this.props.title}</p>
        <p>{this.props.name}</p>
        <p>{this.props.price}</p>
      </div>
    );
  }
}



class Footer extends Component{

  constructor() {
    super();
    this.state = {atkpower:100,atkspeed:1,Cc:50,cm:1.25,impactDamage:0,HP:100,DF:10,TimeTokill:0,HitDamage:0,DPS:0};
  }
  sum(){
    this.setState({HitDamage: this.state.atkpower + (this.state.atkpower * (this.state.cm-1) * (this.state.Cc)/100)},()=>{
      this.setState({DPS:this.state.HitDamage * this.state.atkspeed},()=>{
        this.setState({impactDamage:(this.state.HitDamage - this.state.DF) * this.state.atkspeed},()=>{
          this.setState({TimeTokill:this.state.HP / this.state.impactDamage});
        }
      );
      });
    })
  }
  
  onFieldChange({target:{name, value}}){
    this.setState({[name]:[value]},this.sum);
  }
  
  render(){
    return(
      <div>
        <h1> Control+C </h1>
      </div>
    );
  }
}
export default App;
