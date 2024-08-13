import styles from "./Profile.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friend}>
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        width="48"
        className="styles.friend-avatar"
      />
      <p className={styles.friend - name}>{name}</p>
      <p className={styles.friendStatus}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
export default FriendListItem;
