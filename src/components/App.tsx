import * as React from 'react';

const App = (props: ownProps) => 
  <div>
    <p>{props.testText}</p>  
  </div>;

export interface ownProps {
  testText: string;
}

export default App;
