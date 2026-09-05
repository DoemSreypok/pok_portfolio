import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Check,
  Mail,
  Phone,
  Copy,
  CheckCheck,
  Clock,
  MapPin,
  RotateCcw,
  Loader2,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>(['UX/UI Design']);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [lastSubmittedData, setLastSubmittedData] = useState<{
    name: string;
    email: string;
    services: string[];
    message: string;
  } | null>(null);

  const availableServices = [
    'Web App Design',
    'Mobile Design',
    'Web Development',
    'Banking Systems',
    'UI/UX Design',
    'Design Systems',
  ];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== service));
      }
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const now = new Date();
    const timestamp = now.toLocaleString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Phnom_Penh',
    });

    const servicesBadges = selectedServices
      .map(s => `<span style="display:inline-block;background:#14b8a6;color:#fff;font-size:11px;font-weight:600;padding:3px 10px;border-radius:999px;margin:2px 3px 2px 0;">${s}</span>`)
      .join('');

    const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>New Portfolio Inquiry</title></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0f172a 0%,#1e293b 60%,#134e4a 100%);padding:32px 36px;">
            <p style="margin:0 0 4px 0;font-size:11px;font-weight:700;letter-spacing:2px;color:#14b8a6;text-transform:uppercase;">Portfolio Inquiry</p>
            <h1 style="margin:0 0 6px 0;font-size:22px;font-weight:800;color:#ffffff;line-height:1.3;">New Message Received 📩</h1>
            <p style="margin:0;font-size:12px;color:#94a3b8;">${timestamp} (Phnom Penh, UTC+7)</p>
          </td>
        </tr>

        <!-- Sender Info -->
        <tr>
          <td style="padding:28px 36px 0 36px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
              <tr>
                <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;">
                  <p style="margin:0 0 3px 0;font-size:10px;font-weight:700;letter-spacing:1.5px;color:#94a3b8;text-transform:uppercase;">From</p>
                  <p style="margin:0;font-size:16px;font-weight:700;color:#0f172a;">${formData.name}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 20px;">
                  <p style="margin:0 0 3px 0;font-size:10px;font-weight:700;letter-spacing:1.5px;color:#94a3b8;text-transform:uppercase;">Reply To</p>
                  <a href="mailto:${formData.email}" style="margin:0;font-size:14px;font-weight:600;color:#14b8a6;text-decoration:none;">${formData.email}</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Services -->
        <tr>
          <td style="padding:20px 36px 0 36px;">
            <p style="margin:0 0 10px 0;font-size:10px;font-weight:700;letter-spacing:1.5px;color:#64748b;text-transform:uppercase;">Interested In</p>
            <div style="line-height:2;">${servicesBadges}</div>
          </td>
        </tr>

        <!-- Message -->
        <tr>
          <td style="padding:20px 36px 0 36px;">
            <p style="margin:0 0 10px 0;font-size:10px;font-weight:700;letter-spacing:1.5px;color:#64748b;text-transform:uppercase;">Project Message</p>
            <div style="background:#f8fafc;border-left:3px solid #14b8a6;border-radius:0 8px 8px 0;padding:16px 18px;">
              <p style="margin:0;font-size:14px;line-height:1.75;color:#334155;white-space:pre-wrap;">${formData.message}</p>
            </div>
          </td>
        </tr>

        <!-- CTA Button -->
        <tr>
          <td style="padding:28px 36px;">
            <a href="mailto:${formData.email}?subject=Re: Your Portfolio Inquiry"
               style="display:inline-block;background:#14b8a6;color:#ffffff;font-size:13px;font-weight:700;padding:12px 28px;border-radius:999px;text-decoration:none;letter-spacing:0.3px;">
              ↩ Reply to ${formData.name}
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:18px 36px;">
            <p style="margin:0;font-size:11px;color:#94a3b8;line-height:1.6;">
              This message was sent through your <strong style="color:#64748b;">portfolio contact form</strong> at sreypokdoem18@gmail.com.<br>
              <strong style="color:#64748b;">Sreypok Doem (Pinky)</strong> · UX/UI Designer & Web Developer · Phnom Penh, Cambodia
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

    const formPayload = new FormData();
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('_replyto', formData.email);
    formPayload.append('_subject', `📩 New Inquiry from ${formData.name} — ${selectedServices.join(', ')}`);
    formPayload.append('_html', htmlBody);
    formPayload.append('_captcha', 'false');

    try {
      const response = await fetch('https://formsubmit.co/sreypokdoem18@gmail.com', {
        method: 'POST',
        body: formPayload,
      });

      setLastSubmittedData({
        name: formData.name,
        email: formData.email,
        services: [...selectedServices],
        message: formData.message,
      });

      if (response.ok || response.status === 200 || response.type === 'opaque') {
        setSubmitted(true);
      } else {
        // Fallback to mailto
        const subject = encodeURIComponent(`Portfolio Inquiry: ${formData.name} [${selectedServices.join(', ')}]`);
        const body = encodeURIComponent(
          `Hello Sreypok,\n\nHere are my inquiry details:\n\n• Name: ${formData.name}\n• Email: ${formData.email}\n• Interested In: ${selectedServices.join(', ')}\n\n• Message:\n${formData.message}\n\nSent from Portfolio Website`
        );
        window.open(`mailto:sreypokdoem18@gmail.com?subject=${subject}&body=${body}`);
        setSubmitted(true);
      }
    } catch {
      setLastSubmittedData({
        name: formData.name,
        email: formData.email,
        services: [...selectedServices],
        message: formData.message,
      });
      const subject = encodeURIComponent(`Portfolio Inquiry: ${formData.name} [${selectedServices.join(', ')}]`);
      const body = encodeURIComponent(
        `Hello Sreypok,\n\nHere are my inquiry details:\n\n• Name: ${formData.name}\n• Email: ${formData.email}\n• Interested In: ${selectedServices.join(', ')}\n\n• Message:\n${formData.message}\n\nSent from Portfolio Website`
      );
      window.open(`mailto:sreypokdoem18@gmail.com?subject=${subject}&body=${body}`);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
    setSelectedServices(['Web App Design']);
    setLastSubmittedData(null);
  };

  return (
    <section id="contact" className="py-24 bg-[#f5f5f7] dark:bg-[#000000] transition-colors duration-300 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 dark:bg-teal-500/15 text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3.5"
          >
            <span>Let's Connect</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-[#f5f5f7] mb-4"
          >
            Get in touch.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-[#86868b] text-base sm:text-lg leading-relaxed"
          >
            Have an upcoming project, a product to design, or a web application to build? Let's discuss how we can collaborate.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Contact & Availability Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-[#f5f5f7] mb-2 leading-snug">
                Let's build something intentional.
              </h3>
              <p className="text-slate-600 dark:text-[#86868b] text-sm sm:text-[15px] leading-relaxed">
                Whether you need end-to-end product design, a scalable tokenized design system, or a high-performance web application, I am available for freelance contracts and engineering roles.
              </p>
            </div>

            {/* Direct Copyable Contact Cards */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1d1d1f] border border-slate-200/70 dark:border-white/5 flex items-center justify-between group transition-all duration-200 hover:shadow-xs">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="stroke-[1.8]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-slate-500 dark:text-[#86868b] block font-medium">Direct Email</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-medium">Anti-Scam Protected</span>
                    </div>
                    <span className="text-sm sm:text-[15px] font-semibold text-slate-900 dark:text-[#f5f5f7] tracking-wide">
                      srey••••18@gmail.com
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard('srey••••18@gmail.com', 'email')}
                  className="p-2.5 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-[#f5f5f7] hover:bg-slate-100 dark:hover:bg-[#252528] transition-colors cursor-pointer active:scale-95"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <CheckCheck size={18} className="text-teal-600 dark:text-teal-400" /> : <Copy size={18} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1d1d1f] border border-slate-200/70 dark:border-white/5 flex items-center justify-between group transition-all duration-200 hover:shadow-xs">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="stroke-[1.8]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-slate-500 dark:text-[#86868b] block font-medium">Direct Phone</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-medium">Anti-Scam Protected</span>
                    </div>
                    <span className="text-sm sm:text-[15px] font-semibold text-slate-900 dark:text-[#f5f5f7] font-mono tracking-wide">
                      (+885) 88 45 •• 458
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard('(+885) 88 45 •• 458', 'phone')}
                  className="p-2.5 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-[#f5f5f7] hover:bg-slate-100 dark:hover:bg-[#252528] transition-colors cursor-pointer active:scale-95"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <CheckCheck size={18} className="text-teal-600 dark:text-teal-400" /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            {/* Availability & Location Info */}
            <div className="p-5 rounded-2xl bg-slate-200/60 dark:bg-[#161618] border border-slate-200/50 dark:border-white/5 space-y-3">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 dark:text-[#86868b]">
                <MapPin size={16} className="text-teal-600 dark:text-teal-400 flex-shrink-0" />
                <span className="dark:text-[#f5f5f7]">Phnom Penh, Cambodia (UTC+7)</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 dark:text-[#86868b]">
                <Clock size={16} className="text-teal-600 dark:text-teal-400 flex-shrink-0" />
                <span>Typical response time: Within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#1d1d1f] rounded-2xl p-7 sm:p-9 text-left border border-slate-200/70 dark:border-white/5 shadow-xs">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="py-8 flex flex-col items-center justify-center text-center space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-xs">
                      <Check size={32} className="stroke-[2.5]" />
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-[#f5f5f7]">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-slate-600 dark:text-[#86868b] text-sm max-w-md leading-relaxed">
                        Thank you for reaching out, <span className="font-semibold text-slate-900 dark:text-white">{lastSubmittedData?.name || formData.name || 'friend'}</span>. Your inquiry has been dispatched to Sreypok Doem.
                      </p>
                    </div>

                    {/* Clean User Receipt Card */}
                    {lastSubmittedData && (
                      <div className="w-full bg-slate-50 dark:bg-[#141416] border border-slate-200/80 dark:border-white/10 rounded-xl p-5 text-left space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-white/5 text-xs text-slate-500 dark:text-[#86868b]">
                          <span>Inquiry Receipt</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-medium">● Sent to sreypokdoem18@gmail.com</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div>
                            <span className="text-slate-400 dark:text-slate-500 block">Sender Name:</span>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">{lastSubmittedData.name}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 dark:text-slate-500 block">Sender Email:</span>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">{lastSubmittedData.email}</span>
                          </div>
                        </div>

                        <div>
                          <span className="text-slate-400 dark:text-slate-500 block text-xs mb-1.5">Selected Services:</span>
                          <div className="flex flex-wrap gap-1.5">
                            {lastSubmittedData.services.map((srv) => (
                              <span
                                key={srv}
                                className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-teal-500/10 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300"
                              >
                                {srv}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className="text-slate-400 dark:text-slate-500 block text-xs">Message Excerpt:</span>
                          <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 line-clamp-3 bg-white dark:bg-[#1c1c1f] p-3 rounded-lg border border-slate-200/50 dark:border-white/5">
                            "{lastSubmittedData.message}"
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-semibold px-6 py-2.5 rounded-full text-xs transition-colors cursor-pointer active:scale-95"
                      >
                        <RotateCcw size={14} />
                        <span>Send another message</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Service Interest Tabs (Styled exactly like Portfolio Category Tabs) */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="block text-xs font-bold text-slate-700 dark:text-[#86868b] uppercase tracking-wider">
                          I'm interested in
                        </label>
                        <span className="text-[11px] text-slate-400 dark:text-slate-500">
                          Select one or more
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {availableServices.map((service) => {
                          const isSelected = selectedServices.includes(service);
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                                isSelected
                                  ? 'bg-[#1d1d1f] text-white dark:bg-white dark:text-slate-950 font-semibold shadow-xs ring-2 ring-teal-500/40 dark:ring-teal-400/40'
                                  : 'bg-white dark:bg-[#252528] text-slate-700 dark:text-[#86868b] hover:text-slate-900 dark:hover:text-[#f5f5f7] hover:bg-slate-100 dark:hover:bg-[#2e2e32] border border-slate-200 dark:border-white/5'
                              }`}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Name & Email Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-xs font-bold text-slate-700 dark:text-[#86868b] uppercase tracking-wider">
                          Your Name <span className="text-teal-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          placeholder="e.g. Lyden"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-50 dark:bg-[#141416] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-slate-900 dark:text-[#f5f5f7] placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-400/20 transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-xs font-bold text-slate-700 dark:text-[#86868b] uppercase tracking-wider">
                          Your Email <span className="text-teal-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder="e.g. lyden@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 dark:bg-[#141416] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-slate-900 dark:text-[#f5f5f7] placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-400/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-xs font-bold text-slate-700 dark:text-[#86868b] uppercase tracking-wider">
                        Project Message <span className="text-teal-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="Tell me about your product goals, scope, and timeline..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-[#141416] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-slate-900 dark:text-[#f5f5f7] placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-400/20 transition-all resize-y"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-between pt-1">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 dark:bg-teal-400 dark:hover:bg-teal-300 text-white dark:text-slate-950 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer active:scale-95 text-sm shadow-sm hover:shadow disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={15} />
                          </>
                        )}
                      </button>

                      <span className="text-xs text-slate-400 dark:text-slate-500 hidden sm:inline-block">
                        Direct reply to your email
                      </span>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
