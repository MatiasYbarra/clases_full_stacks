import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const content = document.getElementById('content');

console.log('Hola Mundo');

class Titulo extends Component{
  render(){
    return (<h1 className="text-center">Titulo</h1>)
  }
}
class InputComponent extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <input type={this.props.type} className="form-control" placeholder={this.props.placeholder}/>
    )
  }
}

class ButtonComponent extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <button  className="btn btn-info btn-block" type={this.props.type}>{this.props.text}</button>
    )
  }
}
class Form extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <form action={this.props.action} method={this.props.method}>
        <div className="form-grup">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"></input><br/>
          <label htmlFor="exampleInputNombre">First Name</label>
          <InputComponent type="text" placeholder="ingrese su nombre"/><br/>
          <ButtonComponent type="submit" className="btn-btn" text="enviar"/>
        </div>
      </form>
    )
  }
}

ReactDOM.render(
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <Titulo/>
          <Form action="/" method="GET"/>

        </div>
      </div>
    </div>


  </div>

, content);
