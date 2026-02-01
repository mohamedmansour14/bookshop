import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function SignUpForm() {
  const handelSignUp = async (values) => {
    console.log(values);
    try {
      const res = await axios.post(
        "https://bookstore.eraasoft.pro/api/register",
        values,
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const signupSchema = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
    password_confirmation: Yup.string().required(
      "Confirm Password is required",
    ),
  });
  return (
    <div>
      <div className=" h-dvh bg-[#F5F5F5] flex items-center justify-center">
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirmation: "",
          }}
          validationSchema={signupSchema}
          onSubmit={(values) => {
            handelSignUp(values);
          }}
        >
          <Form className="flex flex-col gap-10 w-full max-w-md ">
            <h1 className="text-center text-2xl text-[#D9176C]">Welcome</h1>

            <div className="flex flex-col gap-4">
              <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="first_name">First Name</label>
                  <Field
                    type="text"
                    name="first_name"
                    id="first_name"
                    className="rounded-lg border-0 p-4 bg-white outline-none placeholder:text-[#22222280]"
                  />
                  <ErrorMessage
                    name="first_name"
                    component={"div"}
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="last_name">Last Name</label>
                  <Field
                    type="text"
                    name="last_name"
                    id="last_name"
                    className="rounded-lg border-0 p-4 bg-white outline-none placeholder:text-[#22222280]"
                  />
                  <ErrorMessage
                    name="last_name"
                    component={"div"}
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                className=" rounded-lg border-0 p-4 bg-white outline-none placeholder:text-[#22222280] "
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
              <label htmlFor="password">password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                className=" rounded-lg border-0 p-4 bg-white outline-none placeholder:text-[#22222280] "
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
              <label htmlFor="password_confirmation">Confirm password</label>
              <Field
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                placeholder="Confirm password"
                className=" rounded-lg border-0 p-4 bg-white outline-none placeholder:text-[#22222280] "
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
              <div className="flex items-center justify-between text-sm ">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-[#D9176C] w-4 h-4" />
                  <span className="text-gray-600">
                    Agree with{" "}
                    <a href="#" className="text-[#D9176C] hover:underline">
                      Terms & Conditions
                    </a>
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="btn bg-[#D9176C] text-white text-[18px] rounded-lg h-12"
              >
                Sign Up
              </button>
              <p className="text-center mt-3 text-[16px] gap">
                I have an account
                <span className="text-[#D9176C] pl-2.5 text-xl">
                  <a href="#">Login</a>
                </span>
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-center text-gray-400 text-2xl">or</p>

                <button className="btn shadow py-3 h-12">
                  <img
                    src="/icons/google-icon.png"
                    className="w-6 h-6 "
                    alt="Login With Google Button"
                  />

                  <span className="font-medium">Sign up With Google</span>
                </button>

                <button className="btn shadow py-3 h-12">
                  <img
                    src="/icons/facebook-icon.png"
                    className="w-6 h-6 "
                    alt="Login With Facebook Button"
                  />
                  <span className="font-medium">
                    Sign up With Facebook
                  </span>{" "}
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
