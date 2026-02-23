import { useState } from "react";
import { Menu } from "lucide-react";
import SidebarUser from "./SidebarUser";
import SidebarMenu from "./SidebarMenu";
import Button from "@/components/ui/Button";

export default function Sidebar({ onNavigate }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside
      className={`h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-200 ${
        expanded ? "w-64" : "w-20"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        {expanded && <span className="font-bold text-lg text-primary">InstaCom</span>}
        <Button
          type="button"
          variant="ghost"
          className="p-2 rounded-full hover:bg-gray-100"
          onClick={() => setExpanded((v) => !v)}
        >
          <Menu size={22} />
        </Button>
      </div>
      <SidebarUser />
      <SidebarMenu onNavigate={onNavigate} />
    </aside>
  );
} 