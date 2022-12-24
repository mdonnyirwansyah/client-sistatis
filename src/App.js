import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Login,
  Dashboard,
  Profile,
  UpdatePassword,
  Thesis,
  ThesisCreate,
  ThesisEdit,
  ThesisProposal,
  ThesisProposalDetail,
  ThesisProposalEdit,
  ThesisProposalRegister,
  ThesisProposalSchedule,
  ThesisProposalScheduleDetail,
  ThesisProposalValidate,
  ThesisProposalValidateDetail,
  NotFound,
  ThesisDetail,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Dashboard />} />
        <Route path="data">
          <Route path="thesis">
            <Route index element={<Thesis />} />
            <Route path="create" element={<ThesisCreate />} />
            <Route path="show/:id" element={<ThesisDetail />} />
            <Route path="edit/:id" element={<ThesisEdit />} />
          </Route>
          <Route path="seminar">
            <Route path="thesis-proposal">
              <Route index element={<ThesisProposal />} />
              <Route path="show/:id" element={<ThesisProposalDetail />} />
              <Route path="edit/:id" element={<ThesisProposalEdit />} />
            </Route>
          </Route>
        </Route>
        <Route path="seminar-register">
          <Route path="thesis-proposal" element={<ThesisProposalRegister />} />
        </Route>
        <Route path="seminar-schedule">
          <Route path="thesis-proposal">
            <Route index element={<ThesisProposalSchedule />} />
            <Route path="show/:id" element={<ThesisProposalScheduleDetail />} />
          </Route>
        </Route>
        <Route path="seminar-validate">
          <Route path="thesis-proposal">
            <Route index element={<ThesisProposalValidate />} />
            <Route path="show/:id" element={<ThesisProposalValidateDetail />} />
          </Route>
        </Route>
        <Route path="account">
          <Route path="profile" element={<Profile />} />
          <Route path="update-password" element={<UpdatePassword />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
