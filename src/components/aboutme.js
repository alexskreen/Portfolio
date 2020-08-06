import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div className="about-body">
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://scontent.fhio2-1.fna.fbcdn.net/v/t1.0-9/33101815_10211382429863767_877285119323275264_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=ZcRfRUbAQ1MAX_aRuDa&_nc_ht=scontent.fhio2-1.fna&oh=27cb27f7eccb3e471c6d8837d3ff9138&oe=5F3EABDC"
                className="avatar-img"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "0em" }}>Alex Skreen</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address:</h5>
            <p>21901 SW Blackfoot Drive</p>
            <p>Tualatin, Or 97062</p>
            <h5>phone:</h5>
            <p>(503) 548-7289</p>
            <h5>Email</h5>
            <p>skreenalex@gmail.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="about-right-col" col={8}>
            <h3>Hi, I'm Alex!</h3>
            <p>
              What do you write in an about me section that isn't already
              included in your resume? Well, I am an avid fan of the outdoors.
              You can find me snowboarding in the winter and hiking, fishing,
              golfing, or camping in the summer.
            </p>
            <br />
            <p>
              I absolutely love picking up new hobbies. I think thats why I
              decided to make the leap into tech. I love diving into new things
              and learning as much as I can about them. This has lead me to
              picking up skateboarding, drums, building computers, carpentry,
              weight lifting, etc. There are probably too many to list out.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
