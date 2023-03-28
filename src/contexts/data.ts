import { Conversation } from "./conversationContext";
import { Message } from "./messageContext";
import { User } from "./userContext";

export const users: User[] = [
    {
        id: 1,
        name: "Luffy Monkey (Me)",
    },
    {
        id: 2,
        name: "Zoro Roronoa",
    },
    {
        id: 3,
        name: "Nami",
    },
    {
        id: 4,
        name: "Usopp",
    },
    {
        id: 5,
        name: "Sanji Vinsmoke",
    },
];

export const conversations: Conversation[] = [
    {
        id: 1,
        name: null,
        usersId: [1, 2],
    },
    {
        id: 2,
        name: "Captain & Wings",
        usersId: [1, 2, 5],
    },
    {
        id: 3,
        name: null,
        usersId: [1, 3],
    },
    {
        id: 4,
        name: "Fun on Boat",
        usersId: [1, 4],
    },
];

export const messages: Message[] = [
    {
        id: 1,
        conversationId: 1,
        authorId: 1,
        text: "Hello Zoro",
        readByMe: null,
    },
    {
        id: 2,
        conversationId: 1,
        authorId: 2,
        text: "Hello Captain",
        readByMe: true,
    },
    {
        id: 3,
        conversationId: 1,
        authorId: 1,
        text: "Are you lost ?",
        readByMe: null,
    },
    {
        id: 4,
        conversationId: 1,
        authorId: 2,
        text: "I am afraid I am ...",
        readByMe: false,
    },
    {
        id: 5,
        conversationId: 2,
        authorId: 2,
        text: "I am better than you Sanji",
        readByMe: true,
    },
    {
        id: 6,
        conversationId: 2,
        authorId: 5,
        text: "No I am",
        readByMe: true,
    },
    {
        id: 7,
        conversationId: 2,
        authorId: 1,
        text: "I don't care, I am better than both of you",
        readByMe: null,
    },
    {
        id: 8,
        conversationId: 4,
        authorId: 4,
        text: "Hey look at this meme: sunny://funny-meme-1.com",
        readByMe: false,
    },
    {
        id: 9,
        conversationId: 4,
        authorId: 4,
        text: "Hey look at this meme: sunny://funny-meme-2.com",
        readByMe: false,
    },
    {
        id: 10,
        conversationId: 4,
        authorId: 4,
        text: "Hey look at this meme: sunny://funny-meme-3.com",
        readByMe: false,
    },
];
