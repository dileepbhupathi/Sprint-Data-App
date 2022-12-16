import { MyContext } from "../Sprint-data/Sprint-data"
import "./Table.css"
import React from "react"
import {FaSortAlphaDown,FaSortAlphaUpAlt} from 'react-icons/fa';

export const Table = () => {


  return (
    <div className="sprint-table-container">
      <MyContext.Consumer>
        {({sortdata,ASC,DSC,SelectedSprintData,itemdata}) =>
          <table className="table-container">
            <thead className="table-head">
              <tr>
                <th className="sort">
                  Sprint Name
                  <span>
                  <button onClick={ASC}> <FaSortAlphaDown/></button>
                  <button onClick={DSC}> <FaSortAlphaUpAlt/> </button>
                  </span>
                </th>
                <th>Status </th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>completed(%)</th>
              </tr>
            </thead>
            <tbody>
              {
                sortdata.map((item) => (
                  <tr id = {item.id}  onClick={() => SelectedSprintData(item)}>
                    <td>{item.name}</td>
                    <td>{item.status}</td>
                    <td>{item.start_Date}</td>
                    <td>{item.end_date}</td>
                    <td>{item.complted_percentage}</td>
                  </tr>
                ))
              }
            </tbody>              
          </table>
        }
      </MyContext.Consumer>
    </div>
    
  )
}