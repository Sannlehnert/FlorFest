import { motion } from 'framer-motion';
import { EASING } from '../animations/variants';

interface InvitationEnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
  prefersReducedMotion: boolean;
}

const InvitationEnvelope: React.FC<InvitationEnvelopeProps> = ({
  isOpen,
  onOpen,
  prefersReducedMotion,
}) => {
  const duration = prefersReducedMotion ? 0.12 : 0.72;

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      disabled={isOpen}
      aria-label="Abrir la invitación de Flor"
      aria-describedby="envelope-instruction"
      className="invitation-envelope group relative block touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-silver focus-visible:ring-offset-4 focus-visible:ring-offset-background disabled:cursor-default"
      animate={
        isOpen
          ? { scale: prefersReducedMotion ? 1 : 1.035, y: prefersReducedMotion ? 0 : -6 }
          : { scale: 1, y: 0 }
      }
      whileHover={isOpen || prefersReducedMotion ? undefined : { scale: 1.025, y: -4 }}
      whileTap={isOpen ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.35, ease: EASING.OUT }}
    >
      <span className="envelope-glow" aria-hidden="true" />
      <span className="envelope-shell" aria-hidden="true">
        <span className="envelope-back" />

        <motion.span
          className="envelope-letter"
          animate={
            isOpen
              ? { y: prefersReducedMotion ? -18 : -64, opacity: 1, scale: 1.01 }
              : { y: 4, opacity: 0.94, scale: 0.98 }
          }
          transition={{
            duration,
            delay: isOpen && !prefersReducedMotion ? 0.22 : 0,
            ease: EASING.OUT,
          }}
        >
          <span className="envelope-letter-kicker">MIS XV</span>
          <img
            src="/images/logo.webp"
            alt=""
            width="180"
            height="180"
            loading="eager"
            decoding="async"
            className="envelope-letter-mark"
          />
          <span className="envelope-letter-title">Flor Fest</span>
        </motion.span>

        <span className="envelope-front" />
        <span className="envelope-pocket" />

        <motion.span
          className="envelope-flap"
          animate={{ rotateX: isOpen ? (prefersReducedMotion ? -30 : -178) : 0 }}
          transition={{ duration, ease: EASING.OUT }}
        />

        <motion.span
          className="envelope-seal"
          animate={
            isOpen
              ? { opacity: 0, scale: 0.7, y: -8 }
              : { opacity: 1, scale: 1, y: 0 }
          }
          transition={{ duration: prefersReducedMotion ? 0.1 : 0.28, ease: EASING.OUT }}
        >
          FF
        </motion.span>
      </span>
    </motion.button>
  );
};

export default InvitationEnvelope;
