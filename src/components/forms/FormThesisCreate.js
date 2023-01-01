import { useState } from "react";
import { FormInput, FormSelect, FormButton } from "../../components";
import { DataFields, DataFieldLecturers } from "../../fetch";
import { addThesis } from "../../api/thesesApi";

const FormThesisCreate = () => {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
  const [phone, setPhone] = useState("");
  const [registerDate, setRegisterDate] = useState("");
  const [title, setTitle] = useState("");
  const [field, setField] = useState("");
  const [supervisor1, setSupervisor1] = useState("");
  const [supervisor2, setSupervisor2] = useState("");

  const [errorName, setErrorName] = useState([]);
  const [errorNim, setErrorNim] = useState([]);
  const [errorPhone, setErrorPhone] = useState([]);
  const [errorRegisterDate, setErrorRegisterDate] = useState([]);
  const [errorTitle, setErrorTitle] = useState([]);
  const [errorField, setErrorField] = useState([]);
  const [errorSupervisor1, setErrorSupervisor1] = useState([]);
  const [errorSupervisor2, setErrorSupervisor2] = useState([]);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleNim = (e) => {
    setNim(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleRegisterDate = (e) => {
    setRegisterDate(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleField = (e) => {
    setField(e.target.value);
  };
  const handleSupervisor1 = (e) => {
    setSupervisor1(e.target.value);
  };
  const handleSupervisor2 = (e) => {
    setSupervisor2(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const created = await addThesis(data);
    if (created.code === "200") {
    } else {
      created.data.name && setErrorName(created.data.name);
      created.data.nim && setErrorNim(created.data.nim);
      created.data.phone && setErrorPhone(created.data.phone);
      created.data.date_register &&
        setErrorRegisterDate(created.data.date_register);
      created.data.title && setErrorTitle(created.data.title);
      created.data.field && setErrorField(created.data.field);
      created.data.supervisors && setErrorSupervisor1(created.data.supervisors);
      created.data.supervisors && setErrorSupervisor2(created.data.supervisors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="lead">
        <strong>Mahasiswa</strong>
      </h2>
      <hr />
      <FormInput
        label="Nama"
        name="name"
        id="name"
        type="text"
        onChange={handleName}
        value={name}
        errors={errorName}
      />
      <FormInput
        label="NIM"
        name="nim"
        id="nim"
        type="text"
        onChange={handleNim}
        value={nim}
        errors={errorNim}
      />
      <FormInput
        label="No. HP"
        name="phone"
        id="phone"
        type="text"
        onChange={handlePhone}
        value={phone}
        errors={errorPhone}
      />
      <h2 className="lead">
        <strong>Tugas Akhir</strong>
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
      <FormInput
        label="Judul"
        name="title"
        id="title"
        type="text"
        onChange={handleTitle}
        value={title}
        errors={errorTitle}
      />
      <FormSelect
        label="KBK"
        name="field"
        id="field"
        onChange={handleField}
        value={field}
        errors={errorField}
      >
        <DataFields />
      </FormSelect>
      <FormSelect
        label="Pembimbing 1"
        name="supervisors[]"
        id="supervisor1"
        onChange={handleSupervisor1}
        value={supervisor1}
        errors={errorSupervisor1}
      >
        <DataFieldLecturers field_id={field} />
      </FormSelect>
      <FormSelect
        label="Pembimbing 2"
        name="supervisors[]"
        id="supervisor2"
        onChange={handleSupervisor2}
        value={supervisor2}
        errors={errorSupervisor2}
      >
        <DataFieldLecturers field_id={field} selected_id={supervisor1} />
      </FormSelect>
      <FormButton label="Submit" type="submit" />
    </form>
  );
};

export default FormThesisCreate;
