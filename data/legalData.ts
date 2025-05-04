export type LegalData = {
  companyName: string // Required (your name or business name)
  address: string // Required (street and number)
  city: string // Required (city)
  country: string // Required (country)
  phone: string // Required (contact phone)
  email: string // Required (contact email)
  commercialRegister?: string // Optional: Only for registered businesses
  vatId?: string // Optional: Only for businesses with VAT ID
  managingDirector?: string // Optional: Only for companies
  effectiveDate: string // Required (date of last update)
}

export const legalData: LegalData = {
  companyName: '', // e.g. 'Jane Doe' or 'My Blog Ltd.'
  address: '', // e.g. 'Main Street 1'
  city: '', // e.g. 'Berlin'
  country: '', // e.g. 'Germany'
  phone: '', // e.g. '+49 123 456789'
  email: '', // e.g. 'contact@myblog.com'
  // Fill these only if you are a business:
  // commercialRegister: '', // e.g. 'HRB 123456 (Amtsgericht Berlin)'
  // vatId: '', // e.g. 'DE123456789'
  // managingDirector: '', // e.g. 'Jane Doe'
  effectiveDate: '', // e.g. '2025-05-04'
}
