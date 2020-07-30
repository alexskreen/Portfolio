import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'


class Resume extends Component {
  render() {
    return(
      <div className="resume-body">
        <Grid className="resume-grid">
          <Cell classname='resume-description' col={4}>
            <img
              src="https://scontent.fhio2-1.fna.fbcdn.net/v/t1.0-9/33101815_10211382429863767_877285119323275264_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=ZcRfRUbAQ1MAX_aRuDa&_nc_ht=scontent.fhio2-1.fna&oh=27cb27f7eccb3e471c6d8837d3ff9138&oe=5F3EABDC"
              className="avatar-img"
            />
            <h2>Alex Skreen</h2>
            <h3>Programmer</h3>
            <hr />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries</p>
          </Cell>
          <Cell className='resume-resume' col={8}>
            <h2>Education</h2>
          </Cell>

        </Grid>
      </div>
    )
  }
}

export default Resume
