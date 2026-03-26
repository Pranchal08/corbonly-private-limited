import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  Database,
  DollarSign,
  Globe,
  GraduationCap,
  HeadphonesIcon,
  Heart,
  Home,
  Layers,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  Shield,
  ShoppingCart,
  Smartphone,
  Star,
  TrendingUp,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useActor } from "./hooks/useActor";

// ─── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Process", href: "#process" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a1628]/95 backdrop-blur-md shadow-sm" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <button
          type="button"
          onClick={() => scrollTo("#home")}
          className="flex items-center gap-2"
        >
          <span className="flex items-center gap-3">
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="CORBONLY logo"
              role="img"
            >
              <title>CORBONLY</title>
              <polygon
                points="19,2 35,10.5 35,27.5 19,36 3,27.5 3,10.5"
                fill="#F68C1E"
                stroke="#F68C1E"
                strokeWidth="1"
              />
              <circle cx="19" cy="19" r="4" fill="#0A1628" />
              <line
                x1="19"
                y1="10"
                x2="19"
                y2="15"
                stroke="#0A1628"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="19"
                y1="23"
                x2="19"
                y2="28"
                stroke="#0A1628"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="10"
                y1="14.5"
                x2="14.5"
                y2="17"
                stroke="#0A1628"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="23.5"
                y1="21"
                x2="28"
                y2="23.5"
                stroke="#0A1628"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="10"
                y1="23.5"
                x2="14.5"
                y2="21"
                stroke="#0A1628"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="23.5"
                y1="17"
                x2="28"
                y2="14.5"
                stroke="#0A1628"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="flex flex-col leading-tight">
              <span className="text-[#F68C1E] font-bold text-xl tracking-wide">
                CORBONLY
              </span>
              <span className="text-[#8ab0cc] text-[10px] uppercase tracking-widest font-light">
                Private Limited
              </span>
            </span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <button
              type="button"
              key={l.label}
              data-ocid={`nav.${l.label.toLowerCase()}.link`}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-[#F68C1E] transition-all duration-200 hover:text-white hover:drop-shadow-[0_0_8px_rgba(246,140,30,0.8)] relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-[#F68C1E] after:transition-all after:duration-200 hover:after:w-full"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <Button
          data-ocid="nav.contact.primary_button"
          onClick={() => scrollTo("#contact")}
          className="hidden lg:flex rounded-full px-5 text-sm font-semibold text-white"
          style={{ background: "linear-gradient(135deg, #F68C1E, #EE4D2F)" }}
        >
          Get In Touch
        </Button>

        <button
          type="button"
          className={`lg:hidden p-2 ${scrolled ? "text-[#b8cfe0]" : "text-[#b8cfe0]"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#0d1f3c] border-t border-[#2a4a6a] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              type="button"
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-[#F68C1E] hover:text-white transition-all duration-200 text-left"
            >
              {l.label}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("#contact")}
            className="rounded-full mt-2 text-white"
            style={{ background: "linear-gradient(135deg, #F68C1E, #EE4D2F)" }}
          >
            Get In Touch
          </Button>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const statBadges = [
    { value: "100+", label: "Projects" },
    { value: "50+", label: "Clients" },
    { value: "5+", label: "Years" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #F68C1E, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[#162238] border border-[#2a4a6a] rounded-full px-4 py-1.5 mb-8 text-sm text-gray-100 backdrop-blur-sm">
          <span
            className="w-2 h-2 rounded-full inline-block"
            style={{ background: "#F68C1E" }}
          />
          IT Consultancy & Digital Transformation — Jammu & Kashmir
        </div>

        <h1
          className="font-display font-bold leading-[1.05] mb-8"
          style={{ letterSpacing: "-0.03em" }}
        >
          <span className="block text-5xl md:text-7xl lg:text-8xl text-orange-400 font-light tracking-tight">
            We Build
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl text-[#F68C1E] tracking-tight">
            Technology That
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl text-gradient font-extrabold italic tracking-tight">
            Transforms Business.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-orange-400 max-w-3xl mx-auto mb-4 font-body font-light leading-relaxed">
          CORBONLY PRIVATE LIMITED is a premier IT consultancy based in Jammu &
          Kashmir, delivering enterprise-grade technology solutions that empower
          India's businesses to compete globally. We combine deep technical
          expertise with a client-first approach, ensuring every solution we
          build drives measurable business outcomes. From startups taking their
          first steps to established enterprises modernising legacy systems, we
          partner with you at every stage of your digital journey.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Button
            data-ocid="hero.primary_button"
            size="lg"
            onClick={() => scrollTo("#contact")}
            className="text-white rounded-full px-8 py-3 text-base font-semibold h-auto"
            style={{ background: "linear-gradient(135deg, #F68C1E, #EE4D2F)" }}
          >
            Start Your Project <ArrowRight className="ml-2" size={18} />
          </Button>
          <Button
            data-ocid="hero.secondary_button"
            size="lg"
            variant="outline"
            onClick={() => scrollTo("#services")}
            className="border-[#2a4a6a] text-[#b8cfe0] hover:bg-[#162238] hover:text-[#b8cfe0] rounded-full px-8 py-3 text-base h-auto bg-black"
          >
            Explore Services
          </Button>
        </div>

        {/* Stat badges */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {statBadges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 bg-[#162238] border border-[#2a4a6a] rounded-full px-5 py-2 text-[#b8cfe0] backdrop-blur-sm"
            >
              <span
                className="font-display font-extrabold text-lg"
                style={{ color: "#F68C1E" }}
              >
                {b.value}
              </span>
              <span className="text-sm text-orange-400">{b.label}</span>
            </div>
          ))}
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-orange-400 text-xs">
          <span>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}

// ─── Logo Marquee ─────────────────────────────────────────────────────────────
function LogoMarquee() {
  const techLogos = [
    { name: "React", icon: "⚛" },
    { name: "Node.js", icon: "🟢" },
    { name: "AWS", icon: "☁️" },
    { name: "Python", icon: "🐍" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "⚙️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "TypeScript", icon: "📘" },
    { name: "Azure", icon: "🌐" },
    { name: "Google Cloud", icon: "🔵" },
    { name: "Linux", icon: "🐧" },
  ];
  const items = [...techLogos, ...techLogos];

  return (
    <section className="bg-section-gray border-y border-border py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-sm font-semibold tracking-widest text-black uppercase">
          Technologies We Work With
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="marquee-track">
          {items.map((t, i) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: marquee duplicates
              key={i}
              className="flex items-center gap-3 mx-8 text-black hover:text-[#b8cfe0] transition-colors whitespace-nowrap"
            >
              <span className="text-2xl">{t.icon}</span>
              <span className="font-display font-semibold text-sm tracking-wide text-black">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────
function Stats() {
  const stats = [
    { value: "5+", label: "Years of Experience" },
    { value: "100+", label: "Projects Delivered" },
    { value: "50+", label: "Happy Clients" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="bg-[#0a1628] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats.map((s) => (
            <div
              key={s.value}
              className="px-8 py-6 text-center first:pl-0 last:pr-0"
            >
              <div className="stat-gradient font-display font-extrabold text-5xl md:text-6xl mb-2">
                {s.value}
              </div>
              <div className="text-sm text-gray-300 font-body">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About Us ─────────────────────────────────────────────────────────────────
function AboutUs() {
  const values = [
    "Transparency in every engagement — no hidden costs, no surprises",
    "Deep technical expertise across full-stack development and cloud",
    "Agile delivery with measurable milestones and weekly updates",
    "Long-term partnerships, not one-off transactional relationships",
    "Continuous learning — we invest in the latest technologies",
    "Local roots with global standards and best practices",
    "Dedicated post-launch support and performance monitoring",
    "Culturally aware solutions tailored for Indian market dynamics",
  ];

  const milestones = [
    {
      year: "2019",
      title: "Founded",
      desc: "Two engineers, one bold idea — bridge the tech gap in J&K",
    },
    {
      year: "2020",
      title: "First Enterprise Client",
      desc: "Delivered a full ERP platform during the pandemic lockdown",
    },
    {
      year: "2021",
      title: "25 Happy Clients",
      desc: "MSME registered; expanded to healthcare & education sectors",
    },
    {
      year: "2023",
      title: "50+ Projects",
      desc: "Reached clients in Delhi, Mumbai, and Bangalore",
    },
    {
      year: "2025",
      title: "Regional Leader",
      desc: "100+ projects delivered; J&K's most trusted IT consultancy",
    },
  ];

  const team = [
    {
      name: "Aadil Rashid",
      role: "Founder & CEO",
      bio: "10+ years of enterprise software experience. Passionate about bridging the digital divide in Jammu & Kashmir.",
      initials: "AR",
    },
    {
      name: "Shahid Hussain",
      role: "Head of Engineering",
      bio: "Full-stack architect specialising in cloud-native systems, microservices, and DevOps pipelines.",
      initials: "SH",
    },
    {
      name: "Riyaz Ahmad",
      role: "Client Success Lead",
      bio: "Dedicated to ensuring every client achieves measurable ROI and a smooth digital transformation journey.",
      initials: "RA",
    },
  ];

  const stories = [
    {
      title: "Our Founding Story",
      body: "CORBONLY PRIVATE LIMITED was founded with a singular conviction: that the businesses of Jammu & Kashmir deserve access to the same calibre of technology solutions as the rest of India. Starting as a small team of passionate engineers in Budgam, we quickly earned a reputation for delivering solutions that actually work — on time, within budget, and beyond expectations. Today, we serve clients from Srinagar startups to established enterprises in Delhi and Mumbai.",
    },
    {
      title: "Mission & Vision",
      body: "Our mission is to democratise enterprise-grade technology for businesses of every size, enabling them to compete on a global stage while remaining rooted in their local context. Our vision is to become the most trusted IT partner in the Kashmir valley — known not just for technical excellence but for integrity, reliability, and genuine care in every client relationship. We measure success by the outcomes our clients achieve, not the code we ship.",
    },
    {
      title: "Our People & Culture",
      body: "At CORBONLY, our greatest asset is our team — engineers, consultants, designers, and problem-solvers united by a passion for technology and a commitment to excellence. We foster a culture of continuous learning, encouraging every team member to stay current with emerging technologies. Our flat organisational structure means ideas flow freely and every voice matters, resulting in creative solutions that a hierarchical consultancy would never conceive.",
    },
  ];

  return (
    <section id="about" className="py-28" style={{ background: "#0A1628" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Hero */}
        <div className="text-center mb-20">
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5"
            style={{
              background: "rgba(246,140,30,0.12)",
              color: "#F68C1E",
              border: "1px solid rgba(246,140,30,0.25)",
            }}
          >
            About CORBONLY
          </span>
          <h2
            className="font-display font-extrabold text-4xl md:text-6xl text-[#F68C1E] max-w-3xl mx-auto leading-tight mb-5"
            style={{ letterSpacing: "-0.02em" }}
          >
            Building J&K's Digital Future —{" "}
            <span className="italic" style={{ color: "#EE4D2F" }}>
              One Solution at a Time
            </span>
          </h2>
          <p className="text-[#b8cfe0] text-lg max-w-2xl mx-auto font-body leading-relaxed">
            From a small team in Budgam to J&K's most trusted IT consultancy —
            our journey is defined by results, relationships, and relentless
            innovation.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {[
            { num: "5+", label: "Years of Excellence", Icon: Trophy },
            { num: "50+", label: "Happy Clients", Icon: Users },
            { num: "100+", label: "Projects Delivered", Icon: Briefcase },
            { num: "98%", label: "Client Satisfaction", Icon: Star },
          ].map(({ num, label, Icon }) => (
            <div
              key={label}
              className="rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 cursor-default group"
              style={{ background: "#0d1f3c", border: "1px solid #1e3a5a" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 32px rgba(246,140,30,0.15)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(246,140,30,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "#1e3a5a";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(246,140,30,0.12)" }}
              >
                <Icon size={22} style={{ color: "#F68C1E" }} />
              </div>
              <div className="font-display font-extrabold text-5xl text-[#F68C1E] leading-none mb-2">
                {num}
              </div>
              <div className="text-[#8ab0cc] text-sm font-body">{label}</div>
            </div>
          ))}
        </div>

        {/* Two-Column: Story + Values */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Story Cards */}
          <div className="space-y-5">
            {stories.map((s) => (
              <div
                key={s.title}
                className="rounded-xl p-6 transition-all duration-200"
                style={{
                  background: "#0A1628",
                  borderLeft: "4px solid #F68C1E",
                  border: "1px solid #1e3a5a",
                  borderLeftWidth: "4px",
                  borderLeftColor: "#F68C1E",
                }}
              >
                <h3 className="font-display font-bold text-lg text-[#F68C1E] mb-3">
                  {s.title}
                </h3>
                <p className="text-[#b8cfe0] font-body text-sm leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}

            {/* Company Info */}
            <div
              className="rounded-xl p-5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(246,140,30,0.07), rgba(238,77,47,0.07))",
                border: "1px solid rgba(246,140,30,0.2)",
              }}
            >
              <p className="text-sm font-semibold text-[#F68C1E] font-display mb-1">
                CORBONLY PRIVATE LIMITED
              </p>
              <p className="text-xs text-[#b8cfe0] font-body">
                Registered under the Ministry of Corporate Affairs, Government
                of India
              </p>
              <p className="text-xs text-[#8ab0cc] font-body mt-1">
                CIN: U72900JK2019PTC012345 · GST: 01AABCC1234D1Z5
              </p>
            </div>
          </div>

          {/* Right: Core Commitments */}
          <div>
            <h3 className="font-display font-bold text-xl text-[#F68C1E] mb-6">
              Our Core Commitments
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((v) => (
                <div
                  key={v}
                  className="flex items-start gap-3 rounded-xl p-4 transition-all duration-200 cursor-default"
                  style={{ background: "#0d1f3c", border: "1px solid #1e3a5a" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 0 16px rgba(246,140,30,0.12)";
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(246,140,30,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "none";
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "#1e3a5a";
                  }}
                >
                  <CheckCircle
                    size={15}
                    className="shrink-0 mt-0.5"
                    style={{ color: "#F68C1E" }}
                  />
                  <span className="text-xs text-[#b8cfe0] font-body leading-relaxed">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Journey Timeline — Horizontal */}
        <div className="mb-20">
          <h3 className="font-display font-bold text-2xl text-[#F68C1E] text-center mb-12">
            Our Journey
          </h3>
          <div className="relative">
            {/* Horizontal line */}
            <div
              className="absolute left-0 right-0 top-1/2 h-[2px] hidden lg:block"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #F68C1E 20%, #EE4D2F 80%, transparent)",
              }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`flex flex-col ${i % 2 === 0 ? "lg:flex-col" : "lg:flex-col-reverse"} items-center gap-3`}
                >
                  <div
                    className="rounded-xl p-4 w-full text-center transition-all duration-200"
                    style={{
                      background: "#0d1f3c",
                      border: "1px solid #1e3a5a",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "rgba(246,140,30,0.5)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        "0 4px 20px rgba(246,140,30,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "#1e3a5a";
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        "none";
                    }}
                  >
                    <div className="font-display font-extrabold text-lg text-[#F68C1E] mb-1">
                      {m.year}
                    </div>
                    <div className="font-display font-bold text-[#b8cfe0] text-xs mb-2">
                      {m.title}
                    </div>
                    <p className="text-[#8ab0cc] text-xs font-body leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                  {/* Dot */}
                  <div
                    className="w-4 h-4 rounded-full shrink-0 z-10 hidden lg:block"
                    style={{
                      background: "#F68C1E",
                      boxShadow: "0 0 10px rgba(246,140,30,0.6)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Cards */}
        <div>
          <h3 className="font-display font-bold text-2xl text-[#F68C1E] text-center mb-10">
            The People Behind CORBONLY
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl overflow-hidden transition-all duration-300 cursor-default"
                style={{ background: "#0d1f3c", border: "1px solid #1e3a5a" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 12px 40px rgba(246,140,30,0.15)";
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(246,140,30,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "#1e3a5a";
                }}
              >
                {/* Gradient top border */}
                <div
                  className="h-1 w-full"
                  style={{
                    background: "linear-gradient(90deg, #F68C1E, #EE4D2F)",
                  }}
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-display font-extrabold text-sm shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #F68C1E, #EE4D2F)",
                        color: "#fff",
                      }}
                    >
                      {member.initials}
                    </div>
                    <div>
                      <div className="font-display font-bold text-[#F68C1E] text-base">
                        {member.name}
                      </div>
                      <div className="text-[#8ab0cc] text-xs font-body">
                        {member.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-[#b8cfe0] text-sm font-body leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
// ─── Services ─────────────────────────────────────────────────────────────────
const domainServices = [
  {
    icon: <Globe size={28} />,
    title: "IT Consultancy",
    description:
      "Strategic technology consulting to align your IT infrastructure with your long-term business goals and unlock meaningful growth. Our consultants conduct in-depth assessments of your current technology landscape and deliver actionable roadmaps with clear priorities. We help you make informed investment decisions, avoid costly mistakes, and ensure every technology initiative delivers measurable ROI. From board-level strategy to hands-on implementation guidance, CORBONLY is your trusted technology advisor.",
  },
  {
    icon: <Code2 size={28} />,
    title: "Software Development",
    description:
      "Custom web and enterprise applications built with modern technology stacks — scalable, secure, and high-performing. Whether you need a customer-facing portal, an internal workflow tool, or a complex multi-tenant SaaS platform, our engineers craft solutions tailored to your exact requirements. We follow rigorous code review, automated testing, and documentation practices to ensure your software is maintainable for years to come. Every line of code we write is written with your business's future in mind.",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Digital Transformation",
    description:
      "End-to-end digital transformation roadmaps that modernise legacy systems, eliminate manual processes, and position your business for the digital economy. We assess your current state, identify quick wins alongside strategic long-term initiatives, and guide your team through every stage of change with minimal disruption. Our transformation programmes have helped clients reduce operational costs by up to 40% while dramatically improving employee productivity and customer satisfaction. True transformation is about culture and process, not just technology.",
  },
  {
    icon: <Cloud size={28} />,
    title: "Cloud Solutions",
    description:
      "Comprehensive cloud migration, architecture design, and managed services across AWS, Azure, and Google Cloud platforms. We help you select the right cloud strategy — whether public, private, hybrid, or multi-cloud — based on your workloads, compliance requirements, and cost targets. Our certified cloud architects design resilient, auto-scaling infrastructure that grows with your business while keeping costs under control. Post-migration, we provide ongoing management, cost optimisation, and 24/7 monitoring so you can focus on your core business.",
  },
  {
    icon: <Shield size={28} />,
    title: "Cybersecurity",
    description:
      "Comprehensive security audits, continuous threat monitoring, and compliance frameworks to protect your business from ever-evolving cyber threats. We perform penetration testing, vulnerability assessments, and code security reviews to identify weaknesses before attackers do. Our team helps you achieve and maintain compliance with ISO 27001, SOC 2, and India's IT Act requirements, giving your clients and partners confidence in your security posture. In a world where data breaches can destroy reputations overnight, security is not optional — it is foundational.",
  },
  {
    icon: <HeadphonesIcon size={28} />,
    title: "IT Support",
    description:
      "Reliable round-the-clock IT support, infrastructure maintenance, and helpdesk services that keep your operations running without interruption. Our support teams handle everything from day-to-day user issues and hardware troubleshooting to critical incident response and disaster recovery. We offer flexible SLA-backed support plans that scale with your team size and criticality requirements. With CORBONLY as your IT support partner, your team spends less time fighting technology fires and more time doing the work that matters.",
  },
];

const techServices = [
  {
    icon: <Smartphone size={28} />,
    title: "Mobile App Development",
    description:
      "Native iOS, native Android, and cross-platform mobile applications built with React Native and Flutter for seamless, performant user experiences. We design and build apps that users actually love — intuitive interfaces, smooth animations, and offline-capable architectures that work reliably even on India's varied network conditions. From consumer apps with millions of users to enterprise mobility solutions for field teams, we deliver mobile products that stand out in crowded app stores. Our apps go through rigorous QA testing on real devices before every release.",
  },
  {
    icon: <Database size={28} />,
    title: "Database Management",
    description:
      "Database design, optimisation, migration, and ongoing administration for both relational (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis, DynamoDB) systems. Poor database design is one of the most common causes of application performance problems and data integrity issues — our experts ensure your data architecture is solid from day one. We perform query optimisation, index analysis, and capacity planning to keep your applications fast even as data volumes grow. Whether you need a new database design or help with a legacy system, we bring clarity and expertise.",
  },
  {
    icon: <Layers size={28} />,
    title: "API Integration",
    description:
      "RESTful and GraphQL API design, development, and third-party integration to connect every part of your business ecosystem seamlessly. Modern businesses run on dozens of tools — CRMs, ERPs, payment gateways, logistics APIs, government portals — and getting them to talk to each other is critical for operational efficiency. We design well-documented, versioned APIs that other developers enjoy working with, and we have deep experience integrating India-specific platforms like Razorpay, Shiprocket, DigiLocker, and GST APIs. Connected systems are productive systems.",
  },
  {
    icon: <Cpu size={28} />,
    title: "DevOps & Automation",
    description:
      "CI/CD pipelines, infrastructure-as-code, and automated testing frameworks that enable your team to ship faster with greater confidence and fewer production incidents. We implement GitOps workflows using GitHub Actions, GitLab CI, or Jenkins, paired with Terraform and Ansible for repeatable, version-controlled infrastructure. Automated testing suites — unit, integration, and end-to-end — catch regressions before they reach production, dramatically reducing the cost of bugs. Great DevOps transforms software delivery from a stressful event into a routine activity.",
  },
  {
    icon: <Zap size={28} />,
    title: "Performance Optimisation",
    description:
      "Application profiling, load testing, and systematic optimisation to achieve sub-second response times and handle peak traffic without degradation. We use tools like New Relic, Datadog, k6, and Lighthouse to identify bottlenecks across the entire stack — from database query plans and API response times to frontend bundle sizes and render blocking resources. Our optimisation work has helped clients reduce page load times by over 60% and handle 10x their previous traffic levels without infrastructure upgrades. Fast applications convert better, retain users longer, and rank higher in search.",
  },
  {
    icon: <Globe size={28} />,
    title: "Web Development",
    description:
      "Pixel-perfect, fully responsive websites and progressive web applications built with exceptional user experience, accessibility, and search engine optimisation at their core. We work with React, Next.js, and modern CSS to create web experiences that are as performant as they are beautiful, achieving Core Web Vitals scores that drive organic traffic and conversion. Our UX-led design process ensures every interface decision is grounded in user research and data rather than personal preference. From marketing landing pages to complex web platforms, we build for results.",
  },
];

const industryServices = [
  {
    icon: <Heart size={28} />,
    title: "Healthcare",
    description:
      "Digital solutions that improve patient outcomes, streamline clinical workflows, and ensure strict data privacy compliance for healthcare providers across India.",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Education",
    description:
      "EdTech platforms, learning management systems, and student information systems designed to make quality education accessible and engaging at scale.",
  },
  {
    icon: <Building2 size={28} />,
    title: "Government",
    description:
      "e-Governance portals, citizen service platforms, and secure document management systems that modernise public service delivery for government bodies.",
  },
  {
    icon: <ShoppingCart size={28} />,
    title: "E-Commerce",
    description:
      "Scalable online stores, marketplace platforms, and omnichannel retail solutions with deep integration of Indian payment gateways and logistics networks.",
  },
  {
    icon: <DollarSign size={28} />,
    title: "Finance & Fintech",
    description:
      "Secure banking interfaces, lending platforms, and financial dashboards built with RBI compliance, robust audit trails, and enterprise-grade security.",
  },
  {
    icon: <Home size={28} />,
    title: "Real Estate",
    description:
      "Property listing platforms, CRM systems for agents, and virtual tour integrations that modernise how developers and brokers connect buyers with properties.",
  },
];

function ServiceCard({
  icon,
  title,
  description,
}: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div
      className="service-card group rounded-xl p-6 transition-all duration-300 cursor-default hover:-translate-y-1"
      style={{
        background: "#0A1628",
        borderTop: "3px solid #F68C1E",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 8px 30px rgba(246,140,30,0.2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 4px 20px rgba(0,0,0,0.4)";
      }}
    >
      <div
        className="mb-4 flex items-center justify-center rounded-full w-12 h-12 text-white"
        style={{ background: "#F68C1E" }}
      >
        {icon}
      </div>
      <h3 className="font-display font-bold text-lg mb-2 text-[#F68C1E]">
        {title}
      </h3>
      <p
        className="text-sm font-body leading-relaxed"
        style={{ color: "#b8cfe0" }}
      >
        {description}
      </p>
      <div
        className="mt-4 flex items-center gap-1 text-sm font-semibold"
        style={{ color: "#F68C1E" }}
      >
        Learn more <ChevronRight size={14} />
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="bg-[#0a1628] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p
            className="text-sm font-bold tracking-widest uppercase mb-3"
            style={{ color: "#F68C1E" }}
          >
            Our Services
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2
              className="font-display font-extrabold text-4xl md:text-5xl text-[#F68C1E] max-w-lg leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Solutions Built for
              <span className="text-gradient"> Every Challenge.</span>
            </h2>
            <p className="text-gray-300 max-w-sm font-body text-sm leading-relaxed">
              From startups to enterprises, we deliver technology solutions that
              drive measurable results and lasting competitive advantage.
            </p>
          </div>
        </div>

        <Tabs defaultValue="domain" className="w-full">
          <TabsList className="mb-10 bg-section-gray rounded-full p-1 h-auto w-fit flex-wrap">
            <TabsTrigger
              data-ocid="services.domain.tab"
              value="domain"
              className="rounded-full px-6 py-2 text-sm font-semibold text-black data-[state=active]:bg-foreground data-[state=active]:text-white"
            >
              By Domain
            </TabsTrigger>
            <TabsTrigger
              data-ocid="services.technology.tab"
              value="technology"
              className="rounded-full px-6 py-2 text-sm font-semibold text-black data-[state=active]:bg-foreground data-[state=active]:text-white"
            >
              By Technology
            </TabsTrigger>
            <TabsTrigger
              data-ocid="services.industry.tab"
              value="industry"
              className="rounded-full px-6 py-2 text-sm font-semibold text-black data-[state=active]:bg-foreground data-[state=active]:text-white"
            >
              By Industry
            </TabsTrigger>
          </TabsList>
          <TabsContent value="domain">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {domainServices.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="technology">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {techServices.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="industry">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {industryServices.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

// ─── Industries We Serve ──────────────────────────────────────────────────────
function Industries() {
  const industries = [
    {
      icon: <Heart size={32} />,
      image: "/assets/generated/card-healthcare-bg.dim_800x600.jpg",
      title: "Healthcare & Life Sciences",
      desc: "The healthcare sector demands the highest standards of data security, regulatory compliance, and system reliability. CORBONLY builds HIPAA-aligned digital health platforms, telemedicine portals, and clinical data management systems that help providers deliver better patient care while reducing administrative burden. Our solutions integrate with existing EMR systems and government health programmes, ensuring continuity and interoperability across the care continuum.",
      solutions: [
        "Telemedicine & patient portals",
        "Hospital management systems",
        "ABDM integration & health IDs",
        "Medical billing & claims automation",
      ],
    },
    {
      icon: <GraduationCap size={32} />,
      image: "/assets/generated/card-edu-bg.dim_800x600.jpg",
      title: "Education & EdTech",
      desc: "Education technology is transforming how India learns, and CORBONLY is at the forefront of this revolution. We build adaptive learning platforms, school management systems, examination portals, and student engagement tools that work seamlessly on low-bandwidth connections common across Jammu & Kashmir. Our EdTech solutions support multiple languages, offline access, and AI-powered personalisation to serve diverse learner needs across urban and rural settings.",
      solutions: [
        "LMS & course management platforms",
        "Online examination & proctoring systems",
        "Student information management",
        "Live class & video streaming tools",
      ],
    },
    {
      icon: <Building2 size={32} />,
      image: "/assets/generated/card-govt-bg.dim_800x600.jpg",
      title: "Government & Public Sector",
      desc: "Government digital transformation is one of the most impactful areas of technology investment, touching the lives of millions of citizens. CORBONLY has delivered secure, accessible e-governance portals, citizen service applications, and document management systems for public sector clients. We understand the unique challenges of government procurement, data sovereignty requirements, and the imperative of inclusivity — building solutions that work for citizens regardless of technical literacy or device access.",
      solutions: [
        "Citizen service portals & e-governance",
        "Document management & digital archives",
        "Public grievance redressal systems",
        "Smart city dashboards & analytics",
      ],
    },
    {
      icon: <ShoppingCart size={32} />,
      image: "/assets/generated/card-ecommerce-bg.dim_800x600.jpg",
      title: "E-Commerce & Retail",
      desc: "Indian e-commerce is one of the fastest-growing sectors in the world, and retailers need technology that can scale with explosive demand. We build custom e-commerce platforms, marketplace solutions, and omnichannel retail systems with deep integration of Razorpay, PayU, Shiprocket, Delhivery, and GST-compliant invoicing. Our solutions handle everything from product catalogue management and inventory tracking to customer loyalty programmes and real-time analytics dashboards that drive smarter merchandising decisions.",
      solutions: [
        "Multi-vendor marketplace platforms",
        "Inventory & order management systems",
        "GST-compliant billing & e-invoicing",
        "Customer loyalty & retention tools",
      ],
    },
    {
      icon: <DollarSign size={32} />,
      image: "/assets/generated/card-fintech-bg.dim_800x600.jpg",
      title: "Finance & Fintech",
      desc: "Financial services require the perfect intersection of security, compliance, and user experience — and CORBONLY delivers all three. We have built lending platforms, digital banking interfaces, insurance tech tools, and financial analytics dashboards for clients ranging from cooperative banks to NBFC startups. Our fintech solutions are built on secure, auditable architectures that meet RBI guidelines and enable seamless UPI, NACH, and account aggregator integrations. Trust and transparency are non-negotiable in finance, and they define our approach.",
      solutions: [
        "Digital banking & neo-bank platforms",
        "Loan origination & management systems",
        "UPI & payment gateway integrations",
        "Regulatory reporting & compliance tools",
      ],
    },
    {
      icon: <Home size={32} />,
      image: "/assets/generated/card-tech-bg.dim_800x600.jpg",
      title: "Real Estate & PropTech",
      desc: "The real estate sector is undergoing a digital revolution, with buyers increasingly researching and even transacting online before visiting properties in person. CORBONLY builds property listing portals, agent CRM systems, virtual tour platforms, and construction project management tools for developers, brokers, and property managers. Our PropTech solutions integrate map-based search, AI-powered recommendations, and digital documentation workflows that reduce the time and friction involved in property transactions significantly.",
      solutions: [
        "Property listing & search portals",
        "Agent CRM & lead management",
        "Virtual tours & 3D walkthroughs",
        "Digital agreement & documentation tools",
      ],
    },
  ];

  return (
    <section id="industries" className="bg-[#0a1628] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 text-center">
          <p
            className="text-sm font-bold tracking-widest uppercase mb-3"
            style={{ color: "#F68C1E" }}
          >
            Industries
          </p>
          <h2
            className="font-display font-extrabold text-4xl md:text-5xl text-[#F68C1E]"
            style={{ letterSpacing: "-0.02em" }}
          >
            Industries We Serve
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mt-4 font-body text-sm leading-relaxed">
            Deep domain expertise across six high-growth sectors, delivering
            solutions that understand the unique regulatory, operational, and
            user experience requirements of each industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="relative rounded-2xl overflow-hidden group cursor-default"
              style={{ minHeight: "320px" }}
            >
              <img
                src={ind.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/80 to-[#0A1628]/40 group-hover:from-[#0A1628] group-hover:via-[#0A1628]/70 transition-all duration-300" />
              <div
                className="relative z-10 p-7 flex flex-col"
                style={{ minHeight: "320px" }}
              >
                <div className="mb-4 text-orange-400">{ind.icon}</div>
                <h3 className="font-display font-bold text-lg mb-3 text-[#F68C1E]">
                  {ind.title}
                </h3>
                <p className="text-xs text-gray-200 font-body leading-relaxed mb-5">
                  {ind.desc}
                </p>
                <ul className="space-y-2 mt-auto">
                  {ind.solutions.map((sol) => (
                    <li
                      key={sol}
                      className="flex items-center gap-2 text-xs text-gray-100 font-body"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "#F68C1E" }}
                      />
                      {sol}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How We Work ─────────────────────────────────────────────────────────────
function HowWeWork() {
  const steps = [
    {
      num: "01",
      title: "We Listen First",
      desc: "You talk, we take notes — real ones. Before anything else, we need to fully understand what you're trying to solve, what's been tried before, and what constraints matter most. This is not a box-checking exercise.",
    },
    {
      num: "02",
      title: "We Make a Plan",
      desc: "Our team maps out the entire project in plain language — no jargon, no vague timelines. You'll know exactly what gets built, in what order, and why. If something doesn't make sense, we explain it differently until it does.",
    },
    {
      num: "03",
      title: "We Get Building",
      desc: "Work starts in focused two-week cycles. You see real progress every fortnight — actual features you can click and test, not progress reports. Feedback is fast and changes are normal, not a problem.",
    },
    {
      num: "04",
      title: "We Launch Properly",
      desc: "Going live is not just pressing a button. We test everything, train your team, and make sure the first day is smooth. We're on standby throughout launch day — because surprises happen and they need to be handled fast.",
    },
    {
      num: "05",
      title: "We Stick Around",
      desc: "The relationship doesn't end at delivery. We monitor performance, handle post-launch fixes, and keep your product improving over time. Most of our clients have been with us for years.",
    },
  ];

  return (
    <section id="process" className="bg-section-gray py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 text-center">
          <p
            className="text-sm font-bold tracking-widest uppercase mb-3"
            style={{ color: "#F68C1E" }}
          >
            Our Process
          </p>
          <h2
            className="font-display font-extrabold text-4xl md:text-5xl text-[#F68C1E]"
            style={{ letterSpacing: "-0.02em" }}
          >
            How We Work
          </h2>
          <p className="text-black max-w-lg mx-auto mt-4 font-body text-sm leading-relaxed">
            Five stages. No jargon. Just clear milestones and honest
            communication from start to finish.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="group relative bg-[#0d1f3c] rounded-2xl p-6 border border-[#2a4a6a] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-[#FFF4E6] flex items-center justify-center mb-4">
                <span className="text-sm font-bold text-[#F68C1E]">
                  {s.num}
                </span>
              </div>
              <h3 className="font-display font-bold text-base text-[#F68C1E] mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-sm text-gray-300 font-body leading-relaxed">
                {s.desc}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-[#F68C1E] z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Technology Stack ─────────────────────────────────────────────────────────
function TechStack() {
  const categories = [
    {
      title: "Frontend",
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter"],
    },
    {
      title: "Backend",
      techs: ["Node.js", "Python", "Django", "FastAPI", "Java / Spring Boot"],
    },
    {
      title: "Cloud & Infrastructure",
      techs: [
        "AWS",
        "Microsoft Azure",
        "Google Cloud",
        "DigitalOcean",
        "Cloudflare",
      ],
    },
    {
      title: "Database",
      techs: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB"],
    },
    {
      title: "DevOps & Tools",
      techs: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Datadog"],
    },
  ];

  return (
    <section className="bg-dark py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 text-center">
          <p
            className="text-sm font-bold tracking-widest uppercase mb-3"
            style={{ color: "#F68C1E" }}
          >
            Technology
          </p>
          <h2
            className="font-display font-extrabold text-4xl md:text-5xl text-[#F68C1E]"
            style={{ letterSpacing: "-0.02em" }}
          >
            Our Technology Stack
          </h2>
          <p className="text-orange-400 max-w-xl mx-auto mt-4 font-body text-sm leading-relaxed">
            We work with the best-in-class tools and frameworks across every
            layer of the stack, chosen for reliability, community support, and
            long-term maintainability.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3
                className="font-display font-bold text-sm uppercase tracking-widest mb-4"
                style={{ color: "#F68C1E" }}
              >
                {cat.title}
              </h3>
              <div className="space-y-2">
                {cat.techs.map((tech) => (
                  <div
                    key={tech}
                    className="bg-[#0d1e38] border border-[#1e3a5a] rounded-lg px-4 py-3 text-sm text-gray-100 font-body hover:bg-[#162238] hover:border-[#2a4a6a] transition-all cursor-default"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Case Studies ─────────────────────────────────────────────────────────────
function CaseStudies() {
  const cases = [
    {
      company: "ValleyMed Hospital, Srinagar",
      category: "Healthcare",
      challenge:
        "ValleyMed was managing patient records through a combination of paper files and disconnected Excel spreadsheets, leading to delayed diagnoses, billing errors, and an inability to analyse clinical outcomes across their three-hospital network. Staff were spending over two hours daily on administrative tasks that should have been automated, and the lack of a centralised system was creating dangerous data silos between departments.",
      solution:
        "CORBONLY designed and delivered a unified hospital management system covering patient registration, EMR, pharmacy management, lab reporting, billing, and a patient-facing mobile app for appointment booking and report access. Built on a FHIR-compliant architecture and integrated with ABDM's health ID system, the platform was deployed in phases over six months with zero disruption to ongoing patient care. All staff were trained through in-person workshops supplemented by video tutorials accessible on the platform itself.",
      results: [
        "65% reduction in patient waiting times at registration desks",
        "99.7% billing accuracy, eliminating ₹18 lakh in annual revenue leakage",
        "14,000+ patients onboarded with digital health IDs in the first quarter",
      ],
    },
    {
      company: "KashmirKart E-Commerce, Budgam",
      category: "E-Commerce",
      challenge:
        "KashmirKart, a local e-commerce startup focused on Kashmiri handicrafts and food products, was running on a generic off-the-shelf platform that could not support their unique needs — multi-vendor onboarding for artisans with limited digital literacy, cash-on-delivery workflows for rural customers, and a catalogue of hand-crafted products that required custom attribute management. The platform was also struggling under peak season traffic during Eid and Diwali sales, leading to frequent downtime and abandoned carts.",
      solution:
        "We built a fully custom multi-vendor marketplace on a modern React and Node.js stack with a bespoke artisan onboarding flow featuring WhatsApp-based registration and Aadhaar verification. The infrastructure was deployed on AWS with auto-scaling configured to handle 50x normal traffic peaks. We integrated Razorpay for cards and UPI alongside a custom COD workflow with real-time Delhivery and Ecom Express shipping tracking. A multilingual admin dashboard was built in Kashmiri, Urdu, and Hindi to ensure accessibility for all vendor partners.",
      results: [
        "320% increase in peak season sales versus the previous year",
        "Zero downtime during Eid 2024 sale — 15,000 concurrent users handled",
        "340 artisan vendors onboarded in the first six months, up from 45",
      ],
    },
    {
      company: "Bhat Trading Co., Jammu",
      category: "ERP & Automation",
      challenge:
        "Bhat Trading Co., one of the oldest wholesale trading businesses in Jammu, was running its entire operation — procurement, inventory, sales, accounts, and HR — on a legacy desktop software product from 2008 that was no longer supported by its vendor. Data was siloed across departments, month-end closing took five days, and the management team had no real-time visibility into business performance. Scaling the business or expanding to new locations was effectively impossible without a modern operational foundation.",
      solution:
        "CORBONLY delivered a cloud-based ERP system built on a microservices architecture, covering purchase management, multi-warehouse inventory, sales and invoicing with GST e-filing, accounts payable/receivable, payroll, and an executive dashboard with real-time P&L and inventory visibility. The migration from the legacy system was executed with zero data loss using a custom ETL pipeline we built to extract, clean, and transform 15 years of historical data. The system was rolled out location-by-location over four months, with on-site support provided throughout.",
      results: [
        "Month-end closing reduced from 5 days to 6 hours",
        "₹28 lakh annual savings in reduced labour costs and inventory shrinkage",
        "Expansion to two new locations enabled within 12 months of go-live",
      ],
    },
  ];

  return (
    <section id="portfolio" className="bg-section-gray py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p
            className="text-sm font-bold tracking-widest uppercase mb-3"
            style={{ color: "black" }}
          >
            Case Studies
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2
              className="font-display font-extrabold text-4xl md:text-5xl text-[#F68C1E] max-w-lg leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Real Projects,
              <span className="text-gradient"> Real Results.</span>
            </h2>
            <p className="text-gray-300 max-w-sm font-body text-sm leading-relaxed">
              We let our work speak for itself. Here are three recent projects
              that delivered measurable business impact.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {cases.map((c, idx) => (
            <div
              key={c.company}
              data-ocid={`portfolio.item.${idx + 1}`}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#0A1628",
                borderLeft: "4px solid #F68C1E",
                boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
              }}
            >
              {/* Top banner */}
              <div
                className="p-8 grid lg:grid-cols-2 gap-8 items-start"
                style={{
                  background:
                    "linear-gradient(135deg, #112044 0%, #0A1628 100%)",
                }}
              >
                <div>
                  <Badge
                    className="mb-3 text-xs font-semibold"
                    style={{
                      background: "#2a1e0a",
                      color: "#F68C1E",
                      border: "1px solid #9a5a18",
                    }}
                  >
                    {c.category}
                  </Badge>
                  <h3 className="font-display font-bold text-2xl text-[#F68C1E] mb-2">
                    {c.company}
                  </h3>
                  <p className="text-sm font-body" style={{ color: "#8ba5bf" }}>
                    Project Case Study
                  </p>
                </div>
                <div className="space-y-3">
                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-3"
                    style={{ color: "#F68C1E" }}
                  >
                    Results Delivered
                  </p>
                  {c.results.map((r) => (
                    <div key={r} className="flex items-start gap-3">
                      <span
                        className="text-lg leading-none"
                        style={{ color: "#F68C1E" }}
                      >
                        ●
                      </span>
                      <span className="text-sm text-[#b8cfe0] font-body font-medium leading-snug">
                        {r}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom panel */}
              <div
                className="border-t border-[#1e3a5f] p-8 grid lg:grid-cols-2 gap-8"
                style={{ background: "#0D1E3A" }}
              >
                <div className="border-l-2 border-[#F68C1E]/30 pl-4 hover:border-[#F68C1E]/70 transition-all duration-300">
                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-2"
                    style={{ color: "#F68C1E" }}
                  >
                    The Challenge
                  </p>
                  <p
                    className="text-xs font-body leading-relaxed"
                    style={{ color: "#CBD5E1" }}
                  >
                    {c.challenge}
                  </p>
                </div>
                <div className="border-l-2 border-[#F68C1E]/30 pl-4 hover:border-[#F68C1E]/70 transition-all duration-300">
                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-2"
                    style={{ color: "#F68C1E" }}
                  >
                    Our Solution
                  </p>
                  <p
                    className="text-xs font-body leading-relaxed"
                    style={{ color: "#CBD5E1" }}
                  >
                    {c.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Us ───────────────────────────────────────────────────────────────────
function WhyUs() {
  const advantages = [
    {
      icon: <Award size={22} />,
      title: "Industry Expertise",
      desc: "5+ years delivering IT solutions across fintech, healthcare, e-commerce, and government sectors. Our team members hold certifications from AWS, Google Cloud, and Microsoft Azure, ensuring you benefit from both hands-on experience and industry-recognised knowledge across every technology domain.",
    },
    {
      icon: <Users size={22} />,
      title: "Client-First Approach",
      desc: "Your success is our success — every decision is made with your business outcomes at the centre, not our convenience. We assign dedicated account managers to every client, ensuring you always have a single point of contact who understands your project history, priorities, and constraints.",
    },
    {
      icon: <CheckCircle size={22} />,
      title: "End-to-End Delivery",
      desc: "From initial concept and requirements analysis to post-launch support and continuous improvement, we handle every phase of your technology journey under one roof. This eliminates the coordination overhead and finger-pointing that plagues engagements split across multiple vendors.",
    },
    {
      icon: <Zap size={22} />,
      title: "Agile & Transparent",
      desc: "Weekly sprints, real-time project dashboards, and proactive communication ensure you always know exactly where your project stands. We believe in radical transparency — if we anticipate a delay or encounter an obstacle, you hear about it from us immediately, not after it becomes a crisis.",
    },
    {
      icon: <Shield size={22} />,
      title: "Security by Default",
      desc: "Security is not an afterthought at CORBONLY — it is baked into every architecture decision, code review, and deployment pipeline from day one. We follow OWASP guidelines, perform regular security audits, and ensure every application we deliver is hardened against the most common and most sophisticated threats.",
    },
    {
      icon: <Globe size={22} />,
      title: "India-Specific Expertise",
      desc: "We have deep, hands-on experience integrating with the unique ecosystem of Indian platforms — UPI, NACH, DigiLocker, ABDM, GST APIs, Aadhaar-based KYC, and more. This means less friction, faster integration timelines, and solutions that work the way Indian businesses actually operate.",
    },
    {
      icon: <TrendingUp size={22} />,
      title: "Scalable Architecture",
      desc: "Every system we build is designed to scale — whether you grow from 100 users to 1 million or expand from one city to twenty. We architect for the future, not just the present, saving you from expensive re-platforming exercises when your business grows faster than expected.",
    },
    {
      icon: <Briefcase size={22} />,
      title: "Fixed-Price Projects",
      desc: "For clearly scoped projects, we offer fixed-price contracts so you always know exactly what you will pay. No surprise invoices, no scope creep without your explicit approval, and no billing ambiguity. Budget certainty is especially important for SMEs and startups, and we have structured our engagements accordingly.",
    },
  ];

  const comparison = [
    {
      aspect: "Average project timeline",
      corbonly: "On-time, milestone-driven",
      agency: "Often delayed",
      inhouse: "Depends on hiring",
    },
    {
      aspect: "Cost predictability",
      corbonly: "Fixed-price or capped T&M",
      agency: "Scope creep common",
      inhouse: "High overhead costs",
    },
    {
      aspect: "Technical expertise breadth",
      corbonly: "Full-stack, multi-domain",
      agency: "Varies by agency",
      inhouse: "Limited to hires made",
    },
    {
      aspect: "India-specific integrations",
      corbonly: "Deep UPI/GST/ABDM exp.",
      agency: "Often outsourced",
      inhouse: "Steep learning curve",
    },
    {
      aspect: "Post-launch support",
      corbonly: "24/7 SLA-backed",
      agency: "Extra cost, slow",
      inhouse: "Internal bandwidth",
    },
    {
      aspect: "Security practices",
      corbonly: "Built-in from day one",
      agency: "Inconsistent",
      inhouse: "Depends on expertise",
    },
  ];

  return (
    <section className="bg-[#0a1628] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p
            className="text-sm font-bold tracking-widest uppercase mb-3"
            style={{ color: "#F68C1E" }}
          >
            Why CORBONLY
          </p>
          <h2
            className="font-display font-extrabold text-4xl md:text-5xl text-[#F68C1E] max-w-lg leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            What Sets Us Apart
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {advantages.map((a) => (
            <div
              key={a.title}
              className="relative rounded-xl overflow-hidden group cursor-default"
              style={{ minHeight: "180px" }}
            >
              <img
                src="/assets/generated/card-advantage-bg.dim_800x600.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/90 to-[#0A1628]/70 group-hover:from-[#0A1628]/80 transition-all duration-300" />
              <div
                className="relative z-10 p-6 flex gap-4"
                style={{ minHeight: "180px" }}
              >
                <div className="mt-1 shrink-0 text-orange-400">{a.icon}</div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1 text-[#F68C1E]">
                    {a.title}
                  </h3>
                  <p className="text-sm text-gray-200 font-body leading-relaxed">
                    {a.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "#0A1628",
            boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
          }}
        >
          <div className="p-8 border-b" style={{ borderColor: "#1a2e42" }}>
            <h3 className="font-display font-bold text-2xl text-[#F68C1E] mb-1">
              How We Compare
            </h3>
            <p className="text-sm font-body" style={{ color: "#8ba5bf" }}>
              An honest look at CORBONLY vs. the alternatives.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: "1px solid #1a2e42" }}>
                  <th className="text-left p-5 text-sm font-bold text-[#F68C1E] font-display">
                    Aspect
                  </th>
                  <th
                    className="text-left p-5 text-sm font-bold font-display"
                    style={{
                      color: "#F68C1E",
                      background: "#231807",
                    }}
                  >
                    ✓ CORBONLY
                  </th>
                  <th
                    className="text-left p-5 text-sm font-bold font-display"
                    style={{ color: "#8ba5bf" }}
                  >
                    Traditional Agency
                  </th>
                  <th
                    className="text-left p-5 text-sm font-bold font-display"
                    style={{ color: "#8ba5bf" }}
                  >
                    In-House Team
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.aspect}
                    style={{
                      borderBottom: "1px solid #152030",
                      background: i % 2 === 0 ? "transparent" : "transparent",
                    }}
                  >
                    <td className="p-5 text-sm text-[#b8cfe0] font-body font-semibold">
                      {row.aspect}
                    </td>
                    <td
                      className="p-5 text-sm font-body font-semibold"
                      style={{
                        color: "#F68C1E",
                        background: "#181006",
                      }}
                    >
                      ✓ {row.corbonly}
                    </td>
                    <td
                      className="p-5 text-sm font-body"
                      style={{ color: "#7a9ab4" }}
                    >
                      ✗ {row.agency}
                    </td>
                    <td
                      className="p-5 text-sm font-body"
                      style={{ color: "#7a9ab4" }}
                    >
                      ~ {row.inhouse}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Highlight box */}
        <div className="mt-8 bg-dark rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-orange-400 text-sm font-body mb-2">
              Trusted across Jammu & Kashmir and beyond
            </p>
            <h3
              className="font-display font-extrabold text-2xl md:text-3xl text-[#F68C1E]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Local Roots. Global Standards.
            </h3>
          </div>
          <Button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-white rounded-full px-8 shrink-0 font-semibold"
            style={{ background: "linear-gradient(135deg, #F68C1E, #EE4D2F)" }}
          >
            Work With Us <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  const testimonials = [
    {
      quote:
        "CORBONLY transformed our entire backend infrastructure in just eight weeks. The team was professional, communicative, and delivered beyond every expectation we had set. What impressed me most was their willingness to explain every technical decision in terms I could understand as a non-technical founder. They feel like a genuine extension of our team rather than an outside vendor.",
      name: "Rahul Sharma",
      role: "CEO",
      company: "Sharma Enterprises, Srinagar",
    },
    {
      quote:
        "Their cloud migration strategy saved us 40% on infrastructure costs while improving application performance by 3x — simultaneously. I had worked with two other consultancies before CORBONLY, and the difference in expertise and accountability is night and day. They documented everything thoroughly, trained our internal team, and were available for questions even months after the project was technically complete.",
      name: "Priya Mehta",
      role: "CTO",
      company: "MedCare Solutions, Jammu",
    },
    {
      quote:
        "From custom ERP development to day-to-day IT support, CORBONLY has been our primary technology partner for over three years. Their team genuinely understands the trading business — they did not just build what we asked for, they challenged our assumptions and delivered something better. The reliability and responsiveness of their support team is exceptional, especially during our busy trading seasons.",
      name: "Arjun Bhat",
      role: "Director Operations",
      company: "Bhat Trading Co., Budgam",
    },
    {
      quote:
        "We approached CORBONLY to build our online marketplace for Kashmiri handicrafts, and they delivered a platform that our artisan vendors — many of whom had never used a smartphone before — found genuinely easy to use. The multilingual support and WhatsApp-based onboarding were ideas that came from CORBONLY's team, not from our brief. That level of proactive thinking is rare and incredibly valuable.",
      name: "Fatima Wani",
      role: "Founder & CEO",
      company: "KashmirKart, Budgam",
    },
    {
      quote:
        "The cybersecurity audit CORBONLY conducted for our fintech platform uncovered seventeen critical vulnerabilities that our internal team had completely missed. They provided a detailed remediation plan with prioritised fixes and worked alongside our developers to resolve every issue. Knowing that our platform has been hardened by experts gives us and our investors enormous peace of mind.",
      name: "Vikram Singh",
      role: "CISO",
      company: "NorthPay Fintech, Delhi",
    },
    {
      quote:
        "What sets CORBONLY apart is the combination of technical depth and business acumen. They do not just write code — they understand why you are building something and shape their solutions accordingly. Our hospital management system has transformed how we deliver patient care, and we attribute a significant part of that success to the thoughtfulness CORBONLY brought to the design and implementation process.",
      name: "Dr. Imran Khan",
      role: "Medical Director",
      company: "ValleyMed Hospital, Srinagar",
    },
  ];

  return (
    <section className="bg-section-gray py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 text-center">
          <p
            className="text-sm font-bold tracking-widest uppercase mb-3"
            style={{ color: "#F68C1E" }}
          >
            Testimonials
          </p>
          <h2
            className="font-display font-extrabold text-4xl md:text-5xl text-[#F68C1E]"
            style={{ letterSpacing: "-0.02em" }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ background: "#0A1628" }}
            >
              {/* Top banner with gradient and quote decoration */}
              <div
                className="relative flex items-center justify-between px-7 pt-7 pb-5"
                style={{
                  background:
                    i % 3 === 0
                      ? "linear-gradient(135deg, #1a2d4a 0%, #0d1f35 100%)"
                      : i % 3 === 1
                        ? "linear-gradient(135deg, #1d2a1a 0%, #0f1f0d 100%)"
                        : "linear-gradient(135deg, #2a1a2e 0%, #1a0d20 100%)",
                  borderBottom: "2px solid rgba(246,140,30,0.25)",
                }}
              >
                {/* Avatar circle */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-display font-extrabold text-xl text-white shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #F68C1E, #e05a00)",
                    flexShrink: 0,
                  }}
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                {/* Star rating */}
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={14}
                      fill="#F68C1E"
                      style={{ color: "#F68C1E" }}
                    />
                  ))}
                </div>
                {/* Decorative huge quote */}
                <span
                  className="absolute right-5 bottom-0 translate-y-1/2 font-display font-extrabold leading-none select-none pointer-events-none"
                  style={{
                    fontSize: "7rem",
                    color: "#3a2808",
                    lineHeight: 1,
                  }}
                >
                  &ldquo;
                </span>
              </div>

              {/* Content area */}
              <div className="flex flex-col flex-1 px-7 pt-5 pb-7 gap-5">
                <p
                  className="font-body text-sm leading-relaxed flex-1"
                  style={{ color: "#daeaf5" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    background:
                      "linear-gradient(90deg, #F68C1E 0%, transparent 100%)",
                    opacity: 0.5,
                  }}
                />

                {/* Author info + arrow */}
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <div className="font-display font-bold text-[#F68C1E] text-base">
                      {t.name}
                    </div>
                    <div
                      className="text-xs font-body mt-0.5"
                      style={{ color: "#F68C1E" }}
                    >
                      {t.role} &middot; {t.company}
                    </div>
                  </div>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, #F68C1E, #e05a00)",
                    }}
                  >
                    <ArrowRight size={16} className="text-[#b8cfe0]" />
                  </div>
                </div>
              </div>

              {/* Left orange accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, #F68C1E 0%, rgba(246,140,30,0.2) 100%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Our Process ──────────────────────────────────────────────────────────────
function OurProcess() {
  const steps = [
    {
      number: "01",
      title: "We Listen First",
      description:
        "Before touching any technology, we sit down with you — sometimes for hours. We ask the hard questions: What's actually slowing your team down? Where are you losing money without realising it? What did your last vendor get wrong? This isn't a sales call. It's the most important conversation we'll have.",
      icon: "🎧",
      bullets: [
        "A written summary of everything discussed",
        "Honest feasibility feedback",
        "A clear scope before any money changes hands",
      ],
    },
    {
      number: "02",
      title: "We Plan It Together",
      description:
        "We don't disappear and reappear three weeks later with a 40-page document nobody reads. Planning happens in real-time with your team — wireframes on whiteboards, architecture sketches you actually understand, and a timeline built around your business calendar, not ours.",
      icon: "🗺️",
      bullets: [
        "Visual project blueprint",
        "Fixed milestones with buffer built in",
        "Tech stack explained in plain English",
      ],
    },
    {
      number: "03",
      title: "We Build, You Watch",
      description:
        "Every two weeks you see working software — not slides, not mockups. Our shared project board is live 24/7. You can raise a concern at 11pm and we'll address it first thing in the morning. No black boxes, no surprises at delivery.",
      icon: "🔧",
      bullets: [
        "Bi-weekly working demos",
        "Direct access to the development team",
        "Zero surprise invoices",
      ],
    },
    {
      number: "04",
      title: "We Launch and Stay",
      description:
        "Go-live day is carefully rehearsed, not improvised. We run load tests, train your team, and stay on standby for 30 days post-launch. When you need something tweaked six months later, we're still here — not gone the moment the final invoice was paid.",
      icon: "🛡️",
      bullets: [
        "30-day post-launch support included",
        "Your team trained and confident",
        "Ongoing retainer options available",
      ],
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-[#0A1628]">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #F68C1E 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Soft glow accents */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "#1a0e00" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "#000d1a" }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#1e1505] border border-[#7a4a15] rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F68C1E]" />
            <span className="text-xs font-semibold tracking-widest text-[#F68C1E] uppercase font-body">
              Our Methodology
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-[#F68C1E] leading-tight">
            How We{" "}
            <span
              className="font-display"
              style={{
                background: "linear-gradient(135deg, #F68C1E 0%, #FF4B4B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Work
            </span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mt-5 font-body text-base leading-relaxed">
            Four steps. Every time. Because a process you can set your watch to
            is worth more than one that sounds impressive on paper.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line — desktop only */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{
              background: "linear-gradient(180deg, #F68C1E 0%, #7a4a15 100%)",
            }}
          />

          <div className="flex flex-col gap-16">
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={step.number}
                  data-ocid={`process.item.${idx + 1}`}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content card */}
                  <div className="group w-full md:w-[calc(50%-2.5rem)] bg-[#0d1e38] border-l-4 border-[#F68C1E] rounded-2xl p-8 shadow-lg hover:shadow-[0_8px_40px_rgba(246,140,30,0.15)] hover:-translate-y-1 transition-all duration-300">
                    {/* Step badge + icon */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-full bg-[#1e1505] border border-[#7a4a15] flex items-center justify-center">
                        <span className="text-xs font-bold text-[#F68C1E]">
                          {step.number}
                        </span>
                      </div>
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    {/* Title */}
                    <h3 className="text-xl font-bold font-display text-[#F68C1E] mb-3">
                      {step.title}
                    </h3>
                    {/* Description */}
                    <p className="text-gray-300 font-body text-sm leading-relaxed mb-5">
                      {step.description}
                    </p>
                    {/* Bullets */}
                    <div className="border-t border-[#1e3a5a] pt-4 space-y-2">
                      <p className="text-xs font-semibold text-[#F68C1E] uppercase tracking-wider mb-2">
                        What you get
                      </p>
                      {step.bullets.map((b) => (
                        <div key={b} className="flex items-start gap-2">
                          <span className="text-[#F68C1E] text-xs mt-0.5 flex-shrink-0">
                            ✓
                          </span>
                          <span className="text-gray-200 text-sm font-body">
                            {b}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center dot on the line */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0A1628] border-2 border-[#F68C1E] items-center justify-center flex-shrink-0 z-10">
                    <span className="text-xs font-bold text-[#F68C1E]">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Empty space on the other side */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-300 text-base font-body mb-5">
            Ready to start? Let's have that first conversation.
          </p>
          <a
            href="#contact"
            data-ocid="process.primary_button"
            className="inline-flex items-center gap-2 bg-[#F68C1E] hover:bg-[#e07b10] text-white font-semibold rounded-full px-8 py-3 transition-colors duration-200 shadow-lg"
          >
            Get in Touch
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function BlogInsights() {
  const articles = [
    {
      title: "Why Every SME in J&K Needs a Cloud Strategy in 2025",
      excerpt:
        "Small and medium businesses in Jammu & Kashmir are increasingly recognising that cloud adoption is not just for large corporates — it is the fastest path to operational resilience, cost efficiency, and the ability to scale without capital expenditure. In this article, we outline the five most impactful cloud moves an SME can make this year, with specific guidance for businesses operating in the unique connectivity environment of the Kashmir valley.",
      date: "February 15, 2026",
      category: "Cloud",
      readTime: "6 min read",
    },
    {
      title:
        "Building for Bharat: UX Principles for India-First Digital Products",
      excerpt:
        "Designing digital products for India requires a fundamentally different set of assumptions than designing for a Western audience — from the diversity of devices and connection speeds to the multilingual user base and the primacy of WhatsApp as a communication channel. Drawing on our experience building products used by millions of Indian users, we share the UX principles that consistently make the difference between a product that gets adopted and one that gets abandoned after the first week.",
      date: "January 28, 2026",
      category: "Product Design",
      readTime: "8 min read",
    },
    {
      title: "The True Cost of Cybersecurity Neglect for Indian Businesses",
      excerpt:
        "India recorded over 1.3 million cybersecurity incidents in 2024, with SMEs accounting for the majority of successful breaches — largely because they underestimate their exposure and overestimate the cost of protection. In this analysis, we break down the real financial and reputational costs of common security failures, walk through the most exploited vulnerabilities in Indian business applications, and offer a practical, budget-conscious security roadmap for businesses with fewer than 200 employees.",
      date: "January 10, 2026",
      category: "Cybersecurity",
      readTime: "10 min read",
    },
  ];

  return (
    <section className="bg-section-gray py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p
            className="text-sm font-bold tracking-widest uppercase mb-3"
            style={{ color: "#F68C1E" }}
          >
            Insights
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2
              className="font-display font-extrabold text-4xl md:text-5xl text-[#F68C1E] max-w-lg leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Latest From Our
              <span className="text-gradient"> Knowledge Base.</span>
            </h2>
            <p className="text-gray-300 max-w-sm font-body text-sm leading-relaxed">
              Practical technology insights for business leaders, written by the
              CORBONLY team.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a, idx) => (
            <article
              key={a.title}
              data-ocid={`blog.item.${idx + 1}`}
              className="relative rounded-2xl overflow-hidden group cursor-default flex flex-col"
              style={{ minHeight: "360px" }}
            >
              <img
                src="/assets/generated/card-blog-bg.dim_800x600.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/75 to-[#0A1628]/30 transition-all duration-300" />
              <div
                className="relative z-10 p-6 flex flex-col flex-1"
                style={{ minHeight: "360px" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: "#3d2b10",
                      color: "#F68C1E",
                      border: "1px solid #a05a18",
                    }}
                  >
                    {a.category}
                  </span>
                  <span className="text-xs text-gray-300">{a.readTime}</span>
                </div>
                <h3 className="font-display font-bold text-lg mb-3 leading-snug text-[#F68C1E]">
                  {a.title}
                </h3>
                <p className="text-sm text-gray-200 font-body leading-relaxed flex-1">
                  {a.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-gray-300">{a.date}</span>
                  <button
                    type="button"
                    data-ocid={`blog.${idx + 1}.button`}
                    className="flex items-center gap-1 text-sm font-semibold"
                    style={{ color: "#F68C1E" }}
                  >
                    Read More <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Band ─────────────────────────────────────────────────────────────────
function CTABand() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-dark py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p
          className="text-sm font-bold tracking-widest uppercase mb-4"
          style={{ color: "#F68C1E" }}
        >
          Ready to Start?
        </p>
        <h2
          className="font-display font-extrabold text-4xl md:text-6xl text-[#F68C1E] leading-tight mb-6"
          style={{ letterSpacing: "-0.03em" }}
        >
          Let's Build Something
          <span className="text-gradient"> Remarkable Together.</span>
        </h2>
        <p className="text-orange-400 max-w-xl mx-auto mb-10 font-body">
          Whether you need a technology strategy, a custom application, or
          reliable IT support — we're ready to listen, plan, and deliver.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            data-ocid="cta.primary_button"
            size="lg"
            onClick={() => scrollTo("#contact")}
            className="text-white rounded-full px-10 py-3 text-base font-semibold h-auto"
            style={{ background: "linear-gradient(135deg, #F68C1E, #EE4D2F)" }}
          >
            Get In Touch <ArrowRight className="ml-2" size={18} />
          </Button>
          <Button
            data-ocid="cta.secondary_button"
            size="lg"
            variant="outline"
            onClick={() => scrollTo("#services")}
            className="border-[#2a4a6a] text-[#b8cfe0] hover:bg-[#162238] hover:text-[#b8cfe0] rounded-full px-10 py-3 text-base h-auto bg-black"
          >
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const mutation = useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Not connected");
      await actor.submitMessage(form.name, form.email, form.message);
    },
    onSuccess: () => {
      toast.success("Message sent! We'll get back to you shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
    },
    onError: () => toast.error("Failed to send. Please try again."),
  });

  const expectations = [
    "We'll respond to your enquiry within 24 business hours",
    "A senior consultant will review your requirements personally",
    "We'll schedule a free 45-minute discovery call at your convenience",
    "You'll receive a no-obligation proposal within 5 business days",
    "No spam, no hard sell — just an honest conversation about your needs",
  ];

  const contactItems = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "info@corbonlypvtltd.in",
      href: "mailto:info@corbonlypvtltd.in",
    },
    {
      icon: <Globe size={20} />,
      label: "Website",
      value: "corbonlypvtltd.in",
      href: "https://corbonlypvtltd.in",
    },
    {
      icon: <MapPin size={20} />,
      label: "Address",
      value: "47 Northern Steel, Sanat Nagar, Baghat, Budgam, J&K — 190005",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #06101f 0%, #0A1628 55%, #0f1e35 100%)",
      }}
    >
      {/* Decorative background blobs */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(246,140,30,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(238,77,47,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-bold tracking-widest uppercase mb-4 inline-flex items-center gap-2"
            style={{ color: "#F68C1E" }}
          >
            <span
              className="inline-block w-6 h-px"
              style={{ background: "#F68C1E" }}
            />
            Contact Us
            <span
              className="inline-block w-6 h-px"
              style={{ background: "#F68C1E" }}
            />
          </p>
          <h2
            className="font-display font-extrabold text-4xl md:text-6xl text-[#F68C1E] mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Let's Start the{" "}
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, #F68C1E, #EE4D2F)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Conversation.
            </span>
          </h2>
          {/* Orange accent line */}
          <div className="flex justify-center mt-4 mb-6">
            <div
              className="h-1 w-20 rounded-full"
              style={{ background: "linear-gradient(90deg, #F68C1E, #EE4D2F)" }}
            />
          </div>
          <p className="text-gray-300 font-body text-base leading-relaxed max-w-2xl mx-auto">
            Whether you have a well-defined project in mind or simply want to
            explore how technology can help your business grow, we would love to
            hear from you. Every great project starts with a conversation —
            reach out today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Card */}
          <div
            className="rounded-2xl p-8 border"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderColor: "rgba(246,140,30,0.2)",
              boxShadow:
                "0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <h3 className="font-display font-bold text-xl text-[#F68C1E] mb-6">
              Send Us a Message
            </h3>
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-semibold text-gray-300 mb-2 block uppercase tracking-wider"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    data-ocid="contact.name.input"
                    placeholder="Rahul Sharma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl h-12 px-4 text-sm font-body text-[#b8cfe0] placeholder-gray-500 outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1.5px solid rgba(255,255,255,0.1)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#F68C1E";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px rgba(246,140,30,0.15)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                    onMouseEnter={(e) => {
                      if (document.activeElement !== e.currentTarget)
                        e.currentTarget.style.borderColor =
                          "rgba(246,140,30,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      if (document.activeElement !== e.currentTarget)
                        e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.1)";
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="text-xs font-semibold text-gray-300 mb-2 block uppercase tracking-wider"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    data-ocid="contact.phone.input"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full rounded-xl h-12 px-4 text-sm font-body text-[#b8cfe0] placeholder-gray-500 outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1.5px solid rgba(255,255,255,0.1)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#F68C1E";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px rgba(246,140,30,0.15)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                    onMouseEnter={(e) => {
                      if (document.activeElement !== e.currentTarget)
                        e.currentTarget.style.borderColor =
                          "rgba(246,140,30,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      if (document.activeElement !== e.currentTarget)
                        e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.1)";
                    }}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="text-xs font-semibold text-gray-300 mb-2 block uppercase tracking-wider"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  data-ocid="contact.email.input"
                  type="email"
                  placeholder="rahul@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl h-12 px-4 text-sm font-body text-[#b8cfe0] placeholder-gray-500 outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1.5px solid rgba(255,255,255,0.1)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#F68C1E";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 3px rgba(246,140,30,0.15)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  onMouseEnter={(e) => {
                    if (document.activeElement !== e.currentTarget)
                      e.currentTarget.style.borderColor =
                        "rgba(246,140,30,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    if (document.activeElement !== e.currentTarget)
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.1)";
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold text-gray-300 mb-2 block uppercase tracking-wider"
                >
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  data-ocid="contact.message.textarea"
                  placeholder="Tell us about your project or challenge — the more detail, the better we can help..."
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full rounded-xl px-4 py-3 text-sm font-body text-[#b8cfe0] placeholder-gray-500 outline-none transition-all duration-200 resize-none"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1.5px solid rgba(255,255,255,0.1)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#F68C1E";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 3px rgba(246,140,30,0.15)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  onMouseEnter={(e) => {
                    if (document.activeElement !== e.currentTarget)
                      e.currentTarget.style.borderColor =
                        "rgba(246,140,30,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    if (document.activeElement !== e.currentTarget)
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.1)";
                  }}
                />
              </div>
              <button
                type="button"
                data-ocid="contact.submit_button"
                disabled={
                  mutation.isPending ||
                  !form.name ||
                  !form.email ||
                  !form.message
                }
                onClick={() => mutation.mutate()}
                className="w-full h-13 py-3.5 rounded-xl text-white font-semibold font-display text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #F68C1E, #EE4D2F)",
                  boxShadow: "0 4px 20px rgba(246,140,30,0.3)",
                }}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.disabled) {
                    e.currentTarget.style.transform =
                      "translateY(-2px) scale(1.01)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 30px rgba(246,140,30,0.5)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(246,140,30,0.3)";
                }}
              >
                {mutation.isPending ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-label="Loading"
                      role="img"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message <ArrowRight size={18} />
                  </span>
                )}
              </button>
            </div>

            {/* What to expect */}
            <div
              className="mt-6 rounded-xl p-5 border"
              style={{
                background: "rgba(246,140,30,0.05)",
                borderColor: "rgba(246,140,30,0.15)",
              }}
            >
              <p className="text-sm font-display font-bold text-[#F68C1E] mb-3 flex items-center gap-2">
                <CheckCircle size={16} style={{ color: "#F68C1E" }} />
                What to Expect After Submitting
              </p>
              <ul className="space-y-2">
                {expectations.map((exp) => (
                  <li key={exp} className="flex items-start gap-2 font-body">
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                      style={{ background: "#F68C1E" }}
                    />
                    <span className="text-xs text-gray-300">{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Info Side */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display font-extrabold text-3xl text-[#F68C1E] mb-3">
                Get In{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #F68C1E, #EE4D2F)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Touch
                </span>
              </h3>
              <div
                className="h-0.5 w-14 rounded-full mb-4"
                style={{
                  background: "linear-gradient(90deg, #F68C1E, #EE4D2F)",
                }}
              />
              <p className="text-gray-300 font-body text-sm leading-relaxed">
                Have a project in mind or need IT guidance? Our team is ready to
                help you navigate your technology challenges. We respond to
                every enquiry personally — you will never get an automated reply
                when you reach out to CORBONLY.
              </p>
            </div>

            {/* Contact info cards */}
            <div className="space-y-4">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="group flex items-start gap-4 p-4 rounded-xl border cursor-default transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(246,140,30,0.06)";
                    el.style.borderColor = "rgba(246,140,30,0.3)";
                    el.style.transform = "translateY(-3px)";
                    el.style.boxShadow = "0 8px 24px rgba(246,140,30,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(255,255,255,0.03)";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.transform = "none";
                    el.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, #F68C1E, #EE4D2F)",
                      boxShadow: "0 4px 14px rgba(246,140,30,0.35)",
                    }}
                  >
                    <span className="text-white">{item.icon}</span>
                  </div>
                  <div>
                    <div
                      className="text-xs font-bold uppercase tracking-widest mb-1"
                      style={{ color: "#F68C1E" }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel="noreferrer"
                        className="text-[#b8cfe0] font-semibold text-sm hover:text-orange-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[#b8cfe0] font-semibold text-sm leading-relaxed">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours Card */}
            <div
              className="rounded-xl p-5 border transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.08)",
                borderLeftWidth: "4px",
                borderLeftColor: "#F68C1E",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(246,140,30,0.06)";
                el.style.boxShadow = "0 8px 24px rgba(246,140,30,0.1)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(255,255,255,0.03)";
                el.style.boxShadow = "none";
                el.style.transform = "none";
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Phone size={16} style={{ color: "#F68C1E" }} />
                <span className="font-display font-bold text-[#F68C1E]">
                  Business Hours
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-200 font-body font-semibold">
                  Mon – Sat: 9:00 AM – 7:00 PM IST
                </p>
                <p className="text-xs text-orange-400 font-body font-medium">
                  Emergency support available 24/7
                </p>
              </div>
            </div>

            {/* Map / Location Card */}
            <div
              className="rounded-xl border p-6 text-center transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(246,140,30,0.06)";
                el.style.borderColor = "rgba(246,140,30,0.25)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(255,255,255,0.03)";
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.transform = "none";
              }}
            >
              <MapPin
                size={32}
                className="mx-auto mb-2"
                style={{ color: "#F68C1E" }}
              />
              <p className="text-[#F68C1E] font-display font-bold text-sm mb-1">
                Jammu &amp; Kashmir, India
              </p>
              <p className="text-gray-400 text-xs font-body">
                Sanat Nagar, Budgam — 190005
              </p>
              <p
                className="text-xs mt-2 font-body"
                style={{ color: "#F68C1E" }}
              >
                Serving clients across J&amp;K, Delhi, Mumbai &amp; pan-India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      toast.success("You're subscribed! Monthly insights incoming.");
      setNewsletterEmail("");
    }
  };

  const LogoSVG = () => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CORBONLY logo"
      role="img"
    >
      <title>CORBONLY</title>
      <polygon
        points="19,2 35,10.5 35,27.5 19,36 3,27.5 3,10.5"
        fill="#F68C1E"
        stroke="#F68C1E"
        strokeWidth="1"
      />
      <circle cx="19" cy="19" r="4" fill="#0A1628" />
      <line
        x1="19"
        y1="10"
        x2="19"
        y2="15"
        stroke="#0A1628"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="19"
        y1="23"
        x2="19"
        y2="28"
        stroke="#0A1628"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="14.5"
        x2="14.5"
        y2="17"
        stroke="#0A1628"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="23.5"
        y1="21"
        x2="28"
        y2="23.5"
        stroke="#0A1628"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="23.5"
        x2="14.5"
        y2="21"
        stroke="#0A1628"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="23.5"
        y1="17"
        x2="28"
        y2="14.5"
        stroke="#0A1628"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  const socials = [
    { label: "LinkedIn", abbr: "in", href: "https://linkedin.com" },
    { label: "Twitter/X", abbr: "𝕏", href: "https://x.com" },
    { label: "GitHub", abbr: "gh", href: "https://github.com" },
    { label: "Instagram", abbr: "ig", href: "https://instagram.com" },
  ];

  const companyLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#portfolio" },
    { label: "Blog Insights", href: "#blog" },
    { label: "Careers", href: "#contact" },
    { label: "Contact", href: "#contact" },
  ];

  const serviceLinks = [
    { label: "Web Development", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "Cloud Solutions", href: "#services" },
    { label: "ERP Systems", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
    { label: "Digital Strategy", href: "#services" },
  ];

  return (
    <footer style={{ background: "#060e1c" }}>
      {/* Pre-Footer CTA Band */}
      <div
        className="relative overflow-hidden py-20 px-6"
        style={{
          background:
            "linear-gradient(135deg, #0A1628 0%, #112044 50%, #0A1628 100%)",
        }}
      >
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #F68C1E 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Orange glow orb */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, #F68C1E, transparent)",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5"
            style={{
              background: "rgba(246,140,30,0.12)",
              color: "#F68C1E",
              border: "1px solid rgba(246,140,30,0.25)",
            }}
          >
            Let's Build Together
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[#F68C1E] mb-4 leading-tight">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-[#b8cfe0] text-lg mb-10 max-w-xl mx-auto font-body">
            Join 50+ businesses that trust CORBONLY for their digital
            transformation. No sales pitch — just honest advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              data-ocid="footer.cta.primary_button"
              onClick={() => scrollTo("#contact")}
              className="px-8 py-3 rounded-full font-bold text-base text-white shadow-lg hover:scale-105 transition-transform"
              style={{
                background: "linear-gradient(135deg, #F68C1E, #EE4D2F)",
              }}
            >
              Start Your Project →
            </Button>
            <Button
              data-ocid="footer.cta.secondary_button"
              onClick={() => scrollTo("#portfolio")}
              variant="outline"
              className="px-8 py-3 rounded-full font-bold text-base text-[#F68C1E] border-[#F68C1E] hover:bg-[rgba(246,140,30,0.08)] transition-colors"
            >
              See Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div
        className="max-w-7xl mx-auto px-6 pt-16 pb-10"
        style={{ borderTop: "1px solid #1e3a5a" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <LogoSVG />
              <div className="flex flex-col leading-tight">
                <span className="text-[#F68C1E] font-bold text-xl tracking-wide font-display">
                  CORBONLY
                </span>
                <span className="text-[#8ab0cc] text-[10px] uppercase tracking-widest font-light">
                  Private Limited
                </span>
              </div>
            </div>
            <p className="text-[#8ab0cc] text-sm font-body leading-relaxed mb-5 max-w-xs">
              Premier IT consultancy from Jammu & Kashmir — delivering
              enterprise-grade digital solutions across India.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2 mb-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-[#8ab0cc] transition-all duration-200 shrink-0"
                  style={{ background: "#112044", border: "1px solid #1e3a5a" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.boxShadow = "0 0 14px rgba(246,140,30,0.5)";
                    el.style.borderColor = "#F68C1E";
                    el.style.color = "#F68C1E";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.boxShadow = "none";
                    el.style.borderColor = "#1e3a5a";
                    el.style.color = "#8ab0cc";
                  }}
                >
                  {s.abbr}
                </a>
              ))}
            </div>

            {/* Certification Badges */}
            <div className="flex flex-wrap gap-2">
              {["MSME", "GST", "J&K IT"].map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#F68C1E] font-body"
                  style={{
                    border: "1px solid rgba(246,140,30,0.35)",
                    background: "rgba(246,140,30,0.06)",
                  }}
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-[#F68C1E] font-display font-bold text-xs tracking-[0.15em] uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(l.href)}
                    className="text-[#8ab0cc] text-sm font-body relative group flex items-center gap-2 hover:text-[#F68C1E] transition-colors duration-200"
                  >
                    <span
                      className="inline-block w-0 h-[1px] group-hover:w-3 transition-all duration-200"
                      style={{ background: "#F68C1E" }}
                    />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-[#F68C1E] font-display font-bold text-xs tracking-[0.15em] uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(l.href)}
                    className="text-[#8ab0cc] text-sm font-body relative group flex items-center gap-2 hover:text-[#F68C1E] transition-colors duration-200"
                  >
                    <span
                      className="inline-block w-0 h-[1px] group-hover:w-3 transition-all duration-200"
                      style={{ background: "#F68C1E" }}
                    />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <h4 className="text-[#F68C1E] font-display font-bold text-xs tracking-[0.15em] uppercase mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4 mb-6">
              <li>
                <a
                  href="mailto:info@corbonlypvtltd.in"
                  className="flex items-start gap-3 text-[#8ab0cc] text-sm font-body hover:text-[#F68C1E] transition-colors group"
                >
                  <Mail
                    size={15}
                    className="shrink-0 mt-0.5 group-hover:text-[#F68C1E]"
                    style={{ color: "#F68C1E" }}
                  />
                  info@corbonlypvtltd.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+911234567890"
                  className="flex items-center gap-3 text-[#8ab0cc] text-sm font-body hover:text-[#F68C1E] transition-colors group"
                >
                  <Phone
                    size={15}
                    className="shrink-0"
                    style={{ color: "#F68C1E" }}
                  />
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#8ab0cc] text-sm font-body">
                <MapPin
                  size={15}
                  className="shrink-0 mt-0.5"
                  style={{ color: "#F68C1E" }}
                />
                <span>
                  47 Northern Steel, Sanat Nagar,
                  <br />
                  Budgam, J&K — 190005
                </span>
              </li>
            </ul>
            {/* Business Hours Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
              style={{
                background: "rgba(246,140,30,0.1)",
                border: "1px solid rgba(246,140,30,0.3)",
                color: "#F68C1E",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Mon–Sat: 9AM–7PM IST
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-[#8ab0cc] text-xs font-body mb-2">
                Join 500+ businesses — monthly tech insights:
              </p>
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <Input
                  data-ocid="footer.newsletter.input"
                  type="email"
                  placeholder="your@email.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-[#112044] border-[#1e3a5a] text-[#b8cfe0] placeholder:text-[#3a5a7a] rounded-full text-xs h-8 focus:border-[#F68C1E]"
                />
                <Button
                  data-ocid="footer.newsletter.button"
                  type="submit"
                  size="sm"
                  className="rounded-full text-white shrink-0 text-xs font-semibold h-8 px-3"
                  style={{
                    background: "linear-gradient(135deg, #F68C1E, #EE4D2F)",
                  }}
                >
                  Join
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8ab0cc]"
          style={{ borderTop: "1px solid #1e3a5a" }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span>© {year} CORBONLY PRIVATE LIMITED</span>
            <span className="opacity-30">|</span>
            <button
              type="button"
              className="hover:text-[#F68C1E] transition-colors"
            >
              Privacy Policy
            </button>
            <span className="opacity-30">|</span>
            <button
              type="button"
              className="hover:text-[#F68C1E] transition-colors"
            >
              Terms of Service
            </button>
            <span className="opacity-30">|</span>
            <button
              type="button"
              className="hover:text-[#F68C1E] transition-colors"
            >
              Sitemap
            </button>
          </div>
          <p className="text-[#8ab0cc]">
            Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-[#F68C1E] transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Toaster richColors />
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Stats />
        <AboutUs />
        <Services />
        <Industries />
        <HowWeWork />
        <TechStack />
        <CaseStudies />
        <WhyUs />
        <Testimonials />
        <OurProcess />
        <BlogInsights />
        <CTABand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
