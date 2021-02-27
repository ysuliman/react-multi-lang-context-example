import React from 'react';

const content = {
  en: {
    title: 'React TS Multilang Context Example',
    intro: 'This page was made as an example of how to use context in React to create a multilanguage website.'
  }
}


function App() {
  return (
    <div className="App">
      <h1>{content.en.title}</h1>
      <p>{content.en.intro}</p>
    </div>
  );
}

export default App;
