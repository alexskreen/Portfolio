import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.companyName}</h4>
          <h5 style={{ marginTop: "0px" }}>{this.props.companyPosition}</h5>
          <ul>
            <li>{this.props.companyDescription1}</li>
            <li>{this.props.companyDescription2}</li>
            <li>{this.props.companyDescription3}</li>
          </ul>
        </Cell>
      </Grid>
    );
  }
}

export default Experience