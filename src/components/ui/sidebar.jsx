import * as React from "react";
import { PanelLeftOpen, PanelLeftClose } from "lucide-react";

const SidebarContext = React.createContext();

export function SidebarProvider({ children }) {
  const [open, setOpen] = React.useState(true);
  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return context;
}

export function Sidebar({ children }) {
  const { open } = useSidebar();
  return (
    <aside
      className={`h-screen bg-white border-r border-sidebar-border flex flex-col transition-all duration-200 ${
        open ? "w-64" : "w-20"
      }`}
    >
      {children}
    </aside>
  );
}

export function SidebarHeader({ children }) {
  return (
    <div className="relative p-4 border-b border-sidebar-border flex items-center justify-between">
      {children}
    </div>
  );
}

export function SidebarContent({ children }) {
  return <div className="flex-1 overflow-y-auto mt-4">{children}</div>;
}

export function SidebarFooter({ children }) {
  return <div className="p-4 border-t border-sidebar-border">{children}</div>;
}

export function SidebarGroup({ children, label }) {
  return (
    <div className="mb-4">
      {label && (
        <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          {label}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}

export function SidebarMenu({ children }) {
  return <nav className="flex flex-col gap-1 px-2">{children}</nav>;
}

export function SidebarMenuItem({ children }) {
  return <div className="w-full">{children}</div>;
}

export function SidebarMenuButton({ children, ...props }) {
  return (
    <button
      {...props}
      className={
        "flex items-center w-full gap-2 px-3 py-2 rounded-md text-sm text-sidebar-foreground hover:bg-gray-100 transition-colors " +
        (props.className || "")
      }
    >
      {children}
    </button>
  );
}

export function SidebarTrigger() {
  const { open, setOpen } = useSidebar();
  return (
    <button
      type="button"
      aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
      onClick={() => setOpen((v) => !v)}
      className="fixed top-6 left-64 z-50 bg-white border border-gray-200 shadow rounded-full p-2 transition-all duration-200 hover:bg-gray-100 focus:outline-none"
      style={{ transform: open ? "translateX(0)" : "translateX(-11rem)" }}
    >
      {open ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
    </button>
  );
}
