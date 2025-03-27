
import { useState, useEffect, useCallback } from "react";

type Toast = {
  id: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "destructive";
};

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const handleRemoveToast = (id: string) => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    return () => {
      toasts.forEach(toast => {
        const timer = setTimeout(() => {
          handleRemoveToast(toast.id);
        }, 5000);

        return () => clearTimeout(timer);
      });
    };
  }, [toasts]);

  const toast = useCallback(
    ({ title, description, action, variant = "default" }: Omit<Toast, "id">) => {
      const id = Math.random().toString(36).slice(2);
      const newToast = { id, title, description, action, variant };
      
      setToasts(prev => [...prev, newToast]);
      
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, 5000);
      
      return id;
    },
    []
  );

  return {
    toasts,
    toast,
  };
}

export { useToast as default, useToast as toast };
