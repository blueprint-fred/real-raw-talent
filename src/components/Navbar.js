import React, {useState} from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import brand from '../images/favicon-32x32.png';

    const NavigationBar = () => {
    const [collapse, setCollapse] = useState(false);
    return (
        <>
        <MDBNavbar color="light-color" className="p-4 z-depth-0" light expand="md">
            <MDBNavbarBrand>
            <img src={brand} alt=""/>
            <strong className="black-text px-2 font-weight-bold special-font">
                Raw Real Talent
                </strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={()=>setCollapse(!collapse)} />
            <MDBCollapse id="navbarCollapse3" isOpen={collapse} navbar>
            <MDBNavbarNav className="text-uppercase small font-weight-bold" right>
                <MDBNavItem className="px-lg-4 px-md-4 px-0">
                    <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="px-lg-4 px-md-4 px-0">
                    <MDBNavLink to="/about">About</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="px-lg-4 px-md-4 px-0">
                    <MDBNavLink to="/discover">Discover</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBDropdown className="px-lg-4 px-md-4 px-0">
                        <MDBDropdownToggle nav caret>
                        <div className="d-lg-inline d-inline d-md-inline">Apps</div>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-default">
                        <MDBDropdownItem href="#dojolinkhere">Dojo</MDBDropdownItem>
                        <MDBDropdownItem href="#zenlinkhere">Zen Garden</MDBDropdownItem>
                        <MDBDropdownItem href="#devasukilinkhere">Devasuki</MDBDropdownItem>
                        <MDBDropdownItem href="#aitlinkhere">AIT</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem className="px-lg-4 px-md-4 px-0">
                    <MDBNavLink to="/contact">Contact</MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
        </>
    )
}

export default NavigationBar