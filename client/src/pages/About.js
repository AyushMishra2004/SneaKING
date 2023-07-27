import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
    return (
      <Layout title={"About us"}>
        <div className="row contactus ">
          <div className="col-md-6 ">
            <img
              src="/images/about.jpeg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <p className="text-justify mt-2">
              This is a MERN Full Stack Project
              Author of website: Ayush Mishra (IIT PATNA)
              <br></br>
              <br></br>
              The vision of this brand is to provide everyone with their own 
              compatible fits for their foot.
              <br></br>
              <br></br>
              We are not trend-followers rather we are trendsetters.
              Our vision is to be part of shoe-racks of every household and 
              provide most comfortable,durable and affordable products.
            </p>
          </div>
        </div>
      </Layout>
    );
  };
  
  export default About;
