import { ArrowLeft, Play, Pause, Download, User, Bot, Clock, Phone } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Slider } from '../ui/slider'
import { useState } from 'react'

interface ConversationDetailProps {
  conversationId: string | null
  onBack: () => void
}

const conversationData = {
  id: '1',
  customerName: 'John Smith',
  phone: '+1 (555) 123-4567',
  client: 'Acme Corp',
  duration: '5:23',
  timestamp: '2024-01-15 14:30',
  status: 'completed',
  sentiment: 'positive',
  summary: 'Customer inquiry about product pricing and features',
  tags: ['pricing', 'features', 'sales'],
  recordingUrl: '/recording.mp3',
  messages: [
    {
      id: '1',
      type: 'bot',
      content: 'Hello! Thank you for calling Acme Corp. My name is Alex, how can I help you today?',
      timestamp: '14:30:05',
      duration: 8
    },
    {
      id: '2',
      type: 'user',
      content: 'Hi Alex, I\'m interested in learning more about your premium software package. Can you tell me about the pricing?',
      timestamp: '14:30:13',
      duration: 12
    },
    {
      id: '3',
      type: 'bot',
      content: 'Absolutely! I\'d be happy to help you with information about our premium package. Our premium plan starts at $99 per month and includes advanced analytics, priority support, and unlimited users.',
      timestamp: '14:30:25',
      duration: 15
    },
    {
      id: '4',
      type: 'user',
      content: 'That sounds interesting. What specific features are included in the advanced analytics?',
      timestamp: '14:30:40',
      duration: 8
    },
    {
      id: '5',
      type: 'bot',
      content: 'Great question! The advanced analytics include real-time dashboards, custom reporting, data export capabilities, and AI-powered insights. You also get access to our API for custom integrations.',
      timestamp: '14:30:48',
      duration: 18
    },
    {
      id: '6',
      type: 'user',
      content: 'Perfect! Can you send me more detailed information via email? My email is john.smith@email.com',
      timestamp: '14:31:06',
      duration: 10
    },
    {
      id: '7',
      type: 'bot',
      content: 'Absolutely! I\'ll send you a comprehensive package overview to john.smith@email.com right after our call. Is there anything else I can help you with today?',
      timestamp: '14:31:16',
      duration: 12
    }
  ]
}

export function ConversationDetail({ conversationId, onBack }: ConversationDetailProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration] = useState(323) // 5:23 in seconds

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'neutral': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'negative': return 'bg-red-500/20 text-red-400 border-red-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  if (!conversationId) {
    return <div>Conversation not found</div>
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onBack}
          className="glass-hover"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold gradient-text">Conversation Details</h1>
          <p className="text-muted-foreground mt-1">
            {conversationData.customerName} • {conversationData.timestamp}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Audio Player */}
          <Card className="neuromorphism border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Call Recording
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="glass-hover w-12 h-12"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </Button>
                
                <div className="flex-1">
                  <Slider
                    value={[currentTime]}
                    onValueChange={(value) => setCurrentTime(value[0])}
                    max={duration}
                    step={1}
                    className="w-full"
                  />
                </div>
                
                <span className="text-sm text-muted-foreground min-w-20">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
                
                <Button variant="ghost" size="icon" className="glass-hover">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Waveform visualization placeholder */}
              <div className="h-20 glass rounded-lg flex items-center justify-center">
                <div className="flex items-end gap-1 h-12">
                  {Array.from({ length: 50 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-gradient-to-t from-primary to-secondary rounded-full opacity-60"
                      style={{ height: `${Math.random() * 100}%` }}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Message Timeline */}
          <Card className="neuromorphism border-0">
            <CardHeader>
              <CardTitle>Conversation Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {conversationData.messages.map((message, index) => (
                  <div key={message.id} className="flex gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'bot' 
                        ? 'bg-gradient-to-r from-primary to-secondary' 
                        : 'bg-white/10'
                    }`}>
                      {message.type === 'bot' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">
                          {message.type === 'bot' ? 'AI Agent' : conversationData.customerName}
                        </span>
                        <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                        <span className="text-xs text-muted-foreground">({message.duration}s)</span>
                      </div>
                      
                      <div className="glass p-3 rounded-lg">
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Customer Info */}
          <Card className="neuromorphism border-0">
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">{conversationData.customerName}</p>
                  <p className="text-sm text-muted-foreground">{conversationData.phone}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Client:</span>
                  <span className="text-sm font-medium">{conversationData.client}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Duration:</span>
                  <span className="text-sm font-medium">{conversationData.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                    {conversationData.status}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Sentiment:</span>
                  <Badge className={getSentimentColor(conversationData.sentiment)}>
                    {conversationData.sentiment}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Summary */}
          <Card className="neuromorphism border-0">
            <CardHeader>
              <CardTitle>Call Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">{conversationData.summary}</p>
              
              <div className="space-y-2">
                <p className="text-sm font-medium">Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {conversationData.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card className="neuromorphism border-0">
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full glass-hover" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Transcript
              </Button>
              <Button className="w-full glass-hover" variant="outline">
                <Phone className="w-4 h-4 mr-2" />
                Schedule Callback
              </Button>
              <Button className="w-full glass-hover" variant="outline">
                <Clock className="w-4 h-4 mr-2" />
                Add Follow-up
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}