'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    emailjs: any;
  }
}

export default function EmailJSInit() {
  useEffect(() => {
    // Load EmailJS script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    
    script.onload = () => {
      // Initialize EmailJS with your public key
      window.emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
