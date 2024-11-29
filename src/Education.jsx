import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Education() {
  return (
    <div
      id="education"
      style={{
        padding: '100px',
        backgroundColor: '#0d3634',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '30px',
          color: '#5754ff',
        }}
      >
        My Education
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#5754ff' }}>Elementary</h3>
          <p style={{ fontSize: '1rem', color: '#333' }}>Tabuco Central School Graduation: March of 2015</p>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t1.15752-9/467460283_1654335702156044_7122622365438454931_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHemIf_ZipqfQKSTtGxcsajlBVO_JrIjjyUFU78msiOPNx-cM5zrKhHVQzcjfXrfzaxtCvzZLxfgUUC82LVLWFx&_nc_ohc=WTM1ToYc2kUQ7kNvgHbLkO6&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&oh=03_Q7cD1QGpcdivy2j3zvE7jW1H_oXiLWZmrhYlVN93A6KeQ-8yBA&oe=67679CF6"
                alt="Elementary 1"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
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
                alt="Elementary 2"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
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
                alt="Elementary 3"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Elementary Image 3</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#5754ff' }}>Highschool</h3>
          <p style={{ fontSize: '1rem', color: '#333' }}>Camarines Sur National Highschool Graduation: May of 2021</p>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t1.15752-9/385559669_1041920940190140_8208293206348743845_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHF3JGHvbrK7NnwxFzznDUfR0tGGtda4GJHS0Ya11rgYsmZgZ3pO45lVQENHrf0HMyBAvs17lcNlfE_y8WYAWq_&_nc_ohc=szJLJWtBYJQQ7kNvgF7Lw27&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&oh=03_Q7cD1QHOD8CpQ86vCpTm-2pfvzD_7kB3JthFHqPtCnCN20RJdQ&oe=67678F7D"
                alt="Highschool 1"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Highschool Image 1</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t1.15752-9/467460289_592701946568002_1882644795066672202_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEMW4eR8EPhBtTtABxlVhW8QxuDube7JBpDG4O5t7skGhks5PNPgCQfMcZ1iUfIzvsZ-n9yu23dFkLekM3icgf8&_nc_ohc=hO0ql58SxycQ7kNvgFBOW4z&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&oh=03_Q7cD1QG074m0Fa8C1X62MS57Yt54g0jTemEOP27rDzBEjNPDaA&oe=676797B5"
                alt="Highschool 1"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Highschool Image 2</p>
              </Carousel.Caption>
            </Carousel.Item>
          
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t1.15752-9/467465673_928667892020356_9115596917301806628_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG6KQvhTNsVs3_P5ZHR6LtiLMJSAtdlMK4swlIC12UwrowLSLhYiEWp9iBi9f12lhRvQhETYa4swOBs2iLpp9Fo&_nc_ohc=ZgBIyzWoIIkQ7kNvgFzrZCX&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&oh=03_Q7cD1QEgZLWf37AFcBHwf3MMsblHlJorC6JR1xBmBUhFubIHfQ&oe=676796CF"
                alt="High School 3"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>High School 3</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#5754ff' }}>College</h3>
          <p style={{ fontSize: '1rem', color: '#333' }}>Naga College Foundation Inc. Graduation: (Unknown)</p>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t1.15752-9/467458716_358634437309042_3018473439349220060_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG--0WMRNL0q3OiyjIQgpzf8JetMyOqqrrwl60zI6qqurDrWPXI3a-UWGTl7ygNpW2ZQsAUwmBRPGQntQmH2Gb6&_nc_ohc=gWkpOauNPFMQ7kNvgEQBk_-&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&oh=03_Q7cD1QFsNGXizMVoljTBPmUSr1vq8_jVcvnC3YGrc3yqk96KcA&oe=6767B3A0"
                alt="College 1"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>College Image 1</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t1.15752-9/467458077_1686108245668553_8391252354241973300_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEFLn8RW6GkD8fr2tmEvZN-Qtvv8YjT951C2-_xiNP3nVY4fiqYYG8FeknVs74v0w9arn5sGbxb619YaEkVHn6-&_nc_ohc=742Cl-CZiwQQ7kNvgH2iH1Y&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&oh=03_Q7cD1QEhcN6mvl4GXmjdS2gVWIGRT0IHYaKD9pHotdWXSSNp_w&oe=6767AA0A"
                alt="College 2"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>College Image 2</p>
              </Carousel.Caption>
            </Carousel.Item>
          
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t1.15752-9/467465673_928667892020356_9115596917301806628_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG6KQvhTNsVs3_P5ZHR6LtiLMJSAtdlMK4swlIC12UwrowLSLhYiEWp9iBi9f12lhRvQhETYa4swOBs2iLpp9Fo&_nc_ohc=ZgBIyzWoIIkQ7kNvgFzrZCX&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&oh=03_Q7cD1QEgZLWf37AFcBHwf3MMsblHlJorC6JR1xBmBUhFubIHfQ&oe=676796CF"
                alt="College 3"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>College Image 3</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Education;
