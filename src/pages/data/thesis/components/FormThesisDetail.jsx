import moment from 'moment';

const FormThesisDetail = ({ data }) => {
    return (
        <>
            <div className="row">
                <div className="col-sm-6">
                    <h2 className="lead">
                        <strong>Mahasiswa</strong>
                    </h2>
                    <hr />
                    <div className="row mb-sm-0 mb-3">
                        <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                            Tanggal Daftar:
                        </label>
                        <div className="col-sm-9">
                            {moment(data.register_date).format('LL')}
                        </div>
                    </div>
                    <div className="row mb-sm-0 mb-3">
                        <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                            Nama:
                        </label>
                        <div className="col-sm-9">{data.name}</div>
                    </div>
                    <div className="row mb-sm-0 mb-3">
                        <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                            NIM:
                        </label>
                        <div className="col-sm-9">{data.nim}</div>
                    </div>
                    <div className="row mb-sm-0 mb-3">
                        <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                            Angkatan:
                        </label>
                        <div className="col-sm-9">{data.generation}</div>
                    </div>
                    <div className="row mb-sm-0 mb-3">
                        <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                            No. HP:
                        </label>
                        <div className="col-sm-9">{data.phone}</div>
                    </div>
                    <div className="row mb-sm-0 mb-3">
                        <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                            Status:
                        </label>
                        <div className="col-sm-9">{data.status}</div>
                    </div>
                    {data.status === 'Lulus' ? (
                        <>
                            <div className="row mb-sm-0 mb-3">
                                <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                    Tanggal Lulus:
                                </label>
                                <div className="col-sm-9">
                                    {moment(data.graduate_date).format('LL')}
                                </div>
                            </div>
                            <div className="row mb-sm-0 mb-3">
                                <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                    IPK:
                                </label>
                                <div className="col-sm-9">{data.gpa}</div>
                            </div>
                            <div className="row mb-sm-0 mb-3">
                                <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                    Lama Study:
                                </label>
                                <div className="col-sm-9">
                                    {data.study_duration} tahun
                                </div>
                            </div>
                        </>
                    ) : null}
                </div>
                <div className="col-sm-6 mt-sm-0 mt-3">
                    <h2 className="lead">
                        <strong>Tugas Akhir</strong>
                    </h2>
                    <hr />
                    <div className="row mb-sm-0 mb-3">
                        <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                            Tanggal Daftar:
                        </label>
                        <div className="col-sm-9">
                            {moment(data.thesis.register_date).format('LL')}
                        </div>
                    </div>
                    <div className="row mb-sm-0 mb-3">
                        <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                            Judul:
                        </label>
                        <div className="col-sm-9">{data.thesis.title}</div>
                    </div>
                    <div className="row mb-sm-0 mb-3">
                        <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                            KBK:
                        </label>
                        <div className="col-sm-9">{data.thesis.field.name}</div>
                    </div>
                    {data.thesis.supervisors.map((supervisor) => {
                        return (
                            <div
                                className="row mb-sm-0 mb-3"
                                key={supervisor.id}
                            >
                                <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                    {supervisor.status}:
                                </label>
                                <div className="col-sm-9">
                                    {supervisor.name}
                                </div>
                            </div>
                        );
                    })}
                    <div className="row mb-sm-0 mb-3">
                        <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                            Lama TA:
                        </label>
                        <div className="col-sm-9">
                            {data.thesis.thesis_duration} bulan
                        </div>
                    </div>
                    <div className="row mb-sm-0 mb-3">
                        <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                            Status:
                        </label>
                        <div className="col-sm-9">{data.thesis.status}</div>
                    </div>
                    {data.thesis.status === 'Sidang Tugas Akhir' ? (
                        <div className="row mb-sm-0 mb-3">
                            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                Tanggal Selesai:
                            </label>
                            <div className="col-sm-9">
                                {moment(data.thesis.finish_date).format('LL')}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
            {data.thesis.seminars
                ? data.thesis.seminars.map((seminar) => {
                      return (
                          <div key={seminar.id}>
                              <div className="row mt-sm-0 mt-3">
                                  <div className="col-sm-6">
                                      <h2 className="lead">
                                          <strong>{seminar.type}</strong>
                                      </h2>
                                  </div>
                                  <div className="col-sm-6">
                                      <h2 className="lead text-sm-right mb-sm-2 mb-0">
                                          <strong>
                                              Semester: {seminar.semester}
                                          </strong>
                                      </h2>
                                  </div>
                              </div>
                              <hr />
                              <div className="row">
                                  <div className="col-sm-6">
                                      <div className="row mb-sm-0 mb-3">
                                          <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                              Tanggal Daftar:
                                          </label>
                                          <div className="col-sm-9">
                                              {moment(
                                                  seminar.register_date
                                              ).format('dddd, D MMMM YYYY')}
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col-sm-6">
                                      <div className="row mb-sm-0 mb-3">
                                          <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                              Tanggal Seminar:
                                          </label>
                                          <div className="col-sm-9">
                                              {seminar.date ? (
                                                  moment(seminar.date).format(
                                                      'dddd, D MMMM YYYY'
                                                  )
                                              ) : (
                                                  <span className="badge badge-warning text-white">
                                                      Tanggal Belum Ditentukan
                                                  </span>
                                              )}
                                          </div>
                                      </div>
                                      <div className="row mb-sm-0 mb-3">
                                          <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                              Jam Seminar:
                                          </label>
                                          <div className="col-sm-9">
                                              {seminar.time ? (
                                                  moment(
                                                      seminar.time,
                                                      'HH:mm:ss'
                                                  ).format('LT [WIB]')
                                              ) : (
                                                  <span className="badge badge-warning text-white">
                                                      Jam Belum Ditentukan
                                                  </span>
                                              )}
                                          </div>
                                      </div>
                                      <div className="row mb-sm-0 mb-3">
                                          <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                              Lokasi:
                                          </label>
                                          <div className="col-sm-9">
                                              {seminar.location ? (
                                                  seminar.location.name
                                              ) : (
                                                  <span className="badge badge-warning text-white">
                                                      Lokasi Belum Ditentukan
                                                  </span>
                                              )}
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-6">
                                      {seminar.chief_of_examiner ? (
                                          <div className="row mb-sm-0 mb-3">
                                              <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                                  Ketua Sidang:
                                              </label>
                                              <div className="col-sm-9">
                                                  {
                                                      seminar.chief_of_examiner
                                                          .name
                                                  }
                                              </div>
                                          </div>
                                      ) : null}
                                      {seminar.examiners.map((examiner) => {
                                          return (
                                              <div
                                                  className="row mb-sm-0 mb-3"
                                                  key={examiner.id}
                                              >
                                                  <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                                      {examiner.status}:
                                                  </label>
                                                  <div className="col-sm-9">
                                                      {examiner.name}
                                                  </div>
                                              </div>
                                          );
                                      })}
                                      <div className="row mb-sm-0 mb-3">
                                          <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                              Status:
                                          </label>
                                          <div className="col-sm-9">
                                              {seminar.status}
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      );
                  })
                : null}
        </>
    );
};

export default FormThesisDetail;
