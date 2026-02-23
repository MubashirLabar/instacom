import { useState } from "react";
import { LayoutDashboard, Settings, ChevronDown, ChevronRight, LogOut, Users } from "lucide-react";
import Button from "@/components/ui/Button";

const menu = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    label: "Users",
    icon: Users,
    children: [
      { label: "All Users", path: "/dashboard/users" },
      { label: "Add User", path: "/dashboard/users/add" },
    ],
  },
  {
    label: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];

export default function SidebarMenu({ onNavigate }) {
  const [openMenus, setOpenMenus] = useState({});

  const handleToggle = (label) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <nav className="flex-1 px-2 py-4 space-y-1">
      {menu.map((item) => (
        <div key={item.label}>
          {item.children ? (
            <div>
              <Button
                type="button"
                variant="ghost"
                className="w-full flex items-center justify-between px-3 py-2 text-left text-gray-700 hover:bg-gray-100"
                onClick={() => handleToggle(item.label)}
              >
                <span className="flex items-center gap-2">
                  <item.icon size={18} />
                  {item.label}
                </span>
                {openMenus[item.label] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </Button>
              {openMenus[item.label] && (
                <div className="ml-7 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <Button
                      key={child.label}
                      type="button"
                      variant="ghost"
                      className="w-full flex items-center px-3 py-2 text-left text-gray-600 hover:bg-gray-100"
                      onClick={() => onNavigate(child.path)}
                    >
                      {child.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Button
              type="button"
              variant="ghost"
              className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-100"
              onClick={() => onNavigate(item.path)}
            >
              <item.icon size={18} />
              {item.label}
            </Button>
          )}
        </div>
      ))}
      <div className="mt-8">
        <Button
          type="button"
          variant="ghost"
          className="w-full flex items-center gap-2 px-3 py-2 text-left text-red-600 hover:bg-red-50"
        >
          <LogOut size={18} />
          Logout
        </Button>
      </div>
    </nav>
  );
} 