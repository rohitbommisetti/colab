import { Typography } from '@mui/material';
import React from 'react';



const About = (props) => {
  return (
    <div className='base'>
      <div className='wrap-about'>
        <Typography
          variant="body2"
          align="left"
          gutterBottom="true"
          paragraph="true"
          sx={{
            fontSize: '1.0rem',
            lineHeight: '29px',
          }}
        >
            We are a team of students disillusioned by the discussion of entrepreneurship on campus — we believe learning is best done by doing.
        </Typography>
        <Typography
                  variant="body2"
                  align="left"
                  gutterBottom="true"
                  paragraph="true"
                  sx={{
                    fontSize: '1.0rem',
                    lineHeight: '29px',
                  }}
                  >
            We are making a bet on student potential — student builders have created this generation's most impactful products like Facebook, Dropbox, Reddit, and DoorDash. We are super bullish on what Pitt's talent can achieve.
        </Typography>
        <Typography
                  variant="body2"
                  align="left"
                  gutterBottom="true"
                  paragraph="true"
                  sx={{
                    fontSize: '1.0rem',
                    lineHeight: '29px',
                  }}>
            We’re talking about initiatives like Pitt's very own national startup career fair to help you land internships, software products with recurring revenue, and networking events to accelerate your college career.
        </Typography>
      </div>
    </div>
  )
};

export default About;