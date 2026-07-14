import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiSmartphone, FiServer } from 'react-icons/fi';
import { services } from '../data/portfolioData';

const serviceIcons = [FiCode, FiSmartphone, FiServer, FiCpu];

export default function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-28">
      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="section-label">Services</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">High-end execution across the full product stack.</h2>
          <p className="mt-4 text-lg leading-8 text-white/68">
            Services are designed to help founders and teams ship premium digital products with sharper product thinking and elegant execution.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-[28px] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-olive/20 bg-olive/12 text-olive">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{service.description}</p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 glass-card rounded-[30px] p-6 sm:p-8"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { value: '10+', label: 'Projects delivered' },
              { value: '15+', label: 'Technologies used' },
              { value: 'Fast', label: 'Execution and iteration' },
            ].map((item) => (
              <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
                <p className="text-3xl font-extrabold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-white/55">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}