import React from 'react';

function About() {
  return (
    <div
      id="about"
      style={{
        padding: '50px',
        backgroundColor: '#9d9fa1',
        width: '100%',
        height: '100vh', 
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column', 
        }}
      >
        <img
          src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t1.15752-9/462573399_1936215176900985_5358501367554795205_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE_-NbEzp4mjFotdcmyV0sWS3DJd5jINERLcMl3mMg0RH-l7XPjESxxHFld2JaAaRS5m869GQplRheCfPOBShwY&_nc_ohc=k1f5iXrvTvMQ7kNvgH-psUh&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&oh=03_Q7cD1QHvIg1oarxfs3UlusWg3IHeSTfDWsbWZedj-VUPC6uO_w&oe=6767A112"
          alt="Profile"
          style={{
            width: '200px',
            height: '200px',
            objectFit: 'cover', 
            border: '4px solid white', 
            marginBottom: '10px', 
          }}
        />
        <h2 style={{ margin: '0', fontSize: '1.5rem', textAlign: 'center' }}>Ernie Jesus Dadea</h2>
        <p style={{ marginTop: '10px', textAlign: 'center', maxWidth: '600px' }}>
          Hi! Welcome to my personal website, Feel free to scroll about me!
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <a href="https://www.facebook.com/ernie.dadea.3" target="_blank" rel="noopener noreferrer">
          <img
            src="\src\assets\image\X.jpeg"
            alt="Click here to verify"
            style={{
              width: '50px',
              height: '50px',
              objectFit: 'cover', 
              border: '3px solid white', 
              cursor: 'pointer', 
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default About;