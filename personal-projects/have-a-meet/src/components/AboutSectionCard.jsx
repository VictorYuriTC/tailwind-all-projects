import React from 'react'
import useGetUserFromAPI from '../hooks/useGetUserFromAPI';

function AboutSectionCard(props) {
  const user = useGetUserFromAPI();
  console.log(user);
  return (
    <div className=''>
    </div>
  );
}
export default AboutSectionCard;