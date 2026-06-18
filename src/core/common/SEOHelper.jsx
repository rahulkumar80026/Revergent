import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SEOHelper = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = "Revergent Technologies – Software Development Company in India";
    let description = "Revergent Technologies is a leading software development company in India delivering custom ERP, CRM, mobile app and AI-driven solutions. We build intelligent digital products that create measurable real-world business impact.";

    // Dynamically set title & description based on current path
    if (path === "/") {
      title = "Revergent Technologies – Software Development Company in India";
      description = "Revergent Technologies is a leading software development company in India delivering custom ERP, CRM, mobile app and AI-driven solutions.";
    } else if (path === "/services") {
      title = "Our Services | Revergent Technologies";
      description = "Explore our software services: Custom Software Development, Mobile Apps, Enterprise Systems, Cloud DevOps, AI Automation, and Digital Marketing.";
    } else if (path === "/services/custom-software-development") {
      title = "Custom Software Development Services | Revergent Technologies";
      description = "We engineer custom software, scalable APIs, and robust enterprise solutions tailored to solve specific business problems and drive growth.";
    } else if (path === "/services/mobile-app-development") {
      title = "Mobile App Development Services | Revergent Technologies";
      description = "High-performance iOS and Android mobile app development using React Native, Flutter, and native technologies.";
    } else if (path === "/services/ai-automation") {
      title = "AI & Intelligent Automation Services | Revergent Technologies";
      description = "Automate business workflows and gain insights with custom AI, machine learning, and natural language processing solutions.";
    } else if (path === "/services/enterprise-systems") {
      title = "Enterprise Business Systems | Revergent Technologies";
      description = "Custom ERP and CRM integration services designed to streamline enterprise workflow, resource planning, and operations.";
    } else if (path === "/services/cloud-devops") {
      title = "Cloud & DevOps Solutions | Revergent Technologies";
      description = "Scalable cloud orchestration, continuous delivery (CI/CD), security audits, and robust infrastructure monitoring.";
    } else if (path === "/services/digital-marketing") {
      title = "Digital Marketing & Enterprise SEO | Revergent Technologies";
      description = "Accelerate digital growth with data-driven search engine optimization, content marketing, and brand strategy.";
    } else if (path === "/solutions") {
      title = "Industry Solutions | Revergent Technologies";
      description = "Tailored software solutions for Retail POS, Ecommerce & D2C, EdTech, Healthcare & MedTech, and SME digital transformation.";
    } else if (path === "/solutions/retail-pos") {
      title = "Retail POS Solutions | Revergent Technologies";
      description = "Feature-rich Point of Sale (POS) software solutions built to modernize retail checkout, inventory, and analytics.";
    } else if (path === "/solutions/ecommerce-d2c") {
      title = "Ecommerce & D2C Solutions | Revergent Technologies";
      description = "High-converting online storefronts, payment integrations, and seamless supply chain software for D2C brands.";
    } else if (path === "/solutions/edtech") {
      title = "EdTech Solutions | Revergent Technologies";
      description = "Custom Learning Management Systems (LMS), interactive educational apps, and virtual classroom software.";
    } else if (path === "/solutions/healthcare") {
      title = "Healthcare & MedTech Solutions | Revergent Technologies";
      description = "Secure, HIPAA-compliant patient management, telehealth platforms, and health information systems.";
    } else if (path === "/solutions/sme-digital-transformation") {
      title = "SME Digital Transformation | Revergent Technologies";
      description = "Helping small and medium enterprises adopt modern digital tools, automate tasks, and migrate to secure cloud solutions.";
    } else if (path === "/products") {
      title = "Our Software Products | Revergent Technologies";
      description = "Discover our innovative software products, including POS, Classora learning platform, CRM, and AI automation suites.";
    } else if (path === "/resources") {
      title = "Resources & Insights | Revergent Technologies";
      description = "Read our latest articles, deep-dive whitepapers, and customer case studies detailing successful software deployments.";
    } else if (path === "/resources/blog") {
      title = "Company Blog | Revergent Technologies";
      description = "Stay updated with software development tutorials, industry trends, and technology insights from our expert developers.";
    } else if (path === "/resources/case-studies") {
      title = "Customer Case Studies | Revergent Technologies";
      description = "Real-world stories of how our software products and services helped clients achieve digital transformation.";
    } else if (path === "/resources/whitepapers") {
      title = "Technology Whitepapers | Revergent Technologies";
      description = "In-depth research reports and technical whitepapers detailing advanced architectural patterns, cloud scaling, and AI.";
    } else if (path === "/company") {
      title = "About Our Company | Revergent Technologies";
      description = "Learn about Revergent Technologies, our core values, leadership team, careers, and our mission to engineer high-impact software.";
    } else if (path === "/company/about") {
      title = "About Us | Revergent Technologies";
      description = "Discover our history, values, client success stories, and our end-to-end software consulting and development processes.";
    } else if (path === "/company/leadership") {
      title = "Our Leadership Team | Revergent Technologies";
      description = "Meet the directors, technology officers, and strategists steering innovation and client delivery at Revergent Technologies.";
    } else if (path === "/company/contact") {
      title = "Contact Us | Revergent Technologies";
      description = "Get in touch with our software engineering consultants in Noida and Ranchi to start your digital transformation journey.";
    } else if (path === "/company/careers") {
      title = "Careers at Revergent | Join Our Team";
      description = "Explore open positions for software engineers, UX designers, and product managers. Build the future of technology with us.";
    }

    document.title = title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", description);
      document.head.appendChild(metaDescription);
    }

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    const canonicalUrl = `https://www.revergent.in${path === "/" ? "" : path}`;
    if (canonical) {
      canonical.setAttribute("href", canonicalUrl);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", canonicalUrl);
      document.head.appendChild(canonical);
    }
  }, [location]);

  return null;
};

export default SEOHelper;
