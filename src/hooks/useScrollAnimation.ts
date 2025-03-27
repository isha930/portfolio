
import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(section => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.reveal').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
};

export default useScrollAnimation;
