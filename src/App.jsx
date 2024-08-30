import "modern-normalize";
import Profile from "./components/Profile/Profile";
import userData from "./assets/userData.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./assets/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./assets/transactions.json";

// App.jsx
export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
