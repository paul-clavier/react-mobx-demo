import { computed, makeObservable, observable } from "mobx";
import { users as initialUsers } from "./data";

export interface User {
    id: number;
    name: string;
}

export const MY_ID = 1;

class UserContext {
    constructor() {
        makeObservable(this, {
            users: observable,
            me: computed,
            otherUsers: computed,
        });
    }
    users = initialUsers;
    get me(): User | undefined {
        return this.users.find((user) => user.id === MY_ID);
    }
    get otherUsers(): User[] {
        return this.users.filter((user) => user.id !== MY_ID);
    }
}

export const userContext = new UserContext();
