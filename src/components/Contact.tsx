import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hi@realshahnawaz.me',
      link: 'mailto:hi@realshahnawaz.me'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+92 331 744 7272',
      link: 'tel:+923317447272'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Lahore , Punjab',
      link: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: 'Facebook',
      url: 'https://facebook.com/realshahnawaz',
      username: '@realshahnawaz'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/realshahnawaz',
      username: 'Shah Nawaz'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com/@realshahnawaz',
      username: '@realshahnawaz'
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-[200px]">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-foreground">Send Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input placeholder="John" className="border-border bg-input-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input placeholder="Doe" className="border-border bg-input-background" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="john@example.com" className="border-border bg-input-background" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Subject</label>
                <Input placeholder="Project Discussion" className="border-border bg-input-background" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or how I can help you..."
                  className="min-h-32 border-border bg-input-background resize-none"
                />
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg border border-border bg-card hover:bg-accent/10 transition-colors group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-medium text-foreground">{info.title}</p>
                      <p className="text-sm sm:text-base text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">Follow Me</h3>
              <div className="space-y-3 sm:space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg border border-border bg-card hover:bg-accent/10 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <social.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-medium text-foreground">{social.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <Card className="border-border bg-card">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h4 className="text-sm sm:text-base font-semibold text-foreground">Available for Work</h4>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  I'm currently available for freelance projects and full-time opportunities. 
                  Let's discuss how I can help bring your ideas to life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}