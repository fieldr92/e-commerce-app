import React from 'react';
import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
      </div>
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">JACKETS</h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
      </div>
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">TRAINERS</h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
      </div>
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">WOMENS</h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
      </div>
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">SHOES</h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
