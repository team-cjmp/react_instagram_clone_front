import React from 'react';
const css = require('./icon.scss');
const Icon = (props) => {
  const { iconName, className } = props;
  return <i className={`${css.iconComponent} ${css[iconName]} ${className}`}> </i>;
};

export default Icon;
