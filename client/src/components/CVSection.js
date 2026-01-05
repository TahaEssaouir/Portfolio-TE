// src/components/CVSection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const CVSection = () => {
  const { i18n } = useTranslation();

  // Choose the correct PDF based on language
  const cvFile =
    i18n.language === 'fr'
      ? '/cv-taha-essaouir.pdf'
      : '/cv_taha-ang.pdf';

  return (
    <section>
      {/* ...existing code... */}
      <a href={cvFile} target="_blank" rel="noopener noreferrer">
        Télécharger le CV
      </a>
      {/* ...existing code... */}
    </section>
  );
};

export default CVSection;