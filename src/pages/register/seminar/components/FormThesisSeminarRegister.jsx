import { useState } from 'react';
import {
    Card,
    FormInput,
    FormSelect,
    FormButton,
} from '../../../../components';
import sistatisApi from '../../../../api';
import toast from 'react-hot-toast';
import thesesApi from '../../../../api/thesesApi';
import { thesisSeminarRegister } from '../../../../api/seminarsApi';
import { FaSearch } from 'react-icons/fa';
import moment from 'moment';
import { useLecturers } from '../../../../hooks/useLecturers';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const FormThesisSeminarRegister = () => {
    const navigate = useNavigate();
    const { data: lecturers } = useLecturers();
    const [errors, setErrors] = useState({});
    const [student, setStudent] = useState(null);

    const [form, setForm] = useState({
        student: {
            nim: '',
            seminar: {
                type: '',
                register_date: '',
                semester: '',
                examiners: [
                    {
                        lecturer_id: '',
                        status: 'Penguji 1',
                    },
                    {
                        lecturer_id: '',
                        status: 'Penguji 2',
                    },
                    {
                        lecturer_id: '',
                        status: 'Penguji 3',
                    },
                ],
            },
        },
    });

    const handleNim = (e) => {
        e.preventDefault();

        const toastGetStudent = toast.loading('Loading...');
        const formData = new FormData(e.target);
        const getStudent = async (nim) => {
            try {
                const response = await sistatisApi.get(
                    `${thesesApi}/nim/${nim}`
                );
                const data = response.data.data;
                let type = '';
                switch (data.thesis.status) {
                    case 'Pendaftaran Tugas Akhir':
                        type = 'Seminar Proposal Tugas Akhir';
                        break;

                    case 'Seminar Proposal Tugas Akhir':
                        type = 'Seminar Hasil Tugas Akhir';
                        break;

                    default:
                        type = 'Sidang Tugas Akhir';
                        setForm((form) => ({
                            ...form,
                            student: {
                                ...form.student,
                                seminar: {
                                    ...form.student.seminar,
                                    examiners: {
                                        ...form.student.seminar.examiners,
                                        [3]: {
                                            lecturer_id: e.target.value,
                                            status: 'Ketua Sidang',
                                        },
                                    },
                                },
                            },
                        }));
                        break;
                }
                setStudent(data);
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        nim: data.nim,
                        seminar: {
                            ...form.student.seminar,
                            type: type,
                        },
                    },
                }));
                toast.success('Got it!', {
                    id: toastGetStudent,
                });
            } catch (error) {
                setStudent(null);

                if (error.response) {
                    toast.error(error.response.statusText, {
                        id: toastGetStudent,
                    });
                } else {
                    toast.error(error.message, {
                        id: toastGetStudent,
                    });
                }
            }
        };

        getStudent(formData.get('nim'));
    };

    const handleForm = (e) => {
        switch (e.target.id) {
            case 'nim':
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        nim: e.target.value,
                    },
                }));
                break;

            case 'register_date':
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        seminar: {
                            ...form.student.seminar,
                            register_date: e.target.value,
                        },
                    },
                }));
                break;

            case 'type':
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        seminar: {
                            ...form.student.seminar,
                            type: parseInt(e.target.value),
                        },
                    },
                }));
                break;

            case 'semester':
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        seminar: {
                            ...form.student.seminar,
                            semester: e.target.value,
                        },
                    },
                }));
                break;

            case 'penguji_1':
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        seminar: {
                            ...form.student.seminar,
                            examiners: {
                                ...form.student.seminar.examiners,
                                [0]: {
                                    ...form.student.seminar.examiners[0],
                                    lecturer_id: e.target.value,
                                },
                            },
                        },
                    },
                }));
                break;

            case 'penguji_2':
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        seminar: {
                            ...form.student.seminar,
                            examiners: {
                                ...form.student.seminar.examiners,
                                [1]: {
                                    ...form.student.seminar.examiners[1],
                                    lecturer_id: e.target.value,
                                },
                            },
                        },
                    },
                }));
                break;

            case 'penguji_3':
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        seminar: {
                            ...form.student.seminar,
                            examiners: {
                                ...form.student.seminar.examiners,
                                [2]: {
                                    ...form.student.seminar.examiners[2],
                                    lecturer_id: e.target.value,
                                },
                            },
                        },
                    },
                }));
                break;

            default:
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        seminar: {
                            ...form.student.seminar,
                            examiners: {
                                ...form.student.seminar.examiners,
                                [3]: {
                                    ...form.student.seminar.examiners[3],
                                    lecturer_id: e.target.value,
                                },
                            },
                        },
                    },
                }));
                break;
        }
    };

    const mutation = useMutation({
        mutationFn: thesisSeminarRegister,
        onError: (error) => {
            if (error.response) {
                if (error.response.status === 422) {
                    const message = error.response.data.data;
                    let newErrors = {};
                    for (const key in message) {
                        newErrors[`${key.replace(/\./g, '_')}`] = message[key];
                    }
                    setErrors(newErrors);
                    toast.error(error.response.data.message);
                }
            } else {
                toast.error(error.message);
            }
        },
        onSuccess: (data) => {
            toast.success(data.data.message);
            let url = '';
            switch (form.student.seminar.type) {
                case 'Seminar Proposal Tugas Akhir':
                    url = 'thesis-proposal';
                    break;

                case 'Seminar Hasil Tugas Akhir':
                    url = 'thesis-result';
                    break;

                default:
                    url = 'thesis-defence';
                    break;
            }

            return navigate(`/data/seminar/${url}`, { replace: true });
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        mutation.mutate(form);
    };

    return (
        <>
            <Card>
                <form onSubmit={handleNim}>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Tulis Nim"
                            name="nim"
                        />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-default">
                                <FaSearch />
                            </button>
                        </div>
                    </div>
                </form>
                {student ? (
                    <>
                        <div className="row mt-3">
                            <div className="col-sm-6">
                                <h2 className="lead">
                                    <strong>Data Mahasiswa</strong>
                                </h2>
                                <hr />
                                <div className="row mb-sm-0 mb-3">
                                    <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                        Nama:
                                    </label>
                                    <div className="col-sm-9">
                                        {student.name}
                                    </div>
                                </div>
                                <div className="row mb-sm-0 mb-3">
                                    <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                        NIM:
                                    </label>
                                    <div className="col-sm-9">
                                        {student.nim}
                                    </div>
                                </div>
                                <div className="row mb-sm-0 mb-3">
                                    <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                        No. HP:
                                    </label>
                                    <div className="col-sm-9">
                                        {student.phone}
                                    </div>
                                </div>
                                <div className="row mb-sm-0 mb-3">
                                    <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                        Status:
                                    </label>
                                    <div className="col-sm-9">
                                        {student.status}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mt-sm-0 mt-3">
                                <h2 className="lead">
                                    <strong>Data Tugas Akhir</strong>
                                </h2>
                                <hr />
                                <div className="row mb-sm-0 mb-3">
                                    <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                        Tanggal Daftar:
                                    </label>
                                    <div className="col-sm-9">
                                        {moment(
                                            student.thesis.register_date
                                        ).format('LL')}
                                    </div>
                                </div>
                                <div className="row mb-sm-0 mb-3">
                                    <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                        Judul:
                                    </label>
                                    <div className="col-sm-9">
                                        {student.thesis.title}
                                    </div>
                                </div>
                                <div className="row mb-sm-0 mb-3">
                                    <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                        KBK:
                                    </label>
                                    <div className="col-sm-9">
                                        {student.thesis.field.name}
                                    </div>
                                </div>
                                {student.thesis.supervisors.map(
                                    (supervisor) => {
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
                                    }
                                )}
                                <div className="row mb-sm-0 mb-3">
                                    <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                        Status:
                                    </label>
                                    <div className="col-sm-9">
                                        {student.thesis.status}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {student.thesis.seminars
                            ? student.thesis.seminars.map((seminar) => {
                                  return (
                                      <div key={seminar.id}>
                                          <div className="row mt-sm-0 mt-3">
                                              <div className="col-sm-6">
                                                  <h2 className="lead">
                                                      <strong>
                                                          {seminar.type}
                                                      </strong>
                                                  </h2>
                                              </div>
                                              <div className="col-sm-6">
                                                  <h2 className="lead text-sm-right mb-sm-2 mb-0">
                                                      <strong>
                                                          Semester:{' '}
                                                          {seminar.semester}
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
                                                          ).format(
                                                              'dddd, D MMMM YYYY'
                                                          )}
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
                                                              moment(
                                                                  seminar.date
                                                              ).format(
                                                                  'dddd, D MMMM YYYY'
                                                              )
                                                          ) : (
                                                              <span className="badge badge-warning text-white">
                                                                  Tanggal Belum
                                                                  Ditentukan
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
                                                              ).format(
                                                                  'LT [WIB]'
                                                              )
                                                          ) : (
                                                              <span className="badge badge-warning text-white">
                                                                  Jam Belum
                                                                  Ditentukan
                                                              </span>
                                                          )}
                                                      </div>
                                                  </div>
                                                  <div className="row mb-sm-0 mb-3">
                                                      <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                                          Lokasi:
                                                      </label>
                                                      <div className="col-sm-9">
                                                          {seminar.location
                                                              .name ? (
                                                              seminar.location
                                                                  .name
                                                          ) : (
                                                              <span className="badge badge-warning text-white">
                                                                  Lokasi Belum
                                                                  Ditentukan
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
                                                                  seminar
                                                                      .chief_of_examiner
                                                                      .name
                                                              }
                                                          </div>
                                                      </div>
                                                  ) : null}
                                                  {seminar.examiners.map(
                                                      (examiner) => {
                                                          return (
                                                              <div
                                                                  className="row mb-sm-0 mb-3"
                                                                  key={
                                                                      examiner.id
                                                                  }
                                                              >
                                                                  <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                                                      {
                                                                          examiner.status
                                                                      }
                                                                      :
                                                                  </label>
                                                                  <div className="col-sm-9">
                                                                      {
                                                                          examiner.name
                                                                      }
                                                                  </div>
                                                              </div>
                                                          );
                                                      }
                                                  )}
                                              </div>
                                          </div>
                                      </div>
                                  );
                              })
                            : null}
                    </>
                ) : null}
            </Card>
            <Card>
                <div className="row">
                    <div className="col-sm-12 mt-sm-0 mt-3">
                        <form
                            className={
                                student &&
                                student.thesis.status === 'Sidang Tugas Akhir'
                                    ? 'd-none'
                                    : null
                            }
                            onSubmit={handleSubmit}
                        >
                            <h2 className="lead">
                                <strong>Mahasiswa</strong>
                            </h2>
                            <hr />
                            <FormInput
                                label="NIM"
                                name="nim"
                                id="nim"
                                type="text"
                                onChange={handleForm}
                                value={form.student.nim}
                                errors={errors?.student_nim}
                                readOnly={true}
                            />
                            <h2 className="lead">
                                <strong>Seminar</strong>
                            </h2>
                            <hr />
                            <FormSelect
                                label="Jenis"
                                name="type"
                                id="type"
                                onChange={handleForm}
                                value={form.student.seminar.type}
                                errors={errors?.student_seminar_type}
                                readOnly={true}
                            >
                                <option value="Seminar Proposal Tugas Akhir">
                                    Seminar Proposal Tugas Akhir
                                </option>
                                <option value="Seminar Hasil Tugas Akhir">
                                    Seminar Hasil Tugas Akhir
                                </option>
                                <option value="Sidang Tugas Akhir">
                                    Sidang Tugas Akhir
                                </option>
                            </FormSelect>
                            <FormInput
                                label="Tanggal Daftar"
                                name="register_date"
                                id="register_date"
                                type="date"
                                onChange={handleForm}
                                value={form.student.seminar.register_date}
                                errors={errors?.student_seminar_register_date}
                                disabled={!student && true}
                            />
                            <FormSelect
                                label={form.student.seminar.examiners[0].status}
                                name={form.student.seminar.examiners[0].status
                                    .toLowerCase()
                                    .replace(/ /g, '_')}
                                id={form.student.seminar.examiners[0].status
                                    .toLowerCase()
                                    .replace(/ /g, '_')}
                                onChange={handleForm}
                                value={
                                    form.student.seminar.examiners[0]
                                        .lecturer_id
                                }
                                errors={
                                    errors?.student_seminar_examiners_0_lecturer_id
                                }
                                disabled={!student && true}
                            >
                                {lecturers?.length > 0 ? (
                                    lecturers?.map((lecturer, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={lecturer.id}
                                            >
                                                {lecturer.name}
                                            </option>
                                        );
                                    })
                                ) : (
                                    <option disabled>Data not found.</option>
                                )}
                            </FormSelect>
                            <FormSelect
                                label={form.student.seminar.examiners[1].status}
                                name={form.student.seminar.examiners[1].status
                                    .toLowerCase()
                                    .replace(/ /g, '_')}
                                id={form.student.seminar.examiners[1].status
                                    .toLowerCase()
                                    .replace(/ /g, '_')}
                                onChange={handleForm}
                                value={
                                    form.student.seminar.examiners[1]
                                        .lecturer_id
                                }
                                errors={
                                    errors?.student_seminar_examiners_1_lecturer_id
                                }
                                disabled={!student && true}
                            >
                                {lecturers?.length > 0 ? (
                                    lecturers?.map((lecturer, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={lecturer.id}
                                            >
                                                {lecturer.name}
                                            </option>
                                        );
                                    })
                                ) : (
                                    <option disabled>Data not found.</option>
                                )}
                            </FormSelect>
                            <FormSelect
                                label={form.student.seminar.examiners[2].status}
                                name={form.student.seminar.examiners[2].status
                                    .toLowerCase()
                                    .replace(/ /g, '_')}
                                id={form.student.seminar.examiners[2].status
                                    .toLowerCase()
                                    .replace(/ /g, '_')}
                                onChange={handleForm}
                                value={
                                    form.student.seminar.examiners[2]
                                        .lecturer_id
                                }
                                errors={
                                    errors?.student_seminar_examiners_2_lecturer_id
                                }
                                disabled={!student && true}
                            >
                                {lecturers?.length > 0 ? (
                                    lecturers?.map((lecturer, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={lecturer.id}
                                            >
                                                {lecturer.name}
                                            </option>
                                        );
                                    })
                                ) : (
                                    <option disabled>Data not found.</option>
                                )}
                            </FormSelect>
                            {form.student.seminar.type ===
                            'Sidang Tugas Akhir' ? (
                                <FormSelect
                                    label={
                                        form.student.seminar.examiners[3].status
                                    }
                                    name={form.student.seminar.examiners[3].status
                                        .toLowerCase()
                                        .replace(/ /g, '_')}
                                    id={form.student.seminar.examiners[3].status
                                        .toLowerCase()
                                        .replace(/ /g, '_')}
                                    onChange={handleForm}
                                    value={
                                        form.student.seminar.examiners[3]
                                            .lecturer_id
                                    }
                                    errors={
                                        errors?.student_seminar_examiners_3_lecturer_id
                                    }
                                    disabled={!student && true}
                                >
                                    {lecturers?.length > 0 ? (
                                        lecturers?.map((lecturer, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={lecturer.id}
                                                >
                                                    {lecturer.name}
                                                </option>
                                            );
                                        })
                                    ) : (
                                        <option disabled>
                                            Data not found.
                                        </option>
                                    )}
                                </FormSelect>
                            ) : null}

                            <FormInput
                                label="Semester"
                                name="semester"
                                id="semester"
                                type="text"
                                onChange={handleForm}
                                value={form.student.seminar.semester}
                                errors={errors?.student_seminar_semester}
                                disabled={!student && true}
                            />
                            <FormButton
                                label={
                                    mutation.isLoading ? 'Loading' : 'Submit'
                                }
                                type="submit"
                                disabled={
                                    !student || mutation.isLoading
                                        ? true
                                        : false
                                }
                            />
                        </form>
                    </div>
                </div>
            </Card>
        </>
    );
};

export default FormThesisSeminarRegister;
