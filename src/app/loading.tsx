import Image from "next/image";
import mainLogo from "../../public/main_logo.png";

// Global loading UI automatically used by Next.js (app router) for route segments
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center gap-8" role="status" aria-live="polite" aria-busy="true">
      <div className="flex flex-col items-center gap-6 animate-in fade-in duration-300">
        <Image src={mainLogo} alt="APMF logo" width={180} priority className="drop-shadow" />
        <div className="flex items-center gap-4">
          <span className="h-10 w-10 rounded-full border-4 border-red-200 border-t-[#f03135] animate-spin" />
          <p className="text-sm font-medium text-gray-600 tracking-wide">Loading...</p>
        </div>
      </div>
    </div>
  );
}
