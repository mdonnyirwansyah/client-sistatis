import { useState } from "react";
import {
    FormInput,
    FormSelect,
    FormButton,
  } from "../../components";

const FormThesisProposalSchedule = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
  
    const [errorDate, setErrorDate] = useState([]);
    const [errorTime, setErrorTime] = useState([]);
    const [errorLocation, setErrorLocation] = useState([]);
  
    const handleDate = (e) => {
      setDate(e.target.value);
    };
    const handleTime = (e) => {
      setTime(e.target.value);
    };
    const handleLocation = (e) => {
      setLocation(e.target.value);
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="lead">
              <strong>Jadwal</strong>
            </h2>
            <hr />
            <FormInput label="Tanggal" name="date" id="date" type="date"
        onChange={handleDate}
        value={date}
        errors={errorDate} />
            <FormInput label="Jam" name="time" id="time" type="time"
        onChange={handleTime}
        value={time}
        errors={errorTime} />
            <FormSelect label="Lokasi" name="location" id="location"
        onChange={handleLocation}
        value={location}
        errors={errorLocation}>
              <option>Pilih Lokasi</option>
            </FormSelect>
            <FormButton label="Atur Jadwal" type="submit" />
        </form>
    )
}

export default FormThesisProposalSchedule
