import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Nav = () => {
  const navigate = useNavigate();
  const { dispatch, state } = useContext(UserContext);
  const renderList = () => {
    if (state) {
      return [
        <>
          <li>
            <Link to="/profile">profile</Link>
          </li>
          <li>
            <Link to="/schema">schema</Link>
          </li>
          <li>
            <Link to="/createSchema">Cschema</Link>
          </li>
          <li>
            <Link to="/report">Report</Link>
          </li>
          <li>
            <Link to="/school">register school</Link>
          </li>
          <li>
            <Link to="/permissin">create permission</Link>
          </li>
          <li>
            <Link to="/createPlan">CLesson</Link>
          </li>
          <li>
            <Link to="/register">children registration</Link>
          </li>
          <li>
            <Link to="/plan">plan</Link>
          </li>
          <li>
            <Link to="/createpost">ads</Link>
          </li>
          <li>
            <button
              className="btn waves-effect #b71c1c red darken-4 accent-3"
              onClick={() => {
                localStorage.clear();
                dispatch({ type: "CLEAR" });
                navigate("/login");
              }}
            >
              logout
            </button>
          </li>
        </>,
      ];
    } else {
      return [
        <>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </>,
      ];
    }
  };

  return (
    <nav>
      <div className="nav-wrapper blue">
        <Link to={state ? "/" : "/login"} className="brand-logo left">
          School
        </Link>
        <ul id="nav-mobile" className="right ">
          {renderList()}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
