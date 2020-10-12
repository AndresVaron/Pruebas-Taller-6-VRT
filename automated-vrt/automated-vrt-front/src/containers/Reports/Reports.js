import React, { useState, useEffect } from 'react';
import { getReports, createReport } from '../../services/reports';
const imagesServer = process.env.REACT_APP_SERVER_URL;

const Reports = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadReports = () => {
        setLoading(true);
        getReports().then(data => {
            setReports(data);
        }).catch(err => {
            setReports([]);
        }).finally(() => {
            setLoading(false);
        });
    };

    const createNewReport = () => {
        setLoading(true);
        createReport().then(data => {
            alert('Reporte generado de forma exitosa');
            loadReports();
        }).catch(err => {
            alert(err);
            setLoading(false);
        })
    };

    useEffect(() => {
        loadReports();
    }, []);

    return <main className="row pt-5 pb-5">
        <div className="col-lg-8 col-md-9 col-12 mx-auto text-center mb-5">
            <button onClick={() => createNewReport()} disabled={loading} className="btn btn-primary btn-lg shadow w-100 p-2">Generar reporte</button>
        </div>
        {loading && <div className="col-12 mb-5"><h4 className="text-center mb-0">Cargando...</h4></div>}
        {!loading &&
            <>
                {reports.length === 0 && <div className="col-12 text-center"><h4 className="mb-0">No se han generado reportes</h4></div>}
                {reports.length > 0 &&
                    <div className="col-12 row d-flex align-items-center no-gutters">
                        <div className="col">
                            <br />
                        </div>
                        <div className="col-md-3 text-center">
                            <h6 className="mb-0">Imagen Base</h6>
                        </div>
                        <div className="col-md-3 text-center">
                            <h6 className="mb-0">Imagen Modificada</h6>
                        </div>
                        <div className="col-md-3 text-center">
                            <h6 className="mb-0">Diferencias</h6>
                        </div>
                        <div className="col">
                            <br />
                        </div>
                        {reports.map(report => <React.Fragment key={report.imageId}>
                            <div className="col-12 row mt-3" >
                                <div className="col text-right">
                                    <h6 className="mb-0 px-1">{new Date(report.reportDate).toLocaleString()}</h6>
                                </div>
                                <div className="col-md-3 text-center">
                                    <img alt="Base" src={`${imagesServer}${report.baseImage}`} className="w-100 shadow" />
                                </div>
                                <div className="col-md-3 text-center">
                                    <img alt="Modified" src={`${imagesServer}${report.modifiedImage}`} className="w-100 shadow" />
                                </div>
                                <div className="col-md-3 text-center">
                                    <img alt="Result" src={`${imagesServer}${report.resultImage}`} className="w-100 shadow" />
                                </div>
                                <div className="col">
                                    <h5>Información Importante</h5>
                                    <p className="mb-0"><strong>Diferencia:</strong>&nbsp;{report.report.misMatchPercentage} %</p>
                                    <p className="mb-0"><strong>Tiempo:</strong>&nbsp;{report.report.analysisTime} ms</p>
                                </div>
                            </div>
                        </React.Fragment>)}
                    </div>
                }
            </>
        }
    </main>;
};

export default Reports;