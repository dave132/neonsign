import React from "react";
import Breadcrumb from "../../components/breadcrumb";
import styles from "./.module.scss";
export default function index() {
  return (
    <section className={styles.contact_us_page}>
      <div className="container">
        <h1 className="page_heading">DROP US A LINE</h1>
        <Breadcrumb current={"Contact Us"} />
        <h1 className="sec_heading my-5">
          <span>Turn Your Image into a HDJneon® Sign</span>
        </h1>
        <p>
          HDJneon® has a fantastic team of LED neon designers that can take your
          ideas and turn them into eye-catching business logos, light-up wall
          art, games room signs, personalized bar lights, wedding decor, neon
          party lights and more!
        </p>
        <p>
          Take advantage of our free design service – send us your image and
          ideas, and one of our experienced designers will work with you to
          create an amazing LED neon sign. Use the form below to upload your
          image and get a HDJneon® mockup free of charge. Have a question or
          comment? Use the form below to send us a message or contact us by mail
          at:
        </p>
        <p>
          Have a question or comment? Use the form below to send us a message or
          contact us by mail at:
        </p>
        <div className="row">
          <div className="col-12 col-md-6">
            <form
              className={styles.contact_form}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className={styles.form_row}>
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>

              <div className={styles.form_row}>
                <label htmlFor="phone">your phone</label>
                <input type="tel" name="phone" id="phone" />
              </div>

              <div className={styles.form_row}>
                <label htmlFor="email">
                  your email <span>*</span>
                </label>
                <input type="email" name="email" id="email" required />
              </div>

              <div className={styles.form_row}>
                <label htmlFor="comment">
                  your comment <span>*</span>
                </label>
                <textarea
                  required
                  placeholder="Please leave your comment here"
                  name="comment"
                  id="comment"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button className={styles.submit_btn} type="submit">
                submit contact
              </button>
            </form>
          </div>
          <div className="mt-4 mt-md-0 py-md-0 py-4 col-12 col-md-6 col-lg-4 offset-lg-2 col-xl-3 offset-xl-3">
            <h5 className={styles.head}>STORE INFORMATION</h5>
            <p className={styles.para}>
              {
                "We'd love to hear from you - please use the form to send us your message or ideas. Or contact us directly with the Messenger below."
              }
            </p>
            <p className={styles.para}>
              Shop Name: HDJ Sign <br /> Email: hdjsign01@gmail.com <br />{" "}
              WhatsApp: +19144274213
            </p>
            <p className={styles.para}>
              1042 Broadway Street, STE 314C <br />
              Boulder CO 80302 <br /> Unite States
            </p>
            <p>
              Opening Hours: <br />
              Monday to Saturday: 9am - 10pm <br />
              Sundays: 10am - 6pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
