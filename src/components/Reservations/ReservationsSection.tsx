import { useState, useRef } from 'react';
import { CheckCircle, Calendar, Clock, Users, User, Mail, Phone } from 'lucide-react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { ReservationForm } from '@/types';
import styles from './ReservationsSection.module.css';
import clsx from 'clsx';

export default function ReservationsSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ReservationForm>>({});
  const [form, setForm] = useState<ReservationForm>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    partySize: '2',
    notes: '',
  });

  const timeSlots = [
    '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM',
    '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ReservationForm]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<ReservationForm> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) newErrors.email = 'Valid email is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!form.date) newErrors.date = 'Date is required';
    if (!form.time) newErrors.time = 'Time is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section ref={ref} id="reservations" className={clsx(styles.section, isVisible && styles.visible)}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.eyebrow}>Join Us</div>
          <h2 className={styles.heading}>Come Hang.<br /><span className={styles.accent}>Eat Well.</span><br />Stay a While.</h2>
          <p className={styles.body}>
            Reserve your table at Westville Clarendon and experience the freshest, most satisfying meal in Arlington. We welcome walk-ins too, but a reservation guarantees your spot.
          </p>
          <div className={styles.openTableBlock}>
            <p className={styles.openTableLabel}>Prefer to book through OpenTable?</p>
            <a
              href="https://www.opentable.com/westville-clarendon"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.openTableBtn}
            >
              Book on OpenTable
            </a>
          </div>
          <div className={styles.infoTiles}>
            <div className={styles.infoTile}>
              <Clock size={20} />
              <div>
                <strong>Brunch</strong>
                <span>Sat &amp; Sun, 10AM–3PM</span>
              </div>
            </div>
            <div className={styles.infoTile}>
              <Users size={20} />
              <div>
                <strong>Large Groups</strong>
                <span>6+ guests, contact us</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          {submitted ? (
            <div className={styles.success}>
              <CheckCircle size={56} color="#2D5016" />
              <h3 className={styles.successTitle}>Reservation Requested!</h3>
              <p className={styles.successBody}>
                Thanks, <strong>{form.name}</strong>! We\'ve received your request for <strong>{form.partySize} guests</strong> on <strong>{form.date}</strong> at <strong>{form.time}</strong>. We\'ll confirm via email at <strong>{form.email}</strong> shortly.
              </p>
              <button className={styles.resetBtn} onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', date: '', time: '', partySize: '2', notes: '' }); }}>
                Make Another Reservation
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <h3 className={styles.formTitle}>Reserve a Table</h3>

              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}><User size={14} /> Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={clsx(styles.input, errors.name && styles.inputError)}
                  />
                  {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}><Mail size={14} /> Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className={clsx(styles.input, errors.email && styles.inputError)}
                  />
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
                <div className={styles.field}>
                  <label className={styles.label}><Phone size={14} /> Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(703) 555-1234"
                    className={clsx(styles.input, errors.phone && styles.inputError)}
                  />
                  {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}><Calendar size={14} /> Date</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    min={today}
                    className={clsx(styles.input, errors.date && styles.inputError)}
                  />
                  {errors.date && <span className={styles.error}>{errors.date}</span>}
                </div>
                <div className={styles.field}>
                  <label className={styles.label}><Clock size={14} /> Time</label>
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className={clsx(styles.input, styles.select, errors.time && styles.inputError)}
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                  {errors.time && <span className={styles.error}>{errors.time}</span>}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}><Users size={14} /> Party Size</label>
                  <select
                    name="partySize"
                    value={form.partySize}
                    onChange={handleChange}
                    className={clsx(styles.input, styles.select)}
                  >
                    {['1','2','3','4','5','6+'].map((n) => (
                      <option key={n} value={n}>{n} {n === '1' ? 'guest' : 'guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Special Requests (optional)</label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Allergies, celebrations, accessibility needs..."
                  rows={3}
                  className={styles.textarea}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                Request Reservation
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
