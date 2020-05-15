import React, { Component } from "react";
import './main.scss';



class Toggle extends Component {

   // constructor(props){
   //     super(props);
  //      this.state = {
  //        checked: this.props.defaultChecked
  //      }
   // }

    onChange = e => {
      this.setState({
        checked: e.target.checked
      });
      //if (typeof this.props.onChange === "function") this.props.onChange();
    };

    render() {
      return (
        <div className="toggle-switch">
          <input
            type="checkbox"
            className="toggle-switch-checkbox"
            name={this.props.name}
            id={this.props.id}
           // checked={this.props.currentValue}
           // onChange = {this.onChange}
           onClick = {this.props.clicked}
            
          />
          <label className="toggle-switch-label" htmlFor={this.props.id}>
            <span className="toggle-switch-inner" />
            <span className="toggle-switch-switch" />
          </label>
        </div>
      );
    }
  } 
  
  export default Toggle;

// class Toggle extends Component {
//   render() {
//     return (
//       <div className="toggle-switch">
//         <input
//           type="checkbox"
//           className="toggle-switch-checkbox"
//           name={this.props.Name}
//           id={this.props.Name}
//         />
//         <label className="toggle-switch-label" htmlFor={this.props.Name}>
//           <span className="toggle-switch-inner" />
//           <span className="toggle-switch-switch" />
//         </label>
//       </div>
//     );
//   }
// }

// export default Toggle;