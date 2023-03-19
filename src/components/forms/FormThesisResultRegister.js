import { useState } from "react";
import { FormInput, FormSelect, FormButton } from "..";
import sistatisApi from "../../api";
import toast from "react-hot-toast";
import seminarsApi from "../../api/seminarsApi";
import thesesApi from "../../api/thesesApi";
import { FaSearch } from "react-icons/fa";
import moment from "moment";
import { DataLecturers } from "../../fetch";

const FormThesisResultRegister = () => {
  const [thesis, setThesis] = useState(null);
  const [registerDate, setRegisterDate] = useState("");
  const [examiner1, setExaminer1] = useState("");
  const [examiner2, setExaminer2] = useState("");
  const [examiner3, setExaminer3] = useState("");
  const [semester, setSemester] = useState("");
  const [errors, setErrors] = useState([]);

  const handleNim = (e) => {
    e.preventDefault();
    const toastGetThesis = toast.loading("Loading...");
    const formData = new FormData(e.target);
    const getThesis = async (nim) => {
      try {
        const response = await sistatisApi.get(`${thesesApi}/show`, {
          params: { nim: nim },
        });
        const data = response.data.data;
        setThesis(data);
        toast.success("Got it!", {
          id: toastGetThesis,
        });
      } catch (error) {
        setThesis(null);

        if (error.response) {
          toast.error(error.response.statusText, {
            id: toastGetThesis,
          });
        } else {
          toast.error(error.message, {
            id: toastGetThesis,
          });
        }
      }
    };

    getThesis(formData.get("nim"));
  };

  const handleRegisterDate = (e) => {
    setRegisterDate(e.target.value);
  };
  const handleExaminer1 = (e) => {
    setExaminer1(e.target.value);
  };
  const handleExaminer2 = (e) => {
    setExaminer2(e.target.value);
  };
  const handleExaminer3 = (e) => {
    setExaminer3(e.target.value);
  };
  const handleSemester = (e) => {
    setSemester(e.target.value);
  };
  const handleClearForm = () => {
    setThesis(null);
    setErrors({});
    setRegisterDate("");
    setExaminer1("");
    setExaminer2("");
    setExaminer3("");
    setSemester("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const toastAddData = toast.loading("Loading...");
    const formData = new FormData(e.target);
    const addData = async () => {
      try {
        const response = await sistatisApi.post(seminarsApi, formData);
        const data = response.data;
        handleClearForm();
        toast.success(data.message, {
          id: toastAddData,
        });
      } catch (error) {
        if (error.response) {
          if (error.response.status === 422) {
            const data = error.response.data;
            toast.error(data.message, {
              id: toastAddData,
            });
            console.log(data.data);
            if (data.data.length > 0) {
              setErrors(data.data[0]);
            }
          } else if (error.response.status !== 422) {
            toast.error(error.response.statusText, {
              id: toastAddData,
            });
          }
        } else {
          toast.error(error.message, {
            id: toastAddData,
          });
        }
      }
    };

    addData();
  };

  return (
    <>
      <form onSubmit={handleNim} className="mb-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Tulis Nim"
            name="nim"
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-default">
              <FaSearch />
            </button>
          </div>
        </div>
      </form>
      {thesis ? (
        <div className="row">
          <div className="col-sm-6">
            <h2 className="lead">
              <strong>Mahasiswa</strong>
            </h2>
            <hr />
            <div className="row mb-sm-0 mb-3">
              <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                Nama:
              </label>
              <div className="col-sm-9">{thesis.student.name}</div>
            </div>
            <div className="row mb-sm-0 mb-3">
              <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                Nim:
              </label>
              <div className="col-sm-9">{thesis.student.nim}</div>
            </div>
            <div className="row mb-sm-0 mb-3">
              <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                No. HP:
              </label>
              <div className="col-sm-9">{thesis.student.phone}</div>
            </div>
            <div className="row mb-sm-0 mb-3">
              <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                Status:
              </label>
              <div className="col-sm-9">{thesis.student.status}</div>
            </div>
          </div>
          <div className="col-sm-6 mt-sm-0 mt-3">
            <h2 className="lead">
              <strong>Tugas Akhir</strong>
            </h2>
            <hr />
            <div className="row mb-sm-0 mb-3">
              <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                Tanggal Daftar:
              </label>
              <div className="col-sm-9">
                {moment(thesis.thesis.register_date).format("LL")}
              </div>
            </div>
            <div className="row mb-sm-0 mb-3">
              <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                Judul:
              </label>
              <div className="col-sm-9">{thesis.thesis.title}</div>
            </div>
            <div className="row mb-sm-0 mb-3">
              <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                KBK:
              </label>
              <div className="col-sm-9">{thesis.thesis.field.name}</div>
            </div>
            {thesis.thesis.supervisors.map((supervisor, index) => {
              return (
                <div className="row mb-sm-0 mb-3" key={index}>
                  <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                    {supervisor.status}:
                  </label>
                  <div className="col-sm-9">{supervisor.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

      <div className="row">
        <div className="col-sm-12 mt-sm-0 mt-3">
          <form
            className={
              thesis && thesis.student.status !== "Seminar Proposal Tugas Akhir"
                ? "d-none"
                : null
            }
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="thesis_id" value={thesis?.id} />
            <input
              type="hidden"
              name="name"
              value="Seminar Hasil Tugas Akhir"
            />
            <h2 className="lead">
              <strong>Seminar</strong>
            </h2>
            <hr />
            <FormInput
              label="Tanggal Daftar"
              name="register_date"
              id="register_date"
              type="date"
              onChange={handleRegisterDate}
              value={registerDate}
              errors={errors?.register_date}
              disabled={!thesis && true}
            />
            <FormSelect
              label="Penguji 1"
              name="examiner_1"
              id="examiner1"
              onChange={handleExaminer1}
              value={examiner1}
              errors={errors?.examiner_1}
              disabled={!thesis && true}
            >
              <DataLecturers
                data={thesis?.thesis.supervisors}
                disabled={examiner2}
                disabledOther={examiner3}
              />
            </FormSelect>
            <FormSelect
              label="Penguji 2"
              name="examiner_2"
              id="examiner2"
              onChange={handleExaminer2}
              value={examiner2}
              errors={errors?.examiner_2}
              disabled={!thesis && true}
            >
              <DataLecturers
                data={thesis?.thesis.supervisors}
                disabled={examiner1}
                disabledOther={examiner3}
              />
            </FormSelect>
            <FormSelect
              label="Penguji 3"
              name="examiner_3"
              id="examiner3"
              onChange={handleExaminer3}
              value={examiner3}
              errors={errors?.examiner_3}
              disabled={!thesis && true}
            >
              <DataLecturers
                data={thesis?.thesis.supervisors}
                disabled={examiner1}
                disabledOther={examiner2}
              />
            </FormSelect>
            <FormInput
              label="Semester"
              name="semester"
              id="semester"
              type="text"
              onChange={handleSemester}
              value={semester}
              errors={errors?.semester}
              disabled={!thesis && true}
            />
            <FormButton
              label="Submit"
              type="submit"
              disabled={!thesis && true}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default FormThesisResultRegister;
