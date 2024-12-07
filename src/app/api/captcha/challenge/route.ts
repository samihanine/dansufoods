import { createChallenge } from 'altcha-lib'
import { NextResponse } from 'next/server'
import crypto from 'crypto'

function generateHmacKey() {
  const hmac = crypto.createHmac('sha256', process.env.ALTCHA_SECRET as string)

  return hmac.digest('hex')
}

export async function GET() {
  const hmacKey = generateHmacKey()

  const { challenge, salt, algorithm, signature } = await createChallenge({
    hmacKey,
    algorithm: 'SHA-256',
    maxnumber: 50000,
    saltLength: 20,
  })

  return NextResponse.json({
    challenge,
    salt,
    algorithm,
    signature,
  })
}
