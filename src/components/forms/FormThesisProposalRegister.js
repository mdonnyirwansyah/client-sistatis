import { useState } from "react";
import { FormInput, FormSelect, FormButton } from "../../components";

const FormThesisProposalRegister = () => {
  const [nim, setNim] = useState("");
  const [registerDate, setRegisterDate] = useState("");
  const [examiner1, setExaminer1] = useState("");
  const [examiner2, setExaminer2] = useState("");
  const [examiner3, setExaminer3] = useState("");
  const [semester, setSemester] = useState("");

  const [errorNim, setErrorNim] = useState([]);
  const [errorRegisterDate, setErrorRegisterDate] = useState([]);
  const [errorExaminer1, setErrorExaminer1] = useState([]);
  const [errorExaminer2, setErrorExaminer2] = useState([]);
  const [errorExaminer3, setErrorExaminer3] = useState([]);
  const [errorSemester, setErrorSemester] = useState([]);

  const handleNim = (e) => {
    setNim(e.target.value);
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="lead">
        <strong>Mahasiswa</strong>
      </h2>
      <hr />
      <FormInput
        label="NIM"
        name="nim"
        id="nim"
        type="text"
        onChange={handleNim}
        value={nim}
        errors={errorNim}
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
        errors={errorRegisterDate}
      />
      <FormSelect
        label="Penguji 1"
        name="examiner[]"
        id="examiner1"
        onChange={handleExaminer1}
        value={examiner1}
        errors={errorExaminer1}
      >
        <option>Pilih Penguji 1</option>
      </FormSelect>
      <FormSelect
        label="Penguji 2"
        name="examiner[]"
        id="examiner2"
        onChange={handleExaminer2}
        value={examiner2}
        errors={errorExaminer2}
      >
        <option>Pilih Penguji 2</option>
      </FormSelect>
      <FormSelect
        label="Penguji 3"
        name="examiner[]"
        id="examiner3"
        onChange={handleExaminer3}
        value={examiner3}
        errors={errorExaminer3}
      >
        <option>Pilih Penguji 3</option>
      </FormSelect>
      <FormInput
        label="Semester"
        name="semester"
        id="semester"
        type="text"
        onChange={handleSemester}
        value={semester}
        errors={errorSemester}
      />
      <FormButton label="Submit" type="submit" />
    </form>
  );
};

export default FormThesisProposalRegister;
