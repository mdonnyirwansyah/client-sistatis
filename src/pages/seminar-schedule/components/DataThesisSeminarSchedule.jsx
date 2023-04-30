import React from 'react';
import { useParams } from 'react-router-dom';
import { FormThesisSeminarSchedule } from '../components';
import moment from 'moment';
import { useThesisSeminar } from '../../../hooks/useSeminars';

function DataThesisSeminarSchedule() {
    const { id } = useParams();
    const { isLoading, isError, data } = useThesisSeminar(id);

    if (isLoading) {
        return 'Loading...';
    }

    if (isError) {
        return 'Something when wrong...';
    }

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
                            Nama:
                        </label>
                        <div className="col-sm-9">{data.student.name}</div>
                    </div>
                    <div className="row mb-sm-0 mb-3">
                        <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                            NIM:
                        </label>
                        <div className="col-sm-9">{data.student.nim}</div>
                    </div>
                    <div className="row mb-sm-0 mb-3">
                        <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                            No. HP:
                        </label>
                        <div className="col-sm-9">{data.student.phone}</div>
                    </div>
                    <div className="row mb-sm-0 mb-3">
                        <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                            Status:
                        </label>
                        <div className="col-sm-9">{data.student.status}</div>
                    </div>
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
                    {data.thesis.supervisors.map((supervisor, index) => {
                        return (
                            <div className="row mb-sm-0 mb-3" key={index}>
                                <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                    {supervisor.status}:
                                </label>
                                <div className="col-sm-9">
                                    {supervisor.name}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="row mt-sm-0 mt-3">
                <div className="col-sm-6">
                    <h2 className="lead">
                        <strong>{data.seminar.type}</strong>
                    </h2>
                </div>
                <div className="col-sm-6">
                    <h2 className="lead text-sm-right mb-sm-2 mb-0">
                        <strong>Semester: {data.seminar.semester}</strong>
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
                            {moment(data.seminar.register_date).format(
                                'dddd, D MMMM YYYY'
                            )}
                        </div>
                    </div>
                    <div className="row mb-sm-0 mb-3">
                        <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                            Tanggal Seminar:
                        </label>
                        <div className="col-sm-9">
                            {data.seminar.date ? (
                                moment(data.seminar.date).format(
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
                            {data.seminar.time ? (
                                moment(data.seminar.time, 'HH:mm:ss').format(
                                    'LT [WIB]'
                                )
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
                            {data.seminar.location ? (
                                data.seminar.location.name
                            ) : (
                                <span className="badge badge-warning text-white">
                                    Lokasi Belum Ditentukan
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    {data.seminar.chief_of_examiner ? (
                        <div className="row mb-sm-0 mb-3">
                            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                Ketua Sidang:
                            </label>
                            <div className="col-sm-9">
                                {data.seminar.chief_of_examiner.name}
                            </div>
                        </div>
                    ) : null}
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
                    <FormThesisSeminarSchedule data={data} />
                </div>
            </div>
        </>
    );
}

export default DataThesisSeminarSchedule;
