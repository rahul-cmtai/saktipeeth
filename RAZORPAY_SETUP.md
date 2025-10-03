# Razorpay Payment Integration Setup

## Environment Variables Required

To enable Razorpay payments, you need to add your Razorpay Key ID to the project environment variables.

### Steps to Configure:

1. **Get Your Razorpay Keys:**
   - Log in to your [Razorpay Dashboard](https://dashboard.razorpay.com/)
   - Go to Settings → API Keys
   - Copy your **Key ID** (this is the publishable key, safe for client-side use)
   - Note: Do NOT use the Key Secret on the client side

2. **Add Environment Variable in v0:**
   - Click the **Gear icon** (⚙️) in the top right of v0
   - Go to **Environment Variables**
   - Add a new variable:
     - **Name:** `NEXT_PUBLIC_RAZORPAY_KEY_ID`
     - **Value:** Your Razorpay Key ID (starts with `rzp_test_` or `rzp_live_`)

3. **Test vs Live Mode:**
   - For testing: Use test mode keys (starts with `rzp_test_`)
   - For production: Use live mode keys (starts with `rzp_live_`)

## Security Notes

- ✅ **NEXT_PUBLIC_RAZORPAY_KEY_ID** - Safe to expose (publishable key)
- ❌ **Key Secret** - NEVER expose on client side (only use on server)

## Payment Flow

1. User clicks "Enroll Now" button
2. Razorpay checkout modal opens
3. User completes payment
4. Payment confirmation is received
5. You should verify the payment on your backend (not implemented in this demo)

## Next Steps for Production

For a production-ready implementation, you should:

1. Create a server-side API route to verify payments
2. Store payment records in a database
3. Send confirmation emails to users
4. Grant course access after successful payment verification
