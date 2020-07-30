import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'
import Education from './education';
import Experience from './experience'
import Skills from './skills'


class Resume extends Component {
  render() {
    return (
      <div className="resume-body">
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
          <Cell className="resume-right-col" col={8}>
            <h3>Experience</h3>

            <Experience
              startYear={2010}
              endYear={2020}
              companyName="Theorem Agency"
              companyPosition="Software Engineer Intern"
              companyDescription1="Created new Pre/Post game site for the Portland Trailblazers using Drupal"
              companyDescription2="Developed internal HR Portal using React"
              companyDescription3="Updated Ford and Hyundai sites using DealerOn CMS"
            />

            <Experience
              startYear={2019}
              endYear={2020}
              companyName="Deltek"
              companyPosition="Account Executive"
              companyDescription1="Specialized in helping small to mid-sized firms streamline their ERP and project management systems"
              companyDescription2="Full cycle SaaS sales including prospecting, technical demo, services, and implementation"
              companyDescription3="Developed new email marketing plan implemented by the team to drive more opportunities"
            />

            <Experience
              startYear={2014}
              endYear={2019}
              companyName="ShopKeep"
              companyPosition="Senior Account Executive"
              companyDescription1="Generated over 6 million net bookings by cultivating and maintaining relationships with SMBs and franchises."
              companyDescription2="Trained 15 sales development representatives and new specialists."
              companyDescription3="Assisted management and sales analytics teams in creating a new consultative sales strategy."
            />

            <Experience
              startYear={2013}
              endYear={2014}
              companyName="Enterprise Rent-A-Car"
              companyPosition="Assistant Manager"
              companyDescription1="Promoted into the Best Person Program at the Portland International Airport."
              companyDescription2="Top 10 of 100+ trainees in sales every month in Oregon and Washington."
              companyDescription3="Passed Management Qualification Interview and completed Management Trainee Program"
            />

            {/* Change the color of this hr to something blueish */}
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Education</h2>

            <Education
              startYear={2020}
              endYear={2020}
              schoolName="Epicodus"
              schoolDescription1="Certificate in mobile and web development."
              schoolDescription2="800 hours of pair  programing."
              schoolDescription3="Passed weekly code reviews for individual and team projects."
            />

            <Education
              startYear={2008}
              endYear={2013}
              schoolName="Oregon State University"
              schoolDescription1="BS in Marketing"
              schoolDescription2="President of the Oregon State Hockey Club"
              schoolDescription3="Vice President of Phi Kappa Psi Fratnerity"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills
              skill1="HTML"
              skill2="CSS/SCSS"
              skill3="Javascript"
              skill4="React"
              skill5="Redux"
              skill6="Unity"
              skill7="NodeJS"
              skill8="jQuery"
              skill9="Git"
              skill10="Npm"
              skill11="Webpack"
              skill12="C#"
              skill13="Salesforce"
              skill14="Microsoft Teams"
              skill15="Asana"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume
