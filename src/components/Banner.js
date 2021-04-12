import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import React from 'react'
import { Button, SHAPE, SIZE } from "baseui/button";

const Banner = () => {
    return (
        <MDBContainer className="py-5 my-5">
            <MDBRow center>
                <MDBCol className="text-center" md="8" lg="8">
                    <h1 className="cursive display-3">Talent's Secret Source</h1>
                    <h4 className="h4-responsive">The best app to manage your talent - developed for you.</h4>
                    <p className="mb-5">Raw Real Talent manages peoples talent and delivers quality & perfection to the world.</p>
                    <Button
                    onClick={() => alert("click")}
                    shape={SHAPE.pill}
                    size={SIZE.large}
                    >
                        Try Raw Real Talent
                    </Button>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Banner
