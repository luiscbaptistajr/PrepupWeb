// import img001 from "/images/bts/PUBTS-27.jpg"
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Gallery = () => {

    

    // const responsive = {
    //     superLargeDesktop: {
    //       // the naming can be any, depends on you.
    //       breakpoint: { max: 4000, min: 1024 },
    //       items: 2
    //     },
    //     desktop: {
    //       breakpoint: { max: 1024, min: 768 },
    //       items: 3
    //     },
    //     tablet: {
    //       breakpoint: { max: 768, min: 464 },
    //       items: 1
    //     },
    //     mobile: {
    //       breakpoint: { max: 464, min: 0 },
    //       items: 1
    //     }
    // };

    // const imgItems = ['/images/bts/PUBTS-27.jpg', '/images/bts/PUBTS-24.jpg'];

    // return (
    //     <>
    //     <Carousel responsive={responsive} />
    //         {imgItems.map((item, index) => (
    //                 // <div style={{ backgroundImage: `url${item.imgSrc}` }} key={key}></div>
    //                 <div style={{ backgroundImage: `url${(item)}` }} key={index}>{item}</div>
    //         ))}
    //     <Carousel />
    //     </>
    // );

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5, // Number of items to show for large screens
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3, // Number of items to show for desktops
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1, // Number of items to show for tablets
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1, // Number of items to show for small screens
        },
      };

      {/* <div><img src='./images/bts/PUBTS-27.jpg' className="w-full" alt="React logo" /></div>
              <div><img src='./images/bts/PUBTS-26.jpg' className="w-full" alt="React logo" /></div>
              <div><img src='./images/bts/PUBTS-24.jpg' className="w-full" alt="React logo" /></div>
              <div><img src='./images/bts/PUBTS-23.jpg' className="w-full" alt="React logo" /></div>
              <div><img src='./images/bts/PUBTS-09.jpg' className="w-full" alt="React logo" /></div>
              <div><img src='./images/bts/PUBTS-06.jpg' className="w-full" alt="React logo" /></div>
              <div><img src='./images/bts/PUBTS-11.jpg' className="w-full" alt="React logo" /></div>
              <div><img src='./images/bts/PUBTS-02.jpg' className="w-full" alt="React logo" /></div>
              <div><img src='./images/bts/PUBTS-03.jpg' className="w-full" alt="React logo" /></div>
              <div><img src='./images/bts/PUBTS-04.jpg' className="w-full" alt="React logo" /></div>
              <div><img src='./images/bts/PUBTS-05.jpg' className="w-full" alt="React logo" /></div> */}
    
      const items = [
        'images/bts/PUBTS-28.jpg', 
        'images/bts/PUBTS-26.jpg', 
        'images/bts/PUBTS-24.jpg', 
        'images/bts/PUBTS-23.jpg', 
        'images/bts/PUBTS-11.jpg',
        'images/bts/PUBTS-09.jpg',
        'images/bts/PUBTS-05.jpg',
        'images/bts/PUBTS-04.jpg',
        'images/bts/PUBTS-01.jpg',
    ];
    
      return (
        <div>
            <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]} autoPlay={true} infinite={true}>
            {items.map((item, index) => (
                    <div key={index} className='galleryItem' style={{ backgroundImage: `url(${(item)})` }}>
                    {/* {item} */}
                    </div>
                ))}
            </Carousel>

            <p className='text-center pt-1 lg:hidden'>Swipe to see more photos</p>
        </div>
      );
}

export default Gallery;
