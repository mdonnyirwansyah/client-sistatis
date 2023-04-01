import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getThesisSeminar } from '../api/seminarsApi';
import { FormThesisSeminarValidate } from '../components';
import moment from 'moment';

function DataThesisSeminarValidate() {
    const { id } = useParams();
    const {
        isLoading,
        isError,
        data: thesisSeminar,
    } = useQuery('thesisSeminar', () => getThesisSeminar(id), { retry: false });

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
                        <div className="col-sm-9">
                            {thesisSeminar.thesis.student.name}
                        </div>
                    </div>
                    <div className="row mb-sm-0 mb-3">
                        <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                            Nim:
                        </label>
                        <div className="col-sm-9">
                            {thesisSeminar.thesis.student.nim}
                        </div>
                    </div>
                    <div className="row mb-sm-0 mb-3">
                        <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                            No. HP:
                        </label>
                        <div className="col-sm-9">
                            {thesisSeminar.thesis.student.phone}
                        </div>
                    </div>
                    <div className="row mb-sm-0 mb-3">
                        <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                            Status:
                        </label>
                        <div className="col-sm-9">
                            {thesisSeminar.thesis.student.status}
                        </div>
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
                            {moment(thesisSeminar.thesis.register_date).format(
                                'LL'
                            )}
                        </div>
                    </div>
                    <div className="row mb-sm-0 mb-3">
                        <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                            Judul:
                        </label>
                        <div className="col-sm-9">
                            {thesisSeminar.thesis.title}
                        </div>
                    </div>
                    <div className="row mb-sm-0 mb-3">
                        <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                            KBK:
                        </label>
                        <div className="col-sm-9">
                            {thesisSeminar.thesis.field.name}
                        </div>
                    </div>
                    {thesisSeminar.thesis.supervisors.map(
                        (supervisor, index) => {
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
                        }
                    )}
                </div>
            </div>
            <div className="row mt-sm-0 mt-3">
                <div className="col-sm-6">
                    <h2 className="lead">
                        <strong>{thesisSeminar.seminar.name}</strong>
                    </h2>
                </div>
                <div className="col-sm-6">
                    <h2 className="lead text-sm-right mb-sm-2 mb-0">
                        <strong>
                            Semester: {thesisSeminar.seminar.semester}
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
                            {moment(thesisSeminar.seminar.register_date).format(
                                'dddd, D MMMM YYYY'
                            )}
                        </div>
                    </div>
                    <div className="row mb-sm-0 mb-3">
                        <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                            Tanggal Seminar:
                        </label>
                        <div className="col-sm-9">
                            {thesisSeminar.seminar.date ? (
                                moment(thesisSeminar.seminar.date).format(
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
                            {thesisSeminar.seminar.time ? (
                                moment(
                                    thesisSeminar.seminar.time,
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
                            {thesisSeminar.seminar.location ? (
                                thesisSeminar.seminar.location.name
                            ) : (
                                <span className="badge badge-warning text-white">
                                    Lokasi Belum Ditentukan
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    {thesisSeminar.seminar.chief_of_examiner ? (
                        <div className="row mb-sm-0 mb-3">
                            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                Ketua Sidang:
                            </label>
                            <div className="col-sm-9">
                                {thesisSeminar.seminar.chief_of_examiner.name}
                            </div>
                        </div>
                    ) : null}
                    {thesisSeminar.seminar.examiners.map((examiner, index) => {
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
            <FormThesisSeminarValidate />
        </>
    );
}

export default DataThesisSeminarValidate;
