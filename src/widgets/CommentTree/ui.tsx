import React from 'react';
import {useGetNewsByIdQuery} from "../../app/redux/api/new-stories-api";
import {Button, Div, Group} from "@vkontakte/vkui";
import {Comment} from "../../entities/comment";
import {useSelector} from "react-redux";
import {RootState} from "../../app/redux/store";
import {LoadingSpinner} from "../../shared/ui-kit";

export const CommentTree = ({newsId}: { newsId: number }) => {
    const {data: news, refetch, isFetching} = useGetNewsByIdQuery(newsId);
    const isDeleted = useSelector((state: RootState) => state.isDeletedReducer.deleted)

    if (isFetching){
        return <LoadingSpinner/>
    }

    return (
        <>
            {news?.kids ? <Div>
                {isDeleted.includes(false) ?
                    <Button appearance={"accent-invariable"} onClick={() => refetch()}>Обновить комментарии</Button> : null}
                <Group mode={"card"} style={{marginTop: "10px"}}>
                    {news?.kids?.map((commentId) => (
                        <Comment key={commentId} id={commentId}/>
                    ))}
                </Group>
            </Div> : null}
        </>

    );
};