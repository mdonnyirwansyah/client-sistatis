import { useState } from "react";
import { FormInput, FormSelect, FormButton } from "..";
import sistatisApi from "../../api";
import toast from "react-hot-toast";
import seminarsApi from "../../api/seminarsApi";
import { DataLecturers } from "../../fetch";
import { useNavigate, useParams } from "react-router-dom";

const FormThesisSeminarEdit = ({ data }) => {
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
          `${seminarsApi}/${id}`,
          formData
        );
        const data = response.data;
        handleClearForm();
        toast.success(data.message, {
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

          toast.error(error.response.statusText, {
            id: toastUpdateData,
          });
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
        errors={errors?.register_date}
      />
      <FormSelect
        label="Penguji 1"
        name="examiner_1"
        id="examiner1"
        onChange={handleExaminer1}
        value={examiner1}
        errors={errors?.examiner_1}
      >
        <DataLecturers
          data={data.thesis.supervisors}
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
      >
        <DataLecturers
          data={data.thesis.supervisors}
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
      >
        <DataLecturers
          data={data.thesis.supervisors}
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
      />
      <FormButton label="Simpan Perubahan" type="submit" />
    </form>
  );
};

export default FormThesisSeminarEdit;
