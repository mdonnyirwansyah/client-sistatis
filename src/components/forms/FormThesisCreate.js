import { useState } from "react";
import { FormInput, FormSelect, FormButton } from "../../components";
import { DataFields, DataLecturers } from "../../fetch";
import thesesApi from "../../api/thesesApi";
import sistatisApi from "../../api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const FormThesisCreate = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
  const [phone, setPhone] = useState("");
  const [registerDate, setRegisterDate] = useState("");
  const [title, setTitle] = useState("");
  const [field, setField] = useState("");
  const [supervisor1, setSupervisor1] = useState("");
  const [supervisor2, setSupervisor2] = useState("");

  const [errors, setErrors] = useState({});

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
  const handleClearForm = () => {
    setErrors({});
    setName("");
    setNim("");
    setPhone("");
    setRegisterDate("");
    setTitle("");
    setField("");
    setSupervisor1("");
    setSupervisor2("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const toastAddData = toast.loading("Loading...");
    const formData = new FormData(e.target);
    const addData = async () => {
      try {
        const response = await sistatisApi.post(thesesApi, formData);
        const data = response.data;
        handleClearForm();
        toast.success(data.message, {
          id: toastAddData,
        });
        return navigate(-1);
      } catch (error) {
        if (error.response) {
          if (error.response.status === 422) {
            const data = error.response.data;
            toast.error(data.status, {
              id: toastAddData,
            });
            setErrors(data.data);
          }
          toast.error(error.response.statusText, {
            id: toastAddData,
          });
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
        errors={errors?.name}
      />
      <FormInput
        label="Nim"
        name="nim"
        id="nim"
        type="text"
        onChange={handleNim}
        value={nim}
        errors={errors?.nim}
      />
      <FormInput
        label="No. HP"
        name="phone"
        id="phone"
        type="text"
        onChange={handlePhone}
        value={phone}
        errors={errors?.phone}
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
        errors={errors?.register_date}
      />
      <FormInput
        label="Judul"
        name="title"
        id="title"
        type="text"
        onChange={handleTitle}
        value={title}
        errors={errors?.title}
      />
      <FormSelect
        label="KBK"
        name="field"
        id="field"
        onChange={handleField}
        value={field}
        errors={errors?.field}
      >
        <DataFields />
      </FormSelect>
      <FormSelect
        label="Pembimbing 1"
        name="supervisor_1"
        id="supervisor_1"
        onChange={handleSupervisor1}
        value={supervisor1}
        errors={errors?.supervisor_1}
      >
        <DataLecturers disabled={supervisor2} />
      </FormSelect>
      <FormSelect
        label="Pembimbing 2"
        name="supervisor_2"
        id="supervisor_2"
        onChange={handleSupervisor2}
        value={supervisor2}
        errors={errors?.supervisor_2}
      >
        <DataLecturers disabled={supervisor1} />
      </FormSelect>
      <FormButton label="Submit" type="submit" />
    </form>
  );
};

export default FormThesisCreate;
