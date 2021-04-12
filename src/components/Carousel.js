import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
              }
            }
          ]
    };
 
    return (
        <MDBContainer style={{ overflow: `hidden` }} fluid className="py-5">
            <MDBRow>
                <MDBCol>
                    <Slider {...settings}>
                        <MDBCol>
                            <img src="https://images.pexels.com/photos/2263082/pexels-photo-2263082.png?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="img-fluid"/>
                        </MDBCol>
                        <MDBCol className="d-none d-lg-inline-block d-md-inline-block">
                            <MDBRow className="pb-3">
                                <MDBCol>
                                    <img src="https://images.pexels.com/photos/3388899/pexels-photo-3388899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="img-fluid h-100"/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="pt-3">
                                <MDBCol>
                                    <img src="https://images.pexels.com/photos/1456642/pexels-photo-1456642.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="img-fluid h-100"/>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol>
                            <img src="https://images.pexels.com/photos/675960/mic-music-sound-singer-675960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="img-fluid"/>
                        </MDBCol>
                        <MDBCol className="d-none d-lg-inline-block d-md-inline-block">
                            <MDBRow className="pb-3">
                                <MDBCol>
                                    <img src="https://images.pexels.com/photos/2531728/pexels-photo-2531728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="img-fluid h-100"/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="pt-3">
                                <MDBCol>
                                    <img src="https://images.pexels.com/photos/167378/pexels-photo-167378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="img-fluid h-100"/>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol>
                            <img src="https://images.pexels.com/photos/2067677/pexels-photo-2067677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="img-fluid"/>
                        </MDBCol>
                        <MDBCol>
                            <img src="https://images.pexels.com/photos/1813241/pexels-photo-1813241.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="img-fluid"/>
                        </MDBCol>
                    </Slider>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Carousel
