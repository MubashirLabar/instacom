import { User } from "lucide-react";

export default function SidebarUser() {
  return (
    <div className="flex items-center gap-3 p-4">
      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
        <User className="text-gray-500" size={24} />
      </div>
      <div>
        <div className="font-semibold text-sm text-gray-900">John Doe</div>
        <div className="text-xs text-gray-500">john@example.com</div>
      </div>
    </div>
  );
} 