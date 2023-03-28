import { action, makeObservable, observable } from "mobx";
import { conversations as initialConversations } from "./data";
import { messageContext } from "./messageContext";

export interface Conversation {
    id: number;
    name: string | null;
    usersId: number[];
    unreadMessages?: number;
}

export class ConversationContext {
    constructor() {
        makeObservable(this, {
            conversations: observable,
            activeConversationId: observable,
            setActiveConversationId: action,
        });
    }

    conversations: Conversation[] = initialConversations;
    activeConversationId: number | null = null;

    setActiveConversationId = (conversationId: number) => {
        this.activeConversationId = conversationId;
        messageContext.markConversationAsRead(conversationId);
    };
}

export const conversationContext = new ConversationContext();
