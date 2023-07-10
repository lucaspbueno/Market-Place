import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const { email, password } = form;
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value
    })
  };

  const validationBtn = () => {
    const regex = /\S+@\S+\.\S+/;
    setIsDisabled(!(regex.test(email) && password.length >= 6));
  };

  useEffect(() => {
    validationBtn();
  }, [form]);

  const handleClick = () => {
    history.push("/home");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="flex flex-col bg-black p-4 rounded-lg">
        <label className="flex flex-col m-2">
          Email:
          <input
            type="email"
            name="email"
            className="input input-group mt-2"
            value={ email }
            onChange={ handleChange }
          />
        </label>
        <label className="flex flex-col m-2">
          Password:
          <input
            type="password"
            name="password"
            className="input input-group mt-2"
            value={ password }
            onChange={ handleChange }
          />
        </label>
        <button
          type="button"
          className="btn btn-outline m-2"
          disabled={ isDisabled }
          onClick={ handleClick }
        >
          Login
        </button>
      </form>
    </div>
  );
}
