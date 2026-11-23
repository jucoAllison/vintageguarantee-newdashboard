import React from 'react';
import Classes from './eachBox.module.css';

const EachBox = ({label, value}) => {
  return (
    <div className={Classes.eachBoxCover}>
      <div className={Classes.label}>{label}</div>
      <div className={Classes.value}>{value}</div>
    </div>
  );
};

export default EachBox;
