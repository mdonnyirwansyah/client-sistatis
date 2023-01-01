const FormThesisProposalValidate = () => {
  return (
    <form>
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
          <input type="hidden" name="seminar_id" />
          <button type="submit" className="btn btn-primary">
            Validasi
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormThesisProposalValidate;
