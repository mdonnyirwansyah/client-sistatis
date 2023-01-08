import { useState } from "react";
import { FormInput, FormSelect, FormButton } from "../../components";
import { DataLocations } from "../../fetch";
import toast from "react-hot-toast";
import sistatisApi from "../../api";
import thesisProposalSchedulesApi from "../../api/thesisProposalSchedulesApi";
import { useNavigate, useParams } from "react-router-dom";

const FormThesisProposalSchedule = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  const [errors, setErrors] = useState([]);

  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
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
          `${thesisProposalSchedulesApi}/${id}`,
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
        </div>
        <div className="col-sm-6 mt-sm-0 mt-3">
          <h2 className="lead">
            <strong>Penguji</strong>
          </h2>
          <hr />
          {data.seminar.examiners.map((examiner, index) => {
            return (
              <div className="row mb-sm-0 mb-3" key={index}>
                <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                  {examiner.status}:
                </label>
                <div className="col-sm-9">{examiner.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row mt-sm-0 mt-3">
        <div className="col-sm-12">
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="_method" value="put" />
            <h2 className="lead">
              <strong>Jadwal</strong>
            </h2>
            <hr />
            <FormInput
              label="Tanggal"
              name="date"
              id="date"
              type="date"
              onChange={handleDate}
              value={date}
              errors={errors && errors.date}
            />
            <FormInput
              label="Jam"
              name="time"
              id="time"
              type="time"
              onChange={handleTime}
              value={time}
              errors={errors && errors.time}
            />
            <FormSelect
              label="Lokasi"
              name="location"
              id="location"
              onChange={handleLocation}
              value={location}
              errors={errors && errors.location}
            >
              <DataLocations />
            </FormSelect>
            <FormButton label="Atur Jadwal" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default FormThesisProposalSchedule;
