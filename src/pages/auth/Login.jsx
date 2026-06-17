import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { usersAPI } from "../services/usersAPI";

import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Login() {
const navigate = useNavigate();

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const [showForgotPassword, setShowForgotPassword] = useState(false);

const [dataForm, setDataForm] = useState({
email: "",
password: "",
});

const handleChange = (evt) => {
const { name, value } = evt.target;

```
setDataForm({
  ...dataForm,
  [name]: value,
});
```

};

const handleSubmit = async (e) => {
e.preventDefault();

```
try {
  setLoading(true);
  setError("");
  setShowForgotPassword(false);

  const user = await usersAPI.login(
    dataForm.email,
    dataForm.password
  );

  if (user.length === 0) {
    setError("Username atau Password salah");
    setShowForgotPassword(true);
    return;
  }

  localStorage.setItem(
    "user",
    JSON.stringify(user[0])
  );

  navigate("/");
} catch (err) {
  setError(err.message || "Login gagal");
  setShowForgotPassword(true);
} finally {
  setLoading(false);
}
```

};

const errorInfo = error ? ( <div className="bg-red-100 border border-red-300 mb-5 p-4 text-sm text-red-700 rounded-lg"> <div className="flex items-center"> <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
{error} </div> </div>
) : null;

const loadingInfo = loading ? ( <div className="bg-gray-100 border border-gray-300 mb-5 p-4 text-sm rounded-lg flex items-center text-gray-700"> <ImSpinner2 className="me-2 animate-spin" />
Mohon Tunggu... </div>
) : null;

return ( <div> <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
Welcome Back 👋 </h2>

```
  <p className="text-sm text-gray-500 text-center mb-8">
    Please sign in to continue
  </p>

  {errorInfo}
  {loadingInfo}

  <form onSubmit={handleSubmit}>
    <div className="mb-5">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Username
      </label>

      <input
        type="text"
        name="email"
        value={dataForm.email}
        onChange={handleChange}
        disabled={loading}
        placeholder="Masukkan Username"
        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
    </div>

    <div className="mb-2">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Password
      </label>

      <input
        type="password"
        name="password"
        value={dataForm.password}
        onChange={handleChange}
        disabled={loading}
        placeholder="********"
        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
    </div>

    {showForgotPassword && (
      <div className="flex justify-end mb-6">
        <Link
          to="/forgot"
          className="text-sm text-gray-600 hover:text-green-600 hover:underline transition duration-200"
        >
          Forgot your password?
        </Link>
      </div>
    )}

    <button
      type="submit"
      disabled={loading}
      className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-4 rounded-lg transition duration-300 disabled:opacity-50"
    >
      {loading ? (
        <span className="flex justify-center items-center">
          <ImSpinner2 className="animate-spin me-2" />
          Loading...
        </span>
      ) : (
        "Login"
      )}
    </button>
  </form>

  <p className="text-center text-sm text-gray-600 mt-6">
    Don't have an account?{" "}
    <Link
      to="/register"
      className="text-green-600 font-semibold hover:underline"
    >
      Register
    </Link>
  </p>
</div>

);
}
