import React from 'react'

const Signup = () => {
  return (
    <>
      <div className="container my-5 py-5 z-depth-1">


        <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">


          <div className="row d-flex justify-content-center">

            <div className="col-md-6">

              <form className="text-center" action="#!">

                <p className="h4 mb-4">Sign up</p>

                <div className="form-row mb-4">
                  <div className="col">
                    <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="First name" />
                  </div>
                  <br />
                  <div className="col">
                    <input type="text" id="defaultRegisterFormLastName" className="form-control" placeholder="Last name" />
                  </div>
                </div>

                <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="E-mail" />

                  <input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Password"
                    aria-describedby="defaultRegisterFormPasswordHelpBlock" />
                  <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                    At least 8 characters and 1 digit
                  </small>

                  <input type="number" id="defaultRegisterPhonePassword" className="form-control" placeholder="Phone number"
                    aria-describedby="defaultRegisterFormPhoneHelpBlock" />
                  <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                    Optional - for two step authentication
                  </small>

                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="defaultRegisterFormNewsletter" />
                    <label className="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our
                      newsletter</label>
                  </div>

                  <button className="btn btn-info my-4 btn-block" type="submit">Sign in</button>

                  <p>or sign up with:</p>

                  <a href="#" className="mx-1" role="button"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="mx-1" role="button"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="mx-1" role="button"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" className="mx-1" role="button"><i className="fab fa-github"></i></a>

                  <hr />

                  <p>By clicking
                    <em>Sign up</em> you agree to our
                    <a href="" target="_blank">terms of service</a>
                  </p>
              </form>

            </div>

          </div>

        </section>

      </div>
    </>
  )
}

export default Signup
