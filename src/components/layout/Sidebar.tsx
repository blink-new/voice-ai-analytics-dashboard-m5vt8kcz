import { 
  BarChart3, 
  MessageSquare, 
  Settings, 
  TrendingUp,
  Home
} from 'lucide-react'
import { cn } from '../../lib/utils'

interface SidebarProps {
  currentPage: string
  onPageChange: (page: string) => void
}

const navigation = [
  { id: 'dashboard', name: 'DASHBOARD', icon: Home, shape: 'square' },
  { id: 'conversations', name: 'CONVERSATIONS', icon: MessageSquare, shape: 'circle' },
  { id: 'analytics', name: 'ANALYTICS', icon: TrendingUp, shape: 'triangle' },
  { id: 'settings', name: 'SETTINGS', icon: Settings, shape: 'square' },
]

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  return (
    <div className="w-80 h-screen bg-white border-r-4 border-black p-8">
      {/* Bauhaus Header with Geometric Elements */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="bauhaus-square w-12 h-12 bg-red-500 border-2 border-black flex items-center justify-center">
            <div className="bauhaus-circle w-6 h-6 bg-white"></div>
          </div>
          <div>
            <h1 className="text-2xl font-bold bauhaus-heading">VOICEAI</h1>
            <p className="text-sm bauhaus-text font-medium">ANALYTICS DASHBOARD</p>
          </div>
        </div>
        
        {/* Bauhaus Decorative Pattern */}
        <div className="flex gap-2 mt-4">
          <div className="bauhaus-square w-4 h-4 bg-red-500 border border-black"></div>
          <div className="bauhaus-circle w-4 h-4 bg-blue-500 border border-black"></div>
          <div className="bauhaus-square w-4 h-4 bg-yellow-500 border border-black"></div>
          <div className="bauhaus-circle w-4 h-4 bg-black border border-black"></div>
        </div>
      </div>
      
      {/* Bauhaus Navigation */}
      <nav className="space-y-3">
        {navigation.map((item, index) => {
          const Icon = item.icon
          const isActive = currentPage === item.id
          
          // Geometric shape for each nav item
          const getShapeElement = (shape: string, isActive: boolean) => {
            const baseClasses = "w-6 h-6 border-2 border-black flex items-center justify-center"
            if (shape === 'circle') {
              return (
                <div className={`${baseClasses} rounded-full ${isActive ? 'bg-red-500' : 'bg-white'}`}>
                  <Icon className={`w-3 h-3 ${isActive ? 'text-white' : 'text-black'}`} />
                </div>
              )
            } else if (shape === 'triangle') {
              return (
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <div className={`bauhaus-triangle-up ${isActive ? 'border-b-red-500' : 'border-b-black'}`}></div>
                  <Icon className={`absolute w-3 h-3 ${isActive ? 'text-red-500' : 'text-black'}`} />
                </div>
              )
            } else {
              return (
                <div className={`${baseClasses} ${isActive ? 'bg-red-500' : 'bg-white'}`}>
                  <Icon className={`w-3 h-3 ${isActive ? 'text-white' : 'text-black'}`} />
                </div>
              )
            }
          }
          
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={cn(
                "w-full flex items-center gap-4 p-4 text-left transition-all duration-200 border-2 border-black font-bold",
                isActive
                  ? "bg-black text-white"
                  : "bg-white text-black bauhaus-hover"
              )}
            >
              {getShapeElement(item.shape, isActive)}
              <span className="text-sm">{item.name}</span>
            </button>
          )
        })}
      </nav>
      
      {/* Bauhaus User Profile Section */}
      <div className="absolute bottom-8 left-8 right-8">
        <div className="bauhaus-card-blue p-6">
          <div className="flex items-center gap-4">
            <div className="bauhaus-square w-12 h-12 bg-white border-2 border-black flex items-center justify-center">
              <div className="bauhaus-circle w-6 h-6 bg-blue-500"></div>
            </div>
            <div>
              <p className="font-bold text-white">AGENCY PRO</p>
              <p className="text-sm text-blue-100 font-medium">PREMIUM PLAN</p>
            </div>
          </div>
          
          {/* Geometric Pattern */}
          <div className="flex gap-1 mt-4">
            <div className="bauhaus-square w-2 h-2 bg-white"></div>
            <div className="bauhaus-square w-2 h-2 bg-yellow-500"></div>
            <div className="bauhaus-square w-2 h-2 bg-white"></div>
            <div className="bauhaus-square w-2 h-2 bg-yellow-500"></div>
            <div className="bauhaus-square w-2 h-2 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  )
}