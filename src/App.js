import React, {Component} from 'react';
import './App.scss';
import PhotoGallery from './components/page/atoms/PhotoGallery/PhotoGallery';
import Toggle from './components/page/atoms/ToggleIcon/Toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faMoon as fasMoon } from '@fortawesome/fontawesome-free-solid'
//import { faMoon as farMoon } from '@fortawesome/fontawesome-free-regular'
import { faMoon as fasMoon} from '@fortawesome/free-solid-svg-icons';
//import { faMoon as farMoon} from '@fortawesome/free-regular-svg-icons';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      moveState: false,
      raggedEdges: true,
      showLight:true
    }
    }

   allowSwapping =()=>{
    this.setState({
      moveState : !this.state.moveState
    })

    //console.log("called and value = " + this.state.moveState);
  }

  enableRaggedEdges=()=>{
   // console.log("edges in app before change.. " + this.state.raggedEdges);
    this.setState({
      raggedEdges : !this.state.raggedEdges
      
    })
    //console.log("edges in app after change.. " + this.state.raggedEdges)
  }
  
   toggleDark = ()=>{
    if(this.state.showLight){
        let moonBtn = document.querySelector('.app');
        moonBtn.classList.add("dmode")
        this.setState({
          showLight : false
        });
    }else{
      let moonBtn = document.querySelector('.app');
      moonBtn.classList.remove("dmode")
        this.setState({
          showLight : true
        });
    }
}

  render() {
  return (
    <div className="app">
      <header className="header">
        <h1>Swap Gallery</h1>
          <FontAwesomeIcon className="fa-moon" icon={fasMoon} id="dmode-moon" onClick={this.toggleDark} title="Toggle Dark Mode" />
        </header>
      <main>
        <div className="option-div">
          <label>Allow Swap <Toggle id="swap" name="swapp-toggle" clicked={this.allowSwapping}/></label>
          <label>Rugged Edges <Toggle id="rag" name="ragged-edges" clicked={this.enableRaggedEdges}/> </label>



        </div>
        <div className="app-gallery">
          <PhotoGallery  movable={this.state.moveState} edges={this.state.raggedEdges} />
        </div>
        
      </main>
      <article className="copywright"><span className="name">Abelivi</span> 2020 &#10054;</article>

    </div>
  );
  }
}

export default App;
