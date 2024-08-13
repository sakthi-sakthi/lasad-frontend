import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import "./Vocationform.css";
import axios from "axios";
import { ApiUrl } from "../../components/API/Api";

const Vocationform = () => {
  const [formData, setFormData] = useState({
    name: "",
    stdClass: "",
    schoolName: "",
    villageName: "",
    fatherName: "",
    motherName: "",
    numberOfSisters: "",
    numberOfBrothers: "",
    district: "",
    email: "",
    diocese: "",
    state: "",
    cellNumber: "",
    homeAddress: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.stdClass) formErrors.stdClass = "STD/Class is required";
    if (!formData.schoolName) formErrors.schoolName = "School Name is required";
    if (!formData.villageName)
      formErrors.villageName = "Village Name is required";
    if (!formData.fatherName) formErrors.fatherName = "Father Name is required";
    if (!formData.motherName) formErrors.motherName = "Mother Name is required";
    if (!formData.district) formErrors.district = "District is required";
    if (!formData.diocese) formErrors.diocese = "Diocese is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.state) formErrors.state = "State is required";
    if (!formData.cellNumber) formErrors.cellNumber = "Cell Number is required";
    if (!formData.homeAddress)
      formErrors.homeAddress = "Home Address is required";

    if (formData.cellNumber && !/^\d{10}$/.test(formData.cellNumber)) {
      formErrors.cellNumber = "Cell Number must be a 10-digit number";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleCellNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setFormData({ ...formData, cellNumber: value });
    }
    if (errors.cellNumber) {
      setErrors({
        ...errors,
        cellNumber: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await axios.post(`${ApiUrl}/store/vocation`, formData);
        if (response.data.status === "success") {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Form submitted successfully!",
          });

          // Reset form
          setFormData({
            name: "",
            email: "",
            stdClass: "",
            schoolName: "",
            villageName: "",
            fatherName: "",
            motherName: "",
            numberOfSisters: "",
            numberOfBrothers: "",
            district: "",
            diocese: "",
            state: "",
            cellNumber: "",
            homeAddress: "",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="container">
      <h3 className="text-center mb-3">Vocation Form</h3>
      <div className="card p-4">
        <div className="text-center mb-4">
          <img
            src="images/all-img/delasalle.png"
            alt="Saint"
            className="img-fluid"
          />
          <h3 className="mt-3" id="vocation-form">
            Every Lasallian vocation is born of God, develops from the
            experience of God. We come from God, we live in God and we go
            towards God.
          </h3>
        </div>
        <form method="POST" autoComplete="off" onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Name <span className="err-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData?.name}
                onChange={handleChange}
              />
              {errors?.name && (
                <div className="text-danger">{errors?.name}</div>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="stdClass" className="form-label">
                STD / Class <span className="err-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="stdClass"
                name="stdClass"
                value={formData?.stdClass}
                onChange={handleChange}
              />
              {errors?.stdClass && (
                <div className="text-danger">{errors?.stdClass}</div>
              )}
            </div>
          </div>
          {/* Other form fields */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="schoolName" className="form-label">
                School Name <span className="err-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="schoolName"
                name="schoolName"
                value={formData?.schoolName}
                onChange={handleChange}
              />
              {errors?.schoolName && (
                <div className="text-danger">{errors?.schoolName}</div>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="villageName" className="form-label">
                Village Name <span className="err-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="villageName"
                name="villageName"
                value={formData?.villageName}
                onChange={handleChange}
              />
              {errors?.villageName && (
                <div className="text-danger">{errors?.villageName}</div>
              )}
            </div>
          </div>
          {/* Other form fields */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="fatherName" className="form-label">
                Father Name <span className="err-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="fatherName"
                name="fatherName"
                value={formData?.fatherName}
                onChange={handleChange}
              />
              {errors?.fatherName && (
                <div className="text-danger">{errors?.fatherName}</div>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="motherName" className="form-label">
                Mother Name <span className="err-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="motherName"
                name="motherName"
                value={formData?.motherName}
                onChange={handleChange}
              />
              {errors?.motherName && (
                <div className="text-danger">{errors?.motherName}</div>
              )}
            </div>
          </div>
          {/* Other form fields */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="numberOfSisters" className="form-label">
                Number of Sisters
              </label>
              <input
                type="number"
                className="form-control"
                id="numberOfSisters"
                name="numberOfSisters"
                value={formData?.numberOfSisters}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="numberOfBrothers" className="form-label">
                Number of Brothers
              </label>
              <input
                type="number"
                className="form-control"
                id="numberOfBrothers"
                name="numberOfBrothers"
                value={formData?.numberOfBrothers}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Other form fields */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="district" className="form-label">
                District <span className="err-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="district"
                name="district"
                value={formData?.district}
                onChange={handleChange}
              />
              {errors?.district && (
                <div className="text-danger">{errors?.district}</div>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email Address <span className="err-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData?.email}
                onChange={handleChange}
              />
              {errors?.email && (
                <div className="text-danger">{errors?.email}</div>
              )}
            </div>
          </div>
          {/* Other form fields */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="state" className="form-label">
                State <span className="err-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="state"
                name="state"
                value={formData?.state}
                onChange={handleChange}
              />
              {errors?.state && (
                <div className="text-danger">{errors?.state}</div>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="cellNumber" className="form-label">
                Cell Number <span className="err-danger">*</span>
              </label>
              <input
                type="tel"
                maxLength={10}
                minLength={10}
                className="form-control"
                id="cellNumber"
                name="cellNumber"
                value={formData?.cellNumber}
                onChange={handleCellNumberChange}
              />
              {errors?.cellNumber && (
                <div className="text-danger">{errors?.cellNumber}</div>
              )}
            </div>
          </div>
          {/* Textarea field */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="diocese" className="form-label">
                Diocese <span className="err-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="diocese"
                name="diocese"
                value={formData?.diocese}
                onChange={handleChange}
              />
              {errors?.diocese && (
                <div className="text-danger">{errors?.diocese}</div>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="homeAddress" className="form-label">
                Home Address <span className="err-danger">*</span>
              </label>
              <textarea
                className="form-control"
                id="homeAddress"
                name="homeAddress"
                value={formData?.homeAddress}
                onChange={handleChange}
              ></textarea>
              {errors?.homeAddress && (
                <div className="text-danger">{errors?.homeAddress}</div>
              )}
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-success btn-sm"
              id="vocation-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Vocationform;
