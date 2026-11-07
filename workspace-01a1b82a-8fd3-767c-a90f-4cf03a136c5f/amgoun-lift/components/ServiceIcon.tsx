import {
  ArrowUpDown,
  FileCheck2,
  PhoneCall,
  Settings2,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/lib/site";

const icons: Record<Service["icon"], LucideIcon> = {
  maintenance: Settings2,
  contract: FileCheck2,
  emergency: PhoneCall,
  repair: Wrench,
  installation: ArrowUpDown,
};

export function ServiceIcon({ name, size = 26 }: { name: Service["icon"]; size?: number }) {
  const Icon = icons[name];
  return <Icon size={size} strokeWidth={1.65} aria-hidden="true" />;
}
