import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Zap, Star, Mail, Twitter, Linkedin, Github, Download, Globe, FileText, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="border-b border-[#E0E0E0] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Image src="/images/robot-icon.png" alt="ZeroAI Robot" width={32} height={32} className="rounded-lg" />
              <span className="text-2xl font-bold text-[#2C2C2E]">ZeroAI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              
              
              
              <Button size="sm" className="bg-[#5BACC6] hover:bg-[#4A9BB0] rounded-full text-white" asChild>
                <Link href="https://apps.apple.com/us/app/humanize-ai-zeroai/id6746722835" target="_blank">
                  <Download className="w-4 h-4 mr-2" />
                  Download App
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F7F5F4] via-white to-[#BDEEE8]/20 py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="max-w-xl">
              <Badge variant="secondary" className="mb-6 bg-[#BDEEE8]/30 text-[#2C2C2E] border-[#BDEEE8] rounded-full">
                <Zap className="w-4 h-4 mr-2" />
                AI Text Humanization App
              </Badge>

              {/* Headline with App Icon */}
              <div className="flex items-start gap-4 mb-6">
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C2C2E] leading-tight">
                  Humanize AI-generated text to pass AI detection
                </h1>
              </div>

              <p className="text-xl text-[#A4A4A4] mb-8 leading-relaxed">
                Transform robotic AI content into natural, human-like writing that seamlessly bypasses detection tools
                like GPTZero, Turnitin, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#5BACC6] hover:bg-[#4A9BB0] text-lg px-8 py-4 font-semibold rounded-full text-white"
                  asChild
                >
                  <Link href="https://apps.apple.com/us/app/humanize-ai-zeroai/id6746722835" target="_blank">
                    <Download className="mr-2 h-5 w-5" />
                    Download on App Store
                  </Link>
                </Button>
                
              </div>
              <p className="text-sm text-[#A4A4A4] mt-4">3 days free trial • No credit card required</p>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/hero-ai-writing.png"
                  alt="AI text transformation illustration"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#BDEEE8] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-[#5BACC6] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-[#F7F5F4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2E] mb-4">
              Powerful Features for Perfect Humanization
            </h2>
            <p className="text-xl text-[#A4A4A4] max-w-2xl mx-auto">
              Advanced AI technology that transforms robotic text into natural, human-like writing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-[#BDEEE8]/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#5BACC6]" />
                </div>
                <CardTitle className="text-xl font-semibold text-[#2C2C2E]">Bypass AI Detectors</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-[#A4A4A4]">
                  Successfully bypass GPTZero, ZeroGPT, Turnitin, Winston, Originality AI and more with 99.9% success
                  rate.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-[#BDEEE8]/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-[#5BACC6]" />
                </div>
                <CardTitle className="text-xl font-semibold text-[#2C2C2E]">50+ Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-[#A4A4A4]">
                  Humanize content in over 50 languages, making your AI-generated text natural and authentic worldwide.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-[#BDEEE8]/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-[#5BACC6]" />
                </div>
                <CardTitle className="text-xl font-semibold text-[#2C2C2E]">Export to CSV</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-[#A4A4A4]">
                  Batch export your humanized content to CSV format for easy integration into your workflow and
                  projects.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-[#BDEEE8]/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-[#5BACC6]" />
                </div>
                <CardTitle className="text-xl font-semibold text-[#2C2C2E]">Error-Free Content</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-[#A4A4A4]">
                  Generate plagiarism-free and error-free content that maintains quality while passing all detection
                  systems.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2E] mb-4">Unlock ZeroAI PRO</h2>
            <p className="text-xl text-[#A4A4A4] max-w-2xl mx-auto">
              Choose your subscription plan and start humanizing AI content today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Plan */}
            <Card className="border-2 border-[#E0E0E0] hover:border-[#BDEEE8] transition-colors bg-white">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-semibold text-[#2C2C2E]">Monthly</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#2C2C2E]">$7.99</span>
                  <span className="text-[#A4A4A4]">/month</span>
                </div>
                <CardDescription className="mt-2 text-[#A4A4A4]">3 days free trial</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-[#5BACC6] mr-3 flex-shrink-0" />
                    <span className="text-[#2C2C2E]">7,000 words/month</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-[#5BACC6] mr-3 flex-shrink-0" />
                    <span className="text-[#2C2C2E]">2,000 words/request</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-[#5BACC6] mr-3 flex-shrink-0" />
                    <span className="text-[#2C2C2E]">Bypass AI Detectors</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-[#5BACC6] mr-3 flex-shrink-0" />
                    <span className="text-[#2C2C2E]">Plagiarism & Error free content</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-[#5BACC6] mr-3 flex-shrink-0" />
                    <span className="text-[#2C2C2E]">50+ languages</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-[#5BACC6] mr-3 flex-shrink-0" />
                    <span className="text-[#2C2C2E]">Export to CSV</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-[#5BACC6] mr-3 flex-shrink-0" />
                    <span className="text-[#2C2C2E]">Support a developer duo</span>
                  </div>
                </div>
                <Link
                  href="https://apps.apple.com/us/app/humanize-ai-zeroai/id6746722835"
                  target="_blank"
                  className="block w-full mt-8"
                >
                  <Image
                    src="/images/app-store-badge.png"
                    alt="Download on the App Store"
                    width={200}
                    height={60}
                    className="mx-auto hover:opacity-80 transition-opacity"
                  />
                </Link>
              </CardContent>
            </Card>

            {/* Annual Plan */}
            <Card className="border-2 border-[#5BACC6] relative hover:border-[#4A9BB0] transition-colors bg-white">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#5BACC6] text-white rounded-full">Best Value</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-semibold text-[#2C2C2E]">Annual</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#2C2C2E]">$39.99</span>
                  <span className="text-[#A4A4A4]">/year</span>
                </div>
                <CardDescription className="mt-2 text-[#A4A4A4]">$3.33/month • Save 58%</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-[#5BACC6] mr-3 flex-shrink-0" />
                    <span className="text-[#2C2C2E]">7,000 words/month</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-[#5BACC6] mr-3 flex-shrink-0" />
                    <span className="text-[#2C2C2E]">2,000 words/request</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-[#5BACC6] mr-3 flex-shrink-0" />
                    <span className="text-[#2C2C2E]">Bypass AI Detectors</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-[#5BACC6] mr-3 flex-shrink-0" />
                    <span className="text-[#2C2C2E]">Plagiarism & Error free content</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-[#5BACC6] mr-3 flex-shrink-0" />
                    <span className="text-[#2C2C2E]">50+ languages</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-[#5BACC6] mr-3 flex-shrink-0" />
                    <span className="text-[#2C2C2E]">Export to CSV</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-[#5BACC6] mr-3 flex-shrink-0" />
                    <span className="text-[#2C2C2E]">Support a developer duo</span>
                  </div>
                </div>
                <Link
                  href="https://apps.apple.com/us/app/humanize-ai-zeroai/id6746722835"
                  target="_blank"
                  className="block w-full mt-8"
                >
                  <Image
                    src="/images/app-store-badge.png"
                    alt="Download on the App Store"
                    width={200}
                    height={60}
                    className="mx-auto hover:opacity-80 transition-opacity"
                  />
                </Link>
              </CardContent>
            </Card>
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
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#FFC02C] fill-current" />
                  ))}
                </div>
                <p className="text-[#A4A4A4] mb-6 italic">
                  "ZeroAI completely transformed my writing workflow. The humanized content passes every AI detector
                  I've tested, and my clients can't tell the difference. It's saved me hours of manual editing."
                </p>
                <div className="flex items-center">
                <img
 			src="/images/sarah.png"
 			alt="Sarah Mitchell"
 			className="w-12 h-12 rounded-full mr-4"
		/>
                  <div>
                    <p className="font-semibold text-[#2C2C2E]">Sarah Mitchell</p>
                    <p className="text-sm text-[#A4A4A4]">Freelance Content Writer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#FFC02C] fill-current" />
                  ))}
                </div>
                <p className="text-[#A4A4A4] mb-6 italic">
                  "The mobile app is incredibly convenient. I can humanize my AI content on the go, and the batch export
                  feature saves me so much time. The 50+ language support is amazing for my international clients."
                </p>
                <div className="flex items-center">
                  <img
 			src="/images/michael.png"
  			alt="Michael Chen"
 			className="w-12 h-12 rounded-full mr-4"
		  />
                  <div>
                    <p className="font-semibold text-[#2C2C2E]">Michael Chen</p>
                    <p className="text-sm text-[#A4A4A4]">Marketing Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#FFC02C] fill-current" />
                  ))}
                </div>
                <p className="text-[#A4A4A4] mb-6 italic">
                  "I was skeptical at first, but ZeroAI actually works! The humanized text feels natural and authentic.
                  I've been using it for my blog posts and academic writing - no detection issues whatsoever."
                </p>
                <div className="flex items-center">
                  <img
 			src="/images/emily.png"
  			alt="Dr. Emily Rodriguez"
 			className="w-12 h-12 rounded-full mr-4"
		  />
                  <div>
                    <p className="font-semibold text-[#2C2C2E]">Dr. Emily Rodriguez</p>
                    <p className="text-sm text-[#A4A4A4]">Academic Writer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust Badges */}
          <div className="text-center">
            
            
          </div>
        </div>
      </section>

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
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#5BACC6] text-lg px-8 py-4 bg-transparent font-semibold rounded-full"
              asChild
            >
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2E] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/images/robot-icon.png" alt="ZeroAI Robot" width={32} height={32} className="rounded-lg" />
                <span className="text-2xl font-bold">ZeroAI</span>
              </div>
              <p className="text-[#A4A4A4] mb-6">
                Transform AI-generated text into human-like writing that passes all detection tools.
              </p>
              <div className="space-y-2">
                
              </div>
              <div className="flex space-x-4 mt-4">
                <Link href="https://twitter.com/zeroai" className="text-[#A4A4A4] hover:text-white transition-colors">
                  
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://linkedin.com/company/zeroai"
                  className="text-[#A4A4A4] hover:text-white transition-colors"
                >
                  
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="https://github.com/zeroai" className="text-[#A4A4A4] hover:text-white transition-colors">
                  
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-[#A4A4A4] hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-[#A4A4A4] hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://apps.apple.com/us/app/humanize-ai-zeroai/id6746722835"
                    target="_blank"
                    className="text-[#A4A4A4] hover:text-white transition-colors"
                  >
                    Download App
                  </Link>
                </li>
                <li>
                  
                </li>
              </ul>
            </div>

            

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="text-[#A4A4A4] hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-[#A4A4A4] hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-[#A4A4A4] hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#E0E0E0]/20 mt-12 pt-8 text-center">
            <p className="text-[#A4A4A4]">© 2025 ZeroAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
