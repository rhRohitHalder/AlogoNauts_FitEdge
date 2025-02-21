import React from 'react';
import { Trophy, Medal, Star } from 'lucide-react';

const LeaderboardSection = () => {
  const leaderboard = [
    {
      rank: 1,
      name: "Sarah Johnson",
      points: 2840,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      rank: 2,
      name: "Michael Chen",
      points: 2720,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      rank: 3,
      name: "Emily Davis",
      points: 2650,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Global Leaderboard</h2>
          <Trophy className="w-6 h-6 text-yellow-400" />
        </div>

        <div className="space-y-4">
          {leaderboard.map((user, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white/5 rounded-xl p-4"
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  {user.rank === 1 && <Trophy className="w-6 h-6 text-yellow-400" />}
                  {user.rank === 2 && <Medal className="w-6 h-6 text-gray-400" />}
                  {user.rank === 3 && <Medal className="w-6 h-6 text-orange-400" />}
                </div>
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-medium">{user.name}</h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="w-4 h-4 mr-1" />
                    {user.points} points
                  </div>
                </div>
              </div>
              <div className="text-2xl font-bold">#{user.rank}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Challenges */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Weekly Challenges</h2>
        <div className="space-y-4">
          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">10K Steps Challenge</h3>
              <span className="text-purple-400">3 days left</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
              <span>7,000 / 10,000 steps</span>
              <span>500 coins reward</span>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">Perfect Week</h3>
              <span className="text-purple-400">5 days left</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '40%' }}></div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
              <span>2/5 workouts completed</span>
              <span>1000 coins reward</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardSection;