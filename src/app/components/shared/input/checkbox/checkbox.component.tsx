import React, {useState} from "react";
import styles from './checkbox.module.sass'

export const InputCheckbox: React.FunctionComponent = (
    {
        children
    }
) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    
    const _onClick = () => setIsChecked(!isChecked);
    
    return (
        <div
            data-testid='input-checkbox'
            className={styles.checkbox}
            onClick={_onClick}
        >
            <input
                data-testid='input-checkbox-dom'
                checked={isChecked}
                type='checkbox'
            />
            <label
                children={children}
            />
        </div>
    )
}