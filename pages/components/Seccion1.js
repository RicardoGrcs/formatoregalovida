export default function Seccion1() {
    return (
        <div>
            <div className="card mt-4">
                <div className="card-header">
                    PATOLOGÍAS EN EL EMBARAZO
                </div>
                <div className="card-body row">
                    <div className="col-md-4 col-sm-12">
                        <div className="form-group p-2">
                            <label htmlFor="numidentificacion"> HIPERTENSIÓN INDUCIDA POR EL EMBARAZO (HIE)</label>
                            <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                <option value="na" selected>-- Selecione una opcion</option>
                                <option value="si">SI</option>
                                <option value="no">NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="form-group p-2">
                            <label htmlFor="numidentificacion">HTA</label>
                            <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                <option value="na" selected>-- Selecione una opcion</option>
                                <option value="si">SI</option>
                                <option value="no">NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="form-group p-2">
                            <label htmlFor="numidentificacion">DM</label>
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
                    REMISIÓN/VACUNAS
                </div>
                <div className="card-body row">
                    <div className="col-md-4 col-sm-12">
                        <div className="form-group p-2">
                            <label htmlFor="numidentificacion">TdaP(Tétanos-Difteria-Tos ferina-Acelular) DOSIS ÚNICA A PARTIR DE LA SEM 26</label>
                            <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                <option value="na" selected>-- Selecione una opcion</option>
                                <option value="si">SI</option>
                                <option value="no">NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="form-group p-2">
                            <label htmlFor="numidentificacion">VACUNA INFLUENZA ESTACIONAL A PARTIR SEM 14</label>
                            <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                <option value="na" selected>-- Selecione una opcion</option>
                                <option value="si">SI</option>
                                <option value="no">NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="form-group p-2">
                            <label htmlFor="numidentificacion">ODONTOLOGÍA</label>
                            <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                <option value="na" selected>-- Selecione una opcion</option>
                                <option value="si">SI</option>
                                <option value="no">NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="form-group p-2">
                            <label htmlFor="numidentificacion">NUTRICIÓN</label>
                            <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                <option value="na" selected>-- Selecione una opcion</option>
                                <option value="si">SI</option>
                                <option value="no">NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="form-group p-2">
                            <label htmlFor="numidentificacion">GINECOLOGÍA</label>
                            <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                <option value="na" selected>-- Selecione una opcion</option>
                                <option value="si">SI</option>
                                <option value="no">NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="form-group p-2">
                            <label htmlFor="numidentificacion">PSICOLOGÍA</label>
                            <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                <option value="na" selected>-- Selecione una opcion</option>
                                <option value="si">SI</option>
                                <option value="no">NO</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}