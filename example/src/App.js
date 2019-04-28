import React, { Component } from 'react'

import {PowerToolsHeader, EntityList} from 'pt-components'
import { initializeIcons } from "@uifabric/icons";

// Register icons and pull the fonts from the default SharePoint CDN:
initializeIcons();


export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.options = [];
  }

  handleChange = (event, option, index, value) => {
    if (option.selected)
      this.options.push(option);
    else {
      var i = this.options.findIndex(function(o){
        return o.key === option.key;
      });
      this.options.splice(i,1);
    }
  }

  handleClick = () => {
      console.log(this.options)
  }
  
  render () {    
    return (
      <div>
        <PowerToolsHeader 
          title="PowerTools Solution Example" 
          repoUrl="https://github.com/power-tools" 
          description="Here's a description of the Power Tools Solution"/>
        <EntityList onChange={this.handleChange} multiSelect={true} label="List of Entities" placehoder="Select Entities" />
        <button onClick={this.handleClick}>Click to test</button>
      
      </div>
    )
  }
}
