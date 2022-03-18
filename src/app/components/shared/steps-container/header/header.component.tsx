import React, {Fragment} from "react";
import styles from './header.module.sass';
import {Icon} from "../../icon/icon.component";
import {IconEnum} from "../../../../enums/icon.enum";

export type StepsContainerHeaderProps = {
    length: number;
    current: number;
}

export const StepsContainerHeader: React.FunctionComponent<StepsContainerHeaderProps> = (
    {
        length,
        current
    }
) => {
    const optionList = new Array(length)
        .fill(undefined)
        .map((_, index) => {
            const isDone = index < current;
            
            const classNameCircle = [
                styles.option,
                index === current ? styles.selected : '',
                isDone ? styles.done : ''
            ].join(' ');
            
            const classNameLine = [
                styles.line,
                isDone ? styles.done : ''
            ].join(' ');
            
            return (
                <Fragment key={index}>
                    <div className={classNameCircle}>
                        {
                            isDone ? (
                                <Icon
                                    icon={IconEnum.CHECK}
                                    size='16px'
                                    className={styles.checkIcon}
                                />
                            ) : index + 1
                        }
                    </div>
                    {
                        index !== length - 1 && (
                            <div className={classNameLine}/>
                        )
                    }
                </Fragment>
            )
        });
    
    const trianglePosition =
        // First position
        Math.ceil((length - 1) * 2)
        // Current position
        - (current * 4)
    
    return (
        <div
            data-testid='steps-container-header'
            className={styles.header}
        >
            <div className={styles.options}>
                {
                    optionList
                }
            </div>
            <div
                className={styles.triangle}
                style={{
                    left: `calc(50% - ${trianglePosition}em)`
                }}
            />
        </div>
    )
}