import React from "react";
import {IconEnum} from "../../../enums/icon.enum";
import {RightChevronIcon} from "./icons/righ-chevron-icon.component";

export type ButtonProps = {
    icon?: IconEnum;
    size?: string;
}

export const Icon: React.FunctionComponent<ButtonProps> = (
    {
        icon = IconEnum.RIGHT_CHEVRON,
        size = '48px'
    }
) => {
    const props = {
        width: size,
        height: size
    }
    
    switch (icon) {
        case IconEnum.RIGHT_CHEVRON:
            return <RightChevronIcon data-testid='icon-right-chevron' {...props} />;
    }
}