import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Education() {
  return (
    <div
      id="education"
      style={{
        padding: '50px 20px',
        backgroundColor: '#013220', // green background for the section
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '40px',
          color: '#5754ff',
          letterSpacing: '1px',
        }}
      >
        My Education
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Elementary Section */}
        <div
          style={{
            padding: '20px',
            borderRadius: '15px',
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            backgroundColor: 'white', // White background for content contrast
          }}
        >
          <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#5754ff' }}>Elementary</h3>
          <p style={{ fontSize: '1.1rem', color: '#013220', marginBottom: '20px' }}>
            Tabooc Central School Graduation: March 2015
          </p>

          <Carousel style={{ backgroundColor: 'transparent' }}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t1.15752-9/467460283_1654335702156044_7122622365438454931_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHemIf_ZipqfQKSTtGxcsajlBVO_JrIjjyUFU78msiOPNx-cM5zrKhHVQzcjfXrfzaxtCvzZLxfgUUC82LVLWFx&_nc_ohc=WTM1ToYc2kUQ7kNvgHbLkO6&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&oh=03_Q7cD1QGpcdivy2j3zvE7jW1H_oXiLWZmrhYlVN93A6KeQ-8yBA&oe=67679CF6"
                alt="Elementary Image 1"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  backgroundColor: 'transparent',
                }}
              />
              <Carousel.Caption>
                <p>Elementary Image 1</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t1.15752-9/467465084_1087725006143211_7816802892559952915_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGq26odKWfQjTsok33fXWblAGlwYDBkA6oAaXBgMGQDqrIMlXLKcTOybuHE23TlcQUskpyJocj055g2rjYrxirc&_nc_ohc=VshtogOaux4Q7kNvgEK9oTa&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&oh=03_Q7cD1QFf-jL978xIRx3OgjNPVD7hJ-6tBqgvEHJq2S0i8kMQGA&oe=6767B3E2"
                alt="Elementary Image 2"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  backgroundColor: 'transparent',
                }}
              />
              <Carousel.Caption>
                <p>Elementary Image 2</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t1.15752-9/467465673_928667892020356_9115596917301806628_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG6KQvhTNsVs3_P5ZHR6LtiLMJSAtdlMK4swlIC12UwrowLSLhYiEWp9iBi9f12lhRvQhETYa4swOBs2iLpp9Fo&_nc_ohc=ZgBIyzWoIIkQ7kNvgFzrZCX&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&oh=03_Q7cD1QEgZLWf37AFcBHwf3MMsblHlJorC6JR1xBmBUhFubIHfQ&oe=676796CF"
                alt="Elementary Image 3"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  backgroundColor: 'transparent',
                }}
              />
              <Carousel.Caption>
                <p>Elementary Image 3</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Highschool Section */}
        <div
          style={{
            padding: '20px',
            borderRadius: '15px',
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            backgroundColor: 'white',
          }}
        >
          <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#5754ff' }}>Highschool</h3>
          <p style={{ fontSize: '1.1rem', color: '#013220', marginBottom: '20px' }}>
            Camarines Sur National Highschool Graduation: May 2021
          </p>

          <Carousel style={{ backgroundColor: 'transparent' }}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t1.15752-9/385559669_1041920940190140_8208293206348743845_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHF3JGHvbrK7NnwxFzznDUfR0tGGtda4GJHS0Ya11rgYsmZgZ3pO45lVQENHrf0HMyBAvs17lcNlfE_y8WYAWq_&_nc_ohc=szJLJWtBYJQQ7kNvgF7Lw27&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&oh=03_Q7cD1QHOD8CpQ86vCpTm-2pfvzD_7kB3JthFHqPtCnCN20RJdQ&oe=67678F7D"
                alt="Highschool Image 1"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  backgroundColor: 'transparent',
                }}
              />
              <Carousel.Caption>
                <p>Highschool Image 1</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t1.15752-9/467460289_592701946568002_1882644795066672202_n.png?_nc_cat=108&"
                alt="Highschool Image 2"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  backgroundColor: '
