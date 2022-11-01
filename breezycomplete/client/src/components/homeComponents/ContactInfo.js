import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Call Us On</h5>
            <p>+27 72 357 1812</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Address</h5>
            <p>118 Littlefalls Roodeport</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <h5>Email</h5>
            <p>info@breezyworld.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
