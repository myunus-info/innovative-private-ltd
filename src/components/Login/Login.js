import React, { useContext, useEffect } from "react";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useHttp from "../hook/useHttp";
import toast, { Toaster } from "react-hot-toast";
import AuthContext from "../contexts/auth-context";

const Login = () => {
  const { sendRequest, isLoading, error } = useHttp();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isDirty, isSubmitted },
  } = useForm();

  const loginUser = data => {
    if (data?.token) {
      const expirationTime = new Date(Date.now() + 60 * 60 * 1000).toISOString();
      authCtx.login(data, data.token, expirationTime);
      navigate("/");
    }
  };

  const loginUserHandler = async data => {
    sendRequest(
      {
        url: "https://dummyjson.com/auth/login",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      },
      loginUser
    );
  };

  const onSubmit = data => {
    loginUserHandler(data);
    // console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful && !errors && !isDirty && isSubmitted) {
      toast.success("User Logged in successfully!");
      reset();
    }
  }, [isSubmitSuccessful, reset, errors, isDirty, isSubmitted]);

  return (
    <Layout>
      <div className="container" style={{ minHeight: "85vh" }}>
        <div className="row">
          <div className="col-md-5 m-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Username */}
              <div className="my-5">
                <div className="form-control">
                  <label htmlFor="username" className="form-label fw-bold">
                    Username
                  </label>
                  <input
                    className="form-control lg"
                    type="text"
                    placeholder="Enter username"
                    {...register("username", { required: true })}
                  />
                </div>
                {errors.username && (
                  <span style={{ display: "block", color: "crimson" }}>Username is required</span>
                )}
              </div>

              {/* Password */}
              <div className="my-5">
                <div className="form-control mb-3">
                  <label htmlFor="password" className="form-label fw-bold">
                    Password
                  </label>

                  <input
                    className="form-control"
                    type="password"
                    placeholder="Enter Password"
                    {...register("password", { required: true })}
                  />
                </div>
                {errors.password && (
                  <span style={{ display: "block", color: "crimson" }}>Password is required</span>
                )}
              </div>

              {error && <p style={{ color: "crimson" }}>{error}</p>}

              <button
                className="btn"
                type="submit"
                style={{
                  cursor: isLoading && "not-allowed",
                  backgroundColor: isLoading ? "gray" : "#0033b5",
                  color: "white",
                  width: "100%",
                  marginBottom: "2rem",
                }}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </Layout>
  );
};

export default Login;
