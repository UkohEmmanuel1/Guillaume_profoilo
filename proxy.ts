import { NextResponse } from 'next/server'

const locales = ['en', 'fr']
const defaultLocale = 'fr'

function getLocale(request: Request): string {
  const acceptLang = request.headers.get('accept-language')
  if (!acceptLang) return defaultLocale

  const preferred = acceptLang.split(',')[0]?.split('-')[0]?.toLowerCase()
  if (preferred && locales.includes(preferred)) return preferred

  return defaultLocale
}

export function proxy(request: Request) {
  const { pathname } = new URL(request.url)

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  const url = new URL(request.url)
  url.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next|assets|favicon.ico).*)'],
}
