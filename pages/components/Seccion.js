

export default function Seccion() {
    return (
        <div>
            <div className="card mt-4">
                <div className="card-header">
                    MULTIVITAMINICOS
                </div>
                <div className="card-body row">
                    <div className="col-md-4 col-sm-12">
                        <div className="form-group p-2">
                            <label htmlFor="numidentificacion">AC. FÓLICO</label>
                            <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                <option value="na" selected>-- Selecione una opcion</option>
                                <option value="si">SI</option>
                                <option value="no">NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="form-group p-2">
                            <label htmlFor="numidentificacion">SULFATO FERROSO</label>
                            <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                <option value="na" selected>-- Selecione una opcion</option>
                                <option value="si">SI</option>
                                <option value="no">NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="form-group p-2">
                            <label htmlFor="numidentificacion">CALCIO</label>
                            <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                <option value="na" selected>-- Selecione una opcion</option>
                                <option value="si">SI</option>
                                <option value="no">NO</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mt-4">
                <div className="card-header">
                    LABORATORIOS INICIALES
                </div>
                <div className="card-body row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                HEMOGLOBINA
                            </div>
                            <div className="card-body">
                                <div className="form-group p-2">
                                    <label htmlFor="numidentificacion">FECHA:</label>
                                    <input className="form-control" type="date" name="numidentificacion"></input>
                                </div>
                                <div className="form-group p-2">
                                    <label htmlFor="numidentificacion">VALOR:</label>
                                    <input className="form-control" type="number" name="numidentificacion"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                HEMOCLASIFICACIÓN
                            </div>
                            <div className="card-body">
                                <div className="form-group p-2">
                                    <label htmlFor="numidentificacion">FECHA:</label>
                                    <input className="form-control" type="date" name="numidentificacion"></input>
                                </div>
                                <div className="form-group p-2">
                                    <label htmlFor="numidentificacion">VALOR:</label>
                                    <input className="form-control" type="number" name="numidentificacion"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                GLICEMIA
                            </div>
                            <div className="card-body">
                                <div className="form-group p-2">
                                    <label htmlFor="numidentificacion">FECHA:</label>
                                    <input className="form-control" type="date" name="numidentificacion"></input>
                                </div>
                                <div className="form-group p-2">
                                    <label htmlFor="numidentificacion">VALOR:</label>
                                    <input className="form-control" type="number" name="numidentificacion"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                TOX IgG
                            </div>
                            <div className="card-body">
                                <div className="form-group p-2">
                                    <label htmlFor="numidentificacion">FECHA:</label>
                                    <input className="form-control" type="date" name="numidentificacion"></input>
                                </div>
                                <div className="form-group p-2">
                                    <label htmlFor="numidentificacion">VALOR:</label>
                                    <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                        <option value="na" selected>-- Selecione una opcion</option>
                                        <option value="positivo">POSITIVO</option>
                                        <option value="negativo">NEGATIVO</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                ANTIG HB
                            </div>
                            <div className="card-body">
                                <div className="form-group p-2">
                                    <label htmlFor="numidentificacion">FECHA:</label>
                                    <input className="form-control" type="date" name="numidentificacion"></input>
                                </div>
                                <div className="form-group p-2">
                                    <label htmlFor="numidentificacion">VALOR:</label>
                                    <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                        <option value="na" selected>-- Selecione una opcion</option>
                                        <option value="positivo">POSITIVO</option>
                                        <option value="negativo">NEGATIVO</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                UROANÁLISIS
                            </div>
                            <div className="card-body">
                                <div className="form-group p-2">
                                    <label htmlFor="numidentificacion">FECHA:</label>
                                    <input className="form-control" type="date" name="numidentificacion"></input>
                                </div>
                                <div className="form-group p-2">
                                    <label htmlFor="numidentificacion">VALOR:</label>
                                    <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                        <option value="na" selected>-- Selecione una opcion</option>
                                        <option value="normal">NORMAL</option>
                                        <option value="patologico">PATOLOGICO</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                CITOLOGÍA CÉRVICO-VAGINAL
                            </div>
                            <div className="card-body">
                                <div className="form-group p-2">
                                    <label htmlFor="numidentificacion">FECHA:</label>
                                    <input className="form-control" type="date" name="numidentificacion"></input>
                                </div>
                                <div className="form-group p-2">
                                    <label htmlFor="numidentificacion">VALOR:</label>
                                    <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                        <option value="na" selected>-- Selecione una opcion</option>
                                        <option value="si">SI</option>
                                        <option value="no">NO</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                FROTIS FLUJO VAGINAL
                            </div>
                            <div className="card-body">
                                <div className="form-group p-2">
                                    <label htmlFor="numidentificacion">FECHA:</label>
                                    <input className="form-control" type="date" name="numidentificacion"></input>
                                </div>
                                <div className="form-group p-2">
                                    <label htmlFor="numidentificacion">VALOR:</label>
                                    <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                        <option value="na" selected>-- Selecione una opcion</option>
                                        <option value="si">SI</option>
                                        <option value="no">NO</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                FROTIS FLUJO VAGINAL
                            </div>
                            <div className="card-body">
                                <div className="form-group p-2">
                                    <label htmlFor="numidentificacion">FECHA:</label>
                                    <input className="form-control" type="date" name="numidentificacion"></input>
                                </div>
                                <div className="form-group p-2">
                                    <label htmlFor="numidentificacion">VALOR:</label>
                                    <input className="form-control" type="number" step="0.1" name="numidentificacion"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="form-group p-2">
                    <label htmlFor="numidentificacion">CLASIFICACIÓN DE RIESGO OBSTÉTRICO:</label>
                    <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                        <option value="na" selected>-- Selecione una opcion</option>
                        <option value="aro">Alto Riesgo Obstétrico (ARO)</option>
                        <option value="bro">Bajo Riesgo Obstétrico (BRO)</option>
                    </select>
                </div>
            </div>

        </div>


    )
};