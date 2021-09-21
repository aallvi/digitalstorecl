
import React from 'react';
import { Carousel } from 'antd';


const contentStyle = {
  height: '160px',
  color: 'white',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'black',
};

export const Banner = () => (

<div className="contenedor-portada">
        <Carousel autoplay>
            <div>
            <h3 style={contentStyle}>1</h3>
            </div>
            <div>
            <h3 style={contentStyle}>2</h3>
            </div>
            <div>
            <h3 style={contentStyle}>3</h3>
            </div>
            <div>
            <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>

  </div>
);
