import type { IconName } from "./ui";

export const clinic = {
  name: "The Nutrition Club Clinic",
  tagline: "Personalized Nutrition. Better Health. Sustainable Results.",
  phone: "0303-8042533",
  ptcl: "051-6108016",
  email: "thenutritionclub4@gmail.com",
  instagram: "@thenutritionclub4",
  address: "Fazal Arcade, 1st Floor, Office #4, F-11 Markaz, Islamabad",
  hours: "In-Clinic | Online | Worldwide",
};

export const calendlyUrl = "https://calendly.com/thenutritionclub22/30min";
export const GoogleUrl = "https://maps.app.goo.gl/QmA2EPVrVdt2Lqs8A";
export const whatsappUrl = (product: string) =>
  `https://wa.me/923038042533?text=${encodeURIComponent(`Hello, I would like to order the ${product} from Nourihaus.`)}`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#about" },
  { label: "Dietitians", href: "#team" },
  { label: "Guides", href: "#guides" },
  { label: "Nourihaus", href: "#products" },
];

export const heroStats = [
  { value: "1000+", label: "Clients served" },
  { value: "3+", label: "Years of experience" },
  { value: "2", label: "Consultant dietitians" },
  { value: "PKR 2,500", label: "Consultation fee" },
];

export const highlights: { icon: IconName; title: string; copy: string }[] = [
  { icon: "Users", title: "Personalized", copy: "Nutrition designed around your health, lifestyle and goals." },
  { icon: "Apple", title: "Practical", copy: "Simple strategies that can fit into your everyday routine." },
  { icon: "Leaf", title: "Sustainable", copy: "A focus on long-term progress rather than quick fixes." },
  { icon: "Heart", title: "Home-food friendly", copy: "Healthy nutrition that works with your everyday meals." },
];

export const programs: {
  icon: IconName;
  title: string;
  copy: string;
  points: string[];
  duration: string;
  from: string;
}[] = [
  {
    icon: "Scale",
    title: "Weight Management",
    copy: "Personalized nutrition for weight loss, healthy weight gain and long-term weight management.",
    points: ["Weight loss", "Healthy weight gain", "Calorie and portion management"],
    duration: "Personalized",
    from: "Book a consultation",
  },
  {
    icon: "Activity",
    title: "Metabolic Health",
    copy: "Nutrition support for diabetes, prediabetes, fatty liver, cholesterol and blood sugar management.",
    points: ["Diabetes support", "Prediabetes management", "Fatty liver and cholesterol care"],
    duration: "Condition-specific",
    from: "Book a consultation",
  },
  {
    icon: "Heart",
    title: "Hormonal Health",
    copy: "Individualized nutrition for PCOS, hormonal imbalance, menstrual health and weight management.",
    points: ["PCOS nutrition", "Hormonal health support", "Menstrual health nutrition"],
    duration: "Personalized",
    from: "Book a consultation",
  },
  {
    icon: "Leaf",
    title: "Gut & Digestive Health",
    copy: "Practical support for IBS, bloating, constipation and digestive comfort.",
    points: ["IBS-D, IBS-C and IBS-M", "Bloating support", "Constipation management"],
    duration: "Personalized",
    from: "Book a consultation",
  },
  {
    icon: "Flask",
    title: "Clinical & Therapeutic Nutrition",
    copy: "Condition-specific nutrition, therapeutic diet planning and ongoing progress monitoring.",
    points: ["Personalized meal planning", "Nutrition counseling", "Follow-up support"],
    duration: "Condition-specific",
    from: "Book a consultation",
  },
  {
    icon: "Activity",
    title: "Lifestyle & Fitness Nutrition",
    copy: "Personalized nutrition for active individuals, workouts, energy needs and fitness goals.",
    points: ["Energy support", "Workout nutrition", "Lifestyle-based guidance"],
    duration: "Personalized",
    from: "Book a consultation",
  },
];

export const steps = [
  {
    no: "01",
    title: "Book Your Consultation",
    copy: "Choose an in-clinic or online consultation.",
  },
  {
    no: "02",
    title: "Personalized Assessment",
    copy: "We understand your health, lifestyle, eating patterns and goals.",
  },
  {
    no: "03",
    title: "Your Personalized Plan",
    copy: "Your nutrition plan is designed around your individual needs.",
  },
  {
    no: "04",
    title: "Follow-Up & Progress",
    copy: "We monitor your progress and adjust your approach as needed.",
  },
];

export const team = [
  {
    name: "DN Irum Javed",
    role: "Consultant Dietitian & Nutritionist",
    creds: "Founder · 3+ years",
    focus: ["Metabolic health", "Weight management", "Therapeutic nutrition"],
    img: "/images/Dn Iram.jpeg",
  },
  {
    name: "DN Farwa Tahir",
    role: "Consultant Dietitian & Nutritionist",
    creds: "Co-Founder · 3+ years",
    focus: ["Hormonal health", "Weight management", "Personalized nutrition"],
    img: "/images/Dn Farwa.jpeg",
  },
];

export const plans = [
  {
    name: "Kickstart",
    blurb: "A focused reset for anyone starting their nutrition journey.",
    monthly: 24999,
    quarterly: 62999,
    features: [
      "1 dietitian consultation / month",
      "Personalised 4-week meal plan",
      "Grocery & recipe library",
      "WhatsApp support (Mon–Fri)",
      "Monthly progress report",
    ],
    highlight: false,
  },
  {
    name: "Transform",
    blurb: "Our most-loved plan — full clinical support with weekly reviews.",
    monthly: 44999,
    quarterly: 114999,
    features: [
      "Weekly 1-on-1 video consults",
      "BIA body composition every month",
      "Blood report interpretation",
      "Daily chat with your dietitian",
      "Workout & sleep guidance",
      "Eating-out & travel playbooks",
    ],
    highlight: true,
  },
  {
    name: "Clinical Pro",
    blurb: "Medically supervised care for chronic and complex conditions.",
    monthly: 79999,
    quarterly: 209999,
    features: [
      "Dedicated senior dietitian + MD review",
      "Unlimited consults & plan changes",
      "CGM / lab coordination",
      "Family meal planning included",
      "Quarterly in-clinic assessment",
      "Priority same-day responses",
    ],
    highlight: false,
  },
];

export const results = [
  { metric: "-18 kg", label: "Average loss in 6 months", sub: "Transform members, 2025" },
  { metric: "-1.9%", label: "Average HbA1c drop", sub: "Diabetes care cohort" },
  { metric: "82%", label: "Reported less bloating", sub: "Within first 4 weeks" },
  { metric: "9/10", label: "Would recommend us", sub: "Post-program survey" },
];

export const testimonials = [
  {
    quote:
      "I came in pre-diabetic with an HbA1c of 6.4. Eight months later it's 5.3 and I eat rice every single day. They rebuilt my plate, not my personality.",
    name: "Hira Siddiqui",
    meta: "Marketing lead · Lost 14 kg",
    img: "https://images.pexels.com/photos/37722825/pexels-photo-37722825.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300",
    rating: 5,
  },
  {
    quote:
      "As a marathoner I'd tried four coaches. Hamza was the first to look at my blood work before touching my macros. Personal best at Lahore this year.",
    name: "Bilal Khan",
    meta: "Endurance athlete · 3:12 PB",
    img: "https://images.pexels.com/photos/15019490/pexels-photo-15019490.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300",
    rating: 5,
  },
  {
    quote:
      "PCOS made me feel like my body was working against me. Dr. Sana's cycle-based plan brought my periods back in four months, without any crash dieting.",
    name: "Fatima Sheikh",
    meta: "Architect · PCOS program",
    img: "https://images.pexels.com/photos/8852029/pexels-photo-8852029.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300",
    rating: 5,
  },
  {
    quote:
      "My son is the fussiest eater alive. Maryam turned mealtimes from a war zone into something we actually enjoy. He asks for saag now. Actual magic.",
    name: "Ali Raza",
    meta: "Parent · Mother & Child program",
    img: "https://images.pexels.com/photos/27544052/pexels-photo-27544052.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300",
    rating: 5,
  },
];

export const posts = [
  {
    tag: "Free Guide",
    title: "Weight Loss Guide",
    date: "Available now",
    read: "Practical guide",
    img: "/images/logo.png",
  },
  {
    tag: "Free Guide",
    title: "IBS Guide",
    date: "Available now",
    read: "Practical guide",
    img: "/images/Dn Farwa.jpeg",
  },
  {
    tag: "Free Guide",
    title: "Diabetes & Blood Sugar Guide",
    date: "Available now",
    read: "Practical guide",
    img: "/images/Dn Iram.jpeg",
  },
];

export const faqs = [
  {
    q: "Do you offer online consultations?",
    a: "Yes. Online consultations are available across Pakistan and worldwide.",
  },
  {
    q: "Do you offer in-clinic consultations?",
    a: "Yes. In-clinic consultations are available by appointment at our clinic in F-11 Markaz, Islamabad.",
  },
  {
    q: "Do you provide personalized diet plans?",
    a: "Yes. Diet plans are personalized according to your health, lifestyle, food preferences and goals.",
  },
  {
    q: "Do I need to follow a restrictive diet?",
    a: "Our approach focuses on practical and sustainable nutrition without unnecessary restrictions or crash dieting.",
  },
  {
    q: "Do you work with IBS, PCOS, diabetes and fatty liver?",
    a: "Yes. We provide personalized nutrition support for digestive, hormonal and metabolic health concerns.",
  },
  {
    q: "What is the consultation fee?",
    a: "The consultation fee is PKR 2,500.",
  },
];

export const timeSlots = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
  "06:30 PM",
  "07:30 PM",
];

export const marqueeItems = [
  "Pakistan Nutrition & Dietetic Society",
  "Certified Diabetes Educators",
  "ISSN Sports Nutrition",
  "Monash FODMAP Trained",
  "PNAC Partner Labs",
  "Pakistan Paediatric Nutrition",
];
