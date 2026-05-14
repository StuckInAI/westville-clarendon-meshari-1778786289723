import { useRef } from 'react';
import { MapPin, Phone, Clock, Car, Wifi, Users, Calendar, ExternalLink } from 'lucide-react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from './HoursLocationSection.module.css';
import clsx from 'clsx';

export default function HoursLocationSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  const hours = [
    { day: 'Monday', time: '11:30 AM – 10:00 PM' },
    { day: 'Tuesday', time: '11:30 AM – 10:00 PM' },
    { day: 'Wednesday', time: '11:30 AM – 10:00 PM' },
    { day: 'Thursday', time: '11:30 AM – 10:00 PM' },
    { day: 'Friday', time: '11:30 AM – 11:00 PM' },
    { day: 'Saturday', time: '10:00 AM – 11:00 PM', note: 'Brunch 10AM–3PM' },
    { day: 'Sunday', time: '10:00 AM – 10:00 PM', note: 'Brunch 10AM–3PM' },
  ];

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  const amenities = [
    { icon: '🍽️', label: 'Dine-In' },
    { icon: '📦', label: 'Takeout' },
    { icon: '🚗', label: 'Delivery' },
    { icon: '☀️', label: 'Outdoor Seating' },
    { icon: '🐕', label: 'Dog Friendly' },
    { icon: '📶', label: 'Free Wi-Fi' },
    { icon: '🎂', label: 'Catering' },
    { icon: '👥', label: 'Groups Welcome' },
    { icon: '📅', label: 'Reservations' },
  ];

  return (
    <section ref={ref} id="hours" className={clsx(styles.section, isVisible && styles.visible)}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Find Us</div>
          <h2 className={styles.heading}>Hours & Location</h2>
        </div>
        <div className={styles.grid}>
          <div className={styles.mapCol}>
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.6!2d-77.0927!3d38.8873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b68ec9a87b4d%3A0x8a6b9a3c7e2b5e1f!2s2800%20Clarendon%20Blvd%2C%20Arlington%2C%20VA%2022201!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Westville Clarendon Location"
              />
            </div>
            <a
              href="https://goo.gl/maps/westville-clarendon"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directionsLink}
            >
              <MapPin size={16} />
              Get Directions
              <ExternalLink size={14} />
            </a>
          </div>

          <div className={styles.infoCol}>
            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}><MapPin size={20} /></div>
              <div>
                <div className={styles.infoLabel}>Address</div>
                <div className={styles.infoValue}>2800 Clarendon Blvd, Suite 620<br />Arlington, VA 22201</div>
                <div className={styles.infoNote}>Metro: Clarendon Station (Orange/Silver Line)</div>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}><Phone size={20} /></div>
              <div>
                <div className={styles.infoLabel}>Phone</div>
                <a href="tel:+17035551234" className={styles.infoLink}>(703) 555-1234</a>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}><Clock size={20} /></div>
              <div style={{ width: '100%' }}>
                <div className={styles.infoLabel}>Hours</div>
                <table className={styles.hoursTable}>
                  <tbody>
                    {hours.map((h) => (
                      <tr key={h.day} className={clsx(styles.hoursRow, h.day === today && styles.hoursRowToday)}>
                        <td className={styles.hoursDay}>{h.day}</td>
                        <td className={styles.hoursTime}>
                          {h.time}
                          {h.note && <span className={styles.hoursNote}> · {h.note}</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}><Car size={20} /></div>
              <div>
                <div className={styles.infoLabel}>Parking</div>
                <div className={styles.infoValue}>Street parking available on Clarendon Blvd. Garage parking at Market Common Clarendon (validated weekends).</div>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}><Wifi size={20} /></div>
              <div>
                <div className={styles.infoLabel}>Accessibility & Amenities</div>
              </div>
            </div>

            <div className={styles.amenities}>
              {amenities.map((a) => (
                <div key={a.label} className={styles.amenityBadge}>
                  <span>{a.icon}</span>
                  <span>{a.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.reserveBlock}>
              <Users size={18} />
              <span>Parties of 6+?</span>
              <a
                href="mailto:events@westvilleclarendon.com"
                className={styles.reserveLink}
              >
                Contact us for private dining
              </a>
              <Calendar size={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
