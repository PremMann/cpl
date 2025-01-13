import { ComboboxDemo } from '@/components/ui/combobox';
// import prisma from '@/lib/db';

// async function getUserData() {
//   return await prisma.user.findMany();
// }

export default async function Page() {
  // const users = await getUserData();
  return (
    <div className="container mx-auto p-4">
      <div className="flex w-full bg-black p-2 rounded">
        <div className="w-1 h-6 bg-white rounded-full"></div>
        <span className="text-l font-bold pl-2 text-center uppercase border-white text-white">
          Standing
        </span>
      </div>
      <div className="py-4">
        <ComboboxDemo />
      </div>
      <span> Table removed for deploy</span>
    </div>
  );
}
