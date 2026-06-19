// All site copy and asset URLs live here.
// Edit this file to swap a screenshot or tweak any text on the landing page.

export const APP_STORE_URL =
  "https://apps.apple.com/in/app/fuel-screen-time-control/id6768048960";

export const PRIVACY_URL = "https://www.usefuelapp.com/privacy";
export const EULA_URL =
  "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

const CDN = "https://customer-assets.emergentagent.com/job_fuel-timer-1/artifacts";

export const ASSETS = {
  logo: `${CDN}/jq5cgrzk_fuel_logo.png`,
  phones: {
    spendFuel: `${CDN}/a62ctxr2_2nd.png`, // yellow "Take a deep breath" / 5-10-15 min picker
    habits: `${CDN}/sjrl7suq_2.png`, // Hydration / Steps / Workout grid
    home: `${CDN}/74uwjywr_3.png`, // 12%(30m) low fuel dashboard
    pushups: `${CDN}/ibsxfbdu_4.png`, // camera-counted pushups
    socialLite: `${CDN}/dulxdl5o_5.png`, // Hide Reels / Explore / Shorts toggles
    challenges: `${CDN}/il2vm82v_6.png`, // 75 Hard / 75 Soft / 30 Hard list
    blocked: `${CDN}/v8abjmje_7.png`, // "Fuel has blocked your app"
  },
};

export const MARQUEE_WORDS = [
  "STOP DOOMSCROLLING",
  "★",
  "EARN FUEL",
  "★",
  "BLOCK THE BRAINROT",
  "★",
  "BUILD STREAKS",
  "★",
  "RECLAIM YOUR LIFE",
  "★",
  "75 HARD READY",
  "★",
];

export const FEATURES = [
  {
    id: "targeted-blocking",
    title: "Targeted Distraction Blocking",
    desc: "Hide Reels, Shorts, Explore, and For-You feeds — but keep the utility intact. Check a DM without accidentally scrolling for 45 minutes. Your phone becomes a tool again. Not a slot machine.",
    image: "socialLite",
    accent: "lime",
    large: true,
  },
  {
    id: "earn-fuel",
    title: "Earn Fuel For Focus",
    desc: "Every reclaimed hour and every real-world habit converts into FUEL currency. Your focus literally pays off.",
    image: "home",
    accent: "red",
  },
  {
    id: "spend-fuel",
    title: "Spend Fuel To Browse",
    desc: "Take a deep breath. Pick 5, 10, or 15 minutes — then get back to life. Or skip the scroll and do something productive instead.",
    image: "spendFuel",
    accent: "lime",
  },
  {
    id: "habits",
    title: "Choose Your Go-To Habits",
    desc: "Hydration. Steps. Workouts. Meditation. Reading. Journaling. Deep Work. Build the daily stack that builds you.",
    image: "habits",
    accent: "lime",
  },
  {
    id: "camera-reps",
    title: "Auto-Count Reps With Camera",
    desc: "Pose-tracking AI counts pushups, squats, and form in real time. No cheating yourself.",
    image: "pushups",
    accent: "red",
  },
  {
    id: "challenges",
    title: "Commit With Built-In Challenges",
    desc: "75 Hard. 75 Soft. 30 Hard. Choose your track and prove yourself for 30 or 75 days straight. Earn medals, build streaks, become someone who finishes what they start.",
    image: "challenges",
    accent: "lime",
    large: true,
  },
];

export const HOW_IT_WORKS = [
  {
    num: "01",
    title: "BLOCK",
    desc: "Granular control. Hide the toxic features inside Instagram, TikTok, YouTube, X. Keep the parts that actually help.",
    icon: "Lock",
  },
  {
    num: "02",
    title: "EARN",
    desc: "Stay off the distractions. Log real-world habits. Every reclaimed hour converts into Fuel currency.",
    icon: "Flame",
  },
  {
    num: "03",
    title: "LEVEL UP",
    desc: "Spend Fuel mindfully. Take on 30-day and 75-day challenges. Watch your trajectory bend upward.",
    icon: "Trophy",
  },
];

export const PERSONAS = [
  {
    tag: "STUDENTS",
    body: "Reclaim your focus during midterms. Stop letting shorts and reels destroy your study sessions.",
    icon: "Brain",
  },
  {
    tag: "PROFESSIONALS",
    body: "Protect your deep work. Maximize your productivity. Get more done in less time.",
    icon: "Activity",
  },
  {
    tag: "ADHD MINDS",
    body: "Remove the algorithmic traps that make executive dysfunction worse. Built for your brain.",
    icon: "Zap",
  },
  {
    tag: "YOU",
    body: "If you are tired of looking at your screen time report and feeling dread — Fuel was built for you.",
    icon: "Target",
    invert: true,
  },
];

export const TRAJECTORY_STATS = [
  { value: "1,825h", label: "Wasted / yr" },
  { value: "1,095h", label: "Reclaimed / yr" },
  { value: "75 days", label: "Challenge ready" },
];

export const PRIVACY_BADGES = [
  "On-Device",
  "No Tracking",
  "No Selling Data",
  "Apple Privacy Verified",
];
