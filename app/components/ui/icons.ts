import {
  Compass,
  PenTool,
  Cpu,
  Rocket,
  Users,
  Sparkles,
  BadgeCheck,
  Layers,
  Route,
  type LucideIcon,
} from 'lucide-react';

const MAP: Record<string, LucideIcon> = {
  compass: Compass,
  'pen-tool': PenTool,
  cpu: Cpu,
  rocket: Rocket,
  users: Users,
  sparkles: Sparkles,
  'badge-check': BadgeCheck,
  layers: Layers,
  route: Route,
};

/** Resolves a data icon name to a Lucide component (falls back to Sparkles). */
export function iconFor(name: string): LucideIcon {
  return MAP[name] ?? Sparkles;
}
