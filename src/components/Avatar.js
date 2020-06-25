import React from "react";

const Avatar = ({ name, avatarURL }) => {
  let AvatarFromName = "";
  if (avatarURL === "" && name.length > 0) {
    name = name.trim().split(" ");
    name.forEach((word) => {
      AvatarFromName += word[0].toUpperCase();
    });
  }
  return (
    <div className='avatar-name'>
      {/* {AvatarFromName === "" ? (
        <AvatarMUI alt={name} src={avatarURL} />
      ) : (
        <AvatarMUI>{AvatarFromName}</AvatarMUI>
      )} */}
      <h3 className='text-avatar'>{AvatarFromName}</h3>
    </div>
  );
};

export default Avatar;
