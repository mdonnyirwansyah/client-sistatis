import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedAuth, ProtectedRoutes } from "./components";
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
        <Route
          index
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route path="data">
          <Route path="thesis">
            <Route
              index
              element={
                <ProtectedRoutes>
                  <Thesis />
                </ProtectedRoutes>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoutes>
                  <ThesisCreate />
                </ProtectedRoutes>
              }
            />
            <Route
              path="show/:id"
              element={
                <ProtectedRoutes>
                  <ThesisDetail />
                </ProtectedRoutes>
              }
            />
            <Route
              path="edit/:id"
              element={
                <ProtectedRoutes>
                  <ThesisEdit />
                </ProtectedRoutes>
              }
            />
          </Route>
          <Route path="seminar">
            <Route path="thesis-proposal">
              <Route
                index
                element={
                  <ProtectedRoutes>
                    <ThesisProposal />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="show/:id"
                element={
                  <ProtectedRoutes>
                    <ThesisProposalDetail />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="edit/:id"
                element={
                  <ProtectedRoutes>
                    <ThesisProposalEdit />
                  </ProtectedRoutes>
                }
              />
            </Route>
          </Route>
        </Route>
        <Route path="seminar-register">
          <Route
            path="thesis-proposal"
            element={
              <ProtectedRoutes>
                <ThesisProposalRegister />
              </ProtectedRoutes>
            }
          />
        </Route>
        <Route path="seminar-schedule">
          <Route path="thesis-proposal">
            <Route
              index
              element={
                <ProtectedRoutes>
                  <ThesisProposalSchedule />
                </ProtectedRoutes>
              }
            />
            <Route
              path="show/:id"
              element={
                <ProtectedRoutes>
                  <ThesisProposalScheduleDetail />
                </ProtectedRoutes>
              }
            />
          </Route>
        </Route>
        <Route path="seminar-validate">
          <Route path="thesis-proposal">
            <Route
              index
              element={
                <ProtectedRoutes>
                  <ThesisProposalValidate />
                </ProtectedRoutes>
              }
            />
            <Route
              path="show/:id"
              element={
                <ProtectedRoutes>
                  <ThesisProposalValidateDetail />
                </ProtectedRoutes>
              }
            />
          </Route>
        </Route>
        <Route path="account">
          <Route
            path="profile"
            element={
              <ProtectedRoutes>
                <Profile />
              </ProtectedRoutes>
            }
          />
          <Route
            path="update-password"
            element={
              <ProtectedRoutes>
                <UpdatePassword />
              </ProtectedRoutes>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <ProtectedAuth>
              <Login />
            </ProtectedAuth>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
