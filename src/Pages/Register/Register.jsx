import formBg from "../../assets/images/form_bg.jpeg";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;

    console.log({name, photoUrl, email, password });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${formBg})`,
      }}
      className="min-h-screen  flex flex-col justify-center"
    >
      <div className="w-full text-[#045281] mt-8 bg-white max-w-md p-8 mx-auto space-y-3 rounded-xl ">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form
          onSubmit={handleRegister}
          noValidate=""
          action=""
          className="space-y-6"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-[#045281]">
              Your Name
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-md  text-[#045281] border border-[#045281]"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="photoUrl" className="block text-[#045281]">
              Photo URL
            </label>
            <input
              type="text"
              name="photoUrl"
              id="photoUrl"
              placeholder="Enter your photoUrl"
              className="w-full px-4 py-3 rounded-md  text-[#045281] border border-[#045281]"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-[#045281]">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md  text-[#045281] border border-[#045281]"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-[#045281]">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md  text-[#045281] border border-[#045281]"
            />
          </div>
          <button className="block w-full bg-[#045281] text-white font-bold rounded-sm p-3 text-center ">
            Register
          </button>
        </form>

        <p className="text-xs text-center sm:px-6 text-[#045281]">
          Already have an account?
          <Link to={"/login"} className="font-bold underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
