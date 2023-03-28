import { action, computed, makeObservable, observable } from "mobx";
import { messages as initialMessages } from "./data";
import { userContext } from "./userContext";

export interface Message {
    id: number;
    conversationId: number;
    authorId: number;
    text: string;
    readByMe: boolean | null;
}

export class MessageContext {
    constructor() {
        makeObservable(this, {
            messages: observable,
            markConversationAsRead: action,
            messagesNotRead: computed,
        });
    }

    messages: Message[] = initialMessages;

    get messagesNotRead() {
        return messageContext.messages.filter(
            (message) =>
                message.authorId !== userContext.me?.id && !message.readByMe,
        );
    }

    markConversationAsRead = (conversationId: number) => {
        this.messages
            .filter((message) => message.conversationId === conversationId)
            .forEach((message) => (message.readByMe = true));
    };
}

export const messageContext = new MessageContext();
