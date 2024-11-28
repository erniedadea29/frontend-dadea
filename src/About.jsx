import React from 'react';

function About() {
  return (
    <div
      id="about"
      style={{
        padding: '70px 20px',
        background: '#013220', // Dark background
        fontFamily: '"Poppins", sans-serif',
        color: '#F3F4F6',
      }}
    >
      {/* Title Section */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '50px',
        }}
      >
        <h2
          style={{
            fontSize: '2.8rem',
            fontWeight: 'bold',
            color: '#3B82F6', // Bright accent color
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          About Me
        </h2>
        <p
          style={{
            fontSize: '1.1rem',
            color: '#9CA3AF',
            marginTop: '10px',
          }}
        >
          Learn more about who I am and what drives me forward.
        </p>
      </div>

      {/* Content Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Card Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '40px',
            justifyContent: 'center',
          }}
        >
          {/* Image Card */}
          <div
            style={{
              flex: '1',
              minWidth: '300px',
              maxWidth: '400px',
              position: 'relative',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            <img
              src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t1.15752-9/462573399_1936215176900985_5358501367554795205_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE_-NbEzp4mjFotdcmyV0sWS3DJd5jINERLcMl3mMg0RH-l7XPjESxxHFld2JaAaRS5m869GQplRheCfPOBShwY&_nc_ohc=k1f5iXrvTvMQ7kNvgH-psUh&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&oh=03_Q7cD1QHvIg1oarxfs3UlusWg3IHeSTfDWsbWZedj-VUPC6uO_w&oe=6767A112"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                padding: '15px',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                textAlign: 'center',
                color: '#F3F4F6',
              }}
            >
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                }}
              >
               Ernie Jesus Dadea
              </h3>
              <p style={{ fontSize: '0.9rem' }}>Budding Programmer | Tech Enthusiast</p>
            </div>
          </div>

          {/* Text Card */}
          <div
            style={{
              flex: '2',
              backgroundColor: '#1F2937',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            <p
              style={{
                fontSize: '1.2rem',
                marginBottom: '15px',
                lineHeight: '1.8',
              }}
            >
              Hi, I’m <strong style={{ color: '#3B82F6' }}>Ernie Jesus Dadea</strong>, a passionate learner and a beginner in the world of coding. Born on{' '}
              <strong>March 29, 2002</strong>, and raised in the inspiring town of{' '}
              <strong>Tabuco Naga City</strong>, I’ve always been fascinated by technology and its ability
              to transform lives.
            </p>
            <p
              style={{
                fontSize: '1.2rem',
                marginBottom: '15px',
                lineHeight: '1.8',
              }}
            >
              My focus is on learning <strong style={{ color: '#3B82F6' }}>Computer Science</strong>, unraveling how the digital
              world operates, and contributing to meaningful projects. I’m driven by the belief that perseverance and
              progress matter more than perfection.
            </p>
            <p
              style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
              }}
            >
              In my free time, you’ll find me <strong>exploring the outdoors</strong> on my bike or spending time with my pets,
              which helps refresh my mind and spark new ideas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
