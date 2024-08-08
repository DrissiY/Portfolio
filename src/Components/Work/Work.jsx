// Work.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, styled, Container } from '@mui/material';
import './Work.css';

const Work = () => {
  const Works = [
    {
      id: "teilen",
      title: 'Teilen',
      job: 'Design & Development',
      picture: '',
    },
    {
      id: "lba",
      title: 'Lba',
      job: 'Design & Development',
      picture: '',
    },
    {
      id: "lirikai",
      title: 'Lirikai',
      job: 'Design & Development',
      picture: '',
    },

  ];

  const CustomContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'black',
    padding: '2rem',

    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      flexDirection: 'column',
    },
  }));

  return (
    <Box>
      <CustomContainer>
        <p style={{ color: '#949494', borderBottom: '1px solid #d7d7d7' }}>
          Work
        </p>
        <div>
          {Works.map((item) => (
            <div key={item.id} className="work">
              <Link to={`/work/${item.id}`} className="custom-link">
                <h1 style={{ fontSize: '100px' }}>{item.title}</h1>
              </Link>
              <p>{item.job}</p>
            </div>
          ))}
        </div>
      </CustomContainer>
    </Box>
  );
};

export default Work;
