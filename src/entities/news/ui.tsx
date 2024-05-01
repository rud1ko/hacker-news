import React, {JSX} from 'react';
import {NewsItemProps} from "../../app/types/model/NewsProps";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";
import {Avatar, Card, CardGrid, Div, Paragraph, SimpleCell, Spacing, Title} from "@vkontakte/vkui";
import {Icon28UserOutline} from "@vkontakte/icons";


export const NewsItem = ({info}: {info: NewsItemProps}): JSX.Element => {
    const routeNavigator = useRouteNavigator();

    return (
        <CardGrid size="l" key={info.id} onClick={() => routeNavigator.push(`/news/${info.id}`)}>
            <Card mode="outline">
                <Div>
                    <SimpleCell before={<Avatar fallbackIcon={<Icon28UserOutline/>}/>}
                                after={`Оценка: ${info.score}`} style={{padding: 0}}>
                        <Title level={"2"} weight={"2"}>
                            {info.by}
                        </Title>
                    </SimpleCell>
                    <Spacing size={16}/>
                    <Title level="3" weight="2">
                        {info.title}
                    </Title>
                    <Spacing size={16}/>
                    <Paragraph weight="3">
                        {info.time}
                    </Paragraph>
                </Div>
            </Card>
        </CardGrid>
    );
};