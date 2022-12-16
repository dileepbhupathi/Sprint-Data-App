import './App.css';
import {useState} from "react"
import { Sprint_data } from './components/Sprint-data/Sprint-data';
import { MyContext } from './components/Sprint-data/Sprint-data';
import { Table } from './components/Sprint-table-data/Table';
import ErrorBoundary from "./components/ErrorBoundary/Error"
import {SideSprint} from "./components/Side-bar-sprint/Side-sprint"



function App() {

  
  function SetDefaultValue() {
    setitemdata(sortdata[0])
  } 
  window.onload = SetDefaultValue;

  const [sortdata, setsortdata] = useState(Sprint_data)
  const [itemdata,setitemdata] = useState(sortdata[0])
  const[status,setStatus] = useState(true)

  function SelectedSprintData(item) {
    setitemdata(item)
  }

  function ASC ()  {
      var updated_data = Sprint_data.sort((a, b) =>a.name > b.name ? 1 : -1,)
      setsortdata(updated_data)
      setStatus(!status)
      SetDefaultValue()
  };
  function DSC  ()  {
      var updated_data =Sprint_data.sort((a, b) =>a.name > b.name ? -1 : 1,)
      setsortdata(updated_data)
      setStatus(!status)
      SetDefaultValue()
  }
  

  return (
    <div className="sprint-container">
      <ErrorBoundary>
        <MyContext.Provider value={{sortdata,ASC,DSC,itemdata,SelectedSprintData}}>
          <Table/>
          <SideSprint />
        </MyContext.Provider>
        
      </ErrorBoundary>
        
    </div>
  );
}

export default App;