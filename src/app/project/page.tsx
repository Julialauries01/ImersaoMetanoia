
import Project from '@/components/project';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Metanóia Project - Imersão Metanóia",
};


const index = () => {
  return (
    <Wrapper>
      <Project />
    </Wrapper>
  );
};

export default index;