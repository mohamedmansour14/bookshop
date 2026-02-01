import axios from "axios";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

export default function ResetPasswordOtp() {
  const resetHandel = async (values) => {
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
    otp: Yup.array()
      .of(Yup.string().required("Enter digit"))
      .length(4, "OTP must be 4 digits"),
  });
  return (
    <div>
      <div className=" h-dvh bg-[#F5F5F5] flex items-center justify-center">
        <Formik
          initialValues={{ otp: ["", "", "", ""] }}
          validationSchema={resetSchema}
          onSubmit={(values) => {
            resetHandel(values);
          }}
        >
          <Form className="flex flex-col gap-10 w-full max-w-md   ">
            <div className="space-y-2">
              <h1 className="text-center text-xl text-[#D9176C]">
                Forget Password
              </h1>
              <p className="text-center text-x text-[#22222280]">
                Enter the 4 dights code that you received on your email
              </p>
            </div>

            <div className="  flex justify-center  ">
              <div className="w-78  flex justify-center gap-3 text-center">
                <Field
                  type="text"
                  name="otp[0]"
                  id="otp1"
                  maxLength="1"
                  className="text-xl font-bold border rounded-2xl text-center w-15 h-15"
                />

                <Field
                  type="text"
                  name="otp[1]"
                  id="otp2"
                  maxLength="1"
                  className="text-xl font-bold border rounded-2xl text-center w-15 h-15"
                />

                <Field
                  type="text"
                  name="otp[2]"
                  id="otp3"
                  maxLength="1"
                  className="text-xl font-bold border rounded-2xl text-center w-15 h-15"
                />

                <Field
                  type="text"
                  name="otp[3]"
                  id="otp4"
                  maxLength="1"
                  className="text-xl font-bold border rounded-2xl text-center w-15 h-15"
                />
                3
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="btn bg-[#D9176C] text-white text-[18px] rounded-lg h-12 w-50"
              >
                Reset Password
              </button>
            </div>

            <p className="text-center mt-3 text-xl">
              Didn’t receive a code?
              <span className="text-[#D9176C]  pl-2.5 text-xl">
                <a href="#">Send again</a>
              </span>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
