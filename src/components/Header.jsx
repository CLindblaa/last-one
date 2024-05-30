"use client";

import React, { useState } from "react";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { WiDayCloudy } from "react-icons/wi";
import { MdManageSearch } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";
import ModalRecentSearch from "./ModalRecentSearch";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="Startsida" address="/" Icon={AiFillHome} />
        <MenuItem title="Väder" address="/weather" Icon={WiDayCloudy} />
        <MenuItem title="Om oss" address="/about" Icon={BsFillInfoCircleFill} />
        <MenuItem
          title="Senaste sökningarna"
          address="/searches"
          Icon={MdManageSearch}
        />
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            Weather
          </span>
          <span className="text-xl hidden sm:inline">App</span>
        </Link>
      </div>
    </div>
  );
}
