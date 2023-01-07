import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import { getThesis } from "../api/thesesApi";
import { FormThesisEdit, FormThesisDetail } from "../components";

function DataThesis() {
  const { id } = useParams();
  const location = useLocation();
  const isFormEdit = location.pathname.includes("/edit");
  const isFormDetail = location.pathname.includes("/show");

  const {
    isLoading,
    isError,
    data: thesis,
  } = useQuery("thesis", () => getThesis(id));

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "Something when wrong...";
  }

  if (isFormEdit) {
    return <FormThesisEdit data={thesis} />;
  }

  if (isFormDetail) {
    return <FormThesisDetail data={thesis} />;
  }
}

export default DataThesis;
