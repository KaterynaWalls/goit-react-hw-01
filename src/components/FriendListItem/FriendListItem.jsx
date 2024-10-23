/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friendCard}>
      <img
        className={styles.friendAvatar}
        src={avatar}
        alt="Avatar"
        width="100"
      />
      <p className={styles.friendText}>{name}</p>
      <p
        className={
          (styles.friendStatus, isOnline ? styles.online : styles.offline)
        }
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
export default FriendListItem;
