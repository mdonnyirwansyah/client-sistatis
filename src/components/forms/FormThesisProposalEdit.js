import { useState } from "react";
import { FormInput, FormSelect, FormButton } from "..";
import sistatisApi from "../../api";
import toast from "react-hot-toast";
import thesisProposalsApi from "../../api/thesisProposalsApi";
import moment from "moment";
import { DataLecturersByField } from "../../fetch";
import { useNavigate, useParams } from "react-router-dom";

const FormThesisProposalEdit = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [registerDate, setRegisterDate] = useState(data.seminar.register_date);
  const [examiner1, setExaminer1] = useState(data.seminar.examiners[0].id);
  const [examiner2, setExaminer2] = useState(data.seminar.examiners[1].id);
  const [examiner3, setExaminer3] = useState(data.seminar.examiners[2].id);
  const [semester, setSemester] = useState(data.seminar.semester);
  const [errors, setErrors] = useState([]);

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
    setErrors({});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const toastUpdateData = toast.loading("Loading...");
    const formData = new FormData(e.target);
    const updateData = async () => {
      try {
        const response = await sistatisApi.post(
          `${thesisProposalsApi}/${id}`,
          formData
        );
        const data = response.data;
        handleClearForm();
        toast.success(`Successfully saved!`, {
          id: toastUpdateData,
        });
        return navigate(-1);
      } catch (error) {
        if (error.response) {
          if (error.response.status === 422) {
            const data = error.response.data;
            toast.error(data.status, {
              id: toastUpdateData,
            });
            setErrors(data.data);
          }
        } else {
          toast.error(error.message, {
            id: toastUpdateData,
          });
        }
      }
    };

    updateData();
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <h2 className="lead">
            <strong>Mahasiswa</strong>
          </h2>
          <hr />
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">Nama:</label>
            <div className="col-sm-9">{data.student.name}</div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">NIM:</label>
            <div className="col-sm-9">{data.student.nim}</div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
              No. HP:
            </label>
            <div className="col-sm-9">{data.student.phone}</div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
              Status:
            </label>
            <div className="col-sm-9">{data.student.status}</div>
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
              {moment(data.thesis.register_date).format("LL")}
            </div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
              Judul:
            </label>
            <div className="col-sm-9">{data.thesis.title}</div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">KBK:</label>
            <div className="col-sm-9">{data.thesis.field}</div>
          </div>
          {data.thesis.supervisors.map((supervisor, index) => {
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
      <div className="row">
        <div className="col-sm-12 mt-sm-0 mt-3">
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="_method" value="put" />
            <input type="hidden" name="thesis_id" value={data.thesis.id} />
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
              errors={errors && errors.register_date}
            />
            <FormSelect
              label="Penguji 1"
              name="examiner_1"
              id="examiner1"
              onChange={handleExaminer1}
              value={examiner1}
              errors={errors && errors.examiner_1}
            >
              <DataLecturersByField
                fieldId={data.thesis.field_id}
                data={data.thesis.supervisors}
                disabled={examiner2}
                disabledOther={examiner3}
              />
            </FormSelect>
            {examiner1 ? (
              <input
                type="hidden"
                name={"examiners[" + examiner1 + "]"}
                value="Penguji 1"
              />
            ) : null}
            <FormSelect
              label="Penguji 2"
              name="examiner_2"
              id="examiner2"
              onChange={handleExaminer2}
              value={examiner2}
              errors={errors && errors.examiner_2}
            >
              <DataLecturersByField
                fieldId={data.thesis.field_id}
                data={data.thesis.supervisors}
                disabled={examiner1}
                disabledOther={examiner3}
              />
            </FormSelect>
            {examiner2 ? (
              <input
                type="hidden"
                name={"examiners[" + examiner2 + "]"}
                value="Penguji 2"
              />
            ) : null}
            <FormSelect
              label="Penguji 3"
              name="examiner_3"
              id="examiner3"
              onChange={handleExaminer3}
              value={examiner3}
              errors={errors && errors.examiner_3}
            >
              <DataLecturersByField
                fieldId={data.thesis.field_id}
                data={data.thesis.supervisors}
                disabled={examiner1}
                disabledOther={examiner2}
              />
            </FormSelect>
            {examiner3 ? (
              <input
                type="hidden"
                name={"examiners[" + examiner3 + "]"}
                value="Penguji 3"
              />
            ) : null}
            <FormInput
              label="Semester"
              name="semester"
              id="semester"
              type="text"
              onChange={handleSemester}
              value={semester}
              errors={errors && errors.semester}
            />
            <FormButton label="Simpan Perubahan" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default FormThesisProposalEdit;
