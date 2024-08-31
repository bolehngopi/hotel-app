"use client";

import React from "react";

interface MenuItemProps {
  label: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
      aria-label={label}
    >
      {label}
    </button>
  );
};

export default MenuItem;
