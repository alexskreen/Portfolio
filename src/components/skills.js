import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <li>{this.props.skill1}</li>
          <li>{this.props.skill2}</li>
          <li>{this.props.skill3}</li>
          <li>{this.props.skill4}</li>
          <li>{this.props.skill5}</li>
        </Cell>

        <Cell col={4}>
          <li>{this.props.skill6}</li>
          <li>{this.props.skill7}</li>
          <li>{this.props.skill8}</li>
          <li>{this.props.skill9}</li>
          <li>{this.props.skill10}</li>
        </Cell>

        <Cell col={4}>
          <li>{this.props.skill11}</li>
          <li>{this.props.skill12}</li>
          <li>{this.props.skill13}</li>
          <li>{this.props.skill14}</li>
          <li>{this.props.skill15}</li>
        </Cell>
      </Grid>
    );
  }
}

export default Skills