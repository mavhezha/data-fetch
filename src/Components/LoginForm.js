import React from "react";
import { useForm } from "react-hook-form";
import'../assets/style.css'

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Username</label>
          <input type="text" name="name" {...register('name', { required: "Name is required" } )} />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input 
            type="password" 
            name="password" {...register("password", 
            { 
              required: true, 
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/
           }
          )} />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}