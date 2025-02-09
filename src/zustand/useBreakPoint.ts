import { useEffect } from "react";
import { create } from "zustand/react";

const BREAKPOINTS = {
  wideScreen: 1200,
  desktop: 1024,
  tablet: 640,
  phone: 320,
} as const;

// type Breakpoint = keyof typeof BREAKPOINTS;

interface BreakpointState {
    isPhone: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isWideScreen: boolean;
    updateBreakpoints: () => void;
  }

  export const useBreakpointStore = create<BreakpointState>((set) => ({
    isPhone: window.innerWidth < BREAKPOINTS.tablet,
    isTablet: window.innerWidth >= BREAKPOINTS.tablet && window.innerWidth < BREAKPOINTS.desktop,
    isDesktop: window.innerWidth >= BREAKPOINTS.desktop && window.innerWidth < BREAKPOINTS.wideScreen,
    isWideScreen: window.innerWidth >= BREAKPOINTS.wideScreen,
  
    updateBreakpoints: () => {
      set({
        isPhone: window.innerWidth < BREAKPOINTS.tablet,
        isTablet: window.innerWidth >= BREAKPOINTS.tablet && window.innerWidth < BREAKPOINTS.desktop,
        isDesktop: window.innerWidth >= BREAKPOINTS.desktop && window.innerWidth < BREAKPOINTS.wideScreen,
        isWideScreen: window.innerWidth >= BREAKPOINTS.wideScreen,
      });
    },
  }));

  export const useBreakpointListener = () => {
    const updateBreakpoints = useBreakpointStore((state) => state.updateBreakpoints);
  
    useEffect(() => {
      const handleResize = () => updateBreakpoints();
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [updateBreakpoints]);
  };