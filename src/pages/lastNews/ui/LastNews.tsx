import React, {useEffect} from 'react';
import {Button, Div, Group, PanelHeader, Title} from "@vkontakte/vkui";
import {useGetAllTopStoriesIdQuery} from "../../../app/redux/api/new-stories-api";
import styles from './LastNews.module.css'
import {LoadingSpinner} from "../../../shared/ui-kit";
import {NewsItem} from "../../../entities/news";
import {useDispatch} from "react-redux";
import {actions} from "../../../app/redux/kidsDeleted.slice";



export const LastNews = () => {
    const {data, error, isLoading,refetch , isFetching} = useGetAllTopStoriesIdQuery()
    const dispatch = useDispatch()

    useEffect(() => {
        const intervalId = setInterval(() => {
            window.location.reload();
        }, 60000);
        dispatch(actions.clear())

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