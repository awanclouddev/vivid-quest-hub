import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import { 
  BarChart3, 
  ShoppingBag, 
  Menu, 
  Star, 
  Settings, 
  CreditCard, 
  Users, 
  HelpCircle 
} from "lucide-react";

const menuItems = [
  { icon: BarChart3, label: "Dashboard", href: "/" },
  { icon: ShoppingBag, label: "Food Order", href: "#" },
  { icon: Menu, label: "Manage Menu", href: "/manage-menu" },
  { icon: Star, label: "Customer Review", href: "#" },
];

const otherItems = [
  { icon: Settings, label: "Settings" },
  { icon: CreditCard, label: "Payment" },
  { icon: Users, label: "Accounts" },
  { icon: HelpCircle, label: "Help" },
];

export const Sidebar = () => {
  return (
    <div className="w-64 bg-card border-r border-border h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">G</span>
          </div>
          <span className="font-bold text-xl text-foreground">GOODFOOD</span>
        </div>
      </div>

      {/* Menu Section */}
      <div className="flex-1 p-4">
        <div className="mb-6">
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
            MENU
          </h3>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Others Section */}
        <div>
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
            OTHERS
          </h3>
          <nav className="space-y-1">
            {otherItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
