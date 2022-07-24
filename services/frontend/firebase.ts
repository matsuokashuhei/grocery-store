import {initializeApp} from 'firebase/app'

const config = {
    apiKey: process.env.NEXT_PUBLIC_NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
}

const app = initializeApp(config)
console.log('app', app)
export default app