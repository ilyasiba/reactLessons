import React from 'react';

import ServiceBlock from './ServiceBlock';

import './Service.css';

const Service = () => {
  return (
    <div className='services'>
      <ServiceBlock pathToImg='images/home/services/web.png' text='web design & development' />
      <ServiceBlock pathToImg='images/home/services/app.png' text='app design & software' />
      <ServiceBlock pathToImg='images/home/services/branding.png' text='brand identity & graphic design' />
    </div>
  )
}

export default Service;
