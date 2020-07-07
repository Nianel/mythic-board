import React, {useEffect, useState} from 'react'
import './App.css'
import {useApiRequest} from "./hooks/api-request"
import LeaderboardContainer from "./components/LeaderboardContainer"
import FirstPageButton from "./components/FirstPageButton";
import LeaderboardButton from "./components/LeaderboardButton";


function App() {

  return (
    <div className="App">
      <FirstPageButton/>
    </div>
  )
}

export default App
