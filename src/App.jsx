import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { jobsAtom, messagesAtom, notificationAtom, totalNotificationsSelector } from "./atoms"; // Ensure this is the correct atom

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const notificationsCount = useRecoilValue(notificationAtom);
  const [messagesCount, setMessagesCount] = useRecoilState(messagesAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const totalNotificationsCount = useRecoilValue(totalNotificationsSelector);

  return (
    <div>
      <button>Home</button>
      <button onClick={() => setMessagesCount(messagesCount + 1)}>
        Jobs({jobsCount})
      </button>
      <button>Messages({messagesCount})</button>
      <button>
        Notifications ({notificationsCount >= 100 ? "99+" : notificationsCount})
      </button>
      <button>ME({totalNotificationsCount})</button>
    </div>
  );
}

export default App;
