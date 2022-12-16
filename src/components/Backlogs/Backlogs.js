import "../Backlogs/Backlogs.css"

export const Backlogs = ({itemdata}) => {
  return (
    <>
        <section className="side-sprint-container">
            <label>  Backlogs</label>
            <h1 id="Backlogs">{itemdata}</h1>
        </section>
    </>
  )
}