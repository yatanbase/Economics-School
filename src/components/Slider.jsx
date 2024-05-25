import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
 import Slide1 from '../asset/home_slider_1.jpg';
 import Slide2 from '../asset/home_slider_2.jpg';
 import Slide3 from '../asset/home_slider_3.jpg';
import Slide4 from '../asset/home_slider_4.jpg';
import Slide5 from '../asset/home_slider_5.jpg';
import Slide6 from '../asset/home_slider_6.jpg';
import Slide7 from '../asset/home_slider_7.jpg';
import Slide8 from '../asset/home_slider_8.jpg';
import Slide9 from '../asset/home_slider_9.jpg';

const slideImages = [
 
  
  { url: Slide4, caption: '' },
  { url: Slide5, caption: '' },
  { url: Slide6, caption: '' },
  { url: Slide7, caption: '' },
  { url: Slide8, caption: '' },
  { url: Slide9, caption: '' },
  { url: Slide1, caption: '' },
  { url: Slide2, caption: '' },
  { url: Slide3, caption: '' },
  
];

function ImageSlider() {
  return (
    <div className="container" style={{width:'700px' , marginBottom:'10px'}}>
      <div className="row">
        <div className="col">
          <Slide arrows={true} dots={true}>
            {slideImages.map((slideImage, index) => (
              <div key={index} className="text-center">
                <img src={slideImage.url} alt={slideImage.caption} className="img-fluid" style={{ width: '900px', height: '400px' }}/>
                {slideImage.caption && <span className="slide-caption">{slideImage.caption}</span>}
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
