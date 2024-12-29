import { darkGrey } from "../contstants/colourVariables";

interface ButtonStylesProps {
    btnColour?: string;
    fontSize?: string;
}
export const getButtonStyles = ({ btnColour = darkGrey, fontSize = "0.875rem" }: ButtonStylesProps = {}) => {
    return {
        justifyContent: "flex-start",
        padding: 0,
        textTransform: "none",
        fontSize: fontSize,
        color: btnColour,
        "&:hover": { backgroundColor: "transparent" }
    };
};

export interface Notification {
    message: string;
    payload: string;
}

//TODO unit test
export const getNotificationMessages = (data: (string | Notification)[]) => {
    const messages = data
        .filter((item): item is Notification => typeof item === "object" && item !== null && "message" in item)
        .map(item => item.message);
    return messages;
};