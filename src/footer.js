import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="White" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-right">
        <MDBRow>
          <MDBCol md="6">
              <h4>--------------------------------------------</h4>
              <br></br>
            <h2 className="title">Designed and Developed by <br></br>Ibrahim Saleem</h2>
            <p><h3>Check out Portfolio <a href="https://ibrahimsaleem-portfolio.web.app/">Click Here</a></h3></p>
            <br></br>
            <p><h4>
            Webiste is architected using React. <br></br>All this is fetched data from TMDB (The Movie Database) API. 
            <br>
            </br>When clicked the banner it also displays the movie trailers which is fetched from Youtube.
            </h4></p>
            <br></br>
            <h4>--------------------------------------------</h4>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;