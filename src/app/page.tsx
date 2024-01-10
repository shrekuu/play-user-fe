import Image from "next/image";

export default function Home() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <div className="flex justify-center">
        <Image src="/images/logo.png" width={120} height={120} alt="Logo" />
      </div>
      <div className="mt-10"></div>
      <h1 className="text-2xl font-bold text-center">User Fe Page</h1>
    </div>
  );
}
