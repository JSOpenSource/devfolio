import React from 'react';
import './Experience.scss';

const experienceData = [
  {
    cardImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh3zML_DTss-gbT0H6IuXz1cG3rhhaMwzN-g&usqp=CAU',
    companyName: 'Trelleborg',
    companyLogo:
      'data:image/jpeg;base64,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',
    positon: 'Senior Software Developer',
    timePeriod: 'Mar 2019 – Present',
    description:
      'Design and development of web applications using various frameworks and technologies',
  },
  {
    cardImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh3zML_DTss-gbT0H6IuXz1cG3rhhaMwzN-g&usqp=CAU',
    companyName: 'TEKSystems',
    companyLogo:
      'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_da46088cbf2efc382645b200b10f69f3/teksystems.jpg',
    positon: 'Software Engineer',
    timePeriod: 'Mar 2018 – Feb 2019',
    description: 'Analysis and implentation of automation frameworks for web applications',
  },
  {
    cardImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh3zML_DTss-gbT0H6IuXz1cG3rhhaMwzN-g&usqp=CAU',
    companyName: 'Infosys',
    companyLogo:
      'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_d6a579aba3828b6100ccf44783c27c1e/infosys-limited.jpg',
    positon: 'Senior Systems Engineer',
    timePeriod: 'Feb 2013 – Dec 2017',
    description:
      'Development of the web applications across the different domains with multi language support',
  },
];

const Experience = () => {
  const Card = ({ data, index }) => {
    const { cardImage, companyName, companyLogo, positon, timePeriod, description } = data;
    return (
      <div className="card-wrapper" key={index}>
        <div className="card">
          <img className="card-img" src={`${cardImage}`} width="200" height="200" />
          <div className="card-profile-wrapper">
            <h2>{companyName}</h2>
            <img className="card-profile-img" src={`${companyLogo}`} width="110" height="110" />
          </div>
          <div className="card-items">
            <h3>{positon}</h3>
            <h5>{timePeriod}</h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="experience-section">
      <div className="flex">
        {experienceData.map((data, index) => (
          <Card data={data} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
