import { Settings as SettingsIcon, User, Bell, Shield, Palette, Database } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Switch } from '../ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Separator } from '../ui/separator'

export function Settings() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold gradient-text">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your dashboard preferences and configurations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings Navigation */}
        <div className="space-y-2">
          <Card className="neuromorphism border-0">
            <CardContent className="p-4">
              <nav className="space-y-1">
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left neuromorphism text-primary border-primary/20">
                  <User className="w-4 h-4" />
                  <span className="font-medium">Profile</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left glass-hover text-muted-foreground hover:text-foreground">
                  <Bell className="w-4 h-4" />
                  <span className="font-medium">Notifications</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left glass-hover text-muted-foreground hover:text-foreground">
                  <Shield className="w-4 h-4" />
                  <span className="font-medium">Security</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left glass-hover text-muted-foreground hover:text-foreground">
                  <Palette className="w-4 h-4" />
                  <span className="font-medium">Appearance</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left glass-hover text-muted-foreground hover:text-foreground">
                  <Database className="w-4 h-4" />
                  <span className="font-medium">Data & Export</span>
                </button>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <Card className="neuromorphism border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Profile Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <User className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="glass-hover border-white/10">
                    Change Avatar
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    JPG, PNG or GIF. Max size 2MB.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    defaultValue="John" 
                    className="neuromorphism-inset border-0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    defaultValue="Doe" 
                    className="neuromorphism-inset border-0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  defaultValue="john.doe@agency.com" 
                  className="neuromorphism-inset border-0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input 
                  id="company" 
                  defaultValue="Voice AI Agency" 
                  className="neuromorphism-inset border-0"
                />
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="neuromorphism border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Receive email alerts for important events
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator className="bg-white/10" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Call Alerts</p>
                    <p className="text-sm text-muted-foreground">
                      Get notified when calls are completed
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator className="bg-white/10" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Weekly Reports</p>
                    <p className="text-sm text-muted-foreground">
                      Receive weekly performance summaries
                    </p>
                  </div>
                  <Switch />
                </div>

                <Separator className="bg-white/10" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">System Alerts</p>
                    <p className="text-sm text-muted-foreground">
                      Important system updates and maintenance
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dashboard Preferences */}
          <Card className="neuromorphism border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-primary" />
                Dashboard Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Default Time Range</Label>
                  <Select defaultValue="7d">
                    <SelectTrigger className="neuromorphism-inset border-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="glass border-white/10">
                      <SelectItem value="1d">Last 24 hours</SelectItem>
                      <SelectItem value="7d">Last 7 days</SelectItem>
                      <SelectItem value="30d">Last 30 days</SelectItem>
                      <SelectItem value="90d">Last 90 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Refresh Interval</Label>
                  <Select defaultValue="30s">
                    <SelectTrigger className="neuromorphism-inset border-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="glass border-white/10">
                      <SelectItem value="10s">10 seconds</SelectItem>
                      <SelectItem value="30s">30 seconds</SelectItem>
                      <SelectItem value="1m">1 minute</SelectItem>
                      <SelectItem value="5m">5 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Default Client View</Label>
                  <Select defaultValue="all">
                    <SelectTrigger className="neuromorphism-inset border-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="glass border-white/10">
                      <SelectItem value="all">All Clients</SelectItem>
                      <SelectItem value="acme-corp">Acme Corp</SelectItem>
                      <SelectItem value="tech-solutions">Tech Solutions</SelectItem>
                      <SelectItem value="startup-inc">Startup Inc</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}