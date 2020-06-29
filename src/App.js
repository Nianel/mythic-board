import React, {useEffect} from 'react';
import './App.css';
import {useApiRequest} from "./hooks/api-request";
import ResultContainer from "./components/ResultContainer";

function App() {
  const [results, search] = useApiRequest()

  useEffect(() => {
    setTimeout(() => {
      search('freehold')
    }, 5000)
  }, [search])

  console.log(results.leading_groups)
  return (
    <div className="App">
      <main>
        {results && Array.isArray(results.leading_groups) && <ResultContainer rows={results.leading_groups}/>}
        <pre>
          {JSON.stringify(results, null, 2)}
        </pre>
      </main>
    </div>
  );
}

export default App;
