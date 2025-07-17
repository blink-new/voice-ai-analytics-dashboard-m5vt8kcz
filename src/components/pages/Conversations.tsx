import { useState } from 'react'
import { Search, Filter, Play, Clock, User, Phone } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

interface ConversationsProps {
  onConversationSelect: (id: string) => void
  selectedClient: string
}

const conversations = [
  {
    id: '1',
    client: 'Acme Corp',
    customerName: 'John Smith',
    phone: '+1 (555) 123-4567',
    duration: '5:23',
    timestamp: '2024-01-15 14:30',
    status: 'completed',
    sentiment: 'positive',
    summary: 'Customer inquiry about product pricing and features',
    tags: ['pricing', 'features', 'sales']
  },
  {
    id: '2',
    client: 'Tech Solutions',
    customerName: 'Sarah Johnson',
    phone: '+1 (555) 987-6543',
    duration: '3:45',
    timestamp: '2024-01-15 13:15',
    status: 'completed',
    sentiment: 'neutral',
    summary: 'Technical support request for software installation',
    tags: ['support', 'technical', 'installation']
  },
  {
    id: '3',
    client: 'Startup Inc',
    customerName: 'Mike Davis',
    phone: '+1 (555) 456-7890',
    duration: '7:12',
    timestamp: '2024-01-15 12:00',
    status: 'completed',
    sentiment: 'positive',
    summary: 'Demo request and follow-up questions',
    tags: ['demo', 'sales', 'follow-up']
  },
  {
    id: '4',
    client: 'Acme Corp',
    customerName: 'Lisa Wilson',
    phone: '+1 (555) 321-0987',
    duration: '2:18',
    timestamp: '2024-01-15 11:45',
    status: 'missed',
    sentiment: 'neutral',
    summary: 'Missed call - callback requested',
    tags: ['missed', 'callback']
  },
  {
    id: '5',
    client: 'Tech Solutions',
    customerName: 'Robert Brown',
    phone: '+1 (555) 654-3210',
    duration: '6:30',
    timestamp: '2024-01-15 10:20',
    status: 'completed',
    sentiment: 'positive',
    summary: 'Product consultation and recommendation',
    tags: ['consultation', 'recommendation', 'sales']
  }
]

export function Conversations({ onConversationSelect, selectedClient }: ConversationsProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [sentimentFilter, setSentimentFilter] = useState('all')

  const filteredConversations = conversations.filter(conv => {
    const matchesSearch = conv.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         conv.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         conv.phone.includes(searchTerm)
    const matchesClient = selectedClient === 'all' || conv.client === selectedClient
    const matchesStatus = statusFilter === 'all' || conv.status === statusFilter
    const matchesSentiment = sentimentFilter === 'all' || conv.sentiment === sentimentFilter
    
    return matchesSearch && matchesClient && matchesStatus && matchesSentiment
  })

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'bg-red-500 text-white border-2 border-black'
      case 'neutral': return 'bg-yellow-500 text-black border-2 border-black'
      case 'negative': return 'bg-blue-500 text-white border-2 border-black'
      default: return 'bg-gray-300 text-black border-2 border-black'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-black text-white border-2 border-black'
      case 'missed': return 'bg-red-500 text-white border-2 border-black'
      case 'ongoing': return 'bg-blue-500 text-white border-2 border-black'
      default: return 'bg-gray-300 text-black border-2 border-black'
    }
  }

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Bauhaus Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bauhaus-square w-12 h-12 bg-red-500 border-2 border-black flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bauhaus-heading">CONVERSATIONS</h1>
            <p className="bauhaus-text text-lg font-medium">
              {filteredConversations.length} CONVERSATIONS FOUND
            </p>
          </div>
        </div>
        
        {/* Geometric Pattern */}
        <div className="flex gap-2">
          <div className="bauhaus-circle w-8 h-8 bg-blue-500 border-2 border-black"></div>
          <div className="bauhaus-square w-8 h-8 bg-yellow-500 border-2 border-black"></div>
          <div className="bauhaus-triangle-right"></div>
        </div>
      </div>

      {/* Bauhaus Filters */}
      <div className="bauhaus-card">
        <div className="bauhaus-grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="bauhaus-square w-12 h-12 bg-black border-2 border-black flex items-center justify-center absolute left-0 top-0 z-10">
                <Search className="w-4 h-4 text-white" />
              </div>
              <Input
                placeholder="SEARCH BY NAME, PHONE, OR SUMMARY..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-16 h-12 border-2 border-black bg-white text-black font-medium placeholder:text-gray-500 focus:ring-0 focus:border-red-500"
              />
            </div>
          </div>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="h-12 border-2 border-black bg-white font-bold">
              <SelectValue placeholder="STATUS" />
            </SelectTrigger>
            <SelectContent className="bg-white border-2 border-black">
              <SelectItem value="all" className="font-bold">ALL STATUS</SelectItem>
              <SelectItem value="completed" className="font-bold">COMPLETED</SelectItem>
              <SelectItem value="missed" className="font-bold">MISSED</SelectItem>
              <SelectItem value="ongoing" className="font-bold">ONGOING</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sentimentFilter} onValueChange={setSentimentFilter}>
            <SelectTrigger className="h-12 border-2 border-black bg-white font-bold">
              <SelectValue placeholder="SENTIMENT" />
            </SelectTrigger>
            <SelectContent className="bg-white border-2 border-black">
              <SelectItem value="all" className="font-bold">ALL SENTIMENT</SelectItem>
              <SelectItem value="positive" className="font-bold">POSITIVE</SelectItem>
              <SelectItem value="neutral" className="font-bold">NEUTRAL</SelectItem>
              <SelectItem value="negative" className="font-bold">NEGATIVE</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Bauhaus Conversations List */}
      <div className="space-y-4">
        {filteredConversations.map((conversation, index) => (
          <div 
            key={conversation.id} 
            className="bauhaus-card bauhaus-hover cursor-pointer"
            onClick={() => onConversationSelect(conversation.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-6 flex-1">
                <div className="bauhaus-square w-16 h-16 bg-black border-2 border-black flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-xl font-bold bauhaus-heading">{conversation.customerName.toUpperCase()}</h3>
                    <span className={`px-3 py-1 text-xs font-bold ${getSentimentColor(conversation.sentiment)}`}>
                      {conversation.sentiment.toUpperCase()}
                    </span>
                    <span className={`px-3 py-1 text-xs font-bold ${getStatusColor(conversation.status)}`}>
                      {conversation.status.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="bauhaus-grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {conversation.phone}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {conversation.duration}
                    </div>
                    <div>{conversation.timestamp}</div>
                    <div className="font-bold text-red-500">{conversation.client.toUpperCase()}</div>
                  </div>
                  
                  <p className="bauhaus-text mb-4 font-medium">{conversation.summary}</p>
                  
                  <div className="flex items-center gap-2">
                    {conversation.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-200 border-2 border-black text-xs font-bold"
                      >
                        {tag.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Button 
                  className="bauhaus-button-blue"
                  onClick={(e) => {
                    e.stopPropagation()
                    // Handle play recording
                  }}
                >
                  <Play className="w-4 h-4 mr-2" />
                  PLAY
                </Button>
                <div className="bauhaus-triangle-right"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredConversations.length === 0 && (
        <div className="bauhaus-card text-center py-16">
          <div className="bauhaus-circle w-24 h-24 bg-gray-300 border-2 border-black flex items-center justify-center mx-auto mb-6">
            <Search className="w-12 h-12 text-black" />
          </div>
          <h3 className="text-2xl font-bold bauhaus-heading mb-4">NO CONVERSATIONS FOUND</h3>
          <p className="bauhaus-text text-lg">TRY ADJUSTING YOUR SEARCH OR FILTER CRITERIA</p>
        </div>
      )}
    </div>
  )
}