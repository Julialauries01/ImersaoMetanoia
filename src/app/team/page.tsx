
import Team from '@/components/team';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Metanóia Team - Imersão Metanóia",
};

const index = () => {
  return (
    <Wrapper>
      <Team />
    </Wrapper>
  );
};

export default index;