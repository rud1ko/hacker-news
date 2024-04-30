import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AppRoot, Button} from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css';

function App() {
  return (
    <>
      <Button appearance={"overlay"}>
        Hello world
      </Button>
    </>
  );
}

export default App;
