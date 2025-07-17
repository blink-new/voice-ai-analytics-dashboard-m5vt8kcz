import { Phone, Clock, TrendingUp, Heart, Users, MessageCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'

interface DashboardProps {
  selectedClient: string
}

const kpiData = [
  { title: 'Total Calls', value: '2,847', change: '+12.5%', icon: Phone, color: 'red' },
  { title: 'Avg Duration', value: '4:32', change: '+8.2%', icon: Clock, color: 'blue' },
  { title: 'Success Rate', value: '94.2%', change: '+2.1%', icon: TrendingUp, color: 'yellow' },
  { title: 'Satisfaction', value: '4.8/5', change: '+0.3', icon: Heart, color: 'red' },
]

const chartData = [
  { name: 'Mon', calls: 420, duration: 280 },
  { name: 'Tue', calls: 380, duration: 320 },
  { name: 'Wed', calls: 520, duration: 290 },
  { name: 'Thu', calls: 460, duration: 310 },
  { name: 'Fri', calls: 590, duration: 340 },
  { name: 'Sat', calls: 320, duration: 250 },
  { name: 'Sun', calls: 280, duration: 220 },
]

const sentimentData = [
  { name: 'Positive', value: 68, color: '#ef4444' }, // Red
  { name: 'Neutral', value: 24, color: '#eab308' }, // Yellow
  { name: 'Negative', value: 8, color: '#3b82f6' }, // Blue
]

const recentConversations = [
  { id: '1', client: 'Acme Corp', duration: '5:23', status: 'completed', sentiment: 'positive' },
  { id: '2', client: 'Tech Solutions', duration: '3:45', status: 'completed', sentiment: 'neutral' },
  { id: '3', client: 'Startup Inc', duration: '7:12', status: 'completed', sentiment: 'positive' },
  { id: '4', client: 'Acme Corp', duration: '2:18', status: 'missed', sentiment: 'neutral' },
]

export function Dashboard({ selectedClient }: DashboardProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Bauhaus Header with Geometric Elements */}
      <div className="bauhaus-grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold bauhaus-heading mb-2">DASHBOARD OVERVIEW</h1>
          <p className="bauhaus-text text-lg">
            {selectedClient === 'all' ? 'ALL CLIENTS' : selectedClient.toUpperCase()} • LAST 7 DAYS
          </p>
        </div>
        <div className="flex items-center justify-end">
          <div className="bauhaus-card-red p-4 flex items-center gap-3">
            <div className="bauhaus-circle w-4 h-4 bg-white"></div>
            <span className="font-bold text-white">LIVE DATA</span>
          </div>
        </div>
      </div>

      {/* Bauhaus KPI Grid - Geometric Cards */}
      <div className="bauhaus-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon
          const cardClass = kpi.color === 'red' ? 'bauhaus-card-red' : 
                           kpi.color === 'blue' ? 'bauhaus-card-blue' : 
                           kpi.color === 'yellow' ? 'bauhaus-card-yellow' : 'bauhaus-card'
          
          return (
            <div key={index} className={`${cardClass} bauhaus-hover`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <p className="text-sm font-medium opacity-80 mb-1">{kpi.title}</p>
                  <p className="text-3xl font-bold mb-2">{kpi.value}</p>
                  <p className="text-sm font-medium">
                    {kpi.change} FROM LAST WEEK
                  </p>
                </div>
                <div className="bauhaus-square w-12 h-12 flex items-center justify-center bg-black">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Bauhaus Charts Grid */}
      <div className="bauhaus-grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Call Volume Chart */}
        <div className="bauhaus-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="bauhaus-square w-8 h-8 bg-red-500 flex items-center justify-center">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-bold bauhaus-heading">CALL VOLUME</h2>
          </div>
          <div className="border-2 border-black p-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="0" stroke="#000000" strokeWidth={1} />
                <XAxis 
                  dataKey="name" 
                  stroke="#000000" 
                  fontSize={12}
                  fontWeight="bold"
                  axisLine={{ stroke: '#000000', strokeWidth: 2 }}
                  tickLine={{ stroke: '#000000', strokeWidth: 2 }}
                />
                <YAxis 
                  stroke="#000000" 
                  fontSize={12}
                  fontWeight="bold"
                  axisLine={{ stroke: '#000000', strokeWidth: 2 }}
                  tickLine={{ stroke: '#000000', strokeWidth: 2 }}
                />
                <Line 
                  type="linear" 
                  dataKey="calls" 
                  stroke="#ef4444" 
                  strokeWidth={4}
                  dot={{ fill: '#ef4444', strokeWidth: 2, r: 6, stroke: '#000000' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sentiment Analysis */}
        <div className="bauhaus-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="bauhaus-circle w-8 h-8 bg-blue-500 flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-bold bauhaus-heading">SENTIMENT ANALYSIS</h2>
          </div>
          <div className="border-2 border-black p-4">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={100}
                  paddingAngle={0}
                  dataKey="value"
                  stroke="#000000"
                  strokeWidth={2}
                >
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="bauhaus-grid grid-cols-3 gap-4 mt-6">
              {sentimentData.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bauhaus-square w-6 h-6 mx-auto mb-2 border-2 border-black" style={{ backgroundColor: item.color }}></div>
                  <p className="text-sm font-bold">{item.name.toUpperCase()}</p>
                  <p className="text-lg font-bold">{item.value}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Conversations - Bauhaus Table */}
      <div className="bauhaus-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="bauhaus-triangle-right"></div>
          <h2 className="text-xl font-bold bauhaus-heading">RECENT CONVERSATIONS</h2>
        </div>
        <div className="border-2 border-black">
          <div className="bauhaus-grid grid-cols-4 gap-0 bg-black text-white p-4 font-bold text-sm">
            <div>CLIENT</div>
            <div>DURATION</div>
            <div>SENTIMENT</div>
            <div>STATUS</div>
          </div>
          {recentConversations.map((conversation, index) => (
            <div key={conversation.id} className={`bauhaus-grid grid-cols-4 gap-0 p-4 border-b-2 border-black bauhaus-hover ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
              <div className="flex items-center gap-3">
                <div className="bauhaus-square w-8 h-8 bg-black flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">{conversation.client}</span>
              </div>
              <div className="font-bold">{conversation.duration}</div>
              <div>
                <span className={`px-3 py-1 font-bold text-xs border-2 border-black ${
                  conversation.sentiment === 'positive' ? 'bg-red-500 text-white' :
                  conversation.sentiment === 'neutral' ? 'bg-yellow-500 text-black' :
                  'bg-blue-500 text-white'
                }`}>
                  {conversation.sentiment.toUpperCase()}
                </span>
              </div>
              <div>
                <span className={`px-3 py-1 font-bold text-xs border-2 border-black ${
                  conversation.status === 'completed' ? 'bg-black text-white' :
                  'bg-gray-300 text-black'
                }`}>
                  {conversation.status.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}