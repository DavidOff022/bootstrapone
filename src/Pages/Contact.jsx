import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="container my-5 py-5 z-depth-1">

        <section className="px-md-5 mx-md-5 text-center dark-grey-text">

          <div id="map-container-google-1" className="z-depth-1 map-container mb-5">
            <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
              style={{border:0}} allowfullscreen></iframe>
          </div>

          <div className="row d-flex justify-content-center mb-5">

            <div className="col-md-6 text-center">

              <h3 className="font-weight-bold">Contact Us</h3>

              <div className="md-form md-outline mt-3">
                <input type="email" id="form-email" className="form-control" />
                <label for="form-email">E-mail</label>
              </div>

              <div className="md-form md-outline">
                <input type="text" id="form-subject" className="form-control" />
                <label for="form-subject">Subject</label>
              </div>

              <div className="md-form md-outline mb-3">
                <textarea id="form-message" className="md-textarea form-control" rows="5"></textarea>
                <label for="form-message">How we can help?</label>
              </div>

              <button type="submit" className="btn btn-info btn-sm ml-0">Submit<i className="far fa-paper-plane ml-2"></i></button>

            </div>

          </div>

          <div className="row text-center">

            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">

              <i className="fas fa-map-marker-alt fa-2x blue-text"></i>

              <p className="font-weight-bold my-3">Address</p>

              <p className="text-muted">New York, 94126, United States</p>

            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">

              <i className="fas fa-phone fa-2x blue-text"></i>

              <p className="font-weight-bold my-3">Phone number</p>

              <p className="text-muted">+ 01 234 567 89</p>

            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">

              <i className="fas fa-envelope fa-2x blue-text"></i>

              <p className="font-weight-bold my-3">E-mail</p>

              <p className="text-muted">info@gmail.com</p>

            </div>

          </div>


        </section>


      </div>

    </>
  )
}

export default Contact
