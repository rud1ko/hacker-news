import React, {useCallback, useEffect, useState} from 'react';
import {useGetAllChildsQuery, useGetNewsByIdQuery} from "../../../app/redux/api/new-stories-api";
import {Avatar, Button, Caption, Cell, Div, Paragraph, Title} from "@vkontakte/vkui";
import styles from './Comment.module.css'
import {Icon24ChevronDown, Icon24ChevronUp, Icon28User} from "@vkontakte/icons";
import {convertUnixTimeToDateTime} from "../../../shared/functions";
import {useDispatch} from "react-redux";
import {actions} from "../../../app/redux/kidsDeleted.slice";

export const Comment = ({id}: { id: number }) => {
    const { data: comment, isFetching } = useGetNewsByIdQuery(id);
    const [isShowChildComments, setIsShowChildComments] = useState(false);
    const {data: childs} = useGetAllChildsQuery(id)
    const dispatch = useDispatch()

    useEffect(() => {
        if (comment){
            dispatch(actions.isDeletedAdd(comment?.deleted !== undefined))
        }
    }, [comment]);

    const toggleIsShowChildComments = useCallback(() => {
        setIsShowChildComments(prev => !prev);
    }, []);

    if (isFetching) return <Div>Loading...</Div>;
    if (comment?.deleted) return null


    return (
        <Div key={comment?.id} className={styles.comment}>
            <Cell before={<Avatar fallbackIcon={<Icon28User />} size={32} />}>
                <Title level={"3"}>{comment?.by} </Title>
                <Caption level={"1"}>{convertUnixTimeToDateTime(String(comment?.time))}</Caption>
            </Cell>
            <Paragraph style={{ paddingLeft: 58 }}
                // @ts-ignore
                       dangerouslySetInnerHTML={{ __html: comment?.text }}/>

            {comment?.kids && comment.kids.length > 0 && childs?.length !== 0 && (
                <Button mode="tertiary" before={isShowChildComments ? <Icon24ChevronUp /> : <Icon24ChevronDown />} onClick={toggleIsShowChildComments} className={styles.showButton}>
                    {isShowChildComments ? 'Скрыть ответы' : 'Показать ответы'}
                </Button>
            )}

            {isShowChildComments && childs?.map((item) => (
                <Div key={item.id} style={{ paddingLeft: 58 }}>
                    <Comment id={item.id} />
                </Div>
            ))}
        </Div>
    );
};