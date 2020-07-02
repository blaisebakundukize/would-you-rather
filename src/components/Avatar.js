import React from "react";

const Avatar = ({ name, avatarURL, classes }) => {
  let AvatarFromName = "";
  if (avatarURL === "" && name.length > 0) {
    name = name.trim().split(" ");
    name.forEach((word) => {
      AvatarFromName += word[0].toUpperCase();
    });
  }
  return (
    <>
      {avatarURL !== "" ? (
        <img className={`${classes} avatar`} alt={name} src={avatarURL} />
      ) : (
        <div className={`avatar-name ${classes}`}>
          <h3 className='text-avatar'>{AvatarFromName}</h3>
        </div>
      )}
    </>
  );
};

export default Avatar;
