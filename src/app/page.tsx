import HomeLanding from "@/components/homeLanding";
import LoanCalculator from "@/components/loancalculation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white py-1 pb-5">
      <HomeLanding />
      {/* <div className="mt-14 px-4">
        <LoanCalculator />
      </div> */}
    </div>
  );
}