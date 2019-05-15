import React from 'react';
import './ListItem.css';

const ListItem = ({
  name,
  lastName,
  phone,
}) => (
  <div className="list-item">
    <img src="https://dummyimage.com/600x400/000/fff.jpg&text=21423" alt="img"/>
    <div className="info">
      <div>{name} {lastName}</div>
      <div>{phone}</div>
    </div>
    <div className="checkbox-container">
      <input type="checkbox" id={name} />
      <label htmlFor={name} />
    </div>
  </div>
);

ListItem.propTypes = {

};

export default ListItem;