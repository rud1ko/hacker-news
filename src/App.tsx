import React from 'react';
import './App.css';
import {Panel, Root, View} from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css';
import {useActiveVkuiLocation, useGetPanelForView} from "@vkontakte/vk-mini-apps-router";
import {NewsDetails} from "./pages/newsDetails";
import {LastNews} from "./pages/lastNews";


function App() {
  const {view: activeView} = useActiveVkuiLocation() as { view: string }
  const activePanel = useGetPanelForView('default_view') as string;

  return (
    <Root activeView={activeView}>
        <View nav="listNews" activePanel={activePanel}>
            <Panel nav="main_page">
                <LastNews/>
            </Panel>
            <Panel nav="item_page">
                <NewsDetails/>
            </Panel>
        </View>
    </Root>
  );
}

export default App;
