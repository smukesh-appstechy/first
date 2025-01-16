import React from "react";
import { useForm } from "react-hook-form";

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
     
                <section className="form section py-10 bg-[#E3F2FD]">
                  <div className="container m-auto">
                    <div className="form-wrapper">
                        <form action="" onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-6 gap-16">
                          <div className="form-group flex flex-col relative">
                            <label htmlFor="" className="absolute left-[20px] top-[-10px] text-base  px-2 ">First Name</label>
                            <input type="text" className="border rounded-xl text-base p-5 " {...register("firstName", {
                              required:{
                                value:true,
                                message:"First name can't be blank"
                              },
                              pattern:{
                                value: /^[A-Za-z]+$/,
                                message: "First name contain only latters"
                              },
                              minLength:{
                                value: 2,
                                message: "First name must be at least 2 characters"
                              }
                            })} />
                            {errors.firstName &&(
                              <p className="text-red-700 text-sm">{errors.firstName.message}</p>
                            )}
                          </div>

                          <div className="form-group flex flex-col relative">
                            <label htmlFor="" className="absolute left-[20px] top-[-10px] text-base  px-2 ">Last Name</label>
                            <input type="text" className="border rounded-xl text-base p-5 " {...register("lastName", {
                              required:{
                                value:true,
                                message:"Last name can't be blank"
                              },
                              pattern:{
                                value:/^[A-Za-z]+$/,
                                message:"Last name contain only latters"
                              },
                              minLength:{
                                value: 2,
                                message:"Last name must be at least 2 characters"
                              }
                            })} />
                            {errors.lastName &&(
                              <p className="text-red-700 text-sm">{errors.lastName.message}</p>
                            )}
                          </div>

                          <div className="form-group flex flex-col relative">
                            <label htmlFor="" className="absolute left-[20px] top-[-10px] text-base  px-2 ">Email</label>
                            <input type="email" className="border rounded-xl text-base p-5 " {...register("email",{
                              required:{
                                value:true,
                                message: "Email is required"
                              },
                              pattern:{
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message:"Email is not valid"
                              }
                            })}/>
                            {errors.email &&(
                              <p className="text-red-700 text-sm">{errors.email.message}</p>
                            )}
                          </div>

                          <div className="form-group flex flex-col relative col-span-2">
                            <label htmlFor="" className="absolute left-[20px] top-[-10px] text-base  px-2 ">Insourance Type</label>
                            <select name="" id="" className="border rounded-xl text-base p-5 ">
                              <option value="select-1">select 1</option>
                            </select>
                          </div>

                          <div className="form-group flex flex-col relative">
                            <input type="submit" value="Submit" className="border rounded-xl text-base p-5 border-purple text-purple bg-white" />
                          </div>
                          
                          
                        </form>
                    </div>
                  </div>
                </section>

    </>
  );
};

export default InputForm;
