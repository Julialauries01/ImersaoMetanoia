

import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import ServiceDetailsArea from './ServiceDetailsArea';
import FooterOne from '@/layouts/footers/FooterOne';

const ServiceDetails = () => {
  return (
    <>
      <Breadcrumb title="Service Details" subtitle="Service Details" />
      <ServiceDetailsArea />
      <FooterOne />
    </>
  );
};

export default ServiceDetails;