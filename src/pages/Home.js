import React from 'react';
import { Typography, Button } from '@mui/material';

const Home = (props) => {
    return (
        <div className='base'>
            <div className='wrap-home'>
                <Typography variant="h2" component="h1" align='center'>
                    PITT
                </Typography>
                <Typography variant="h1" component="h2" align='center'>
                    COLAB
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '1.5rem',
                        marginRight: '27px',
                        marginLeft: '27px'

                    }}
                >
                    Because the next generation of technology products won’t be built in the classroom
                </Typography>
                <Button disableElevation="true"
                    variant="contained"
                    sx={{
                        marginTop: '18px'
                    }}
                    href="https://forms.gle/VLxUJxHjJSSPpJT98"
                >Join us</Button>
            </div>
        </div>
    )
};

export default Home;