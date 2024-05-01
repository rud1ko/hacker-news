import React, {useEffect} from 'react';
import {Button, Div, Group, PanelHeader, Title} from "@vkontakte/vkui";
import {useGetAllTopStoriesIdQuery} from "../../../app/redux/api/new-stories-api";
import styles from './LastNews.module.css'
import {LoadingSpinner} from "../../../shared/ui-kit";
import {NewsItem} from "../../../entities/news";



export const LastNews = () => {
    const {data, error, isLoading, refetch, isFetching} = useGetAllTopStoriesIdQuery()

    useEffect(() => {
        const intervalId = setInterval(() => {
            window.location.reload();
        }, 60000);

        return () => clearInterval(intervalId);
    }, [data]);

    if (error) return <div>Error</div>

    return (
        <>
            <PanelHeader>
                Hacker-news
            </PanelHeader>
            <Div>
                <Title level="1" weight={"1"} style={{textAlign: "center"}}>
                    Last news
                </Title>
                <Div className={styles.btn}>
                    <Button appearance={"accent"} onClick={() => refetch()}>Обновить новости</Button>
                </Div>
                {isLoading || isFetching ? <LoadingSpinner/> : null}
                {!isFetching && <Group mode="plain">
                    {data?.map((info, idx) => <NewsItem key={info.id} info={info}/>)}
                </Group>}
            </Div>
        </>
    );
};