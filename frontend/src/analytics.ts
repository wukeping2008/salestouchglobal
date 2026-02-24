/**
 * Google Analytics 4 integration
 * Measurement ID is loaded from VITE_GA_MEASUREMENT_ID environment variable
 */

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

/**
 * Initialize GA4 by injecting the gtag.js script
 * Only loads in production or when GA_ID is explicitly set
 */
export function initGA(): void {
  if (!GA_ID) return

  window.dataLayer = window.dataLayer || []
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, {
    send_page_view: true
  })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)
}

/**
 * Track a custom event
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  if (!GA_ID || !window.gtag) return
  window.gtag('event', eventName, params)
}

/**
 * Track CTA button clicks
 */
export function trackCTAClick(ctaName: string, location: string): void {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: location
  })
}

/**
 * Track language switch
 */
export function trackLanguageSwitch(fromLang: string, toLang: string): void {
  trackEvent('language_switch', {
    from_language: fromLang,
    to_language: toLang
  })
}

/**
 * Track section visibility (scroll depth)
 */
export function trackSectionView(sectionName: string): void {
  trackEvent('section_view', {
    section_name: sectionName
  })
}
