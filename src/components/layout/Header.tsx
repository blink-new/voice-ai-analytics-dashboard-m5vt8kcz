import { Bell, Search, Calendar, Download } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

interface HeaderProps {
  selectedClient: string
  onClientChange: (client: string) => void
}

export function Header({ selectedClient, onClientChange }: HeaderProps) {
  return (
    <header className="bg-white border-b-4 border-black p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Bauhaus Search */}
          <div className="relative">
            <div className="bauhaus-square w-12 h-12 bg-red-500 border-2 border-black flex items-center justify-center absolute left-0 top-0 z-10">
              <Search className="w-4 h-4 text-white" />
            </div>
            <Input 
              placeholder="SEARCH CONVERSATIONS..." 
              className="pl-16 w-96 h-12 border-2 border-black bg-white text-black font-medium placeholder:text-gray-500 focus:ring-0 focus:border-red-500"
            />
          </div>
          
          {/* Bauhaus Client Selector */}
          <div className="flex items-center gap-3">
            <div className="bauhaus-circle w-8 h-8 bg-blue-500 border-2 border-black"></div>
            <Select value={selectedClient} onValueChange={onClientChange}>
              <SelectTrigger className="w-48 h-12 border-2 border-black bg-white font-bold">
                <SelectValue placeholder="SELECT CLIENT" />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-black">
                <SelectItem value="all" className="font-bold">ALL CLIENTS</SelectItem>
                <SelectItem value="acme-corp" className="font-bold">ACME CORP</SelectItem>
                <SelectItem value="tech-solutions" className="font-bold">TECH SOLUTIONS</SelectItem>
                <SelectItem value="startup-inc" className="font-bold">STARTUP INC</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Bauhaus Action Buttons */}
        <div className="flex items-center gap-4">
          <Button className="bauhaus-button-yellow">
            <Calendar className="w-4 h-4 mr-2" />
            CALENDAR
          </Button>
          
          <Button className="bauhaus-button-blue">
            <Download className="w-4 h-4 mr-2" />
            EXPORT
          </Button>
          
          <div className="relative">
            <Button className="bauhaus-button-red">
              <Bell className="w-4 h-4" />
            </Button>
            <div className="absolute -top-1 -right-1 bauhaus-square w-4 h-4 bg-yellow-500 border border-black flex items-center justify-center">
              <span className="text-xs font-bold">3</span>
            </div>
          </div>
          
          {/* Bauhaus User Avatar */}
          <div className="flex items-center gap-2">
            <div className="bauhaus-square w-10 h-10 bg-black border-2 border-black flex items-center justify-center">
              <div className="bauhaus-circle w-6 h-6 bg-white"></div>
            </div>
            <div className="bauhaus-triangle-right"></div>
          </div>
        </div>
      </div>
      
      {/* Bauhaus Decorative Border */}
      <div className="flex gap-1 mt-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className={`bauhaus-square w-2 h-2 border border-black ${
              i % 4 === 0 ? 'bg-red-500' : 
              i % 4 === 1 ? 'bg-blue-500' : 
              i % 4 === 2 ? 'bg-yellow-500' : 'bg-black'
            }`}
          ></div>
        ))}
      </div>
    </header>
  )
}