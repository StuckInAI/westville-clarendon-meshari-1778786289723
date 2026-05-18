import styles from './Placeholder.module.css';

interface Props {
  hue?: number;
  ratio?: string;
  label?: string;
  rounded?: boolean;
}

export default function Placeholder({ hue = 30, ratio = '4 / 5', label, rounded = false }: Props) {
  const bg = `hsl(${hue}, 35%, 82%)`;
  const bg2 = `hsl(${hue + 8}, 28%, 70%)`;
  return (
    <div
      className={`${styles.placeholder} ${rounded ? styles.rounded : ''}`}
      style={{
        aspectRatio: ratio,
        background: `radial-gradient(at 30% 30%, ${bg} 0%, ${bg2} 100%)`,
      }}
      aria-hidden="true"
    >
      <div className={styles.grain} />
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
}
