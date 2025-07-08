import React from 'react';
import { TrendingUp, Users, Briefcase, Award, ArrowUpRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Services',
      value: '24',
      change: '+12%',
      changeType: 'positive',
      icon: Award,
    },
    {
      title: 'Portfolio Items',
      value: '156',
      change: '+8%',
      changeType: 'positive',
      icon: Briefcase,
    },
    {
      title: 'Client Reviews',
      value: '89',
      change: '+23%',
      changeType: 'positive',
      icon: Users,
    },
    {
      title: 'Revenue',
      value: '$12,456',
      change: '+15%',
      changeType: 'positive',
      icon: TrendingUp,
    },
  ];

  const recentActivities = [
    { id: 1, action: 'New portfolio item added', time: '2 hours ago', type: 'portfolio' },
    { id: 2, action: 'Service updated: Web Development', time: '4 hours ago', type: 'service' },
    { id: 3, action: 'About Us section modified', time: '1 day ago', type: 'about' },
    { id: 4, action: 'New client inquiry received', time: '2 days ago', type: 'inquiry' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Admin!</h1>
        <p className="opacity-90">Here's what's happening with your business today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="flex items-center text-emerald-600 text-sm font-medium">
                  {stat.change}
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'portfolio' ? 'bg-purple-500' :
                  activity.type === 'service' ? 'bg-blue-500' :
                  activity.type === 'about' ? 'bg-emerald-500' : 'bg-orange-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-gray-900 font-medium">{activity.action}</p>
                  <p className="text-gray-500 text-sm">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;