import React from 'react';
import './MainNews.css';
// import messi from '../../../../assets/img/messi.png';
// import haaland from '../../../../assets/img/haaland.png';
import SimpleImageSlider from 'react-simple-image-slider';

export default function MainNews() {
  const images = [{ url: 'https://images.fotmob.com/image_resources/playerimages/30981.png' }, { url: 'images/haaland.png' }];
  const style = {
    width: '100%',
    height: '100%',
  };
  return (
    <div className='news_body'>
      <div className='news_title'>Tending photos</div>
      <div className='news_main'>
        <div className='news_img'>
          <SimpleImageSlider width={`15%`} height={`30%`} style={style} images={images} showBullets={true} showNavs={true} />
        </div>
      </div>
    </div>
  );
}
