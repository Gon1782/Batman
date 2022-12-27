import React from 'react';
import './MainNews.css';
import SimpleImageSlider from 'react-simple-image-slider';

export default function MainNews() {
  const images = [
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQA-VHw0O4c4ilEgXG5WMhQc37SL7pCYusOA&usqp=CAU',
    },
    {
      url: 'https://images.performgroup.com/di/library/omnisport/c/67/son-heung-min_1g65w756zbr0s1ue2gtxzrjvjh.jpg?t=-1719411756&w=640&h=360',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO3SUbJ5nJsFeCQgfixfiEc6PWDhZi08pdFQ&usqp=CAU',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaje47kWmcovzMo-o7JzhchN3EZQ6J1wLlJw&usqp=CAU',
    },
  ];
  const style = {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: '30px',
  };

  return (
    <div className='news_body'>
      <div className='news_title'>Trending photos</div>
      <div className='news_main'>
        <SimpleImageSlider width={`21%`} height={`34%`} style={style} images={images} showBullets={true} showNavs={true} />
      </div>
    </div>
  );
}
