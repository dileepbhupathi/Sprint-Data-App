import "../CompletedSprint/Completed.css"

export const Completed = ({itemdata}) => {
  return (
    <>
        <section className="side-sprint-container">
            <label> Completed Sprints</label>
            <h1 id="CompletedSprint"> {itemdata} </h1>
        </section>
    </>
  )
}
