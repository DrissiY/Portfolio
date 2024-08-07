import React from 'react';
import { Link } from 'react-router-dom';
import './Myworks.css';

const works = [
  {
    id: '1',
    title: 'Teilen',
    job: 'Design & Development',
    picture: 'https://via.placeholder.com/300x200?text=Teilen',
  },
  {
    id: 'G',
    title: 'Gnio',
    job: 'Design & Development',
    picture: 'https://via.placeholder.com/300x200?text=Gnio',
  },
  {
    id: 'Lirikai',
    title: 'Hotbids',
    job: 'Design',
    picture: 'https://via.placeholder.com/300x200?text=Hotbids',
  },
  {
    id: 'lba',
    title: 'LBA',
    job: 'Design & Development',
    picture: 'https://via.placeholder.com/300x200?text=LBA',
  },
];

const Myworks = () => {
  return (
    <div className="works-container">
      {works.map((work) => (
        <div key={work.id} className="work-card">
          <Link to={`/work/${work.id}`} className="work-link">
            <img src={work.picture} alt={work.title} className="work-image" />
            <div className="work-details">
              <h3>{work.title}</h3>
              <p>{work.job}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Myworks;
