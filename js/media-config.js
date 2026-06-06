/* ============================================================
   CampDream.store — Media Configuration
   All video and music assets used across the site
   ============================================================ */

const MEDIA_CONFIG = {

  /* ── Video pools by category ── */
  videos: {
    beach: [
      { src: '/media/videos/beach/beach-wallpaper-01-sea-wave-golden.mp4', label: 'Golden Sea Wave' },
      { src: '/media/videos/beach/beach-wallpaper-02-sea-ocean-wave.mp4', label: 'Ocean Waves' },
      { src: '/media/videos/beach/beach-wallpaper-04-ocean-sunset-sea.mp4', label: 'Ocean Sunset' },
      { src: '/media/videos/beach/beach-wallpaper-05-ocean-beach-sunset.mp4', label: 'Beach Sunset' },
      { src: '/media/videos/beach/beach-wallpaper-06-summer-beach-sea.mp4', label: 'Summer Beach' },
    ],
    city: [
      { src: '/media/videos/city/city-night-sky-01-seoul-city-streets.mp4', label: 'Seoul City Streets' },
      { src: '/media/videos/city/city-night-sky-03-moon-moonlight-night.mp4', label: 'Moonlight Night' },
      { src: '/media/videos/city/city-night-sky-04-city-night-lights.mp4', label: 'City Night Lights' },
      { src: '/media/videos/city/city-night-sky-05-seoul-traffic-cars.mp4', label: 'Seoul Traffic' },
      { src: '/media/videos/city/city-night-sky-07-sunrise-sunset-weather.mp4', label: 'Sunrise & Sunset' },
      { src: '/media/videos/city/city-night-sky-09-milky-way-heaven-starry-sky.mp4', label: 'Milky Way' },
      { src: '/media/videos/city/city-night-sky-10-dubai-skyline-architecture.mp4', label: 'Dubai Skyline' },
    ],
    nature: [
      { src: '/media/videos/nature/nature-wallpaper-02-waterfall-nature-landscape.mp4', label: 'Waterfall Landscape' },
      { src: '/media/videos/nature/nature-wallpaper-03-nature-autumn-river.mp4', label: 'Autumn River' },
      { src: '/media/videos/nature/nature-wallpaper-04-waterfall-rocks-river.mp4', label: 'Waterfall Rocks' },
      { src: '/media/videos/nature/nature-wallpaper-05-waterfall-nature-forest.mp4', label: 'Forest Waterfall' },
      { src: '/media/videos/nature/nature-wallpaper-07-waterfall-forest-nature.mp4', label: 'Forest Nature' },
      { src: '/media/videos/nature/nature-wallpaper-09-man-nature-viewpoint.mp4', label: 'Nature Viewpoint' },
      { src: '/media/videos/nature/nature-wallpaper-10-water-island-wave.mp4', label: 'Island Waves' },
    ],
    holiday: [
      { src: '/media/videos/holiday/holiday-wallpaper-01-pine-forest-snow.mp4', label: 'Pine Forest Snow' },
      { src: '/media/videos/holiday/holiday-wallpaper-03-mountains-trees-woods.mp4', label: 'Mountain Woods' },
      { src: '/media/videos/holiday/holiday-wallpaper-07-sunrise-horizon-winter.mp4', label: 'Winter Sunrise' },
      { src: '/media/videos/holiday/holiday-wallpaper-10-penguin-nature-animal.mp4', label: 'Penguin Nature' },
    ],
    uplifting: [
      { src: '/media/videos/uplifting/uplifting-pix-happy-kids-nature.mp4', label: 'Kids at the Beach' },
      { src: '/media/videos/uplifting/uplifting-pix-mountain-sunrise.mp4', label: 'Mountain Sunrise Fog' },
      { src: '/media/videos/uplifting/uplifting-pix-friends-camping.mp4', label: 'Friends Bonfire Night' },
      { src: '/media/videos/uplifting/uplifting-pix-flower-field.mp4', label: 'Tulip Fields Spring' },
      { src: '/media/videos/uplifting/uplifting-pix-rainbow-waterfall.mp4', label: 'Waterfall Rainbow' },
      { src: '/media/videos/uplifting/uplifting-pex-joyful-woman-sunrise.mp4', label: 'Joyful Woman Dancing' },
      { src: '/media/videos/uplifting/uplifting-pex-happy-couple-hiking.mp4', label: 'Happy Family Trail' },
      { src: '/media/videos/uplifting/uplifting-pex-summer-festival.mp4', label: 'Summer Music Festival' },
      { src: '/media/videos/uplifting/uplifting-pex-golden-sunset.mp4', label: 'Golden Hour Sunset' },
      { src: '/media/videos/uplifting/uplifting-pex-dog-playing-park.mp4', label: 'Dogs Running Free' },
    ],
  },

  /* ── 20 Music Tracks ── */
  music: [
    { src: '/media/music/jazz-background-01-vibing-over-venus.mp3', title: 'Vibing Over Venus', artist: 'Kevin MacLeod', genre: 'Jazz' },
    { src: '/media/music/jazz-background-02-night-in-venice.mp3', title: 'Night in Venice', artist: 'Kevin MacLeod', genre: 'Jazz' },
    { src: '/media/music/jazz-background-03-study-and-relax.mp3', title: 'Study and Relax', artist: 'Kevin MacLeod', genre: 'Jazz' },
    { src: '/media/music/jazz-background-04-past-sadness.mp3', title: 'Past Sadness', artist: 'Kevin MacLeod', genre: 'Jazz' },
    { src: '/media/music/jazz-background-05-smooth-lovin.mp3', title: 'Smooth Lovin', artist: 'Kevin MacLeod', genre: 'Jazz' },
    { src: '/media/music/jazz-background-06-mining-by-moonlight.mp3', title: 'Mining by Moonlight', artist: 'Kevin MacLeod', genre: 'Jazz' },
    { src: '/media/music/jazz-background-07-george-street-shuffle.mp3', title: 'George Street Shuffle', artist: 'Kevin MacLeod', genre: 'Jazz' },
    { src: '/media/music/jazz-background-08-vibe-ace.mp3', title: 'Vibe Ace', artist: 'Kevin MacLeod', genre: 'Jazz' },
    { src: '/media/music/jazz-background-09-space-jazz.mp3', title: 'Space Jazz', artist: 'Kevin MacLeod', genre: 'Jazz' },
    { src: '/media/music/lofi-background-01-starting-out-waltz-vivace.mp3', title: 'Starting Out (Vivace)', artist: 'Kevin MacLeod', genre: 'Lo-Fi' },
    { src: '/media/music/lofi-background-02-starting-out-waltz-allegretto.mp3', title: 'Starting Out (Allegretto)', artist: 'Kevin MacLeod', genre: 'Lo-Fi' },
    { src: '/media/music/lofi-background-03-pleasant-porridge.mp3', title: 'Pleasant Porridge', artist: 'Kevin MacLeod', genre: 'Lo-Fi' },
    { src: '/media/music/ambient-background-01-morning.mp3', title: 'Morning Ambient', artist: 'Kevin MacLeod', genre: 'Ambient' },
    { src: '/media/music/ambient-background-02-evening.mp3', title: 'Evening Ambient', artist: 'Kevin MacLeod', genre: 'Ambient' },
    { src: '/media/music/ambient-background-03-starting-out-waltz-vivace.mp3', title: 'Ambient Vivace', artist: 'Kevin MacLeod', genre: 'Ambient' },
    { src: '/media/music/ambient-background-04-starting-out-waltz-allegretto.mp3', title: 'Ambient Allegretto', artist: 'Kevin MacLeod', genre: 'Ambient' },
    { src: '/media/music/top-mix-01-top-30-background-music-for-your-videos--dhalius-music.mp3', title: 'Top Mix Vol. 1', artist: 'Dhalius Music', genre: 'Mix' },
    { src: '/media/music/top-mix-02-curses-from-past-times-lp-proleter.mp3', title: 'Curses From Past Times', artist: 'Proleter', genre: 'Mix' },
    { src: '/media/music/top-mix-03-mythium-mark-hillard-joe-bova-jay-bova-lou-greco.mp3', title: 'Mythium', artist: 'Mark Hillard', genre: 'Mix' },
    { src: '/media/music/top-mix-04-vkrsnl038-miranda-shvangiradze-talk-to-m-miranda-shvangiradze.mp3', title: 'Talk to M', artist: 'Miranda Shvangiradze', genre: 'Mix' },
  ],

  /* ── Uplifting Quotes pool ── */
  quotes: [
    { text: "In every walk with nature, one receives far more than he seeks.", author: "John Muir" },
    { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
    { text: "The earth has music for those who listen.", author: "George Santayana" },
    { text: "Look deep into nature, and then you will understand everything better.", author: "Albert Einstein" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "The best time to plant a tree was twenty years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "He who is brave is free.", author: "Seneca" },
    { text: "The mountains are calling and I must go.", author: "John Muir" },
    { text: "Keep your face always toward the sunshine, and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "Adopt the pace of nature: her secret is patience.", author: "Ralph Waldo Emerson" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Happiness is not something readymade. It comes from your own actions.", author: "Dalai Lama" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "Go confidently in the direction of your dreams.", author: "Henry David Thoreau" },
    { text: "With the new day comes new strength and new thoughts.", author: "Eleanor Roosevelt" },
    { text: "Nature does not hurry, yet everything is accomplished.", author: "Lao Tzu" },
    { text: "The world is full of magic things, patiently waiting for our senses to grow sharper.", author: "W.B. Yeats" },
    { text: "Every sunset is an opportunity to reset.", author: "Richie Norton" },
    { text: "Those who contemplate the beauty of the earth find reserves of strength.", author: "Rachel Carson" },
    { text: "Somewhere, something incredible is waiting to be known.", author: "Sharon Begley" },
    { text: "The good life is one inspired by love and guided by knowledge.", author: "Bertrand Russell" },
  ],
};

/* ── Shuffle utility ── */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
