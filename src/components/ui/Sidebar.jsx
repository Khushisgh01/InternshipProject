import React from 'react';
import SidebarItem from './SidebarItem'; // Make sure this path is correct

const Sidebar = ({ initialActiveItem = 'Home' }) => {
  const [activeItem, setActiveItem] = React.useState(initialActiveItem);

  const NavSection = ({ title, items, isEmergency = false, isAdvanced = false }) => (
    <div className="mt-4">
      {title && <h3 className="text-xs font-semibold uppercase text-gray-400 mb-2 px-3">{title}</h3>}
      <div className="space-y-0">
        {items.map(item => (
          <SidebarItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            to={item.to}
            isSelected={activeItem === item.text}
            isEmergency={isEmergency}
            isAdvanced={isAdvanced}
            onClick={() => setActiveItem(item.text)}
          />
        ))}
      </div>
    </div>
  );

  const mainNavItems = [
    { icon: '🏠', text: 'Home' , to: "/"}, 
    { icon: '💬', text: 'AI Chat' , to: "/ai-chat" }, // UPDATED LINK HERE
    { icon: '📔', text: 'Journal', to: "/journel" },
    { icon: '🧘', text: 'Exercises' , to: '/exercises'},
  ];

  const quickActions = [
    { icon: '⚡', text: 'Quick Mood Check' },
    { icon: '💨', text: '2-Min Breathing' },
    { icon: '⚡', text: 'SOS Calm' },
  ];

  const advancedItems = [
    { icon: '🎶', text: 'Soundscapes' , to:'/soundscapes'},
    { icon: '🫂', text: 'Community Support' , to:'/community-support'}, 
    // UPDATED LINK
    { icon: '🩺', text: 'Find Therapist', to: '/find-therapist' },
  ];
  
  const emergencyItem = [
    { icon: '📞', text: 'Crisis Support' , to:'/crises-support'},
  ];

  const profileSettings = [
    { icon: '👤', text: 'Profile & Settings' , to:'/profile-settings'},
  ];

  return (
    <div className="w-64 min-h-screen bg-white p-4 flex flex-col shadow-xl">
      
      {/* Top Section: Logo and Title */}
      <div className="flex items-center mt-4">
        {/* Heart icon on left */}
        <div className="bg-violet-100 p-2 rounded-full mr-3">
          <span className="text-violet-600 text-xl">💜</span> 
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-800">MindfulSpace</h2>
          <p className="text-xs text-gray-500">Your wellness companion</p>
        </div>
      </div>

      {/* Main Navigation */}
      <NavSection title="MAIN" items={mainNavItems} />

     {/* Advanced Section */}
      <NavSection title="ADVANCED" items={advancedItems} isAdvanced={true} />
      
      {/* Emergency Section */}
      <NavSection title="EMERGENCY" items={emergencyItem} isEmergency={true} />
    
      {/* Profile & Settings */}
      <NavSection items={profileSettings} isAdvanced={true} />

    {/* Bottom Section: Dark Mode */}
    <div className="mt-0 p-3 rounded-xl cursor-pointer text-gray-700 hover:bg-gray-100 flex items-center">
      <span className="mr-3 text-lg">🌙</span>
      <span>Dark Mode</span>
    </div>
  </div>
  );
};

export default Sidebar;