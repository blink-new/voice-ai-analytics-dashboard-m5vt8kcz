import { TrendingUp, Clock, Users, Target, Calendar, Download } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from 'recharts'
import { useState } from 'react'

interface AnalyticsProps {
  selectedClient: string
}

const performanceData = [
  { date: '2024-01-01', calls: 45, success: 42, avgDuration: 4.2, satisfaction: 4.6 },
  { date: '2024-01-02', calls: 52, success: 48, avgDuration: 4.8, satisfaction: 4.7 },
  { date: '2024-01-03', calls: 38, success: 35, avgDuration: 3.9, satisfaction: 4.5 },
  { date: '2024-01-04', calls: 61, success: 58, avgDuration: 5.1, satisfaction: 4.8 },
  { date: '2024-01-05', calls: 47, success: 44, avgDuration: 4.3, satisfaction: 4.6 },
  { date: '2024-01-06', calls: 55, success: 52, avgDuration: 4.7, satisfaction: 4.9 },
  { date: '2024-01-07', calls: 43, success: 40, avgDuration: 4.1, satisfaction: 4.4 },
]

const hourlyData = [
  { hour: '9AM', calls: 12, success: 11 },
  { hour: '10AM', calls: 18, success: 17 },
  { hour: '11AM', calls: 25, success: 23 },
  { hour: '12PM', calls: 22, success: 20 },
  { hour: '1PM', calls: 15, success: 14 },
  { hour: '2PM', calls: 28, success: 26 },
  { hour: '3PM', calls: 32, success: 30 },
  { hour: '4PM', calls: 26, success: 24 },
  { hour: '5PM', calls: 19, success: 18 },
]

const topicsData = [
  { topic: 'Pricing', count: 145, sentiment: 0.8 },
  { topic: 'Features', count: 132, sentiment: 0.7 },
  { topic: 'Support', count: 98, sentiment: 0.6 },
  { topic: 'Demo', count: 87, sentiment: 0.9 },
  { topic: 'Technical', count: 76, sentiment: 0.5 },
]

export function Analytics({ selectedClient }: AnalyticsProps) {
  const [timeRange, setTimeRange] = useState('7d')
  const [metric, setMetric] = useState('calls')

  const getMetricData = () => {
    switch (metric) {
      case 'calls':
        return performanceData.map(d => ({ ...d, value: d.calls }))
      case 'success':
        return performanceData.map(d => ({ ...d, value: d.success }))
      case 'duration':
        return performanceData.map(d => ({ ...d, value: d.avgDuration }))
      case 'satisfaction':
        return performanceData.map(d => ({ ...d, value: d.satisfaction }))
      default:
        return performanceData.map(d => ({ ...d, value: d.calls }))
    }
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Analytics</h1>
          <p className="text-muted-foreground mt-1">
            Performance insights and trends
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32 neuromorphism-inset border-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="glass border-white/10">
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" className="glass-hover border-white/10">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="neuromorphism border-0 hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Calls</p>
                <p className="text-2xl font-bold mt-1">2,847</p>
                <p className="text-sm text-green-400 mt-1">+12.5% vs last period</p>
              </div>
              <div className="p-3 rounded-lg glass text-blue-400">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="neuromorphism border-0 hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
                <p className="text-2xl font-bold mt-1">94.2%</p>
                <p className="text-sm text-green-400 mt-1">+2.1% vs last period</p>
              </div>
              <div className="p-3 rounded-lg glass text-green-400">
                <Target className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="neuromorphism border-0 hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Duration</p>
                <p className="text-2xl font-bold mt-1">4:32</p>
                <p className="text-sm text-green-400 mt-1">+8.2% vs last period</p>
              </div>
              <div className="p-3 rounded-lg glass text-purple-400">
                <Clock className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="neuromorphism border-0 hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Users</p>
                <p className="text-2xl font-bold mt-1">1,234</p>
                <p className="text-sm text-green-400 mt-1">+5.7% vs last period</p>
              </div>
              <div className="p-3 rounded-lg glass text-pink-400">
                <Users className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Trend */}
        <Card className="neuromorphism border-0">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Performance Trend
              </CardTitle>
              <Select value={metric} onValueChange={setMetric}>
                <SelectTrigger className="w-32 neuromorphism-inset border-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="glass border-white/10">
                  <SelectItem value="calls">Calls</SelectItem>
                  <SelectItem value="success">Success</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                  <SelectItem value="satisfaction">Satisfaction</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={getMetricData()}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis 
                  dataKey="date" 
                  stroke="rgba(255,255,255,0.5)"
                  tickFormatter={formatDate}
                />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#6366f1" 
                  fill="url(#gradient)"
                  strokeWidth={2}
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Hourly Distribution */}
        <Card className="neuromorphism border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Hourly Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={hourlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="hour" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Bar dataKey="calls" fill="#6366f1" radius={[4, 4, 0, 0]} />
                <Bar dataKey="success" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Topics */}
      <Card className="neuromorphism border-0">
        <CardHeader>
          <CardTitle>Top Conversation Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topicsData.map((topic, index) => (
              <div key={index} className="flex items-center justify-between p-4 glass rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium">{topic.topic}</p>
                    <p className="text-sm text-muted-foreground">{topic.count} conversations</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                      style={{ width: `${topic.sentiment * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium min-w-12">
                    {Math.round(topic.sentiment * 100)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}