import {
  createServerClient,
  type CookieOptions,
  serialize,
} from '@supabase/ssr'
import { type NextApiRequest, type NextApiResponse } from 'next'
import { env } from '../../../env.mjs'

export function createClient(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name: string) {
          return req.cookies[name]
        },
        set(name: string, value: string, options: CookieOptions) {
          res.appendHeader('Set-Cookie', serialize(name, value, options))
        },
        remove(name: string, options: CookieOptions) {
          res.appendHeader('Set-Cookie', serialize(name, '', options))
        },
      },
    }
  )

  return supabase
}
