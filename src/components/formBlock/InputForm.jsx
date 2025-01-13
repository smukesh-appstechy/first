import React from "react";
import { useForm } from "react-hook-form";
import { data } from "react-router-dom";

const InputForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("submiting the form", data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="first name">first name</label>
        <input type="text" className="border" {...register(" firstName")} />
        <br />
        <br />
        <label htmlFor="last name">last name</label>
        <input
          type="text"
          className="border"
          {...register(" lastName", 
            { 
              required: true, 
              minLength: {value:3, message:"Min len atleast 3"}})}/>
              {errors.lastName && <p>{errors.lastName.message}</p>}
        <br />
        <br />
        <label htmlFor="email">email</label>
        <input type="text" className="border" {...register(" email")} />
        <br />
        <br />
        <input type="submit" className="border px-3" />
      </form>
                <section className="form section py-10">
                  <div className="container m-auto">
                    <div className="form-wrapper">
                        <form action="" className="grid grid-cols-4 gap-4">
                          <div className="form-group">
                            <label htmlFor="">First Name</label>
                            <input type="text" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="">Last Name</label>
                            <input type="text" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="">Last Name</label>
                            <select name="" id="">
                              <option value="select-1">select 1</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <input type="submit" value="Submit" />
                          </div>
                        </form>
                    </div>
                  </div>
                </section>

    </>
  );
};

export default InputForm;
