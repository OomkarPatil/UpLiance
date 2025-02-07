import { Layout, Home, Users, FileEdit } from 'lucide-react'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center"> 
                  <Link to="/" className="my-4 flex items-center">
                    <IoIosArrowBack className="mr-2" />
                  </Link>               
                <Layout className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Modern Dashboard</span>                
              </div>              
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  )
}