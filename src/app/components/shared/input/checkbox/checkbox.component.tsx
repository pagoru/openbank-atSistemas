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
    
    const _onChange = () => {
        setIsChecked(!isChecked);
        onChange && onChange(!isChecked);
    }
    
    return (
        <div
            data-testid='input-checkbox'
            className={styles.checkbox}
            onClick={_onChange}
        >
            <input
                data-testid='input-checkbox-dom'
                checked={isChecked}
                onChange={_onChange}
                type='checkbox'
            />
            <label
                children={children}
            />
        </div>
    )
}