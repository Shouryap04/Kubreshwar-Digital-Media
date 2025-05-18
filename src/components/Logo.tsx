
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="/lovable-uploads/60ef769a-dc12-4b69-b07a-050455b15009.png" 
        alt="Kubreshwar Media and Design Services" 
        className="h-10 md:h-12"
      />
      <span className="text-xl md:text-2xl font-heading font-bold text-brand-teal">
        <span className="text-brand">K</span>ubreshwar
      </span>
    </div>
  );
};

export default Logo;
