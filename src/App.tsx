import { observer } from "mobx-react-lite";
import "./App.css";
import { Conversation } from "./components/Conversation";
import { ConversationPanel } from "./components/ConversationPanel";
import { conversationContext } from "./contexts/conversationContext";
import { messageContext } from "./contexts/messageContext";

const App = observer(() => {
    console.log(`App renders`);
    return (
        <div className="root">
            <div className="conversationsMenu">
                <h1>{`Messages (${messageContext.messagesNotRead.length})`}</h1>
                <div className="conversations">
                    {conversationContext.conversations.map((conversation) => (
                        <Conversation
                            key={`conversation-${conversation.id}`}
                            conversation={conversation}
                        />
                    ))}
                </div>
            </div>
            <ConversationPanel className="activeConversation" />
        </div>
    );
});

export default App;
