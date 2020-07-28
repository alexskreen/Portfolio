import React, { Component } from "react";
import {Tab, Tabs} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 0 };
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Unity</Tab>
          <Tab>JavaScript</Tab>
          <Tab>C#</Tab>
          <Tab>MySQL</Tab>
        </Tabs>
      </div>
    );
  }
}

export default Projects;
