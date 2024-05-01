import React from 'react';
import {useParams} from "@vkontakte/vk-mini-apps-router/dist/hooks/hooks";
import {useGetNewsByIdQuery} from "../../../app/redux/api/new-stories-api";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";
import {Avatar, Button, Cell, Counter, Div, Group, Link, Paragraph, Text, Title} from "@vkontakte/vkui";
import {Icon24MessageOutline} from "@vkontakte/icons";
import styles from './NewsDetails.module.css'
import {convertUnixTimeToDateTime} from "../../../shared/functions";
import {CommentTree} from "../../../widgets/CommentTree";

export const NewsDetails = () => {
    const newsId = useParams()
    const {data: news, isLoading, error} = useGetNewsByIdQuery(parseInt(newsId?.id || '0'));
    const routeNavigator = useRouteNavigator();

    return (
        <Div>
            <Group>
                <Div>
                    <Button appearance={"accent"} onClick={() => routeNavigator.push("/")}>
                        <Text>Вернуться к новостям</Text>
                    </Button>
                </Div>
                <Div>
                    <Title level={"1"} weight={"2"}>{news?.title}</Title>
                </Div>
                <Div>
                    <Title level={"2"} weight={"2"} className={styles.title}>
                        Автор:
                        <Text weight={"1"}>{news?.by}</Text>
                    </Title>
                    <Title level={"2"} weight={"2"} className={styles.title}>
                        Опубликовано:
                        <Text weight={"1"}>
                            {convertUnixTimeToDateTime(String(news?.time))}
                        </Text>
                    </Title>
                </Div>
                <Div>
                    <Paragraph weight={"2"}>{news?.text}</Paragraph>
                </Div>
                <Div>
                    <Link href={`${news?.url}`} target="_blank">
                        Ссылка на новость
                    </Link>
                </Div>
                <Div>
                    <Cell
                        before={<Avatar fallbackIcon={<Icon24MessageOutline/>} size={32}/>}
                        badgeAfterSubtitle={`Автор: ${news?.by}`}
                        after={<Counter>{news?.descendants}</Counter>}
                    >
                        Комментарии
                    </Cell>
                </Div>
                <CommentTree newsId={Number(news?.id)}/>
            </Group>
        </Div>
    );
};