import { useState } from 'react'

export default function General(props) {

  const [edadGestWeek, setEdadGestWeek] = useState(new Date());

  return (
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
          <label htmlFor="egicp">EDAD GESTACIONAL AL INGRESO AL CONTROL PRENATAL</label>
          <input className="form-control" type="number" name="egicp" value={edadGestWeek} readOnly></input>
        </div>
        <div className="form-group col-lg-3 col-md-4 p-2">
          <label htmlFor="ncpaf">NÚMERO DE CONTROL PRENATAL AL QUE ASISTE A LA FECHA</label>
          <input className="form-control" type="number" name="ncpaf"></input>
        </div>

        <div className="form-group col-lg-3 col-md-4 p-2">
          <label htmlFor="fnacimiento">FECHA DE NACIMIENTO</label>
          <input className="form-control" type="date" name="fnacimiento"></input>
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

  )

  function dateWeeks(e) {
    let date = new Date(e.target.value);
    const diffTime = Math.abs(date - new Date());
    const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7));
    console.log(diffTime + " milliseconds");
    console.log(diffWeeks + " weeks");
    setEdadGestWeek(diffWeeks);
  }


}