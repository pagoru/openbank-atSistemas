import React from "react";
import {IconEnum} from "../../../enums/icon.enum";
import {RightChevronIcon} from "./icons/righ-chevron-icon.component";
import {CheckIcon} from "./icons/check-icon.component";

export type IconProps = {
    className?: string;
    icon?: IconEnum;
    size?: string;
}

export const Icon: React.FunctionComponent<IconProps> = (
    {
        className = '',
        icon = IconEnum.RIGHT_CHEVRON,
        size = '48px'
    }
) => {
    const props = {
        width: size,
        height: size,
        className
    }
    
    switch (icon) {
        case IconEnum.RIGHT_CHEVRON:
            return <RightChevronIcon data-testid='icon-right-chevron' {...props} />;
        case IconEnum.CHECK:
            return <CheckIcon data-testid='icon-check' {...props} />;
    }
}