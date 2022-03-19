import React, {useState} from "react";
import styles from './checkbox.module.sass'

export type InputCheckboxProps = {
    onChange?: (isChecked: boolean) => any;
}

export const InputCheckbox: React.FunctionComponent<InputCheckboxProps> = (
    {
        onChange,
        children
    }
) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    
    const _onClick = () => {
        setIsChecked(!isChecked);
        onChange && onChange(!isChecked);
    }
    
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