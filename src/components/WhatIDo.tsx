import { motion } from 'motion/react';
import { Palette, Share2, Target, Lightbulb } from 'lucide-react';

export default function WhatIDo() {
  const services = [
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'Social Media Design',
      description: 'Creating visual content that captures attention and strengthens brand communication across digital platforms.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Product Advertising',
      description: 'Designing product-focused campaigns that combine creativity, storytelling, and commercial effectiveness.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Branding Support',
      description: 'Developing and maintaining visual assets that strengthen brand identity and consistency.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Creative Direction',
      description: 'Transforming concepts and ideas into cohesive visual experiences that align with business objectives.'
    }
  ];

  return (
    <section className="py-32 px-6 bg-brand-gray/30">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-20 text-center mx-auto">
            <h2 className="text-4xl md:text-6xl tracking-tighter mb-6">WHAT I DO</h2>
            <p className="text-white/60 text-lg">
                I help brands communicate their message through visually engaging and strategically driven design solutions.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-white/5 hover:border-white/20 transition-all group"
            >
              <div className="mb-6 text-white/50 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl mb-4">{service.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed font-sans">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
