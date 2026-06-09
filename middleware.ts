import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const secret = process.env.LOG_KEY
  if (!secret) return new NextResponse(null, { status: 404 })

  // Already authenticated via cookie
  const cookie = req.cookies.get('_brain_log')
  if (cookie?.value === secret) return NextResponse.next()

  // Authenticate via query param — set cookie, redirect to clean URL
  const key = req.nextUrl.searchParams.get('k')
  if (key === secret) {
    const url = req.nextUrl.clone()
    url.searchParams.delete('k')
    const res = NextResponse.redirect(url)
    res.cookies.set('_brain_log', secret, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    })
    return res
  }

  return new NextResponse(null, { status: 404 })
}

export const config = {
  matcher: ['/log'],
}
