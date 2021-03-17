import { useState } from 'react'

export default function General(props) {

  const [edadGestWeek, setEdadGestWeek] = useState(new Date());
  const [edad, setEdad] = useState(new Date());

  return (
    <div>
      <div className="card " >
        <div className="card-header text-center">
          General
      </div>
        <div className="card-body row flex-wrap" >
          <div className="form-group col-lg-3 col-md-4 p-2">
            <label htmlFor="numidentificacion">NÚMERO DE IDENTIFICACIÓN</label>
            <input className="form-control" type="text" name="numidentificacion"></input>
          </div>
          <div className="form-group col-lg-3 col-md-4 p-2">
            <label htmlFor="numtel">NÚMERO DE TELÉFONO</label>
            <input className="form-control" type="text" name="numtel"></input>
          </div>
          <div className="form-group col-lg-3 col-md-4 p-2">
            <label htmlFor="municipio">MUNICIPIO</label>
            <input className="form-control" type="text" name="municipio"></input>
          </div>

          <div className="form-group col-lg-3 col-md-4 p-2">
            <label htmlFor="fatencion">FECHA DE ATENCIÓN</label>
            <input className="form-control" type="date" name="fatencion"></input>
          </div>
          <div className="form-group col-lg-3 col-md-4 p-2">
            <label htmlFor="fipsgr">FECHA DE INGRESO A LA IPS DE GESTIÓN RIESGO</label>
            <input className="form-control" type="date" name="fipsgr"></input>
          </div>
          <div className="form-group col-lg-3 col-md-4 p-2">
            <label htmlFor="ficp">FECHA DE INGRESO AL CONTROL PRENATAL</label>
            <input className="form-control" type="date" name="ficp"></input>
          </div>
          <div className="form-group col-lg-3 col-md-4 p-2">
            <label htmlFor="fum">FECHA DE ÚLTIMA MENSTRUACIÓN</label>
            <input className="form-control" type="date" name="fum" onChange={(e) => dateWeeks(e)} ></input>
          </div>

          <div className="form-group col-lg-3 col-md-4 p-2">
            <label htmlFor="egicp">EDAD GESTACIONAL AL INGRESO AL CONTROL PRENATAL(SEMANAS)</label>
            <input className="form-control" type="number" name="egicp" value={edadGestWeek} readOnly></input>
          </div>
          <div className="form-group col-lg-3 col-md-4 p-2">
            <label htmlFor="ncpaf">NÚMERO DE CONTROL PRENATAL AL QUE ASISTE A LA FECHA</label>
            <input className="form-control" type="number" name="ncpaf"></input>
          </div>

          <div className="form-group col-lg-2 col-md-3 p-2">
            <label htmlFor="fnacimiento">FECHA DE NACIMIENTO</label>
            <input className="form-control" type="date" name="fnacimiento" onChange={(e) => dateYears(e)}></input>
          </div>
          <div className="form-group col-lg-1 col-md-1 p-2">
            <label htmlFor="edad">EDAD</label>
            <input className="form-control" type="text" value={edad} readOnly></input>
          </div>


          <div className="form-group col-lg-3 col-md-4 p-2">
            <label htmlFor="peso">PESO (Kgs)</label>
            <input className="form-control" type="number" step="0.1" name="peso"></input>
          </div>
          <div className="form-group col-lg-3 col-md-4 p-2">
            <label htmlFor="talla">TALLA (Cm)</label>
            <input className="form-control" type="number" name="talla"></input>
          </div>
        </div>

      </div>




      <div className="row flex-wrap justify-content-center align-content-center">
        <hr></hr>
        {edadGestWeek <= 12 ?
          <div className="col-lg-3">
            <div className="card">
              <div className="card-header">
                PRUEBA PRESUNTIVA (ELISA) I TRIMESTRE
                    </div>
              <div className="card-body row justify-content-around">
                <div className="form-group p-2">
                  <label htmlFor="pseitf">FECHA:</label>
                  <input className="form-control" type="date" name="pseitf"></input>
                </div>
                <div className="form-group p-2">
                  <label htmlFor="pseitv">VALOR:</label>
                  <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example" name="pseitv">
                    <option value="na" selected>-- Selecione una opcion</option>
                    <option value="reactiva">Reactiva</option>
                    <option value="no reactiva">No Reactiva</option>
                  </select>
                </div>
              </div>
            </div>
          </div> : ''
        }
        {edadGestWeek <= 26 ?
          <div className="col-lg-3">
            <div className="card">
              <div className="card-header">
                PRUEBA PRESUNTIVA (ELISA) II TRIMESTRE
                    </div>
              <div className="card-body">
                <div className="form-group p-2">
                  <label htmlFor="pseiitf">FECHA:</label>
                  <input className="form-control" type="date" name="pseiitf"></input>
                </div>
                <div className="form-group p-2">
                  <label htmlFor="pseiitv">VALOR:</label>
                  <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example" name="pseiitv">
                    <option value="na" selected>-- Selecione una opcion</option>
                    <option value="reactiva">Reactiva</option>
                    <option value="no reactiva">No Reactiva</option>
                  </select>
                </div>
              </div>
            </div>
          </div> : ''
        }

        <div className="col-lg-3">
          <div className="card">
            <div className="card-header">
              PRUEBA PRESUNTIVA (ELISA) III TRIMESTRE
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
                  <option value="reactiva">Reactiva</option>
                  <option value="no reactiva">No Reactiva</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {edadGestWeek <= 12 ?
          <div className="col-lg-3">
            <div className="card">
              <div className="card-header">
                PRUEBA SEROLÓGICA PARA SÍFILIS -  (I TRIMESTRE)
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
                    <option value="reactiva">Reactiva</option>
                    <option value="no reactiva">No Reactiva</option>
                  </select>
                </div>
              </div>
            </div>
          </div> : ''
        }
        {edadGestWeek <= 26 ?
          <div className="col-lg-3">
            <div className="card">
              <div className="card-header">
                PRUEBA SEROLÓGICA PARA SÍFILIS -  (II TRIMESTRE)
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
                    <option value="reactiva">Reactiva</option>
                    <option value="no reactiva">No Reactiva</option>
                  </select>
                </div>
              </div>
            </div>
          </div> : ''
        }
        <div className="col-lg-3">
          <div className="card">
            <div className="card-header">
              PRUEBA SEROLÓGICA PARA SÍFILIS -  (III TRIMESTRE)
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
                  <option value="reactiva">Reactiva</option>
                  <option value="no reactiva">No Reactiva</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-3">
            <div className="card">
              <div className="card-header">
                PRUEBA CONFIRMATORIA FTA-ABS, MHA-TP, TPHA
                    </div>
              <div className="card-body">
                <div className="form-group p-2">
                  <label htmlFor="numidentificacion">FECHA:</label>
                  <input className="form-control" type="date" name="numidentificacion"></input>
                </div>
                <div className="form-group p-2">
                  <label htmlFor="numidentificacion">VALOR:</label>
                  <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                    <option value="na">-- Selecione una opcion</option>
                    <option value="positiva">Positiva</option>
                    <option value="negativa">Negativa</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="form-group p-2">
              <label htmlFor="numidentificacion">TRATAMIENTO DE SÍFILIS NÚMERO DE DOSIS APLICADAS</label>
              <input className="form-control" type="number" name="numidentificacion"></input>
            </div>
            <div className="form-group p-2">
              <label htmlFor="numidentificacion">TRATAMIENTO DE SÍFILIS A LA PAREJA</label>
              <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                <option value="na" selected>-- Selecione una opcion</option>
                <option value="si">SI</option>
                <option value="no">NO</option>
                <option value="na">NA</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-sm-12">
          <div className="form-group p-2">
            <label htmlFor="numidentificacion">ASESORÍA DE LACTANCIA MATERNA</label>
            <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
              <option value="na" selected>-- Selecione una opcion</option>
              <option value="si">SI</option>
              <option value="no">NO</option>
            </select>
          </div>
        </div>

      </div>
    </div>

  )
  function dateWeeks(e) {
    let date = new Date(e.target.value);
    const diffTime = Math.abs(date - new Date());
    const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
    console.log(diffTime + " milliseconds");
    console.log(diffWeeks + " weeks");
    setEdadGestWeek(diffWeeks);
  }
  function dateYears(e) {
    let date = new Date(e.target.value);
    const diffTime = Math.abs(date - new Date());
    const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
    console.log(diffTime + " milliseconds");
    console.log(diffWeeks + " weeks");
    setEdad(diffWeeks);
  }

}