import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FacilitiesSection() {
  return (
    <div className="py-8">
      <h2 className="text-center mb-6">
        <span className="text-[#333] font-bold text-xl">PROVIDING </span>
        <span className="text-[#f0ad4e] font-bold text-xl">FACILITIES</span>
      </h2>

      <div className="flex justify-center mb-4">
        <div className="w-16 h-1 bg-[#f0ad4e] relative">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#f0ad4e]"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        <div className="border border-gray-300 p-4 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full border-2 border-[#004d00] flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#004d00" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
          </div>
          <h3 className="text-[#004d00] font-medium mb-2">VSK Stakeholder Login</h3>
          <Link href="/vsk-login">
            <Button className="bg-[#004d00] hover:bg-[#003300] text-white mt-auto">Visit</Button>
          </Link>
        </div>

        <div className="border border-gray-300 p-4 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full border-2 border-[#004d00] flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#004d00" viewBox="0 0 16 16">
              <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
            </svg>
          </div>
          <h3 className="text-[#004d00] font-medium mb-2">Register your Grievance/Query</h3>
          <Link href="/grievance">
            <Button className="bg-[#004d00] hover:bg-[#003300] text-white mt-auto">Visit</Button>
          </Link>
        </div>

        <div className="border border-gray-300 p-4 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full border-2 border-[#004d00] flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#004d00" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
            </svg>
          </div>
          <h3 className="text-[#004d00] font-medium mb-2">Ask a Question</h3>
          <Link href="/ask">
            <Button className="bg-[#004d00] hover:bg-[#003300] text-white mt-auto">Visit</Button>
          </Link>
        </div>

        <div className="border border-gray-300 p-4 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full border-2 border-[#004d00] flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#004d00" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg>
          </div>
          <h3 className="text-[#004d00] font-medium mb-2">Downloads</h3>
          <Link href="/downloads">
            <Button className="bg-[#004d00] hover:bg-[#003300] text-white mt-auto">Visit</Button>
          </Link>
        </div>

        <div className="border border-gray-300 p-4 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full border-2 border-[#004d00] flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#004d00" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
          </div>
          <h3 className="text-[#004d00] font-medium mb-2">Talk To Us</h3>
          <Link href="/talk-to-us">
            <Button className="bg-[#004d00] hover:bg-[#003300] text-white mt-auto">Visit</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
