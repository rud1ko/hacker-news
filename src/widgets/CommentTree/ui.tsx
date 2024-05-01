import React from 'react';
import {useGetNewsByIdQuery} from "../../app/redux/api/new-stories-api";
import {Button, Div, Group} from "@vkontakte/vkui";
import {Comment} from "../../entities/comment";

export const CommentTree = ({newsId}: { newsId: number }) => {
    const {data: news, refetch} = useGetNewsByIdQuery(newsId);

    return (
        <Div>
            {news?.kids ?
                <Button appearance={"accent-invariable"} onClick={() => refetch()}>Обновить комментарии</Button> : null}
            <Group mode={"card"} style={{marginTop: "10px"}}>
                {news?.kids?.map((commentId) => (
                    <Comment key={commentId} id={commentId}/>
                ))}
            </Group>
        </Div>
    );
};