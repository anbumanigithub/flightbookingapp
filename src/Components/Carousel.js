import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
 
  const Carousels= () => {
   return (
     <div>
      
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://images.click.in/classifieds/images/73/25_12_2017_12_21_37_8fea73c95823606bf146e9cc44ef09e4_bt12sfh0po.jpg'
          alt="First slide"
          width='97%'
           height='500px'
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.shutterstock.com/image-vector/travel-tourism-background-buying-booking-260nw-1092889481.jpg"
          alt="Second slide"
          width='97%'
           height='500px'
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://png.pngtree.com/background/20231101/original/pngtree-d-illustration-of-airline-booking-app-for-buying-tickets-or-checking-picture-image_5822655.jpg"
          alt="Third slide"
          width='97%'
           height='500px'
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   


     </div>
   )
 }

 export default Carousels;

 