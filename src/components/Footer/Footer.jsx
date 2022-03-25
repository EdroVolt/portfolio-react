import "./footer.css";

export default function Footer() {
  return (
    // <footer className="footer">
    //   <div className="container section">
    //     <div className="row">
    //       <div className="col-4">
    //         <h4 className="mb-4">social links</h4>
    //         <ul className="social-links p-0">
    //           <li>
    //             <a href="" className="fs-2">
    //               <i className="fab fa-facebook "></i>
    //             </a>
    //           </li>
    //           <li>
    //             <a href="" className="fs-2">
    //               <i className="fab fa-telegram "></i>
    //             </a>
    //           </li>
    //           <li>
    //             <a href="" className="fs-2">
    //               <i className="fab fa-linkedin-in "></i>
    //             </a>
    //           </li>
    //           <li>
    //             <a href="" className="fs-2">
    //               <i class="fab fa-twitter "></i>
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="col-4"></div>
    //       <div className="col-4">

    //       </div>
    //     </div>
    //   </div>
    //   <p
    //     style={{
    //       textAlign: "center",
    //       margin: 0,
    //       background: "#121212",
    //       textDecoration: "overLine",
    //     }}
    //   >
    //     Made with 💝 by EdroVolt
    //   </p>
    // </footer>

    <footer class="footer text-gray">
      <div class="container py-5">
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="brand d-flex">
              <span class="circle"></span>
              <h5 class="main-question fs-4" href="#">
                My Contacts ?
              </h5>
            </div>

            <address>
              <table class="mw-50">
                <tr>
                  <td>
                    <i class="fa fa-phone fa-lg"></i>
                  </td>
                  <td>
                    <a href="tel:+201033022863">+2010-3302-2863</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i class="fa fa-envelope fa-lg"></i>
                  </td>
                  <td>
                    <a href="mailto:ahmededrees30@gamil.com">
                      ahmededrees30@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fab fa-telegram fs-3"></i>
                  </td>
                  <td>
                    <a
                      href="https://t.me/EdroVolt"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @EdroVolt
                    </a>
                  </td>
                </tr>
              </table>
            </address>
          </div>

          <div class="col-12 col-md-4">
            <h5 class="text-light mb-4">Newsletter</h5>

            <p className="text-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              delectus officiis.
            </p>

            <form action="#">
              <input type="text" name="email" placeholder="Enter your email" />

              <button class="btn btn-dark btn-outline-light rounded-0 mt-4 d-block">
                submit
              </button>
            </form>
          </div>

          <div class="col-12 col-md-4 d-flex flex-column align-items-center">
            <h5 class="text-light mb-4">Social Links</h5>

            <div class="d-flex justify-content-between w-50">
              <a
                href="https://www.facebook.com/AhmedEdreeso/"
                target="_blank"
                rel="noreferrer"
                class="my-2"
              >
                <i className="fab fa-facebook fs-3"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/edrovolt/"
                target="_blank"
                rel="noreferrer"
                class="my-2"
              >
                <i className="fab fa-linkedin-in fs-3"></i>
              </a>
              <a
                href="https://twitter.com/EdroVolt"
                target="_blank"
                rel="noreferrer"
                class="my-2"
              >
                <i class="fab fa-twitter fs-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="copy-right border-top">
        <div class="container">
          <div class="row justify-content-center align-items-center text-info">
            Made with 💝 by EdroVolt
          </div>
        </div>
      </div>
    </footer>
  );
}
