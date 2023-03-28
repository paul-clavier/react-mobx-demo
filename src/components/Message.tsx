import { observer } from "mobx-react-lite";
import { MY_ID, userContext } from "../contexts/userContext";
import "./Message.css";

interface MessageProps {
    text: string;
    authorId: number;
}

export const Message = observer(({ text, authorId }: MessageProps) => {
    const author = userContext.users.find((user) => user.id === authorId);
    if (!author) return null;
    return (
        <div className={`message ${author.id === MY_ID ? "me" : ""}`}>
            <p className="text">{text}</p>
            {authorId === userContext.me?.id ? null : (
                <p className="author">{` from ${author.name}`}</p>
            )}
        </div>
    );
});
