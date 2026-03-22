import { useState } from "react";
import { Info } from "lucide-react";

export default function Tooltip({ aciklama, children }) {
  const [goster, setGoster] = useState(false);

  return (
    <span className="relative inline-flex items-center gap-1">
      {children}
      <button
        type="button"
        onMouseEnter={() => setGoster(true)}
        onMouseLeave={() => setGoster(false)}
        onClick={() => setGoster((v) => !v)}
        className="text-gray-400 hover:text-orange-500 transition-colors"
        aria-label="Bilgi"
      >
        <Info className="w-4 h-4" />
      </button>
      {goster && (
        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 bg-gray-900 text-white text-xs rounded-lg p-3 shadow-xl z-50 leading-relaxed">
          {aciklama}
          <span className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900" />
        </span>
      )}
    </span>
  );
}
