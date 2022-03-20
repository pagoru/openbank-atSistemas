
import {StatusCodesEnum} from "../enums/status-codes.enum";

export type Status = {
    action: string;
    code: StatusCodesEnum;
    description?: string;
}