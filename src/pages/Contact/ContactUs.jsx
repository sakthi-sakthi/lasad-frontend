import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ApiUrl } from "../../components/API/Api";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [loaderVisible, setLoaderVisible] = useState(false);

  const navigate = useNavigate();

  const onSubmitContactForm = (data, e) => {
    setLoaderVisible(true);

    axios
      .post(`${ApiUrl}/store/contact`, data)
      .then((response) => {
        setLoaderVisible(false);
        if (response.data.status === "success") {
          Swal.fire("Thank you for contacting us!", "", "success");
          e.target.reset();
          navigate("/contact-us");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.data.message,
          });
        }
      })
      .catch((err) => {
        setLoaderVisible(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: err.message,
        });
      });
  };

  return (
    <>
      <div className="container subpage">
        <h3 className="heading">Contact Us</h3>
        <div className="row">
          <div className="col-lg-12">
            <div>
              <h5>Location</h5>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.747558149279!2d78.02748807573005!3d9.954949173806849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c9cdb5bdb63b%3A0x15e8054b499897af!2zTGFzYWxsZSBCb3lzIFRvd24sIFB1bGx1dGh1LG1hZHVyYWkgLSDgrqrgrr7grq_gr43grrjgr40g4K6f4K614K-B4K6p4K-NIOCuruCupOCvgeCusOCviA!5e0!3m2!1sen!2sin!4v1721986378058!5m2!1sen!2sin"
                height={550}
                style={{ border: 0, width: "100%" }}
                allowFullScreen
                title="st charles"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="ecep bs-callout col-lg-6">
            <h4 className="heading text-center mb-4 mt-1">Contact Details</h4>
            <div>
              <i className="fa fa-map-marker"></i>&nbsp;&nbsp;&nbsp; Boys' Town,
              Pulluthu Post,
              <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nagamalai Via, Madurai
              <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TamilNadu – 625019,
              India.
            </div>
            <br />
            <div>
              <i className="fa fa-phone"></i>&nbsp;&nbsp;
              <a href="tel:+917733968669" style={{ color: "#6b1d2f" }}>
                7339686690
              </a>
            </div>
            <br />

            <div>
              <i className="fa fa-envelope"></i>&nbsp;&nbsp;
              <a
                href="mailto:india.delasallebrs@gmail.com"
                style={{ color: "#6b1d2f" }}
              >
                india.delasallebrs@gmail.com
              </a>
            </div>
            <br />

            <div>
              <i className="fa fa-link"></i>&nbsp;&nbsp;
              <a href="https://lasalleindia.org/" style={{ color: "#6b1d2f" }} target="_blank" rel="noopener noreferrer">
                De La Salle Brothers Website
              </a>
            </div>

            <div
              style={{
                textAlign: "center",
                marginTop: "20px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14)",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "white",
              }}
              className="col-lg-12 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12"
            >
              <img src="images/all-img/aboutbanner.jpg" alt="No data" />
            </div>
          </div>

          <div className="col-lg-6 bs-callout">
            <h4 className="heading text-center mb-4 mt-1">Contact Form</h4>
            <form
              className="php-email-form"
              onSubmit={handleSubmit(onSubmitContactForm)}
              method="POST"
              autoComplete="off"
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">
                    Your Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter Your Name"
                    id="name"
                    autoFocus
                    {...register("name", { required: true })}
                    aria-invalid={errors?.name ? "true" : "false"}
                  />
                  {errors?.name?.type === "required" && (
                    <div className="text-danger text_error">
                      <label className="errlabel mt-2">Name is required</label>
                    </div>
                  )}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">
                    Your Email <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter Your Email"
                    id="email"
                    {...register("email", { required: true })}
                    aria-invalid={errors?.email ? "true" : "false"}
                  />
                  {errors?.email?.type === "required" && (
                    <div className="text-danger text_error">
                      <label className="errlabel mt-2">Email is required</label>
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="mobile">
                  Your Mobile <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="mobile"
                  placeholder="Enter Your Mobile"
                  id="mobile"
                  minLength={10}
                  maxLength={10}
                  onKeyDown={(e) => {
                    if (
                      (e.keyCode < 48 || e.keyCode > 57) &&
                      (e.keyCode < 96 || e.keyCode > 105) &&
                      e.keyCode !== 8 &&
                      e.keyCode !== 46
                    ) {
                      e.preventDefault();
                    }
                  }}
                  {...register("mobile", {
                    required: true,
                    pattern: /^\d{10}$/,
                  })}
                  aria-invalid={errors?.mobile ? "true" : "false"}
                />
                {errors?.mobile?.type === "required" && (
                  <div className="text-danger text_error">
                    <label className="errlabel mt-2">
                      Mobile number is required
                    </label>
                  </div>
                )}
                {errors?.mobile?.type === "pattern" && (
                  <div className="text-danger text_error">
                    <label className="errlabel mt-2">
                      Mobile number must be 10 digits only
                    </label>
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  Message <span style={{ color: "red" }}>*</span>
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Enter Your Message"
                  id="message"
                  rows={10}
                  defaultValue={""}
                  {...register("message", { required: true })}
                  aria-invalid={errors?.message ? "true" : "false"}
                />
                {errors?.message?.type === "required" && (
                  <div className="text-danger text_error">
                    <label className="errlabel mt-2">Message is required</label>
                  </div>
                )}
              </div>
              <div className="text-center">
                <button type="submit" className="buttonjs">
                  Send Message
                </button>

                <span
                  id="loader"
                  style={{ display: loaderVisible ? "inline-block" : "none" }}
                  className="ml-3"
                >
                  <i className="fa fa-spinner fa-spin fa-2x"></i>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
