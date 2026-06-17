import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevOps & Platform Engineer",
  description: "A professional portfolio showcasing 3 years of DevOps and platform engineering experience, Kubernetes expertise, CKA certification, infrastructure automation projects, and core competencies in cloud platforms, CI/CD pipelines, and system reliability",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}