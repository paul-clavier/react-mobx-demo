import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import {
    Conversation as IConversation,
    conversationContext,
} from "../contexts/conversationContext";
import { messageContext } from "../contexts/messageContext";
import { User, userContext } from "../contexts/userContext";
import "./Conversation.css";

interface ConversationProps {
    conversation: IConversation;
}

const getConversationName = (
    conversationName: string | null,
    conversationUsers: number[],
    users: User[],
) => {
    if (conversationName) return conversationName;
    return users.filter((user) => conversationUsers.includes(user.id)).pop()
        ?.name;
};

export const Conversation = observer(({ conversation }: ConversationProps) => {
    console.log(`Conversation ${conversation.id} renders`);

    /**
     * Use computed, otherwise when changing activeConversationId, given all
     * Conversation components use this observable, they will re-render.
     * Using computed, mobx will recalculate isActive for all Conversation
     * components but only rerender those whose isActive value changed
     */
    const isActive = computed(
        () => conversationContext.activeConversationId === conversation.id,
    ).get();

    /**
     * Same as above, when clicking on a conversation, it will change unreadMessages
     * (for convos with unread messages). By using computed, mobx will recalculate
     * unreadMessages for all Conversation components but only rerender
     * those whose unreadMessages value changed
     */
    const unreadMessages = computed(
        () =>
            messageContext.messagesNotRead.filter(
                (message) => message.conversationId === conversation.id,
            ).length,
    ).get();

    const conversationName = getConversationName(
        conversation.name,
        conversation.usersId,
        userContext.otherUsers,
    );

    return (
        <div
            onClick={() =>
                conversationContext.setActiveConversationId(conversation.id)
            }
            className={`conversation-item ${isActive ? "isActive" : ""}`}
        >
            {conversationName ? <h2>{conversationName}</h2> : null}
            <span>{unreadMessages}</span>
        </div>
    );
});
