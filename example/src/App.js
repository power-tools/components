import React, { Component } from 'react'

import {PowerToolsHeader, EntityList} from 'pt-components'
import { initializeIcons } from "@uifabric/icons";

// Register icons and pull the fonts from the default SharePoint CDN:
initializeIcons();

export default class App extends Component {
  render () {
    return (
      <div>
        <PowerToolsHeader 
          title="PowerTools Solution Example" 
          repoUrl="https://github.com/power-tools" 
          description="Here's a description of the Power Tools Solution"/>
        <EntityList multiSelect={true} label="List of Entities" placehoder="Select Entities" />
      </div>
    )
  }
}
