import React from 'react';
import './styles/global.css';

interface TitleProps {
  text: string,
}

const Title = (props: TitleProps) => {
  return (
    <h1>{props.text}</h1>
  )
}


function App() {
  return (
    <div id="page-landing">
      <Title  text="Titulo 1"/>
      <Title  text="Titulo 2"/>
      <Title  text="Titulo 3"/>
      <Title  text="Titulo 4"/>
    </div>
  );
}

export default App;
