import crypto from 'crypto'

export default class Signature {
  static generate(source, path, encodedParams = null) {
    const decodedSecureKey = Buffer.from(source.secureKey, 'base64')
    const decodedSecureSalt = Buffer.from(source.secureSalt, 'base64')
    const hmac = crypto.createHmac('sha256', decodedSecureKey)

    hmac.update(decodedSecureSalt)
    hmac.update(`/${path}`)
    if (encodedParams) {
      hmac.update(`?${encodedParams}`)
    }

    return hmac.digest('base64url')
  }
}
