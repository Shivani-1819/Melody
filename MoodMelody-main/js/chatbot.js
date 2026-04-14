// js/chatbot.js
const Chatbot = {
  async getMoodFromML(text) {
    try {
      const response = await fetch('http://127.0.0.1:3000/api/mood', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });

      if (!response.ok) {
        throw new Error('Mood API request failed');
      }

      const data = await response.json();
      return data.mood || 'relaxed';
    } catch (error) {
      console.error('ML mood detection failed:', error);
      return 'relaxed';
    }
  },

  async processUserInput(input) {
    UI.addUserMessage(input);
    UI.showLoading(true);

    const mood = await this.getMoodFromML(input);

    // Save to history
    Storage.saveMood({ input, mood, timestamp: Date.now() });

    // Friendly response
    const responses = {
      happy: "Yay! I'm so happy you're feeling great ♡ Let's celebrate with upbeat tunes!",
      sad: "I'm here for you... Let me play something soft and comforting",
      relaxed: "Ahh, peaceful vibes... Perfect time for chill melodies",
      angry: "Whoa, I feel that energy! Let's channel it with powerful beats",
      neutral: "Hmm, mixed feelings? Let me play something uplifting!"
    };

    UI.addBotMessage(responses[mood] || "Got it! Finding music for your vibe...");

    // Search Spotify for mood-based tracks
    const tokens = Storage.getTokens();
    const accessToken = tokens?.access_token;

    const tracks = await Spotify.searchTracks(accessToken, input, mood);

    if (tracks && tracks.tracks.items.length > 0) {
      UI.showRecommendations(tracks.tracks.items.slice(0, 10), mood);
    } else {
      UI.addBotMessage("Couldn't find songs right now. Try typing how you feel!");
    }

    UI.showLoading(false);
  }
};
