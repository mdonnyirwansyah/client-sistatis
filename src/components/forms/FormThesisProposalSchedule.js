import { useState } from "react";
import { FormInput, FormSelect, FormButton } from "../../components";
import { DataLocations } from "../../fetch";
import toast from "react-hot-toast";
import sistatisApi from "../../api";
import seminarsApi from "../../api/seminarsApi";
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
          `${seminarsApi}/schedule/${id}`,
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
        errors={errors?.date}
      />
      <FormInput
        label="Jam"
        name="time"
        id="time"
        type="time"
        onChange={handleTime}
        value={time}
        errors={errors?.time}
      />
      <FormSelect
        label="Lokasi"
        name="location"
        id="location"
        onChange={handleLocation}
        value={location}
        errors={errors?.location}
      >
        <DataLocations />
      </FormSelect>
      <FormButton label="Atur Jadwal" type="submit" />
    </form>
  );
};

export default FormThesisProposalSchedule;
