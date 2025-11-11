"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, DollarSign, GraduationCap, Linkedin, MessageCircle, Search, Shield, Sparkles, Target, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="large"
      sizing="medium"
      background="radialGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Programs", id: "features" },
            { name: "Success Stories", id: "testimonials" },
            { name: "Get Started", id: "contact" }
          ]}
          brandName="WORK/WIN"
          button={{
            text: "Start Your Grind",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Get Your Career Moving"
          description="Start your grind now, and change your life, with WORK/WIN. This isn't just door-to-door. It's breaking through limits. Develop real skill and confidence that last a lifetime as you earn based on performance."
          tag="Work Hard • Learn Fast • Earn Big"
          buttons={[
            { text: "Start Your Grind", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://pixabay.com/get/gbbc06bc54b6b16a79a8e9b7d2a6237e08829dca423531e94589cc65ef4418eaaf8f8c69a91655aadff55df10e75e85df3b96093337045da6e33868ac9fdf5ebf_1280.jpg"
          imageAlt="Motivated professional achieving success"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="We built work/win around strong culture, ethical leadership, world-class training, transparent pay, and a service you can stand behind. Here, you'll be challenged, supported, and rewarded for real results."
          features={[
            {
              icon: Users,
              title: "Strong Culture",
              description: "Join a community of driven professionals who support each other's growth and celebrate real achievements together."
            },
            {
              icon: Shield,
              title: "Ethical Leadership",
              description: "Work with leaders who prioritize integrity, transparency, and doing what's right for both customers and team members."
            },
            {
              icon: GraduationCap,
              title: "World-Class Training",
              description: "Get comprehensive training that builds real skills and confidence to succeed in any sales environment."
            },
            {
              icon: DollarSign,
              title: "Transparent Pay",
              description: "Know exactly how you earn with clear, performance-based compensation that rewards your hard work and results."
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="What You'll Do"
          description="Master the complete sales process from first contact to closing deals, with skills that last a lifetime"
          tag="Your Journey"
          textboxLayout="default"
          animationType="blur-reveal"
          gridVariant="uniform-all-items-equal"
          features={[
            {
              title: "Engage",
              description: "Connect with homeowners in person. Build real conversations that create trust and open the door to opportunity.",
              icon: MessageCircle
            },
            {
              title: "Qualify",
              description: "Ask the right questions to understand each homeowner's needs and match them with the best solution.",
              icon: Search
            },
            {
              title: "Close",
              description: "Present clearly. Build confidence. Seal the deal. Then track your results daily to measure progress and growth.",
              icon: Target
            },
            {
              title: "Build Skills",
              description: "Develop real skill and confidence that last a lifetime as you earn based on performance and continuous improvement.",
              icon: TrendingUp
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Opportunities Available"
          description="Choose from top-performing programs with proven track records and strong market demand"
          tag="Programs"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "1",
              brand: "Solar Energy",
              name: "Residential Solar Installation",
              price: "High Demand",
              rating: 5,
              reviewCount: "2.5k",
              imageSrc: "https://pixabay.com/get/g60e684619fe22f03ac5637ba0774b132c08c459ac4e81e92ad59cba9ecb79468d958366eb0b3e38560c621a2d23128519ef73d56d9b7086cb4ddd0f65ea865f2_1280.jpg",
              imageAlt: "Solar panel installation"
            },
            {
              id: "2",
              brand: "Roofing",
              name: "Premium Roofing Solutions",
              price: "Top Earner",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://pixabay.com/get/g07c5621c328c7922007212eddc17b82990a5b5d3ad0488f9da7a532e37232708b09c40169eace47b36e17dadfe0e552cc95f138eb8e8846e43eac1f51b8faa4d_1280.jpg",
              imageAlt: "Roofing installation"
            },
            {
              id: "3",
              brand: "Home Security",
              name: "Smart Security Systems",
              price: "Growing Market",
              rating: 4,
              reviewCount: "3.2k",
              imageSrc: "https://pixabay.com/get/gade61c7c122790b14819ca1cac04bf97336fb64284f1d618d5e232c808693093662ebbe13c35f65494df1094d1032e1e50d8a41c262ea78c9c90bdc20b87d495_1280.jpg",
              imageAlt: "Home security system"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Choose Your Path"
          description="Select the program that matches your goals and commitment level"
          tag="Get Started"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "1",
              price: "Summer Program",
              name: "3-Month Intensive",
              buttons: [
                { text: "Apply Now", href: "contact" },
                { text: "Learn More", href: "about" }
              ],
              features: [
                "Complete training program",
                "Weekly coaching sessions",
                "Performance tracking",
                "Certificate completion"
              ]
            },
            {
              id: "2",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "Year-Round",
              name: "Career Development",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Schedule Call", href: "contact" }
              ],
              features: [
                "Ongoing skill development",
                "Leadership opportunities",
                "Advanced training modules",
                "Mentorship program",
                "Team building events"
              ]
            },
            {
              id: "3",
              price: "Custom",
              name: "Corporate Partnership",
              buttons: [
                { text: "Contact Sales", href: "contact" },
                { text: "View Details", href: "about" }
              ],
              features: [
                "Tailored program design",
                "Dedicated account manager",
                "Custom training materials",
                "Performance analytics"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Success By The Numbers"
          description="Real results from participants nationwide who've transformed their careers"
          tag="Impact"
          textboxLayout="default"
          animationType="blur-reveal"
          gridVariant="uniform-all-items-equal"
          metrics={[
            {
              id: "1",
              icon: TrendingUp,
              title: "Average Earnings Increase",
              value: "150%"
            },
            {
              id: "2",
              icon: Users,
              title: "Program Graduates",
              value: "5,000+"
            },
            {
              id: "3",
              icon: Award,
              title: "Success Rate",
              value: "87%"
            },
            {
              id: "4",
              icon: Target,
              title: "Career Advancement",
              value: "92%"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Your Success Team"
          description="Learn from industry leaders who've built successful careers and are committed to your growth"
          tag="Leadership"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          members={[
            {
              id: "1",
              name: "Marcus Johnson",
              role: "Program Director",
              description: "15+ years in direct sales with expertise in team development and performance optimization.",
              imageSrc: "https://pixabay.com/get/gd8f3c0607b6d1dbb24ec54c5d6fdbc84dedb5094a42e1e5daa24f14fcae91b7b67a9c2cf0eeb574b87180b35defcc5c542374b3306a78afe10a32354542e2728_1280.jpg",
              imageAlt: "Marcus Johnson",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Training Manager",
              description: "Former top performer turned coach, specializing in communication skills and closing techniques.",
              imageSrc: "https://pixabay.com/get/g94a9deae34899e00effe5edb38368f45e2fbe6a36bff5f86cda4f640bdf7f2aa584e2499dab6ab5afba4943fa86e1dcf454c7af08c04a04ea08c2f5e94d41105_1280.jpg",
              imageAlt: "Sarah Chen",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "3",
              name: "David Rodriguez",
              role: "Success Coach",
              description: "Expert in career development with a track record of helping thousands achieve their goals.",
              imageSrc: "https://pixabay.com/get/ga856298e619d8f995797048bb6407e69c85be84fa6a0297af1737848d0f9932686274a701b6bf4c49dc9d32d0919c6e8a0d24a81f4a0d3dec9c38f38346403f6_1280.jpg",
              imageAlt: "David Rodriguez",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "4",
              name: "Lisa Thompson",
              role: "Operations Lead",
              description: "Ensures smooth program execution and provides ongoing support to all participants.",
              imageSrc: "https://pixabay.com/get/gb9c50c1ab7f2e29da7e7e852ce0b928132c7364777e6806d159510ba744c6b1d01fae840e7162dcba8f71107bd805655f9ed7a2b6eca74de36096b559690a554_1280.jpg",
              imageAlt: "Lisa Thompson",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Success Stories"
          description="Hear from participants who've transformed their careers and built lasting skills"
          tag="Real Results"
          textboxLayout="default"
          animationType="blur-reveal"
          gridVariant="uniform-all-items-equal"
          testimonials={[
            {
              id: "1",
              name: "Alex Rivera",
              role: "Sales Representative",
              company: "Solar Solutions Inc",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g361b01611230c7622b8e9f8d9728b9062bd0484e339cfaf8cc1c4a191e274ec0cec1d24822645e7e54aee7a1f17a968af86052dd08051bc8d9df6f3401658a3f_1280.jpg",
              imageAlt: "Alex Rivera"
            },
            {
              id: "2",
              name: "Jordan Smith",
              role: "Team Lead",
              company: "Premium Roofing",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gc0514b4d0c60315891503c9032ce2cc1a14e9a806b947c32717a9da427e55f93db50dafef25c8b4b96f167e18d2363e8ffe8bc1e16437843a2ccce32618aaf16_1280.jpg",
              imageAlt: "Jordan Smith"
            },
            {
              id: "3",
              name: "Taylor Johnson",
              role: "Account Manager",
              company: "SecureHome Systems",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gcc14ca44ddd54c0f1f4518aaef0ce84ed75abc362a2e952551fab997b52979ce57795789b8967fc143b036089422c2cda8cb73940d0f6435b778305e52450411_1280.jpg",
              imageAlt: "Taylor Johnson"
            },
            {
              id: "4",
              name: "Morgan Davis",
              role: "Regional Manager",
              company: "EcoEnergy Solutions",
              rating: 5,
              imageSrc: "https://pixabay.com/get/ge533d67cf252c3cb6d8f3d1371bdad6f0dae1d0c19cb9c6dc80530234ddddc6dc769e68de04cb49a79d27c38c74445b9c846f9a095391d6937151969787d59a2_1280.jpg",
              imageAlt: "Morgan Davis"
            },
            {
              id: "5",
              name: "Casey Wilson",
              role: "Business Development",
              company: "TechSafe Security",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gba65704d0f386c1dade48ba233e5b91f17b27ad7c7559ce5690a79520445550381e45eef964432bc25d65dc732599a9a607e57d02ef70c01b3402279ffe11788_1280.jpg",
              imageAlt: "Casey Wilson"
            },
            {
              id: "6",
              name: "Riley Brown",
              role: "Sales Director",
              company: "GreenPower Systems",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g6a4a9660a3092697917e657917962c53a427b122d8f7608587c741924629f9f155b7af43565240f6b3a58ff1426d526c3fd65db521cfa105ae2ffeda2c257434_1280.jpg",
              imageAlt: "Riley Brown"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Partner with top companies that provide quality products and services"
          tag="Partners"
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g1ed0b6d26fe8bf0c2a6fc2ebecce053748236b22de36447109e85600766a109338ce341421dfb9510801052a625d2d399f7f4048d3a7b7bf4b8995e490f49d04_1280.jpg",
            "https://pixabay.com/get/g4055db8aa15e13bf49df926a54d3dae8dde232f694ca9f663b18bf696998ba0472f224dac5383e5d4169554d5b290a1683eddb432c5f9d2b9105214408381752_1280.jpg",
            "https://pixabay.com/get/gd5ca762d12390db733a77fa91a02f5a1d2999fdb20bd7968f35e863b1bec56e6223ea66eaf90078b34f3ca3b3a2740afb0bffcf5b4c56cf5e37311f7c63bcb02_1280.jpg",
            "https://pixabay.com/get/gf4ecc3703e9a3c4e2863828ab8def5aa665a128c164fc06eaa0cd0806a392c7a313b74d2a7ea34fb7aaee8c8155460fdf0418619051eeb10c3c3901ea07129f4_1280.jpg",
            "https://pixabay.com/get/g91ec93c0fa17ed97ea6d502c87f03ebc9724b07e22336d453ddf9735f82be50f3a3d2f9a6b5c9671a178f4fe6ca227457ded0164c50b63054dd3d686c3d471b9_1280.jpg",
            "https://pixabay.com/get/gf41782332b55f037ad54fbd48e6674d1bb7104868bc9fe9ab5df3a8fa241e4a272b3023aedb082302089ddb05b80c99b454906c5de80cf545e6865836b758e9e_1280.jpg",
            "https://pixabay.com/get/g50807e5126a304d9d1fc2e51f2c017556b5434a60d8f010220d9844b72bcadd670fe8f4d886de6f881ca8f656d6634547454cf097933b330e2c0bfbeb1891541_1280.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers to common questions about our programs and opportunities"
          tag="FAQ"
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What experience do I need to get started?",
              content: "No prior sales experience required. Our comprehensive training program is designed for beginners and experienced professionals alike. We'll teach you everything you need to know."
            },
            {
              id: "2",
              title: "How much can I realistically earn?",
              content: "Earnings vary based on performance, but our top performers earn $75,000+ annually. We provide transparent pay structures and regular performance reviews to help you maximize your earnings."
            },
            {
              id: "3",
              title: "What does the training program include?",
              content: "Our training covers sales fundamentals, product knowledge, communication skills, objection handling, closing techniques, and ongoing coaching. It's a comprehensive program designed for real-world success."
            },
            {
              id: "4",
              title: "Is this just for the summer or year-round?",
              content: "We offer both summer programs and year-round career opportunities. You can start with a summer program and transition to a full-time career based on your goals and performance."
            },
            {
              id: "5",
              title: "What kind of support do you provide?",
              content: "We provide ongoing coaching, weekly team meetings, performance tracking, skill development workshops, and a supportive community of peers and mentors."
            },
            {
              id: "6",
              title: "How do I know if this is right for me?",
              content: "If you're motivated, willing to learn, and want to develop valuable sales skills while earning based on performance, this could be a great fit. We offer consultation calls to help you decide."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Career Resources"
          description="Tips, insights, and strategies to accelerate your professional growth"
          tag="Resources"
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Training",
              title: "5 Essential Sales Skills Every Professional Needs",
              excerpt: "Master these fundamental skills to build confidence and achieve consistent results in any sales environment.",
              imageSrc: "https://pixabay.com/get/gcc7d06c59d49e442eff398e3a08ccd6d444496d14c3cc62c1f213c52ce8386784fb652bfe793d520b29e184cba2737b1dae4e44aab61d45e2971a3f7c20a10d3_1280.jpg",
              imageAlt: "Sales training workshop",
              authorName: "Marcus Johnson",
              authorAvatar: "https://pixabay.com/get/gd8f3c0607b6d1dbb24ec54c5d6fdbc84dedb5094a42e1e5daa24f14fcae91b7b67a9c2cf0eeb574b87180b35defcc5c542374b3306a78afe10a32354542e2728_1280.jpg",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Success",
              title: "From Beginner to Top Performer: A Journey",
              excerpt: "Learn how new participants develop into high-achieving sales professionals through our proven system.",
              imageSrc: "https://pixabay.com/get/g64382698014643e6adf9996625dbb070af4e455fdafb767dbc1066bc34d27cbb112c2f3f16f6571066f4cebc5e707bca97db2c66be6c108eeffd6df9d947d007_1280.png",
              imageAlt: "Success celebration",
              authorName: "Sarah Chen",
              authorAvatar: "https://pixabay.com/get/g94a9deae34899e00effe5edb38368f45e2fbe6a36bff5f86cda4f640bdf7f2aa584e2499dab6ab5afba4943fa86e1dcf454c7af08c04a04ea08c2f5e94d41105_1280.jpg",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              category: "Career Growth",
              title: "Building Skills That Last a Lifetime",
              excerpt: "Discover how door-to-door sales develops transferable skills that accelerate any career path.",
              imageSrc: "https://pixabay.com/get/g03f71c2babb726344094788ab866ce41bdf5432bf8d577d9b26e6c1542816f6503ff64df22c4b26875fbfb55f4ebec88be7d13ceec90d28e39b19fa5ddf1e401_1280.jpg",
              imageAlt: "Professional development",
              authorName: "David Rodriguez",
              authorAvatar: "https://pixabay.com/get/ga856298e619d8f995797048bb6407e69c85be84fa6a0297af1737848d0f9932686274a701b6bf4c49dc9d32d0919c6e8a0d24a81f4a0d3dec9c38f38346403f6_1280.jpg",
              date: "08 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Change Your Life?"
          description="Take the first step toward building valuable skills and earning based on your performance. Our team will help you get started."
          buttonText="Start Your Journey"
          inputs={[
            { name: "firstName", type: "text", placeholder: "First Name", required: true },
            { name: "lastName", type: "text", placeholder: "Last Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your goals and experience (optional)",
            rows: 4,
            required: false
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="WORK/WIN"
          copyrightText="© 2025 | WORK/WIN"
          columns={[
            {
              title: "Programs",
              items: [
                { label: "Summer Program", href: "pricing" },
                { label: "Year-Round Career", href: "pricing" },
                { label: "Corporate Partnership", href: "contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Success Stories", href: "testimonials" },
                { label: "Training Materials", href: "blog" },
                { label: "Career Tips", href: "blog" },
                { label: "FAQ", href: "faq" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}