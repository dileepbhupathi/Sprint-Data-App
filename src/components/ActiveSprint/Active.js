import "../ActiveSprint/Active.css"

export const Active = ({itemdata}) => {
  return (
    <>
      <section className="side-sprint-container">
        <label> Active Sprints</label>
        <h1 id = "ActiveSprints"> {itemdata} </h1>
      </section>        
    </>
  )
}