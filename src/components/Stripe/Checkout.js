import { AmplifyAuthenticator } from "@aws-amplify/ui-react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "./CheckoutForm"

const Checkout = () => {
  // stripe public key
  const stripePromise = loadStripe(
    "pk_test_51JRGLAG5Nk1zwS78D2y7S9zmH0T6M7SkT7j5yTsDdjhPnDD3V2wI571tbJlgPoNMfDyt5Vgm66GZm3k8hzRM3hFJ00I9v8Gplc"
  )

  return (
    <section className="py-2">
      <AmplifyAuthenticator>
        <Elements stripe={stripePromise}>
          <section>
            <h2>Time to Checkout?</h2>
            <CheckoutForm />
          </section>
        </Elements>
      </AmplifyAuthenticator>
    </section>
  )
}

export default Checkout
