import "./Side-sprint.css"
import { Active } from "../ActiveSprint/Active"
import {Completed} from "../CompletedSprint/Completed"
import {Forecast} from "../ForecastSprint/Forecast"
import {Backlogs} from "../Backlogs/Backlogs"
import { MyContext } from "../Sprint-data/Sprint-data"
// import { MyContext } from "../Sprint-data/Sprint-data"

export const SideSprint = () => {
  return (
    <>
        <div className="side-container">
          <MyContext.Consumer>{
            ({itemdata}) => {
              return (
                <>
                  <Active itemdata = {itemdata.active_sprints}/>
                  <Completed itemdata = {itemdata.completed_sprints}/>
                  <Forecast itemdata = {itemdata.sprint_forecast}/>
                  <Backlogs itemdata = {itemdata.Backlogs}/>
                </>
              )
            }}
          </MyContext.Consumer>
                  
        </div>
    </>
  )
}
