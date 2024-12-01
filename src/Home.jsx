import React from 'react';

function Home() {
  return (
    <div
      id="about"
      style={{
        padding: '50px',
        backgroundColor: '#0d3634',
        width: '100%',
        height: '95vh', 
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
            width: '800px',
            height: '500px',
            objectFit: 'cover', 
            border: '4px solid white', 
            marginBottom: '10px', 
          }}
        />
        <h2 style={{ margin: '0', fontSize: '1.5rem', textAlign: 'center', color: 'white' }}>Ernie Jesus Dadea</h2>
        <p style={{ marginTop: '10px', textAlign: 'center', maxWidth: '600px', color: 'white' }}>
          "Here, I open up about the little moments, big ideas, and everything in between. My goal is to create a space where we can all connect, reflect, and grow together. Through my stories, I hope you find inspiration and a sense of belonging in this ever-evolving world."
        </p>
      </div>
    </div>
  );
}

export default Home;
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
