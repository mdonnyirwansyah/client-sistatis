import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useThesisClassificationCharts } from '../../../hooks/useTheses';
import Annotation from 'chartjs-plugin-annotation';
import { Card } from '../../../components';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Annotation
);

export const avarage = (ctx) => {
    const values = ctx.chart.data.datasets[0].data;

    return values.reduce((a, b) => a + b, 0) / values.length;
};

export const gpaOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Grafik IPK',
            font: {
                size: 16,
            },
        },
        annotation: {
            drawTime: 'afterDatasetsDraw',
            annotations: [
                {
                    drawTime: 'afterDraw',
                    type: 'line',
                    scaleID: 'y',
                    value: (ctx) => avarage(ctx),
                    borderColor: 'black',
                    borderDash: [6, 6],
                    borderDashOffset: 0,
                    borderWidth: 2,
                    label: {
                        enabled: true,
                        content: (ctx) => `Rata-rata ${avarage(ctx)}`,
                        position: 'end',
                    },
                },
            ],
        },
    },
};

export const studyOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Grafik Lama Study (Tahun)',
            font: {
                size: 16,
            },
        },
        annotation: {
            drawTime: 'afterDatasetsDraw',
            annotations: [
                {
                    drawTime: 'afterDraw',
                    type: 'line',
                    scaleID: 'y',
                    value: (ctx) => avarage(ctx),
                    borderColor: 'black',
                    borderDash: [6, 6],
                    borderDashOffset: 0,
                    borderWidth: 2,
                    label: {
                        enabled: true,
                        content: (ctx) => `Rata-rata ${avarage(ctx)}`,
                        position: 'end',
                    },
                },
            ],
        },
    },
};

export const thesisOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Grafik Lama TA (Bulan)',
            font: {
                size: 16,
            },
        },
        annotation: {
            drawTime: 'afterDatasetsDraw',
            annotations: [
                {
                    drawTime: 'afterDraw',
                    type: 'line',
                    scaleID: 'y',
                    value: (ctx) => avarage(ctx),
                    borderColor: 'black',
                    borderDash: [6, 6],
                    borderDashOffset: 0,
                    borderWidth: 2,
                    label: {
                        enabled: true,
                        content: (ctx) => `Rata-rata ${avarage(ctx)}`,
                        position: 'end',
                    },
                },
            ],
        },
    },
};

export default function ThesisClassificationBar() {
    const { isLoading, data } = useThesisClassificationCharts();

    if (isLoading) {
        return (
            <Card>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="lds-facebook">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </Card>
        );
    }

    let datasets = {
        gpa: {
            labels: [],
            datasets: [],
            backgroundColor: null,
        },
        study_duration: {
            labels: [],
            datasets: [],
            backgroundColor: null,
        },
        thesis_duration: {
            labels: [],
            datasets: [],
            backgroundColor: null,
        },
    };

    data?.forEach((item) => {
        datasets.gpa.labels.push(item.generation);
        datasets.study_duration.labels.push(item.generation);
        datasets.thesis_duration.labels.push(item.generation);

        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        datasets.gpa.datasets.push({
            label: `Angkatan ${item.generation}`,
            data: [parseFloat(item.gpa_avg)],
            backgroundColor: `rgba(${r}, ${g}, ${b}, 0.7)`,
        });
        datasets.study_duration.datasets.push({
            label: `Angkatan ${item.generation}`,
            data: [parseFloat(item.study_duration_avg)],
            backgroundColor: `rgba(${r}, ${g}, ${b}, 0.7)`,
        });
        datasets.thesis_duration.datasets.push({
            label: `Angkatan ${item.generation}`,
            data: [parseFloat(item.thesis_duration_avg)],
            backgroundColor: `rgba(${r}, ${g}, ${b}, 0.7)`,
        });
    });

    return (
        <>
            <Card>
                <Bar options={gpaOptions} data={datasets.gpa} />
            </Card>
            <Card>
                <Bar options={studyOptions} data={datasets.study_duration} />
            </Card>
            <Card>
                <Bar options={thesisOptions} data={datasets.thesis_duration} />
            </Card>
        </>
    );
}
