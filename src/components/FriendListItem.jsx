import styles from "./Profile.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? styles.online : styles.offline;
  return (
    <div className={styles.friend}>
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        width="48"
        className="styles.avatarFre"
      />
      <p className={styles.nameFre}>{name}</p>
      <p className={statusClass}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
