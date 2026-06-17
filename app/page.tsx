"use client";

import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 border border-cyan-400/30 rounded-full bg-cyan-950/20 backdrop-blur-sm">
            <span className="text-cyan-300 font-mono text-sm">Certified Kubernetes Administrator</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent animate-pulse">
            DevOps Engineer
          </h1>
          
          <p className="text-2xl md:text-3xl text-cyan-200 mb-8 font-light">
            Building Scalable Infrastructure & Automating the Future
          </p>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Platform engineer specializing in Kubernetes orchestration, cloud-native solutions, and infrastructure as code.
            3 years of experience designing resilient systems and optimizing CI/CD pipelines for high-velocity teams.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-cyan-400 hover:bg-cyan-400/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "3+", label: "Years Experience" },
              { value: "50+", label: "Projects Deployed" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "CKA", label: "Certified" },
            ].map((stat, idx) => (
              <div key={idx} className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p className="text-lg">
                I'm a DevOps and Platform Engineer with a passion for building automated, scalable infrastructure that empowers development teams to ship faster and more reliably. My journey began with traditional system administration and evolved into cloud-native architecture and Kubernetes orchestration.
              </p>
              <p className="text-lg">
                With a Certified Kubernetes Administrator (CKA) certification and hands-on experience managing production clusters serving millions of requests daily, I bring deep expertise in container orchestration, service mesh implementation, and infrastructure as code.
              </p>
              <p className="text-lg">
                I thrive in environments where automation, monitoring, and continuous improvement are core values. Whether it's designing CI/CD pipelines, optimizing cloud costs, or implementing observability solutions, I focus on delivering measurable business impact through technical excellence.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-6 bg-gradient-to-br from-blue-950/50 to-slate-900/50 border border-blue-500/30 rounded-lg hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-cyan-300 font-mono text-sm mb-2">CERTIFICATIONS</div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">▸</span>
                    <span>Certified Kubernetes Administrator (CKA) - CNCF</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">▸</span>
                    <span>AWS Certified Solutions Architect - Associate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">▸</span>
                    <span>HashiCorp Certified: Terraform Associate</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-cyan-950/50 to-slate-900/50 border border-cyan-500/30 rounded-lg hover:border-blue-400/50 transition-all duration-300">
                <div className="text-cyan-300 font-mono text-sm mb-2">SPECIALIZATIONS</div>
                <div className="flex flex-wrap gap-2">
                  {["Kubernetes", "Docker", "Terraform", "GitOps", "Prometheus", "Jenkins"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-800/50 border border-slate-600 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-12"></div>
          
          <div className="space-y-8">
            {[
              {
                title: "Senior DevOps Engineer",
                company: "CloudScale Technologies",
                period: "2023 - Present",
                responsibilities: [
                  "Architected and deployed multi-region Kubernetes clusters on AWS EKS serving 10M+ daily requests",
                  "Reduced infrastructure costs by 40% through rightsizing, spot instances, and resource optimization",
                  "Implemented GitOps workflows using ArgoCD and Flux, enabling 50+ deployments per day",
                  "Built comprehensive observability stack with Prometheus, Grafana, and Loki for 200+ microservices",
                  "Mentored junior engineers on Kubernetes best practices and infrastructure automation"
                ]
              },
              {
                title: "Platform Engineer",
                company: "FinTech Solutions Inc",
                period: "2022 - 2023",
                responsibilities: [
                  "Migrated monolithic applications to containerized microservices on Kubernetes",
                  "Designed and implemented CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 70%",
                  "Automated infrastructure provisioning using Terraform for AWS, managing 500+ resources",
                  "Established SRE practices including SLIs, SLOs, and error budgets to maintain 99.95% uptime",
                  "Implemented secrets management using HashiCorp Vault across all environments"
                ]
              },
              {
                title: "DevOps Engineer",
                company: "StartupHub Digital",
                period: "2021 - 2022",
                responsibilities: [
                  "Built cloud infrastructure from scratch on AWS using infrastructure as code principles",
                  "Containerized 20+ applications and orchestrated them using Docker Swarm and later Kubernetes",
                  "Created automated backup and disaster recovery procedures, achieving RPO of 1 hour",
                  "Implemented monitoring solutions using CloudWatch, Datadog, and PagerDuty for 24/7 alerting",
                  "Developed Python scripts for automation of routine operational tasks"
                ]
              }
            ].map((job, idx) => (
              <div key={idx} className="relative pl-8 pb-8 border-l-2 border-blue-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900"></div>
                
                <div className="bg-gradient-to-br from-slate-900/80 to-blue-950/40 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-300 mb-1">{job.title}</h3>
                      <p className="text-xl text-blue-300">{job.company}</p>
                    </div>
                    <div className="text-slate-400 font-mono mt-2 md:mt-0">{job.period}</div>
                  </div>
                  
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, ridx) => (
                      <li key={ridx} className="flex items-start text-slate-300">
                        <span className="text-cyan-400 mr-3 mt-1">→</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Multi-Region K8s Infrastructure",
                tech: "Kubernetes • AWS EKS • Terraform",
                description: "Designed and deployed highly available Kubernetes clusters across 3 AWS regions with automated failover, supporting 15M daily requests with 99.99% uptime. Implemented cluster federation and cross-region service mesh using Istio.",
                highlights: ["Auto-scaling", "Multi-AZ", "Service Mesh"]
              },
              {
                title: "GitOps Pipeline Automation",
                tech: "ArgoCD • Flux • GitHub Actions",
                description: "Built end-to-end GitOps workflow enabling declarative infrastructure and application deployments. Reduced deployment errors by 85% and achieved automated rollbacks with drift detection and reconciliation.",
                highlights: ["Zero-downtime", "Auto-rollback", "Drift detection"]
              },
              {
                title: "Observability Platform",
                tech: "Prometheus • Grafana • Loki • Jaeger",
                description: "Implemented comprehensive observability stack for 200+ microservices, including metrics, logs, and distributed tracing. Created 50+ custom dashboards and alert rules, reducing MTTR by 60%.",
                highlights: ["Custom metrics", "Distributed tracing", "SLO tracking"]
              },
              {
                title: "Infrastructure as Code Framework",
                tech: "Terraform • Ansible • Python",
                description: "Developed modular Terraform framework managing 800+ cloud resources across AWS and GCP. Integrated policy-as-code using OPA and automated compliance scanning, achieving 100% infrastructure auditability.",
                highlights: ["Policy enforcement", "Cost optimization", "Compliance"]
              },
              {
                title: "CI/CD Migration Platform",
                tech: "Jenkins • GitHub Actions • SonarQube",
                description: "Migrated legacy Jenkins pipelines to cloud-native GitHub Actions workflows for 40+ repositories. Integrated automated testing, security scanning, and artifact management, reducing build times by 65%.",
                highlights: ["Parallel execution", "Security scanning", "Artifact caching"]
              },
              {
                title: "Disaster Recovery Automation",
                tech: "Velero • S3 • Lambda",
                description: "Architected automated backup and disaster recovery solution for Kubernetes clusters using Velero. Implemented scheduled backups, cross-region replication, and tested recovery procedures achieving 15-minute RTO.",
                highlights: ["Automated backups", "Cross-region", "15min RTO"]
              }
            ].map((project, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-slate-900/80 to-blue-950/40 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                <h3 className="text-xl font-bold text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors">
                  {project.title}
                </h3>
                <div className="text-sm text-blue-400 font-mono mb-4">{project.tech}</div>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, hidx) => (
                    <span key={hidx} className="px-3 py-1 bg-cyan-950/30 border border-cyan-600/30 text-cyan-300 rounded-full text-xs">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "Container Orchestration",
                skills: [
                  { name: "Kubernetes", level: 95 },
                  { name: "Docker", level: 90 },
                  { name: "Helm", level: 88 },
                  { name: "Istio Service Mesh", level: 82 }
                ]
              },
              {
                category: "Cloud Platforms",
                skills: [
                  { name: "Amazon Web Services", level: 92 },
                  { name: "Google Cloud Platform", level: 78 },
                  { name: "Microsoft Azure", level: 70 },
                  { name: "DigitalOcean", level: 85 }
                ]
              },
              {
                category: "Infrastructure as Code",
                skills: [
                  { name: "Terraform", level: 93 },
                  { name: "Ansible", level: 85 },
                  { name: "CloudFormation", level: 75 },
                  { name: "Pulumi", level: 68 }
                ]
              },
              {
                category: "CI/CD & GitOps",
                skills: [
                  { name: "Jenkins", level: 90 },
                  { name: "GitHub Actions", level: 88 },
                  { name: "ArgoCD", level: 86 },
                  { name: "GitLab CI", level: 80 }
                ]
              },
              {
                category: "Monitoring & Observability",
                skills: [
                  { name: "Prometheus", level: 91 },
                  { name: "Grafana", level: 89 },
                  { name: "ELK Stack", level: 84 },
                  { name: "Datadog", level: 82 }
                ]
              },
              {
                category: "Programming & Scripting",
                skills: [
                  { name: "Python", level: 87 },
                  { name: "Bash", level: 90 },
                  { name: "Go", level: 75 },
                  { name: "YAML/JSON", level: 95 }
                ]
              }
            ].map((category, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900/80 to-blue-950/40 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-300 mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, sidx) => (
                    <div key={sidx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="text-blue-400 font-mono text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000 hover:shadow-lg hover:shadow-cyan-500/50"
                          style={{ width: `${skill.level}%` }}
                          onMouseEnter={() => setActiveSkill(skill.name)}
                          onMouseLeave={() => setActiveSkill(null)}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { title: "Methodologies", items: ["Agile/Scrum", "DevOps Culture", "SRE Principles", "Infrastructure as Code", "GitOps", "Continuous Integration"] },
              { title: "Tools & Technologies", items: ["Git", "Linux Administration", "Nginx", "Redis", "PostgreSQL", "RabbitMQ"] },
              { title: "Security & Compliance", items: ["HashiCorp Vault", "RBAC", "Network Policies", "SSL/TLS", "Security Scanning", "SOC 2 Compliance"] }
            ].map((section, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500/30 transition-all duration-300">
                <h4 className="text-lg font-bold text-blue-300 mb-4">{section.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item, iidx) => (
                    <span key={iidx} className="px-3 py-1 bg-slate-800/50 border border-slate-600 text-slate-300 rounded text-sm hover:border-cyan-500/50 transition-all duration-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-12"></div>
          
          <p className="text-center text-xl text-slate-300 mb-12">
            Interested in collaborating or have a challenging infrastructure problem to solve? Let's connect.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { label: "Email", value: "devops@alexmorgan.dev", icon: "✉" },
              { label: "GitHub", value: "github.com/alexmorgan-devops", icon: "⚡" },
              { label: "LinkedIn", value: "linkedin.com/in/alex-morgan-devops", icon: "💼" },
              { label: "Location", value: "San Francisco, CA", icon: "📍" }
            ].map((contact, idx) => (
              <div key={idx} className="flex items-center p-6 bg-gradient-to-br from-slate-900/80 to-blue-950/40 border border-slate-700 rounded-lg hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mr-4">{contact.icon}</div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">{contact.label}</div>
                  <div className="text-cyan-300 font-mono">{contact.value}</div>
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-900/80 to-blue-950/40 border border-slate-700 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-cyan-300 mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-cyan-300 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-cyan-300 mb-2">Message</label>
              <textarea
                required
                rows={6}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 mb-4">
            Built with Next.js, TypeScript, and Tailwind CSS • Deployed on Kubernetes
          </p>
          <p className="text-slate-500 text-sm">
            © 2024 Alex Morgan - DevOps & Platform Engineer
          </p>
        </div>
      </footer>
    </div>
  );
}