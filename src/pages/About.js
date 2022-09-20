import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


const About = (props) => {
  return (
      <div className='wrap-about'>
        <Link sx={{ marginBottom: '10px' }} onClick={event => window.location.href = 'https://www.instagram.com/pittcolab/'}>
          <Typography variant="h5" sx={{ fontFamily: 'MonumentExtended', marginBottom: '20px' }}>
            @pittcolab
          </Typography>
        </Link>
        <Typography
          variant="h5"
          align="left"
          gutterBottom="true"
          paragraph="true"
          sx={{
            fontSize: '1.5rem',
            lineHeight: '29px',
          }}
        >
          We are a team of students disillusioned by the discussion of entrepreneurship on campus — we believe learning is best done by doing.
        </Typography>
        <Typography
          variant="h5"
          align="left"
          gutterBottom="true"
          paragraph="true"
          sx={{
            fontSize: '1.5rem',
            lineHeight: '29px',
          }}
        >
          We are making a bet on student potential — student builders have created this generation's most impactful products like Facebook, Dropbox, Reddit, and DoorDash. We are super bullish on what Pitt's talent can achieve.
        </Typography>
        <Typography
          variant="h5"
          align="left"
          gutterBottom="true"
          paragraph="true"
          sx={{
            fontSize: '1.5rem',
            lineHeight: '29px',
          }}>
          We’re talking about initiatives like Pitt's very own national startup career fair to help you land internships, software products with recurring revenue, and networking events to accelerate your college career.
        </Typography>
        <Typography
          variant="h5"
          align="left"
          gutterBottom="true"
          paragraph="true"
          sx={{
            fontSize: '1.5rem',
            lineHeight: '29px',
          }}>
          Inspired by
          <Typography>
            
          </Typography>
          <Link onClick={event =>  window.location.href='https://v1michigan.com/'}>
            V1 at the University of Michigan
          </Link>
        </Typography>
      </div>
  )
};

export default About;