import React from 'react';
import './MainNews.css';
import SimpleImageSlider from 'react-simple-image-slider';

export default function MainNews() {
  const images = [
    {
      url: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MzBfMzEg%2FMDAxNjU5MTM4MjExODI5.R6orXFxODj8iXjnM6uKgE3M6ZacpUHJu6KkvwR4pDn4g.YQorRgcq4USUGpvWTgs7tzqYE7_KiTMqTSISeiVB7CAg.PNG.xtaiji83%2F254.png&type=a340',
    },
    {
      url: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMDFfNzQg%2FMDAxNjY0NjE2NjU2MTY5.a3qUFgIFfuhTcJipp8BdrHUd_cpTv4X8dwKhY8pUhK4g.DZ_DIdHcmVKAJJ7Fkv_doUPauFN-opyCFo3f4TfZ2Fkg.JPEG.olengelight%2F%25C0%25CC%25B9%25CC%25C1%25F6_08-min.jpg&type=a340',
    },
    {
      url: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMDhfMzQg%2FMDAxNjY1MjExMTQ0MjA0.-sOfWpID1y1rp4TcnIzt4M7RuSutQGYr8GRR-40k8Hkg.LYVdxfoebSiREQSXjhkEm11HxNP1x0eDO09wae4tdOQg.JPEG.psh6347%2Fh_57864258.jpg&type=a340',
    },
    {
      url: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMTJfMjA4%2FMDAxNjY4MjQwNzQwNjIy.AdrCWkCKOtflUDC1leC2LKCmFCX__cbHs6PlIbn3Kqwg.RC4crs3dfpkBPFNL1KrMq6bQHN832RgRPadFX5rxJbkg.JPEG.skjung114%2FScreenshot%25A3%25DF20221112%25A3%25AD170638.jpg&type=a340',
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
        <SimpleImageSlider width={`21%`} height={`32%`} style={style} images={images} showBullets={true} showNavs={true} />
      </div>
    </div>
  );
}
