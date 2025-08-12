import { Style } from "node:util";

export const GlassDiv = ({ children,props}: { children: React.ReactNode, props:string}) => {
  return (
    <div className={`relative 
        ${props}
  isolate
  p-8 
  rounded-2xl
  backdrop-filter 
  backdrop-blur-xl 
  bg-white/10
  border 
  border-white/10
  shadow-lg
`}>
      {children}
    </div>
  );
};

export const GlowDiv = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="
    relative p-6 rounded-xl
  before:absolute
  before:-inset-4
  before:bg-gradient-to-r
  before:from-blue-500/40
  before:to-purple-500/40
  before:blur-xl
  before:-z-10
  before:rounded-xl

">
      {children}
    </div>
  );
};
