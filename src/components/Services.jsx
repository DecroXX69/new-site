import React, { useEffect } from 'react';
import PageHeader from './PageHeader';
import ServicesPage from '../subcomponents/ServicesPage';


const Services = () => {
  useEffect(() => {
    document.title = "Learnedge - Services";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <PageHeader title={"SERVICES"} image={"images/hero/hero2.webp"} />
      <ServicesPage/>
    </div>
  );
};

export default Services;
