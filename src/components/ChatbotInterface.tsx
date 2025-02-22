import React, { useState } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const ChatbotInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: 'Hi! I\'m your AI fitness coach. I can help you with workout plans, nutrition advice, and answer any fitness-related questions. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const simulateResponse = async (userMessage: string) => {
    // Simulate AI response based on user input
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    let response = '';
    // if (userMessage.toLowerCase().includes('workout')) {
    //   response = "Based on your fitness goals and current level, I recommend starting with a 30-minute HIIT workout. Would you like me to create a personalized workout plan for you?";
    // } else if (userMessage.toLowerCase().includes('diet') || userMessage.toLowerCase().includes('nutrition')) {
    //   response = "To support your fitness goals, focus on lean proteins, complex carbohydrates, and healthy fats. Would you like a detailed meal plan?";
    // } else if (userMessage.toLowerCase().includes('goal')) {
    //   response = "That's great! Let's break down your goals and create a realistic timeline. What specific fitness goals would you like to achieve?";
    // } else {
    //   response = "I'm here to help with any fitness-related questions. Feel free to ask about workouts, nutrition, or goal setting!";
    // }
    if (userMessage.toLowerCase().includes('workout')) {
      response = "For a well-balanced workout, include strength training, cardio, and flexibility exercises. A good routine could be 3 days of strength training, 2 days of cardio, and daily stretching. Would you like a detailed plan based on your goals?";
    } else if (userMessage.toLowerCase().includes('diet') || userMessage.toLowerCase().includes('nutrition')) {
      response = "A balanced diet includes lean proteins (chicken, fish, tofu), complex carbs (brown rice, quinoa), and healthy fats (avocado, nuts). Hydration and fiber intake are also important. Would you like a custom meal plan?";
    } else if (userMessage.toLowerCase().includes('goal')) {
      response = "Defining clear, measurable fitness goals helps with motivation. For example, 'Lose 5kg in 2 months' or 'Run a 5K in 6 weeks'. What specific goal do you have in mind so I can help you with a strategy?";
    } else if (userMessage.toLowerCase().includes('lose weight')) {
      response = "Weight loss happens with a calorie deficit—burning more calories than you consume. A combination of 70% diet and 30% exercise is ideal. Try reducing processed foods, increasing protein intake, and incorporating HIIT workouts. Need a step-by-step plan?";
    } else if (userMessage.toLowerCase().includes('gain muscle')) {
      response = "Muscle gain requires progressive overload (gradually increasing weights), proper protein intake (1.6-2.2g per kg of body weight), and sufficient recovery. Compound movements like squats, deadlifts, and bench presses are essential. Want a workout schedule?";
    } else if (userMessage.toLowerCase().includes('cardio')) {
      response = "Cardio improves heart health and burns calories. Options include running (high-impact), cycling (low-impact), and swimming (full-body). For fat loss, try 20-30 minutes of HIIT, 3-4 times a week. Want help choosing the best type for you?";
    } else if (userMessage.toLowerCase().includes('strength training')) {
      response = "Strength training helps build muscle, increase metabolism, and strengthen bones. A good plan includes compound exercises (squats, deadlifts, bench press) and isolation movements (bicep curls, leg extensions). Need a structured routine?";
    } else if (userMessage.toLowerCase().includes('stretching')) {
      response = "Stretching improves flexibility, reduces injury risk, and helps with recovery. Dynamic stretching before a workout and static stretching afterward are recommended. Examples: Leg swings (pre-workout), hamstring stretch (post-workout). Need a routine?";
    } else if (userMessage.toLowerCase().includes('hydration')) {
      response = "Aim for at least 2-3 liters of water daily, more if you exercise frequently. Signs of dehydration include fatigue, headaches, and dry skin. Add electrolytes if you're sweating a lot. Want a hydration tracking method?";
    } else if (userMessage.toLowerCase().includes('protein intake')) {
      response = "For muscle building, consume 1.6-2.2g of protein per kg of body weight. Good sources include chicken, fish, eggs, lentils, and protein shakes. Would you like a protein-rich meal plan?";
    } else if (userMessage.toLowerCase().includes('sleep')) {
      response = "Sleep is essential for recovery and muscle growth. Aim for 7-9 hours of quality sleep. Avoid screens before bed, maintain a consistent schedule, and keep your room dark and cool. Need sleep optimization tips?";
    } else if (userMessage.toLowerCase().includes('calorie intake')) {
      response = "To maintain weight: Calories in = Calories out. To lose weight: Reduce by 500-750 kcal/day. To gain muscle: Increase by 250-500 kcal/day. I can calculate your daily needs if you provide your weight, height, and activity level.";
    } else if (userMessage.toLowerCase().includes('best exercises for abs')) {
      response = "To develop strong abs, focus on planks (core stability), hanging leg raises (lower abs), and Russian twists (obliques). Nutrition plays a big role in visibility. Would you like an abs-focused workout plan?";
    } else if (userMessage.toLowerCase().includes('home workout')) {
      response = "A great home workout includes bodyweight exercises like squats, push-ups, lunges, and burpees. You can add resistance bands or dumbbells for extra intensity. Would you like a structured plan?";
    } else if (userMessage.toLowerCase().includes('gym workout')) {
      response = "For the gym, split workouts are effective: Chest & Triceps, Back & Biceps, Legs, and Core. Use progressive overload to increase strength. Need a beginner or advanced gym routine?";
    } else if (userMessage.toLowerCase().includes('recovery')) {
      response = "Recovery is crucial for progress. Use active recovery (light walking or yoga), proper sleep, and nutrition to maximize results. Foam rolling can also help. Want a full recovery guide?";
    } else if (userMessage.toLowerCase().includes('warm-up')) {
      response = "A good warm-up includes 5-10 minutes of dynamic stretching and light cardio. Examples: Jump rope, arm circles, and bodyweight squats. Want a customized warm-up routine?";
    } else if (userMessage.toLowerCase().includes('cool-down')) {
      response = "Cool-down should include slow stretching and deep breathing. Hold stretches for 20-30 seconds. Example: Seated hamstring stretch, shoulder stretch. Want a post-workout guide?";
    } else if (userMessage.toLowerCase().includes('supplements')) {
      response = "Essential supplements include whey protein (muscle repair), creatine (strength), omega-3s (inflammation), and vitamin D (bone health). Need recommendations based on your goals?";
    } else if (userMessage.toLowerCase().includes('fat burning')) {
      response = "Fat loss requires a calorie deficit, strength training, and HIIT. Foods like green tea, chili peppers, and lean proteins can aid fat burning. Want a fat-burning workout and diet plan?";
    } else if (userMessage.toLowerCase().includes('motivation')) {
      response = "Set clear goals, track progress, and stay consistent. Try visualizing your success or having a workout buddy for accountability. Need personalized motivation tips?";
    } else if (userMessage.toLowerCase().includes('track progress')) {
      response = "Track progress with body measurements, photos, and workout logs. Apps like MyFitnessPal can help. Would you like a progress-tracking method?";
    } else if (userMessage.toLowerCase().includes('meal prep')) {
      response = "Meal prepping saves time and keeps you on track. Cook proteins (chicken, tofu), carbs (rice, quinoa), and veggies in bulk. Need a meal prep guide?";
    } else if (userMessage.toLowerCase().includes('post-workout nutrition')) {
      response = "Eat protein (20-30g) and carbs within 30-60 minutes post-workout. Examples: Chicken with rice, a protein shake with banana. Want a full guide?";
    } else if (userMessage.toLowerCase().includes('pre-workout meal')) {
      response = "Eat complex carbs and moderate protein 1-2 hours before exercise. Examples: Oatmeal with peanut butter, Greek yogurt with berries. Need a tailored plan?";
    } else if (userMessage.toLowerCase().includes('exercise for beginners')) {
      response = "Start with full-body workouts, 3 days per week. Focus on squats, push-ups, and rows. Gradually increase intensity. Want a beginner plan?";
    } else if (userMessage.toLowerCase().includes('how to increase stamina')) {
      response = "To boost stamina, focus on cardiovascular exercises like running, cycling, and jump rope. Gradually increase workout duration and intensity. Also, maintain a balanced diet rich in complex carbs and hydration. Would you like a detailed plan?";
    } else if (userMessage.toLowerCase().includes('best workout for beginners')) {
      response = "Start with full-body workouts 3 times per week, including squats, push-ups, lunges, and rows. Keep reps moderate (10-12 per set) and focus on proper form. Need a structured beginner plan?";
    } else if (userMessage.toLowerCase().includes('best diet for fat loss')) {
      response = "For fat loss, focus on a high-protein, fiber-rich diet with a calorie deficit. Prioritize lean meats, whole grains, and plenty of vegetables while cutting processed foods. Want a sample meal plan?";
    } else if (userMessage.toLowerCase().includes('how to reduce belly fat')) {
      response = "Spot reduction isn't possible, but combining strength training, HIIT, and a balanced diet helps. Reduce sugar intake and focus on core-strengthening exercises like planks and leg raises. Need a full workout and diet plan?";
    } else if (userMessage.toLowerCase().includes('how to gain weight healthily')) {
      response = "Increase calorie intake with nutrient-dense foods like nuts, whole grains, and lean proteins. Strength training is key to gaining muscle, not just fat. Need a detailed meal and workout plan?";
    } else if (userMessage.toLowerCase().includes('what is intermittent fasting')) {
      response = "Intermittent fasting (IF) involves cycling between eating and fasting periods. Popular methods include 16:8 (fast 16 hours, eat in an 8-hour window). It can aid weight loss and metabolic health. Want help choosing a method?";
    } else if (userMessage.toLowerCase().includes('how to stay consistent with fitness')) {
      response = "Set realistic goals, create a workout schedule, track progress, and find a workout you enjoy. Having a gym partner or using fitness apps can also boost consistency. Need accountability tips?";
    } else if (userMessage.toLowerCase().includes('how to improve flexibility')) {
      response = "Daily stretching and yoga can improve flexibility. Hold each stretch for 20-30 seconds and practice movements like hamstring stretches, hip openers, and shoulder mobility exercises. Need a guided stretching routine?";
    } else if (userMessage.toLowerCase().includes('should i workout every day')) {
      response = "It depends on your goals. Strength training needs rest days for muscle recovery. A good balance is 3-5 days of intense workouts and active recovery on other days. Want help structuring your weekly plan?";
    } else if (userMessage.toLowerCase().includes('is walking enough exercise')) {
      response = "Walking is great for cardiovascular health, but for weight loss or muscle building, strength training and higher-intensity workouts may be needed. Try adding incline walking or bodyweight exercises. Need a walking-based plan?";
    } else if (userMessage.toLowerCase().includes('how to fix bad posture')) {
      response = "Strengthen your core and back with exercises like deadlifts, planks, and face pulls. Stretch tight muscles, especially chest and hip flexors. Want a posture correction workout?";
    } else if (userMessage.toLowerCase().includes('how to relieve muscle soreness')) {
      response = "Drink plenty of water, eat protein-rich foods, and do light movement (walking, yoga). Foam rolling and Epsom salt baths can also help. Need a muscle recovery guide?";
    } else if (userMessage.toLowerCase().includes('how to get a bigger chest')) {
      response = "Focus on bench press, push-ups, and dips. Increase weight progressively and aim for 3-4 sets of 8-12 reps. Want a chest-specific workout plan?";
    } else if (userMessage.toLowerCase().includes('how to get toned arms')) {
      response = "For defined arms, do a mix of strength training (bicep curls, triceps dips) and fat loss (HIIT, calorie deficit). Want a specific arm-toning routine?";
    } else if (userMessage.toLowerCase().includes('best foods for muscle growth')) {
      response = "Protein-rich foods like chicken, fish, eggs, Greek yogurt, and lentils are essential. Also include complex carbs and healthy fats for energy. Want a detailed meal plan?";
    } else if (userMessage.toLowerCase().includes('how to train for a marathon')) {
      response = "Gradually increase weekly mileage, focus on endurance runs, and incorporate cross-training. Taper your training 2-3 weeks before the race. Want a structured marathon plan?";
    } else if (userMessage.toLowerCase().includes('how to avoid workout injuries')) {
      response = "Warm up properly, use correct form, avoid overtraining, and listen to your body. Strengthen stabilizer muscles to prevent joint strain. Want tips on injury prevention?";
    } else if (userMessage.toLowerCase().includes('best exercises for back pain')) {
      response = "Strengthen your core and back with dead bugs, bird dogs, and glute bridges. Avoid prolonged sitting and practice good posture. Need a rehab routine?";
    } else if (userMessage.toLowerCase().includes('how to recover from an injury')) {
      response = "Follow the R.I.C.E. method (Rest, Ice, Compression, Elevation) for acute injuries. For chronic pain, consult a physical therapist and gradually return to exercise. Need rehab exercises?";
    } else if (userMessage.toLowerCase().includes('is yoga good for weight loss')) {
      response = "Yoga helps with flexibility, stress reduction, and mild calorie burn. For weight loss, combine it with strength training and a calorie deficit. Want a fat-burning yoga routine?";
    } else if (userMessage.toLowerCase().includes('what to eat before a workout')) {
      response = "Eat complex carbs and some protein 1-2 hours before exercise. Examples: Oatmeal with peanut butter, banana with almonds. Need pre-workout meal ideas?";
    } else if (userMessage.toLowerCase().includes('is lifting weights good for fat loss')) {
      response = "Yes! Strength training increases muscle mass, which boosts metabolism and fat burning. Combine it with a proper diet for best results. Want a fat-loss strength plan?";
    } else if (userMessage.toLowerCase().includes('how to manage stress through fitness')) {
      response = "Exercise releases endorphins, reducing stress. Try yoga, running, or strength training. Deep breathing and meditation can also help. Want a stress-relief workout plan?";
    } else if (userMessage.toLowerCase().includes('how many steps per day are healthy')) {
      response = "10,000 steps a day is a common goal, but 7,000-8,000 is enough for most adults. Increase gradually and include brisk walking for extra benefits. Want a step-count strategy?";
    } else {
      response = "I'm here to help with all things fitness and health! Feel free to ask about workouts, nutrition, or wellness strategies.";
    }
    
    
    

    setMessages(prev => [...prev, {
      type: 'bot',
      content: response,
      timestamp: new Date()
    }]);
    setIsTyping(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      type: 'user' as const,
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    await simulateResponse(input);
  };

  return (
    <div className="flex flex-col h-[600px] bg-white/10 backdrop-blur-md rounded-2xl">
      {/* Chat Header */}
      <div className="flex items-center space-x-3 p-4 border-b border-white/10">
        <Bot className="w-6 h-6 text-purple-400" />
        <div>
          <h2 className="font-semibold">AI Fitness Coach</h2>
          <p className="text-sm text-gray-400">Always here to help</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`flex items-start space-x-2 max-w-[80%] ${
                message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.type === 'user' ? 'bg-purple-500' : 'bg-blue-500'
                }`}
              >
                {message.type === 'user' ? (
                  <User className="w-5 h-5" />
                ) : (
                  <Bot className="w-5 h-5" />
                )}
              </div>
              <div
                className={`rounded-2xl p-3 ${
                  message.type === 'user'
                    ? 'bg-purple-500'
                    : 'bg-white/10'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center space-x-2">
            <Bot className="w-8 h-8 p-1.5 bg-blue-500 rounded-full" />
            <div className="bg-white/10 rounded-full px-4 py-2">
              <Loader2 className="w-4 h-4 animate-spin" />
            </div>
          </div>
        )}
      </div>

      {/* Chat Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about fitness..."
            className="flex-1 bg-white/5 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 transition-colors rounded-xl px-4 py-2 flex items-center justify-center"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatbotInterface;