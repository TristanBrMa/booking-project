import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [fields, setFields] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fields.email.length && fields.password.length) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/adminConnexion`, fields)
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            return res;
          } else {
            alert("Identifiants incorrects");
          }
        })
        .then((res) => {
          navigate("/admin");
        });
    } else {
      alert("Veuillez remplir les champs correctement");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <div className="w-4/5  bg-white rounded-lg shadow border border-blue-900 lg:w-2/5 lg:h-3/6">
        <div className="p-6 space-y-4 ">
          <h1 className="text-xl font-bold  text-blue-900 lg:text-2xl lg:pb-6">
            Connexion
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 " action="#">
            <div className="lg:pb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-blue-900 lg:text-base  "
              >
                Email
              </label>
              <input
                value={fields.email}
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-blue-300 text-blue-900  rounded-lg  block w-full p-2.5 lg:p-3 lg:placeholder:text-lg "
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div className="lg:pb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-blue-900 lg:text-base  "
              >
                Password
              </label>
              <input
                value={fields.password}
                onChange={handleChange}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-blue-300 text-blue-900  rounded-lg  block w-full p-2.5 lg:p-3 lg:placeholder:text-lg "
                required=""
              />
            </div>
            <div className="lg:flex lg:flex-col lg:items-center">
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700  font-medium rounded-lg text-sm py-2.5 text-center lg:w-2/5 lg:flex lg:flex-col lg:items-center "
              >
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
