import { Metadata } from 'next'
import { legalData } from '../../data/legalData'
import React, { Fragment } from 'react'

// Define metadata for the page (make sure it's outside of the component)
export const metadata: Metadata = {
  title: 'Legal Information',
  description: 'Imprint, Privacy Policy, Cookie Policy, and Disclaimers for this blog',
}

const Legal: React.FC = () => {
  return (
    <Fragment>
      <section className="prose dark:prose-invert mx-auto max-w-3xl py-10 text-gray-700 dark:text-gray-200">
        <h1>Legal Information</h1>

        {/* Imprint / Impressum (Required by EU law) */}
        <h2>Imprint / Impressum</h2>
        <ul>
          <li>
            <strong>Site Operator:</strong> {legalData.companyName}
          </li>
          <li>
            <strong>Address:</strong> {legalData.address}, {legalData.city}, {legalData.country}
          </li>
          <li>
            <strong>Phone:</strong> {legalData.phone}
          </li>
          <li>
            <strong>Email:</strong> {legalData.email}
          </li>
          {/* The following fields are only needed if you are a registered business. Remove if not applicable. */}
          {legalData.commercialRegister && (
            <li>
              <strong>Commercial Register:</strong> {legalData.commercialRegister}
            </li>
          )}
          {legalData.vatId && (
            <li>
              <strong>VAT ID:</strong> {legalData.vatId}
            </li>
          )}
          {legalData.managingDirector && (
            <li>
              <strong>Managing Director / Owner:</strong> {legalData.managingDirector}
            </li>
          )}
        </ul>
        <p>
          <strong>Effective Date:</strong> {legalData.effectiveDate}
        </p>
        <p>
          <strong>Responsible for content according to § 55 Abs. 2 RStV:</strong>{' '}
          {legalData.companyName}, {legalData.address}, {legalData.city}, {legalData.country}
        </p>

        {/* Privacy Policy (GDPR) */}
        <h2>Privacy Policy (GDPR)</h2>
        <h3>1. Data Controller</h3>
        <ul>
          <li>
            <strong>Name:</strong> {legalData.companyName}
          </li>
          <li>
            <strong>Address:</strong> {legalData.address}, {legalData.city}, {legalData.country}
          </li>
          <li>
            <strong>Email:</strong> {legalData.email}
          </li>
        </ul>
        <h3>2. Purposes of Processing</h3>
        <ul>
          <li>Operating the website</li>
          {/* Add more if you use analytics, comments, newsletter, etc. */}
        </ul>
        <h3>3. Legal Basis</h3>
        <ul>
          <li>Consent (Art. 6(1)(a) GDPR)</li>
          <li>Legal obligations (Art. 6(1)(c) GDPR)</li>
          <li>Legitimate interests (Art. 6(1)(f) GDPR)</li>
        </ul>
        <h3>4. Data Recipients</h3>
        <ul>
          <li>Hosting provider</li>
          {/* Add others if you use analytics, newsletter, etc. */}
        </ul>
        <h3>5. Data Transfers</h3>
        <p>
          Data may be transferred to countries outside the EU/EEA only if adequate safeguards are in
          place.
        </p>
        <h3>6. Retention</h3>
        <p>
          Personal data is retained only as long as necessary for the stated purposes or as required
          by law.
        </p>
        <h3>7. User Rights</h3>
        <ul>
          <li>
            Access, rectification, erasure, restriction, objection, portability, and withdrawal of
            consent at any time.
          </li>
          <li>Right to lodge a complaint with a supervisory authority (see below).</li>
        </ul>
        <h3>8. Cookies</h3>
        <p>
          We use only essential cookies for website operation.{' '}
          {/* If you use analytics or marketing cookies, update this section and mention consent management. */}
        </p>

        {/* Cookie Policy */}
        <h2>Cookie Policy</h2>
        <p>
          Cookies are small text files stored on your device. We only use cookies necessary for the
          website to function. You can manage cookies in your browser settings.
        </p>

        {/* Disclaimers */}
        <h2>Disclaimers</h2>
        <p>
          We strive to keep information up to date, but do not guarantee completeness or accuracy.
          Use of this website is at your own risk.
        </p>
        <h3>External Links</h3>
        <p>We are not responsible for the content of external websites linked here.</p>

        {/* Copyright & Intellectual Property */}
        <h2>Copyright & Intellectual Property</h2>
        <p>
          All content is protected by copyright. Reproduction or distribution requires written
          permission unless otherwise stated.
        </p>

        {/* Contact & ODR */}
        <h2>Contact & Online Dispute Resolution</h2>
        <p>If you have questions or concerns, contact us at {legalData.email}.</p>
        <p>
          The EU Commission provides a platform for online dispute resolution:{' '}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
            ec.europa.eu/consumers/odr
          </a>
        </p>
        <p>
          We are not willing or obliged to participate in dispute resolution proceedings before a
          consumer arbitration board.
        </p>
        <h3>Supervisory Authority</h3>
        <p>
          If you believe your data protection rights have been violated, you can contact your local
          data protection authority. (Add your authority’s contact if required.)
        </p>

        {/* Changes & Effective Date */}
        <h2>Changes to This Notice</h2>
        <p>
          We reserve the right to update this Legal Information at any time. The current version
          will always be published here.
        </p>
        <h2>Effective Date</h2>
        <p>{legalData.effectiveDate}</p>
      </section>
    </Fragment>
  )
}

export default Legal
