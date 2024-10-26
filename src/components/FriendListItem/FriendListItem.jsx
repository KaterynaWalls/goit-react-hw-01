/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./FriendListItem.module.css";
import clsx from "clsx";
import PropTypes from "prop-types";

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
        className={clsx(
          styles.friendStatus,
          isOnline ? styles.online : styles.offline
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
