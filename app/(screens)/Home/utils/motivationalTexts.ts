export const motivationalTexts = [
    "Did you know? Breathing clean air can enhance your lifespan by up to 2 years. Air pollution has both short and long-term effects on our health.\n\nDiscover the air quality around you with our map! Knowledge is the first step towards action.",
  
    "Air quality changes throughout the day and varies place to place. It can even change from one street to the next. Don't leave your health to chance.\n\nTap into our map to get real-time updates on air quality near you. Be proactive in protecting your health and wellness.",
  
    "Air pollution isn't always visible, but its effects are real. It can lead to a variety of health issues, from minor irritations to serious illnesses.\n\nUse our map to track the unseen and breathe easier. Guard your health and your peace of mind.",
  
    "Empower your health decisions with knowledge. Awareness can lead to healthier choices and improved well-being.\n\nSee the air you breathe in real-time with our air quality map. Make informed decisions for yourself and your loved ones.",
  
    "Every breath matters. The quality of the air we breathe can significantly affect our health and lifestyle.\n\nTake control of the air you breathe with our real-time air quality map. Because when it comes to health, every choice counts.",
  
    "Pollution isn't just an environmental issue, it's a health issue. Poor air quality can lead to conditions like asthma, heart disease, and stroke.\n\nStay one step ahead with our air quality map. Prevention is always better than cure.",
  
    "The air around us is more than just empty space. It's filled with oxygen we need, but also potential pollutants.\n\nFind out what's in the air you breathe with our map. Because the unseen can impact us the most.",
  
    "Breathe easy knowing you're informed about your air quality. Just because you can't see it doesn't mean it's not there.\n\nUse our map to stay updated on air quality near you. Your lungs will thank you!",
  
    "Air pollution is a silent invader, affecting us where we least expect it. But you have the power to stay informed.\n\nUse our map to track air quality in real time. Turn the invisible into visible, and breathe with confidence.",
  
    "We breathe about 25,000 times each day. Each breath is an opportunity to fill our bodies with life-sustaining oxygen, or with harmful pollutants.\n\nMake each breath count with our real-time air quality map. Breathe better, live better.",
  ];
  
  export const getRandomMotivationalText = (): string => {
    const randomIndex = Math.floor(Math.random() * motivationalTexts.length);
    return motivationalTexts[randomIndex];
  };
  