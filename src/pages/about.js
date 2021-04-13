import { MDBCol, MDBContainer, MDBRow, MDBIcon } from 'mdbreact'
import React from 'react'
import { Button, SHAPE, SIZE } from "baseui/button";
import { Link } from 'react-router-dom';
import {
    Card,
    StyledBody,
  } from "baseui/card";
  
const AboutPage = () => {
    return (
        <MDBContainer className="py-5 my-5">
            <MDBRow center>
                <MDBCol className="text-center" md="8" lg="8">
                    <h1 className="cursive display-4">RRT by Lucas Allen</h1>
                    <h5 className="h5-responsive mb-4">
                        Designed for aspiring artists to share their gifts -- say hello to Real Raw Talent!
                    </h5>
                    <p className="lead mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies diam consequat ligula ornare lacinia. Ut id augue ut magna euismod venenatis. Mauris sollicitudin, felis a imperdiet tempus, est nulla ornare quam, vitae sollicitudin purus nibh eu urna. In hac habitasse platea dictumst. Duis non tristique urna, non auctor augue. Nulla malesuada, lorem vestibulum tincidunt hendrerit, lectus arcu vulputate lacus, et semper mi felis eget enim. Vivamus vel erat eu sem rutrum commodo at sit amet leo. Nulla nec facilisis quam, ut cursus felis. Praesent vel turpis nulla. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p className="lead mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies diam consequat ligula ornare lacinia. Ut id augue ut magna euismod venenatis. Mauris sollicitudin, felis a imperdiet tempus, est nulla ornare quam, vitae sollicitudin purus nibh eu urna. In hac habitasse platea dictumst. Duis non tristique urna, non auctor augue. Nulla malesuada, lorem vestibulum tincidunt hendrerit, lectus arcu vulputate lacus, et semper mi felis eget enim. Vivamus vel erat eu sem rutrum commodo at sit amet leo. Nulla nec facilisis quam, ut cursus felis. Praesent vel turpis nulla. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.                    
                    </p>
                    <Link to="/discover">
                        <Button
                        shape={SHAPE.pill}
                        size={SIZE.large}
                        >
                            Try Real Raw Talent
                        </Button>
                    </Link>
                </MDBCol>
            </MDBRow>
            <MDBRow className="py-5 my-5">
                <MDBCol>
                    <img src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="img-fluid"/>
                    <h1 className="h1-responsive cursive py-4 text-center">Promoting Talent, Give Love</h1>
                </MDBCol>
            </MDBRow>
            <MDBRow className="pt-5 pb-3 mb-3 mt-5">
                <MDBCol>
                    <a href="#linktodojohere">
                        <Card 
                            title="Dojo"
                            overrides={{
                                HeaderImage: {
                                    style: ({ $theme }) => ({
                                        width: `100%`
                                    })
                                    }
                                }}
                            headerImage="https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            >
                            <StyledBody>
                            It is an Interactive Training Management Platform that leverages modern technologies to present boring and tedious information in an interactive, fun and practical way. the DOJO way!

                            DOJO Gamification & Interactive Learning Management System which provides a framework for the Seito to Learn Katas with Senseis in the DOJO. Prizes include Black Belts and other Rewards and Attainment.
                            </StyledBody>
                        </Card>
                    </a>
                </MDBCol>
                <MDBCol>
                    <a href="#aitlinkhere">
                        <Card
                            title="DAMM"
                            overrides={{
                                HeaderImage: {
                                    style: ({ $theme }) => ({
                                        width: `100%`
                                    })
                                    }
                                }}
                            headerImage="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        >
                            <StyledBody>
                                Stands for Digital Asset Multimedia Management. A tool to manage your images, videos and etc digitaly.

                                Proin ut dui sed metus pharetra hend rerit vel non
                                mi. Nulla ornare faucibus ex, non facilisis nisl.
                                Proin ut dui sed metus pharetra hend rerit vel non
                                mi. Nulla ornare faucibus ex, non facilisis nisl.
                            </StyledBody>
                        </Card>
                    </a>
                </MDBCol>
            </MDBRow>
            <MDBRow className="py-3 my-3">
                <MDBCol>
                    <a href="#devasukilink">
                        <Card
                            title="Devasuki"
                            overrides={{
                                HeaderImage: {
                                    style: ({ $theme }) => ({
                                        width: `100%`
                                    })
                                    }
                                }}
                            headerImage="https://images.pexels.com/photos/4814633/pexels-photo-4814633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        >
                            <StyledBody>
                            Our passion for design, quality and style.
Capturing the essence of Ibiza, by Devasuki.
exotic, sensuous, world of glamour and conciouse fashion.

Born from the passion of the formidable partnership between a mother and daughter, who have travelled the world together, experiencing ancient cultures, capturing the colourful world of silks, beads, pearls, fabrics, heady scents and rich, luxurious textiles, along with the sheer beauty of the places they visited became inspired to create their very own label together.
                            </StyledBody>
                        </Card>
                    </a>
                </MDBCol>
                <MDBCol>
                    <a href="#dammlink">
                        <Card
                        title="Lucas-Handshake"
                        overrides={{
                            HeaderImage: {
                                style: ({ $theme }) => ({
                                    width: `100%`
                                })
                                }
                            }}
                        headerImage="https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        >
                            <StyledBody>
                            A Web Application with social integrations enabled to provide recognition to your content.
                                Proin ut dui sed metus pharetra hend rerit vel non
                                mi. Nulla ornare faucibus ex, non facilisis nisl.

                                Proin ut dui sed metus pharetra hend rerit vel non
                                mi. Nulla ornare faucibus ex, non facilisis nisl.
                                Proin ut dui sed metus pharetra hend rerit vel non
                                mi. Nulla ornare faucibus ex, non facilisis nisl.
                            </StyledBody>
                        </Card>
                    </a>
                </MDBCol>
            </MDBRow>
            <MDBRow center className="py-5 my-5">
                <MDBCol md="12" lg="12">
                    <h5 className="h5-responsive text-center font-weight-bold">Follow us</h5>
                </MDBCol>
                <MDBCol md="6" lg="6">
                    <MDBRow className="py-3 text-center">
                        <MDBCol size="4" md="4" lg="4">
                            <a className="black-text" href="#fb">
                                <MDBIcon size="2x" fab icon="facebook-f" />
                            </a>
                        </MDBCol>
                        <MDBCol size="4" md="4" lg="4">
                            <a className="black-text" href="#twitter">
                                <MDBIcon size="2x" fab icon="twitter" />
                            </a>
                        </MDBCol>
                        <MDBCol size="4" md="4" lg="4">
                            <a className="black-text" href="#ig">
                                <MDBIcon fab size="2x" icon="instagram" />
                            </a>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default AboutPage
