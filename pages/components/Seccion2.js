export default function Seccion2() {
    return (
        <div className="row flex-wrap" >
            <div className="form-group col-lg-3 col-md-4 p-2">
                <label htmlFor="numidentificacion">FECHA DE ATENCIÓN DE EVENTO OBSTÉTRICO (PARTO O ABORTO)</label>
                <input className="form-control" type="date" name="numidentificacion"></input>
            </div>
            <div className="form-group col-lg-3 col-md-4 p-2">
                <label htmlFor="numidentificacion">VITALIDAD DE LA MADRE AL FINALIZAR EL EMBARAZO</label>
                <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                    <option value="na" selected>-- Selecione una opcion</option>
                    <option value="viva">VIVA</option>
                    <option value="muerta">MUERTA</option>
                </select>
            </div>
            <div className="form-group col-lg-3 col-md-4 p-2">
                <label htmlFor="numidentificacion">VITALIDAD DEL RECIÉN NACIDO</label>
                <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                    <option value="na" selected>-- Selecione una opcion</option>
                    <option value="viva">VIVA</option>
                    <option value="muerta">MUERTA</option>
                </select>
            </div>

            <div className="form-group col-lg-3 col-md-4 p-2">
                <label htmlFor="numidentificacion">MÉTODO PLANIFICACIÓN FAMILIAR TOMADO</label>
                <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                    <option value="na" selected>-- Selecione una opcion</option>
                    <option value="si">SI</option>
                    <option value="no">NO</option>
                </select>
            </div>
        </div>
    )
}