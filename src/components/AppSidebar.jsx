import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Users,
  Settings,
  ChevronDown,
  ChevronRight,
  Network,
  ChevronLeft,
  BookOpen,
  Briefcase,
  Clock,
  Star,
  MoreHorizontal,
  User,
  Building2,
  Folder,
  LogOut,
  PanelLeftOpen,
  PanelLeftClose,
  Package,
} from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { useState } from "react";

const platformMenu = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Setup",
    icon: Settings,
    children: [
      { label: "Service Area" },
      { label: "Company" },
      { label: "Admin" },
      { label: "NAS Router" },
      { label: "BandWidth Policy" },
      { label: "NAS Router" },
      { label: "Product" },
    ],
  },
  {
    label: "Bundle",
    icon: Package,
    children: [{ label: "Product" }, { label: "Plan" }, { label: "Package" }],
  },
  {
    label: "Network",
    icon: Network,
    children: [{ label: "Product" }, { label: "Plan" }, { label: "Package" }],
  },
  {
    label: "Settings",
    icon: Settings,
  },
];

const projects = [
  { label: "Design Engineering", icon: Building2 },
  { label: "Sales & Marketing", icon: Folder },
  { label: "Travel", icon: Folder },
  { label: "More", icon: MoreHorizontal },
];

export default function AppSidebar({ onNavigate }) {
  const { open, setOpen } = useSidebar();
  const [openMenus, setOpenMenus] = useState({});

  const handleToggle = (label) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-center gap-3 relative">
          {open ? (
            <img
              className="h-auto w-[160px]"
              src="/images/logo.svg"
              alt="logo"
            />
          ) : (
            <img
              className="h-auto min-w-[32px] max-w-[32px]"
              src="/images/logo-icon.png"
              alt="logo"
            />
          )}
        </div>
        <button
          type="button"
          className="absolute -right-9 z-50 rounded-full p-2 transition-all duration-200 hover:bg-gray-100 focus:outline-none"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
        </button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu
            className={
              open ? "" : "flex flex-col items-center h-full justify-center"
            }
          >
            {platformMenu.map((item) => (
              <SidebarMenuItem
                key={item.label}
                className={open ? "" : "my-2 w-full flex justify-center"}
              >
                {item.children ? (
                  <>
                    <SidebarMenuButton
                      onClick={() => handleToggle(item.label)}
                      className={
                        open
                          ? ""
                          : "justify-center items-center flex p-0 w-12 h-12"
                      }
                    >
                      <item.icon size={22} />
                      {open && (
                        <span className="flex-1 text-left">{item.label}</span>
                      )}
                      {open &&
                        (openMenus[item.label] ? (
                          <ChevronDown size={16} />
                        ) : (
                          <ChevronRight size={16} />
                        ))}
                    </SidebarMenuButton>
                    {open && openMenus[item.label] && (
                      <div className="ml-7 mt-1 space-y-1 border-l border-gray-200 pl-3">
                        {item.children.map((child) => (
                          <SidebarMenuButton
                            key={child.label}
                            onClick={() => {}}
                            className="text-black flex gap-2"
                            open={open}
                          >
                            {/* <child.icon size={16} /> */}
                            {child.label}
                          </SidebarMenuButton>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <SidebarMenuButton
                    onClick={() => {}}
                    className={
                      open
                        ? ""
                        : "justify-center items-center flex p-0 w-12 h-12"
                    }
                  >
                    <item.icon size={22} />
                    {open && <span>{item.label}</span>}
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup label={open ? "Projects" : undefined}>
          <SidebarMenu
            className={
              open ? "" : "flex flex-col items-center h-full justify-center"
            }
          >
            {projects.map((item) => (
              <SidebarMenuItem
                key={item.label}
                className={open ? "" : "my-2 w-full flex justify-center"}
              >
                <SidebarMenuButton
                  onClick={() => {}}
                  className={
                    open
                      ? "flex gap-2"
                      : "justify-center items-center flex p-0 w-12 h-12"
                  }
                >
                  <item.icon size={22} />
                  {open && <span>{item.label}</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div
          className={
            open
              ? "flex items-center gap-3"
              : "flex items-center justify-center"
          }
        >
          <img
            src="https://github.com/shadcn.png"
            alt="shadcn"
            className="w-10 h-10 rounded-full object-cover"
          />
          {open && (
            <div>
              <div className="font-semibold text-sm text-black">shadcn</div>
              <div className="text-xs text-gray-500">m@example.com</div>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
