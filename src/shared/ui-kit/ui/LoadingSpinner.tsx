import React from 'react';
import {Spinner} from "@vkontakte/vkui";
import styles from './LoadingSpinner.module.css'

export const LoadingSpinner = () => {
    return (
        <Spinner size={"large"} className={styles.spinner}/>
    );
};