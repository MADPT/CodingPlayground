import React, { useState } from "react";

const Header = () => {
  const [ownerData, setOwnerData] = useState({
    name: {
      firstName: "Aija",
      lastName: "Hyvärinen",
    },
    gender: "female",
    photo:
      "https://images.generated.photos/LYIGZ85qqPesEXVqJ_12wudmME9vAEZixvNmb6rMs-8/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyMjk0MzIuanBn.jpg",
  });

  return (
    <header className="header">
      <h1 className="header__logo">Trading Platform</h1>
      <div className="header__user--wrapper">
        <img className="header__photo" src={ownerData.photo} alt={ownerData.name} />
        <span className="header__name">
          {ownerData.name.firstName}
          <br />
          {ownerData.name.lastName}
        </span>
      </div>
    </header>
  );
};

export default Header;
