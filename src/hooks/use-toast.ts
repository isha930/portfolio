
import { useState, useEffect } from "react";

export type ToastProps = {
  id: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "destructive";
};

export type ToastActionElement = React.ReactElement<any>;

const TOAST_TIMEOUT = 5000;

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  // Clean up toasts when component unmounts
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    toasts.forEach(toast => {
      const timer = setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== toast.id));
      }, TOAST_TIMEOUT);
      
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [toasts]);

  function toast(props: Omit<ToastProps, "id">) {
    const id = Math.random().toString(36).slice(2);
    const newToast = { id, ...props };
    
    setToasts(prev => [...prev, newToast]);
    
    return id;
  }

  return {
    toasts,
    toast
  };
}

// Export a singleton version of useToast for import by name
export const toast = function(props: Omit<ToastProps, "id">) {
  // This is just a placeholder for direct imports
  // The actual implementation is handled by the useToast hook
  console.log("Toast called outside of component context");
  
  // Implementation would typically dispatch an event to a global toast handler
  const id = Math.random().toString(36).slice(2);
  return id;
};

export default useToast;
