import React from 'react';

const SidebarItem = ({ icon, text, isSelected, isEmergency, onClick, isAdvanced }) => {
  const baseClasses = "flex items-center p-3 rounded-xl cursor-pointer transition-colors duration-200 text-sm font-medium";
  
  let itemClasses = baseClasses;
  let iconClasses = "mr-3 text-lg";

  if (isSelected) {
    // Styling for the selected item (e.g., "Home")
    itemClasses += " bg-violet-600 text-white shadow-lg";
    iconClasses += " text-white";
  } else if (isEmergency) {
    // Styling for the Crisis Support button
    itemClasses += " text-red-600 bg-red-100 hover:bg-red-200";
    iconClasses += " text-red-600";
  } else if (isAdvanced) {
    // Standard color for unselected, non-emergency items
    itemClasses += " text-gray-700 hover:bg-gray-100";
    iconClasses += " text-gray-500";
  } else {
    // Standard color for unselected, non-emergency items
    itemClasses += " text-gray-700 hover:bg-gray-100";
    iconClasses += " text-gray-500";
  }

  return (
    <div className={itemClasses} onClick={onClick}>
      <span className={iconClasses}>{icon}</span>
      <span>{text}</span>
    </div>
  );
};

export default SidebarItem;