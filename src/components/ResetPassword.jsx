import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function ResetPassword() {
  const restHandel = async (values) => {
    console.log(values);
    try {
      const res = await axios.post(
        "https://bookstore.eraasoft.pro/api/reset-password",
        values,
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const resetSchema = Yup.object({
    password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
  });
  return (
    <div>
      <div className=" h-dvh bg-[#F5F5F5] flex items-center justify-center">
        <Formik
          initialValues={{ password: "", password_confirmation: "" }}
          validationSchema={resetSchema}
          onSubmit={(values) => {
            restHandel(values);
          }}
        >
          <Form className="flex flex-col gap-10 w-full max-w-md ">
            <div className="space-y-2">
              <h1 className="text-center text-xl text-[#D9176C]">
                Forget Password
              </h1>
              <p className="text-center text-x text-[#22222280]">
                Create a strong password
              </p>
              <p className="text-center text-x text-[#22222280]">
                Your new password must be different from previous one
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="password"> Enter password</label>
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
                className="text-[#22222280] text-sm"
              />
              <label htmlFor="confirm_password"> Confirm password</label>
              <Field
                type="password"
                id="confirm_password"
                name="password_confirmation"
                placeholder="Enter password"
                className=" rounded-lg border-0 p-4 bg-white outline-none placeholder:text-[#22222280] "
              />
              <ErrorMessage
                name="password_confirmation"
                component="div"
                className="text-[#22222280] text-sm"
              />

              <div className="flex items-center justify-between text-sm ">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-[#D9176C] w-4 h-4" />
                  <span className="text-gray-600">Remember me</span>
                </label>
              </div>
              <button
                type="submit"
                className="btn bg-[#D9176C] text-white text-[18px] rounded-lg h-12"
              >
                Reset Password
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
