import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
var faker = require('faker');


class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render () {
    return (
      <BodyContainer>
        <TopContainer>
            <Location>
            Vinehouse, 100 years old Traditional Double room
            </Location>
            <ImageContainer>
            <Image className="HostImage" src={faker.image.avatar()}  height="64" width="64" />
            </ImageContainer>
        </TopContainer>

        <Experience>
          <First>
            <Title>
              Private room in house
            </Title>
            <Qualities>
            2 guests
            1 bedroom
            2 beds
            1 private bath
            </Qualities>
          </First>

          <Second>
            <Title>
              Great location
            </Title>
            <Qualities>
            95% of recent guests gave the location a 5-star rating.
            </Qualities>
          </Second>

          <Third>
            <Title>
              Great check-in experience
            </Title>
            <Qualities>
            95% of recent guests gave the check-in process a 5-star rating.
            </Qualities>
          </Third>

          <Fourth>
            <Title>
              Owner is a Superhost
            </Title>
            <Qualities>
              Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
            </Qualities>
          </Fourth>

        </Experience>
        <DescriptionContainer>
          <Line>
          - A guesthouse, 4 rooms in total, this is one of them.
          </Line>
          <Line>
          - Everyday, different Korean traditional Breakfast
          </Line>
          <Line>
          - 1-2 guests (3 guests are not available)
          </Line>
          <Line>
          - Private toilet/bathroom inside the room
          </Line>
          <Line>
          - Shared livingroom (breafkast is prepared here)
          </Line>
          <Line>
          - Located in the oldest village in Seoul, central location(near Gyeongbokgung Station), easily access to all historic and cultural places
          </Line>
          <Line>
          - Walk to Gyengbokgung Palace, Bukchon, Samcheong-dong, Insa-dong
          </Line>
          <Line>
          - Direct bus from the Incheon Airport
          </Line>

        </DescriptionContainer>
      </BodyContainer>
    )
  };
};

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 591px;
  margin-right: 40px;
`;

const TopContainer = styled.div`
  display: flex;
  height: 73px;
  margin: 10px 0;
`;

// border-bottom: solid;
// border-bottom-color: #E8E8E8;
// border-bottom-width: 0.5px;

const Location = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-style: normal;
  color: #404040;
  align-self: flex-start;
  margin: 20px 0;
  font-size: 24px;
  max-width: 60%;
`;

const ImageContainer = styled.div`
  margin: -10px 55px;
  align-self: flex-end;
`;

const Image = styled.img`
  margin-top: 10px;
  border-radius: 50%;
`;

const Experience = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid;
  border-bottom-color: #E8E8E8;
  border-bottom-width: 0.5px;
  padding: 10px;
  max-width: 591px;
  margin-right: 40px;
`;

const Qualities = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  color: #404040;
  font-size: 16px;
`;

const First = styled.div`
  margin: 10px 0;
`;


const Second = styled.div`
  margin: 10px 0;

`;

const Third = styled.div`
  margin: 10px 0;

`;

const Fourth = styled.div`
  margin: 10px 0;

`;

const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-style: normal;
  color: #404040;
`;

const DescriptionContainer = styled.div`
  margin: 20px 0;
`;

const Line = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 16px;
  margin: 10px 0;
`

const Amenities = styled.div`

`;

ReactDOM.render(<Description />, document.getElementById('description'));