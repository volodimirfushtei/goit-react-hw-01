import "modern-normalize";

import Profile from "./Profile";
import userData from "../userData.json";
import FriendList from "./FriendList";
import friends from "../friends.json";
import TransactionHistory from "./TransactionHistory";
import transactions from "../transactions.json";

// App.jsx
export default function App() {
  return (
    <div
      style={{
        margin: "0 auto",
        padding: "30px",
        maxWidth: "1440px",
        textAlign: "center",
        backdropFilter: "none",
        backgroundColor: "#fff",
      }}
    >
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
