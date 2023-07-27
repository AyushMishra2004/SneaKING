import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
    return (
      <Layout title={"Privacy Policy"}>
        <div className="row contactus ">
          <div className="col-md-6 ">
            <img
              src="/images/about.jpeg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
          <br></br><br></br><br></br>
            <p>We at SneaKING are strongly committed to protect your
              privacy and give you a very pleasant experience.
            </p>
            <p>We might collect you some data which includes your email id,
              your orders, address, location to give you a smooth experience.
            </p>
            <p>All rights are reserved by Ayush Mishra (IITP) (2101EE86)</p>
            
            
          </div>
        </div>
      </Layout>
    );
  };
  
  export default Policy;