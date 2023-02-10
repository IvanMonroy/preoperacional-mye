import React from 'react'
import './BackgroundComponent.css';
import noImage from '../../Resources/images/no-image.png';

export const BackgroundComponent = ({backgroundSrc}) => {
  return (
    <div className='background-component' style={{background: `url(${backgroundSrc}) no-repeat center center`  }}>
    </div>
  )

}

BackgroundComponent.defaultProps ={
    backgroundSrc: noImage
}