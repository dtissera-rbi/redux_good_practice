import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickLogin = () => {
    dispatch({
      type: "LOG_IN"
    });
    navigate("/products");
  };

  return (
    <div>
      <h1>Login view</h1>
      <button onClick={handleClickLogin}>Click to Log In</button>
    </div>
  );
}

export default LoginView;
