import { observer } from "mobx-react-lite";
import { conversationContext } from "../contexts/conversationContext";
import { messageContext } from "../contexts/messageContext";
import "./ConversationPanel.css";
import { Message } from "./Message";

interface ConversationPanelProps {
    className?: string;
}

export const ConversationPanel = observer(
    ({ className }: ConversationPanelProps) => {
        const conversationId = conversationContext.activeConversationId;
        const messages = messageContext.messages.filter(
            (message) => message.conversationId === conversationId,
        );
        console.log(`ConversationPanel with id:${conversationId} renders`);
        return (
            <div className={className}>
                {conversationId ? (
                    messages.length > 0 ? (
                        messages.map((message) => (
                            <Message
                                key={message.id}
                                text={message.text}
                                authorId={message.authorId}
                            />
                        ))
                    ) : (
                        <span className="defaultMessage">
                            This conversation is empty
                        </span>
                    )
                ) : (
                    <span className="defaultMessage">
                        Select a conversation
                    </span>
                )}
            </div>
        );
    },
);
