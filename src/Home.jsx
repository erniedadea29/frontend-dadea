import React from 'react';

function Home() {
  return (
    <div
      id="about"
      style={{
        padding: '50px',
        backgroundColor: '#000000', // Teal background
        width: '100%',
        height: '100vh',
        boxSizing: 'border-box',
        fontFamily: 'Arial, sans-serif', // Use a clean font
        color: 'white', // White text color for readability
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center', // Center align all text
        }}
      >
        <img
          src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/454640708_1294964881888125_9195309958722090499_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGKGNIuIKx1MLo56GTVmLynkvKO-Hn43naS8o74efjediuS_ZYdvuPe0Xug-zAs9TwSFD7um4DNo8B0sYjFSgjh&_nc_ohc=50Cello_W-kQ7kNvgGvunTg&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=A-Q4-p55NG61U8ewyslPmMC&oh=00_AYDAYkWfMDRkQu0KaC5_7xcAHiA6dEQbOKI8-_sUoFcAMQ&oe=67460F5F"
          alt="Profile"
          style={{
            width: '150px', // Smaller image for better layout
            height: '150px',
            objectFit: 'cover',
            borderRadius: '50%', // Circular border for profile picture
            border: '4px solid white',
            marginBottom: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Soft shadow for depth
          }}
        />
        <h2
          style={{
            margin: '0',
            fontSize: '2rem',
            fontWeight: '600', // Bold name
            color: 'white',
          }}
        >
          Ernie Jesus Dadea
        </h2>
        <p
          style={{
            marginTop: '15px',
            fontSize: '1.2rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: 'white',
          }}
        >
          Hi! Welcome to my personal website. Feel free to scroll about me!
        </p>
      </div>

      

      {/* Add hover effect on image */}
      <style>
        {`
          a:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); // Hover effect for scale
          }
        `}
      </style>
    </div>
  );
}

export default Home;
