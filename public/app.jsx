var GreeterText = React.createClass({
  render:function(){
    return (
      <div>
      <h1>This is also a tag#{this.props.num}</h1>
      <p>{this.props.message}</p>
      </div>
    )
  }
})

var GreeterForm = React.createClass({
  
  onBut:function(e){
    e.preventDefault();
    var updates = {};
    var value = this.refs.name.value;
    updates.num = value;
    var message = this.refs.message.value;
    updates.message = message;
    this.props.onNewForm(updates);
  },
  render:function(){
    return (
      <form onSubmit = {this.onBut}>

      <div>
      <input type = "text" ref = "name" placeholder = "Enter number"/>
      </div>
      <div>
      <textarea ref = "message" placeholder = "Enter message"></textarea>
      </div>
      <div>
      <button>CLick Me</button>
      </div>
      </form>
    )
  }
})
var Greeter = React.createClass({
  getDefaultProps:function(){
  return {
    num : "react",
    message:"This is the default message"
  }
  
  },

getInitialState:function(){
return{
  name : this.props.num,
  message:this.props.message
}
},
handleNewName:function(updates){
this.setState(updates)
},
render:function(){
  return (
    <div>
    
    <GreeterText num = {this.state.num} message = {this.state.message}/>
     <GreeterForm onNewForm = {this.handleNewName}/>
    </div>
  )
}
});
ReactDOM.render(<Greeter name = "h2"/>,document.body)