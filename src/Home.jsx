import React from 'react';

function Home() {
  return (
    <div
      id="about"
      style={{
        padding: '50px',
        backgroundColor: '#0d3634',
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
          src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/454640708_1294964881888125_9195309958722090499_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGKGNIuIKx1MLo56GTVmLynkvKO-Hn43naS8o74efjediuS_ZYdvuPe0Xug-zAs9TwSFD7um4DNo8B0sYjFSgjh&_nc_ohc=50Cello_W-kQ7kNvgGvunTg&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=A-Q4-p55NG61U8ewyslPmMC&oh=00_AYDAYkWfMDRkQu0KaC5_7xcAHiA6dEQbOKI8-_sUoFcAMQ&oe=67460F5F"
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

export default Home;
