import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

const partnersData = [
  {
    id: 1,
    name: "Bhaskar Margaj",
    pose: "Chief Executive Officer (CEO), Professor Practise (Pimpri-Chinchwad University)",
    about: "Hailing from Pune, Bhaskar is a commerce and management graduate by qualification and has a rich and diverse experience of above 18+ years in the education Industry across its entire value chain and has worked for various prominent brands such as FLAME University, ICFAI University, Genovate India, Seed Infotech, Wigan & Leigh (Affiliated To Wigan & Leigh, United Kingdom), Talentedge (An Upgrad Company) to name a few. He’s worked very closely with the C-Suite executives, University Vice Chancellor’s, Director's, renowned academicians, social reformers, political reformers, and eminent personalities in India to transform student’s educational journey and his life experience and today there are countless students who are torchbearers of various responsible corporate and academic sectors. he has achieved proven quantifiable and verifiable results and has developed immense goodwill with students, universities, colleges, institutes, schools, and the corporate community.",
    image: "images/OurTeam/Bhaskar.jpg"
  },
  {
    id: 2,
    name: "Manoj Pillaai",
    pose: "Chief Business Officer",
    about: "Hailing from Mumbai, Maanoj is an Engineer and marketer by qualification and an industry veteran with almost 25+ years of experience with niche service industries and in functional aspects of Sales, channel management, business development and strategy. He has managed mid and large sized clients resulting in 50-60% gross profit. As an entrepreneur he is working with growth start-ups and helping them scale their operations.",
    image: "images/OurTeam/Manoj.png"
  },
  {
    id: 3,
    name: "Sachin Itkar",
    pose: "Advisor",
    about: "Mr. Itkar is a graduate pharmacist and a postgraduate with distinction, in management studies, M.Phil degree in Intellectual Property Management & MSc in Healthcare & Hospital Administration. He holds five patents to his credit in the area of Pharmaceutical packaging Technology. Written four books on 'Forensic Pharmacy' on 'Pharmaceutical Management' on 'Drug Regulatory Affairs' and on 'Essentials of Clinical Research”. He works as advisor / member of board of companies in India, Israel, USA. He was Advisor to Alliance for US India Business (AUSIB) 2009 to 2012 and was instrumental in organizing first Indo-US Education Conclave.He is a recipient of the 'Young Achievers Award' & special appreciation award 'Maharashtra – 50' in youth category for contribution in industry-socio-education activities 2011.Working on committees of various organisations like Alliance for US-India Business (AUSIB), Indian Drug Manufacturers Association (IDMA), Indian Pharmaceutical Association (IPA) etc to name a few.",
    image: "images/OurTeam/Sachin.jpeg"
  },
  {
    id: 4,
    name: "Dr. Tushar Dagade",
    pose: "Chief Consulting Knowledge Enabler",
    about: "Prof. (Dr.) Tushar Dagade is an Academician, International Awardee, Motivational Speaker, Research Guide, Corporate Trainer and Coach, career counsellor in the last 20 years. He has worked in various capacities such as Group Director, director in various management institutes. He has a forte in the field of education accreditations, academic administration &consultancies in research, teaching-learning, and quality improvement initiatives for or bringing excellence in Academics. In his tenure of 21.6 years, he has been contributed towards the grooming, holistic development of the Ph.D. Scholars and dynamic managers and leaders who are working in top organizations across flora and fauna.",
    image: "images/OurTeam/Tushar.jpg"
  }
];

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  perspective: 1000px;
  gap: 20px;
`;

const Card = styled.div`
  width: 350px;
  height: 540px;
  text-align: justify;
  padding: 5px;
  position: relative;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  cursor: pointer;
  margin-bottom: 30px;
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  padding: 10px;
  flex-direction: column;
  text-align: justify;
  background-color: #f0bc5e;
  border-radius: 8px;
  transform: rotateY(180deg);
  overflow-y: auto;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Name = styled.h3`
  margin-bottom: 10px;
  color: ${({ front }) => (front ? '#333' : '#333')};
  text-align: center;
`;

const Pose = styled.p`
  color: ${({ front }) => (front ? '#555' : '#555')};
  font-size: 20px;
  text-align: center;
`;

const About = styled.p`
  color: #555;
`;

const Button = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  color: #007bff;
  cursor: pointer;
`;

const OurIntro = () => {
  const [flippedCardId, setFlippedCardId] = useState(null);

  const handleClick = (partnerId) => {
    if (flippedCardId === partnerId) {
      setFlippedCardId(null);
    } else {
      setFlippedCardId(partnerId);
    }
  };

  return (
    <div>
      <h1 className="text-center">Our Leadership</h1>
      <CardContainer>
        {partnersData.map((partner) => (
          <Card
            key={partner.id}
            onClick={() => handleClick(partner.id)}
            style={{ transform: flippedCardId === partner.id ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
          >
            <Front>
              <Image src={partner.image} alt={partner.name} />
              <Name front>{partner.name}</Name>
              <Pose front>
                {partner.pose.split(',').map((line, index) => (
                  <span key={index}>{line}<br /></span>
                ))}
              </Pose>
              <Button onClick={() => handleClick(partner.id)}>
                <FaArrowRight size={24} color='#555' />
              </Button>
            </Front>
            <Back>
              <Name>{partner.name}</Name>
              <Pose>{partner.pose}</Pose>
              <About>{partner.about}</About>
            </Back>
          </Card>
        ))}
      </CardContainer>
    </div>
  );
}

export default OurIntro;
