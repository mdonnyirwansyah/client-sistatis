import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";

const ProtectedAuth = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess } = useSelector((state) => state.auth);
  const effect = useRef(false);

  useEffect(() => {
    if (effect.current === false) {
      dispatch(getMe());

      return () => (effect.current = true);
    }
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

  return <>{children}</>;
};

export default ProtectedAuth;
