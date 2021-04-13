import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <MDBFooter color="light-color" light className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow center className="black-text">
          <MDBCol md="6">
            <MDBRow className="pb-4" center>
              <MDBCol lg="2" md="2" size="3">
                <Link to="/" className="black-text">Dojo</Link>
              </MDBCol>
              <MDBCol lg="2" md="2" size="3">
                <Link to="/" className="black-text">Home</Link>
              </MDBCol>
              <MDBCol lg="2" md="2" size="3">
                <Link to="/about" className="black-text">About</Link>
              </MDBCol>
              <MDBCol lg="2" md="2" size="3">
                <Link to="/discover" className="black-text">Discover</Link>
              </MDBCol>
              <MDBCol lg="2" md="2" size="3">
                <Link to="/contact" className="black-text">Contact</Link>
              </MDBCol>
              <MDBCol lg="2" md="2" size="3">
                <Link to="/privacy-policy" className="black-text">Privacy Policy</Link>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} <a href="#lucasallenwebsitehere"> Real Raw Talent by Lucas Allen </a> · All Right Reserved. Read Real Raw Talent Privacy Policy and Terms of Service 
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;