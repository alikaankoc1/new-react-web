import React from 'react';

function Travel({ travel }) {
  if (!travel) return null; // travel gelmezse hata vermez

  const { id, title, description, image } = travel;

  return (
    <div className='travel'>
      <div>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <h5>{description}</h5>
      </div>
    </div>
  );
}

export default Travel;
