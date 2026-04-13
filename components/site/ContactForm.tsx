import { FormEvent, useMemo, useState } from 'react';
import styles from '../../styles/site/Contact.module.css';

interface ContactFormTexts {
  name: string;
  email: string;
  message: string;
  submit: string;
  success: string;
  error: string;
}

interface ContactFormProps {
  texts: ContactFormTexts;
  fallbackEmail: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ContactForm({ texts, fallbackEmail }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  const statusMessage = useMemo(() => {
    if (status === 'success') {
      return { kind: 'success', text: texts.success };
    }

    if (status === 'error') {
      return { kind: 'error', text: texts.error };
    }

    if (!API_URL) {
      return {
        kind: 'info',
        text: `API indisponible. Contact direct: ${fallbackEmail}`
      };
    }

    return null;
  }, [fallbackEmail, status, texts.error, texts.success]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');

    if (!API_URL) {
      setStatus('error');
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message,
          createdAt: new Date().toISOString()
        })
      });

      const data = await response.json().catch(() => ({}));
      const isSuccess = response.ok && (typeof data.result === 'undefined' || Boolean(data.result));

      if (!isSuccess) {
        throw new Error('Request failed');
      }

      setName('');
      setEmail('');
      setMessage('');
      setStatus('success');
    } catch (error) {
      console.error('Erreur lors de l’envoi du formulaire', error);
      setStatus('error');
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label className={styles.formLabel} htmlFor="contact-name">
        {texts.name}
      </label>
      <input
        id="contact-name"
        className={styles.formField}
        type="text"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <label className={styles.formLabel} htmlFor="contact-email">
        {texts.email}
      </label>
      <input
        id="contact-email"
        className={styles.formField}
        type="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <label className={styles.formLabel} htmlFor="contact-message">
        {texts.message}
      </label>
      <textarea
        id="contact-message"
        className={`${styles.formField} ${styles.formTextarea}`}
        name="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required
      />

      <button className={styles.submitButton} type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Envoi...' : texts.submit}
      </button>

      {statusMessage ? (
        <p className={`${styles.statusMessage} ${styles[`status${statusMessage.kind[0].toUpperCase()}${statusMessage.kind.slice(1)}`]}`}>
          {statusMessage.text}
        </p>
      ) : null}
    </form>
  );
}
