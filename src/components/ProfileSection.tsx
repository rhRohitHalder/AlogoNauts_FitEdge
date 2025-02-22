import React from 'react';
import { Settings, Award, Bell, Shield, Heart } from 'lucide-react';

const ProfileSection = () => {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-purple-500"
          />
          <div>
            <h2 className="text-2xl font-bold">User</h2>
            <p className="text-gray-400">Fitness Enthusiast</p>
            <div className="flex items-center mt-2">
              <Award className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-sm">Premium Member</span>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4">Achievements</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <h4 className="font-medium">30 Day Streak</h4>
            <p className="text-sm text-gray-400">Completed</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <Heart className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <h4 className="font-medium">Fitness Warrior</h4>
            <p className="text-sm text-gray-400">Level 5</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <h4 className="font-medium">Goal Crusher</h4>
            <p className="text-sm text-gray-400">10 Goals Met</p>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4">Settings</h3>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-between bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
            <div className="flex items-center">
              <Bell className="w-5 h-5 mr-3" />
              <span>Notifications</span>
            </div>
            <div className="w-12 h-6 bg-purple-500 rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </button>
          
          <button className="w-full flex items-center justify-between bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
            <div className="flex items-center">
              <Settings className="w-5 h-5 mr-3" />
              <span>Account Settings</span>
            </div>
            <div className="text-gray-400">
              <span>→</span>
            </div>
          </button>

          <button className="w-full flex items-center justify-between bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-3" />
              <span>Privacy</span>
            </div>
            <div className="text-gray-400">
              <span>→</span>
            </div>
          </button>
        </div>
      </div>

      {/* Goals */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4">Fitness Goals</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span>Weight Goal</span>
              <span className="text-purple-400">75kg / 70kg</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span>Weekly Workouts</span>
              <span className="text-purple-400">3 / 5</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;