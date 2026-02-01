import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function ForgetPassword() {
  const forgetHandel = async (values) => {
    console.log(values);
    try {
      const res = await axios.post("https://bookstore.eraasoft.pro/api/forget-password", values);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const forgetSchema = Yup.object({
    email: Yup.string().required("Please Enter Your email"),
  });

  return (
    <div>
      <div className=" h-dvh bg-[#F5F5F5] flex items-center justify-center">
        <Formik
          initialValues={{ email: "" }}
          validationSchema={forgetSchema}
          onSubmit={(values) => {
            forgetHandel(values);
          }}
        >
          <Form className="flex flex-col gap-10 w-full max-w-md ">
            <div className="space-y-2">
              <h1 className="text-center text-xl text-[#D9176C]">
                Forget Password
              </h1>
              <p className="text-center text-x text-gray-400">
                Enter Your Email to reset Your Password
              </p>
            </div>

            <div className="flex flex-col gap-4">
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

              <button
                type="submit"
                className="btn bg-[#D9176C] text-white text-[18px] rounded-lg h-12"
              >
                Sent reset code
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
