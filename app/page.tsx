'use client';

import { Download, Star } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="border-b border-[#E0E0E0] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* your nav content */}
        </div>
      </nav>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#5BACC6] to-[#BDEEE8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Humanize Your AI Content?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of writers and content creators who trust ZeroAI to make their AI-generated text
            undetectable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-[#5BACC6] hover:bg-[#F7F5F4] text-lg px-8 py-4 font-semibold rounded-full"
              asChild
            >
              <Link href="https://apps.apple.com/us/app/humanize-ai-zeroai/id6746722835" target="_blank">
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-[#F7F5F4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2E] mb-4">Trusted by Writers Worldwide</h2>
            <p className="text-xl text-[#A4A4A4] max-w-2xl mx-auto">
              See what our users say about ZeroAI's humanization capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#FFC02C] fill-current" />
                  ))}
                </div>
                <p className="text-[#A4A4A4] mb-6 italic">
                  "ZeroAI helped me rewrite my entire blog series. Everything passes Originality.ai and GPTZero, and still ranks on Google. It’s now part of my publishing workflow."
                </p>
                <div className="flex items-center">
                  <img
                    src="/images/sarah.png"
                    alt="Sarah Mitchell"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-[#2C2C2E]">Sarah Mitchell</p>
                    <p className="text-sm text-[#A4A4A4]">SEO Specialist</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#FFC02C] fill-current" />
                  ))}
                </div>
                <p className="text-[#A4A4A4] mb-6 italic">
                  "My professor flagged my first draft for sounding too AI-written even though it was 100% me. I now run my papers through ZeroAI and they came out sounding more natural. Passed Turnitin, no issues."
                </p>
                <div className="flex items-center">
                  <img
                    src="/images/michael.png"
                    alt="Michael Chen"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-[#2C2C2E]">Michael Chen</p>
                    <p className="text-sm text-[#A4A4A4]">College Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#FFC02C] fill-current" />
                  ))}
                </div>
                <p className="text-[#A4A4A4] mb-6 italic">
                  "I write product pages and emails with AI, but clients can tell when it sounds robotic. ZeroAI gives it that human tone they expect, without extra editing."
                </p>
                <div className="flex items-center">
                  <img
                    src="/images/emily.png"
                    alt="Emily Rodriguez"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-[#2C2C2E]">Emily Rodriguez</p>
                    <p className="text-sm text-[#A4A4A4]">Freelance Copywriter</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex justify-center gap-6">
            <a href="https://www.uneed.best/tool/humanize-ai-zeroai" target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.uneed.best/POTD3A.png"
                alt="Uneed POTD3 Badge"
                style={{ width: "250px" }}
              />
            </a>
            <a href="https://fazier.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://fazier.com/api/v1//public/badges/launch_badges.svg?badge_type=launched&theme=neutral"
                width={120}
                alt="Fazier badge"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}