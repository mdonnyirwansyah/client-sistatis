import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedAuth, ProtectedRoutes } from './components';
import {
    Login,
    Dashboard,
    Profile,
    UpdatePassword,
    LecturerClassification,
    LecturerDetail,
    Thesis,
    ThesisFilter,
    ThesisRegister,
    ThesisEdit,
    ThesisProposal,
    ThesisProposalDetail,
    ThesisProposalEdit,
    ThesisSeminarRegister,
    ThesisProposalSchedule,
    ThesisProposalScheduleDetail,
    ThesisProposalValidate,
    ThesisProposalValidateDetail,
    ThesisResult,
    ThesisResultDetail,
    ThesisResultEdit,
    ThesisResultSchedule,
    ThesisResultScheduleDetail,
    ThesisResultValidate,
    ThesisResultValidateDetail,
    ThesisDefence,
    ThesisDefenceDetail,
    ThesisDefenceEdit,
    ThesisDefenceSchedule,
    ThesisDefenceScheduleDetail,
    ThesisDetail,
    ThesisDefenceValidate,
    ThesisDefenceValidateDetail,
    NotFound,
} from './pages';

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
                    <Route path="Lecturer">
                        <Route
                            index
                            element={
                                <ProtectedRoutes>
                                    <LecturerClassification />
                                </ProtectedRoutes>
                            }
                        />
                        <Route
                            path="show/:id"
                            element={
                                <ProtectedRoutes>
                                    <LecturerDetail />
                                </ProtectedRoutes>
                            }
                        />
                    </Route>
                    <Route path="thesis">
                        <Route
                            index
                            element={
                                <ProtectedRoutes>
                                    <Thesis />
                                </ProtectedRoutes>
                            }
                        />
                        <Route path="filter">
                            <Route
                                index
                                element={
                                    <ProtectedRoutes>
                                        <ThesisFilter />
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
                        </Route>
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
                        <Route path="thesis-result">
                            <Route
                                index
                                element={
                                    <ProtectedRoutes>
                                        <ThesisResult />
                                    </ProtectedRoutes>
                                }
                            />
                            <Route
                                path="show/:id"
                                element={
                                    <ProtectedRoutes>
                                        <ThesisResultDetail />
                                    </ProtectedRoutes>
                                }
                            />
                            <Route
                                path="edit/:id"
                                element={
                                    <ProtectedRoutes>
                                        <ThesisResultEdit />
                                    </ProtectedRoutes>
                                }
                            />
                        </Route>
                        <Route path="thesis-defence">
                            <Route
                                index
                                element={
                                    <ProtectedRoutes>
                                        <ThesisDefence />
                                    </ProtectedRoutes>
                                }
                            />
                            <Route
                                path="show/:id"
                                element={
                                    <ProtectedRoutes>
                                        <ThesisDefenceDetail />
                                    </ProtectedRoutes>
                                }
                            />
                            <Route
                                path="edit/:id"
                                element={
                                    <ProtectedRoutes>
                                        <ThesisDefenceEdit />
                                    </ProtectedRoutes>
                                }
                            />
                        </Route>
                    </Route>
                </Route>
                <Route path="register">
                    <Route
                        path="thesis"
                        element={
                            <ProtectedRoutes>
                                <ThesisRegister />
                            </ProtectedRoutes>
                        }
                    />
                    <Route
                        path="seminar"
                        element={
                            <ProtectedRoutes>
                                <ThesisSeminarRegister />
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
                    <Route path="thesis-result">
                        <Route
                            index
                            element={
                                <ProtectedRoutes>
                                    <ThesisResultSchedule />
                                </ProtectedRoutes>
                            }
                        />
                        <Route
                            path="show/:id"
                            element={
                                <ProtectedRoutes>
                                    <ThesisResultScheduleDetail />
                                </ProtectedRoutes>
                            }
                        />
                    </Route>
                    <Route path="thesis-defence">
                        <Route
                            index
                            element={
                                <ProtectedRoutes>
                                    <ThesisDefenceSchedule />
                                </ProtectedRoutes>
                            }
                        />
                        <Route
                            path="show/:id"
                            element={
                                <ProtectedRoutes>
                                    <ThesisDefenceScheduleDetail />
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
                    <Route path="thesis-result">
                        <Route
                            index
                            element={
                                <ProtectedRoutes>
                                    <ThesisResultValidate />
                                </ProtectedRoutes>
                            }
                        />
                        <Route
                            path="show/:id"
                            element={
                                <ProtectedRoutes>
                                    <ThesisResultValidateDetail />
                                </ProtectedRoutes>
                            }
                        />
                    </Route>
                    <Route path="thesis-defence">
                        <Route
                            index
                            element={
                                <ProtectedRoutes>
                                    <ThesisDefenceValidate />
                                </ProtectedRoutes>
                            }
                        />
                        <Route
                            path="show/:id"
                            element={
                                <ProtectedRoutes>
                                    <ThesisDefenceValidateDetail />
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
