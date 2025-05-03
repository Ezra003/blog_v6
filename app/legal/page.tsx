import { Metadata } from 'next'
import React, { JSX } from 'react'

export const metadata: Metadata = {
  title: 'Legal Information',
  description: 'Imprint, Privacy Policy, Cookie Policy, and Disclaimers for this blog',
}

const Legal: React.FC = (): JSX.Element => {
  return (
    <div className="prose max-w-none py-10">
      <h1>Legal Information</h1>

      {/* Imprint / Impressum */}
      <h2>Imprint</h2>
      <p>
        <em>(Required under § 5 TMG / Digital Services Act)</em>
      </p>
      <div className="space-y-2">
        <p>
          <strong>Site Operator:</strong> [Your Name or Company]
        </p>
        <p>
          <strong>Address:</strong> [Street and Number], [Postal Code] [City], Germany
        </p>
        <p>
          <strong>Contact:</strong> Phone: [Your Phone Number], E-mail:{' '}
          <a href="mailto:[your-email]">[your-email]</a>
        </p>
        <p>
          <strong>Commercial Register:</strong> [Court], HRB [Number] (if applicable)
        </p>
        <p>
          <strong>VAT ID:</strong> DE[Your VAT-ID-Number] (if applicable)
        </p>
        <p>
          <strong>Managing Director:</strong> [Name] (for companies)
        </p>
      </div>

      {/* Contact */}
      <h2>Contact Information</h2>
      <p>
        For general inquiries or requests regarding this site, please use the contact details above.
      </p>

      {/* Disclaimer */}
      <h2>Disclaimer</h2>
      <p>
        The content on this blog is provided “as is” for informational purposes only. We make no
        warranties, express or implied, regarding accuracy, completeness, or suitability.
      </p>
      <p>
        As a service provider, we are responsible under §§ 7 ff. of Germany’s Telemedia Act (TMG)
        for our own content, but not for third-party content (§§ 8–10 TMG).
      </p>
      <p>
        External links were checked at the time of inclusion for legal violations; however, we do
        not control external content. If you become aware of any illegal links, please inform us so
        we can remove them.
      </p>

      {/* Privacy Policy */}
      <h2>Privacy Policy</h2>
      <p>
        We process personal data in compliance with the EU General Data Protection Regulation (GDPR)
        and the German Federal Data Protection Act (BDSG).
      </p>
      <h3>1. Data Controller</h3>
      <p>
        [Your Name / Company], [Address], E-mail: <a href="mailto:[your-email]">[your-email]</a>.
      </p>
      <h3>2. Legal Basis</h3>
      <ul className="list-inside list-disc">
        <li>Performance of contract or pre-contractual measures (Art. 6(1)(b) GDPR)</li>
        <li>Legal obligations (Art. 6(1)(c) GDPR)</li>
        <li>Consent (Art. 6(1)(a) GDPR), e.g. for non-essential cookies</li>
      </ul>
      <h3>3. Recipients</h3>
      <p>
        Data may be shared with service providers (hosting, analytics), each bound by contract to
        GDPR standards.
      </p>
      <h3>4. Retention</h3>
      <p>
        Personal data is retained only as long as necessary for the purposes stated or as required
        by law.
      </p>
      <h3>5. Your Rights</h3>
      <p>
        You have the right to access, rectify, erase, restrict, object to processing, data
        portability, and withdraw consent at any time.
      </p>

      {/* Cookie Policy */}
      <h2>Cookie Policy</h2>
      <p>
        We use cookies to enhance site functionality. Technically necessary cookies are set
        automatically. All others require your consent.
      </p>
      <h3>Cookie Categories</h3>
      <ul className="list-inside list-disc">
        <li>
          <strong>Necessary:</strong> Required for basic site functions (e.g., session).
        </li>
        <li>
          <strong>Statistics:</strong> Anonymous analytics (e.g., Google Analytics, Umami).
        </li>
        <li>
          <strong>Marketing:</strong> Tracking for advertising purposes.
        </li>
      </ul>
      <p>You can change or withdraw your consent at any time via the cookie banner.</p>

      {/* External Links */}
      <h2>External Links</h2>
      <p>We are not responsible for content on external websites linked from this blog.</p>

      {/* Online Dispute Resolution */}
      <h2>Online Dispute Resolution</h2>
      <p>
        The EU Commission provides a platform for online dispute resolution:{' '}
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
          ec.europa.eu/consumers/odr
        </a>
        .
      </p>
      <p>
        We are not willing or obliged to participate in dispute resolution proceedings before a
        consumer arbitration board.
      </p>

      {/* Changes & Effective Date */}
      <h2>Changes to This Notice</h2>
      <p>
        We reserve the right to update this Legal Information at any time. The current version will
        always be published here.
      </p>
      <h2>Effective Date</h2>
      <p>May 4, 2025</p>
    </div>
  )
}

export default Legal
