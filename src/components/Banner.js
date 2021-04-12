import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import React from 'react'
import { Button, SHAPE, SIZE } from "baseui/button";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <MDBContainer className="py-5 my-5">
            <MDBRow center>
                <MDBCol className="text-center" md="8" lg="8">
                    <h1 className="cursive display-3">Talent's Secret Source</h1>
                    <h4 className="h4-responsive">The best app to manage your talent - developed for you.</h4>
                    <p className="mb-5">Real Raw Talent manages peoples talent and delivers quality & perfection to the world.</p>
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
        </MDBContainer>
    )
}

export default Banner
