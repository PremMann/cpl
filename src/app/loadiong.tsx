import Image from "next/image";
import mainLogo from "../../public/main_logo.png";

export default function Loading() {
  return (
    <div className="min-h-screen grid place-items-center bg-white">
      <div className="flex flex-col items-center gap-6" role="status" aria-live="polite" aria-busy="true">
        <Image src={mainLogo} alt="APMF logo" width={160} priority />
        <div className="flex items-center gap-3">
          <span className="h-9 w-9 rounded-full border-4 border-red-100 border-t-[#f03135] animate-spin" />
          <p className="text-sm text-gray-600">Loading…</p>
        </div>
      </div>
    </div>
  );
}