import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../layout/SectionWrapper';
import { ScrollReveal } from '../effects/ScrollReveal';
import { Button } from '../common/Button';
import { socialsData } from '../../data/socials';
import * as Icons from 'lucide-react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

type IconName = keyof typeof Icons;

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Using Formspree as email backend
      // Replace FORMSPREE_ID with your actual Formspree form ID from https://formspree.io/
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID || 'demo';
      
      if (formspreeId === 'demo') {
        // Demo mode - simulate success
        console.log('Form data:', formData);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
        return;
      }

      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage('Failed to send message. Please try again.');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage('An error occurred. Please try again later.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      className="py-20 md:py-32"
      containerClassName="max-w-2xl mx-auto space-y-12"
    >
      {/* Section Title */}
      <ScrollReveal>
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>
      </ScrollReveal>

      {/* Contact Form */}
      <ScrollReveal>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Name Input */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name or Organization
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name or Organization..."
              required
              className="w-full"
            />
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="[EMAIL]..."
              required
              className="w-full"
            />
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Let's build something scalable together..."
              rows={5}
              required
              className="w-full"
            />
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400"
            >
              <CheckCircle size={20} />
              <p>Message sent successfully! I'll get back to you soon.</p>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400"
            >
              <AlertCircle size={20} />
              <p>{errorMessage}</p>
            </motion.div>
          )}

          {/* Submit Button */}
          <Button
            variant="primary"
            className="w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.form>
      </ScrollReveal>

      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        <span className="text-slate-500 text-sm">or connect via</span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>

      {/* Social Links */}
      <ScrollReveal>
        <div className="flex flex-wrap justify-center gap-4">
          {socialsData.map((social) => {
            const Icon = Icons[social.icon as IconName] as React.ComponentType<{ size: number; className: string }>;
            return Icon ? (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-lg glass-effect-md border border-slate-700 hover:border-accent hover:shadow-glow-orange transition-all duration-300 group"
                aria-label={social.label}
              >
                <Icon size={24} className="text-slate-400 group-hover:text-accent transition-colors" />
              </motion.a>
            ) : null;
          })}
        </div>
      </ScrollReveal>

      {/* Alternative Contact Method */}
      <ScrollReveal>
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-slate-400 mb-4">Prefer email?</p>
          <div className="flex items-center justify-center gap-2">
            <Mail size={20} className="text-accent" />
            <a
              href="mailto:contact@yamactan.dev"
              className="text-accent hover:text-orange-400 transition-colors font-mono"
            >
              contact@yamactan.dev
            </a>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
};
