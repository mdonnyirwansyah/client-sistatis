import sistatisApi from "../../api";
import thesisProposalValidatesApi from "../../api/thesisProposalValidatesApi";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const FormThesisProposalValidate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const toastUpdateData = toast.loading("Loading...");
    const formData = new FormData(e.target);
    const updateData = async () => {
      try {
        const response = await sistatisApi.post(
          `${thesisProposalValidatesApi}/${id}`,
          formData
        );
        const data = response.data;
        toast.success(`Successfully saved!`, {
          id: toastUpdateData,
        });
        return navigate(-1);
      } catch (error) {
        if (error.response) {
          if (error.response.status === 422) {
            const data = error.response.data;
            toast.error(data.data.status, {
              id: toastUpdateData,
            });
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
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="_method" value="put" />
      <div className="row mt-sm-0 mt-3">
        <div className="col-sm-12">
          <h2 className="lead">
            <strong>Validasi</strong>
          </h2>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-12 d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">
            Validasi
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormThesisProposalValidate;
