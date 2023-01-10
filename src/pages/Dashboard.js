// import React, { useEffect } from "react";
import { Main } from "../components";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { getMe } from "../features/authSlice";

function Dashboard() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   dispatch(getMe());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (isError) {
  //     navigate("/login");
  //   }
  // }, [isError, navigate]);

  return (
    <Main title="Dashboard">
      <div className="callout callout-info">
        <p className="text-center my-3">Selamat Datang {user && user.name}</p>
      </div>
    </Main>
  );
}

export default Dashboard;
