import "../ForecastSprint/Forecast.css"
export const Forecast = ({itemdata}) => {
  return (
    <>
        <section className="side-sprint-container">
            <label> Sprint Forecast</label>
            <h1 id="SprintForecast"> {itemdata} </h1>
            <label id = "EstdDate"> estimated End Date : {itemdata}</label>
        </section>
    </>
  )
}