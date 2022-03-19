import React, {useEffect, useState} from "react";
import styles from './steps-container.module.sass';
import {StepsContainerHeader} from "./header/header.component";
import {Button} from "../button/button.component";
import {Icon} from "../icon/icon.component";
import {IconEnum} from "../../../enums/icon.enum";
import {useTranslation} from "../../../hooks/use-translation.hook";
import {TranslationEnum} from "../../../enums/translation.enum";

type PasswordManagerContainerProps = {
    onPrevious?: (isFirst: boolean) => any;
    onNext?: (isLast: boolean) => any;
    canContinue?: boolean;
    className?: string;
};

export const StepsContainer: React.FunctionComponent<PasswordManagerContainerProps> = (
    {
        onPrevious = () => '',
        onNext = () => '',
        canContinue = true,
        className = '',
        children
    }
) => {
    const {
        translation
    } = useTranslation();
    
    const [childList, setChildList] = useState<any[]>([]);
    const [currentChildIndex, setCurrentChildIndex] = useState<number>(0);
    
    useEffect(() => {
        setChildList(Array.isArray(children) ? children : [children]);
    }, [children]);
    
    const childrenLength = childList.length;
    const isFirst = currentChildIndex === 0;
    const isLast = currentChildIndex === childrenLength - 1;
    
    const onClickNext = () => {
        onNext(isLast);
        !isLast && setCurrentChildIndex(currentChildIndex + 1);
    }
    
    const onClickCancel = () => {
        onPrevious(isFirst);
        !isFirst && setCurrentChildIndex(currentChildIndex - 1);
    }
    
    return (
        <div
            data-testid='steps-container'
            className={`${styles.container} ${className}`}
        >
            <div className={styles.header}>
                <StepsContainerHeader
                    length={childrenLength}
                    current={currentChildIndex}
                />
            </div>
            <div
                data-testid='steps-container-content'
                className={styles.content}
            >
                <div
                    data-testid='steps-container-children'
                    className={styles.children}
                >
                    {
                        childList[currentChildIndex]
                    }
                </div>
                <div
                    data-testid='steps-container-footer'
                    className={styles.footer}
                >
                    {
                        isFirst ? (
                            <div/>
                        ) : (
                            <Button
                                secondary
                                onClick={onClickCancel}
                            >
                                {
                                    translation(TranslationEnum.PREVIOUS)
                                }
                            </Button>
                        )
                    }
                    <Button
                        className={styles.nextButton}
                        disabled={!canContinue}
                        onClick={onClickNext}
                    >
                        <span>
                            {
                                isLast
                                    ? translation(TranslationEnum.END)
                                    : translation(TranslationEnum.NEXT)
                            }
                        </span>
                        <Icon
                            className={styles.icon}
                            icon={IconEnum.RIGHT_CHEVRON}
                        />
                    </Button>
                </div>
            </div>
        </div>
    )
}