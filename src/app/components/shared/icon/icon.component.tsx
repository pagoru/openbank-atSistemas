import React from "react";
import {IconEnum} from "../../../enums/icon.enum";
import {RightChevronIcon} from "./icons/righ-chevron-icon.component";
import {CheckIcon} from "./icons/check-icon.component";
import {EyeShowIcon} from "./icons/eye-show.component";
import {EyeHideIcon} from "./icons/eye-hide.component";

export type IconProps = {
    className?: string;
    icon?: IconEnum;
    size?: string;
    onClick?: () => any;
}

export const Icon: React.FunctionComponent<IconProps> = (
    {
        className = '',
        icon = IconEnum.RIGHT_CHEVRON,
        size = '48px',
        onClick
    }
) => {
    const props = {
        width: size,
        height: size,
        className,
        onClick
    }
    
    switch (icon) {
        case IconEnum.RIGHT_CHEVRON:
            return <RightChevronIcon data-testid='icon-right-chevron' {...props} />;
        case IconEnum.CHECK:
            return <CheckIcon data-testid='icon-check' {...props} />;
        case IconEnum.EYE_SHOW:
            return <EyeShowIcon data-testid='icon-eye-show' {...props} />;
        case IconEnum.EYE_HIDE:
            return <EyeHideIcon data-testid='icon-eye-hide' {...props} />;
    }
}