import sistatisApi from '../../api';
import seminarsApi from '../../api/seminarsApi';
import { ButtonPrint } from '..';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const FormThesisSeminarDetail = ({ data }) => {
    const { id } = useParams();
    const handlePrintUndangan = () => {
        const toastPrintUndangan = toast.loading('Loading...');
        const printUndangan = async () => {
            try {
                const response = await sistatisApi.get(
                    `${seminarsApi}/undangan/${id}`,
                    {
                        responseType: 'blob',
                    }
                );
                const url = window.URL.createObjectURL(
                    new Blob([response.data])
                );
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    `undangan-${data.thesis.student.nim}.pdf`
                );
                document.body.appendChild(link);
                link.click();
                toast.success(`Successfully download!`, {
                    id: toastPrintUndangan,
                });
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 422) {
                        const data = error.response.data;
                        toast.error(data.status, {
                            id: toastPrintUndangan,
                        });
                    }
                } else {
                    toast.error(error.message, {
                        id: toastPrintUndangan,
                    });
                }
            }
        };

        printUndangan();
    };

    return (
        <>
            <div className="row mt-sm-0 mt-3">
                <div className="col-sm-12">
                    <h2 className="lead">
                        <strong>Download</strong>
                    </h2>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-12 d-flex justify-content-end">
                    <ButtonPrint
                        label="Undangan"
                        onClick={handlePrintUndangan}
                        disabled={
                            data.seminar.status !== 'Validasi' ? true : false
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default FormThesisSeminarDetail;
