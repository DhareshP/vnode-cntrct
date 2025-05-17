import Image from "next/image"

export function SupportersSection() {
  return (
    <div className="py-8">
      <h2 className="text-center mb-6">
        <span className="text-[#333] font-bold text-xl">THOSE WHO </span>
        <span className="text-[#f0ad4e] font-bold text-xl">SUPPORT US</span>
      </h2>

      <div className="flex justify-center mb-4">
        <div className="w-16 h-1 bg-[#f0ad4e] relative">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#f0ad4e]"></div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
        <Image src="/supporter-1.png" alt="We Care" width={100} height={60} className="object-contain" />
        <Image src="/supporter-2.png" alt="Purple Patch" width={100} height={60} className="object-contain" />
        <Image src="/supporter-3.png" alt="Milacron Ferromatik" width={100} height={60} className="object-contain" />
        <Image src="/supporter-4.png" alt="Infosys" width={100} height={60} className="object-contain" />
        <Image src="/supporter-5.png" alt="Reliance" width={100} height={60} className="object-contain" />
        <Image src="/supporter-6.png" alt="Bajaj Capital" width={100} height={60} className="object-contain" />
      </div>
    </div>
  )
}
