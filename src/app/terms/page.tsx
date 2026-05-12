import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#050508] pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h1 className="font-syne font-bold text-[clamp(32px,5vw,56px)] leading-tight mb-6 text-white">
              Terms and Conditions
            </h1>
            <p className="text-white/50 text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="text-white/80 leading-relaxed space-y-6">
              <p>
                These Terms and Conditions (&quot;Terms&quot;) govern your use of the services provided by SmartX Solutions (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using our services, you agree to be bound by these Terms.
              </p>

              {/* Placeholder content - user will replace */}
              <h2 className="font-syne font-bold text-2xl text-white mt-8 mb-4">Acceptance of Terms</h2>
              <p>
                [Content to be added by user]
              </p>

              <h2 className="font-syne font-bold text-2xl text-white mt-8 mb-4">Services</h2>
              <p>
                [Content to be added by user]
              </p>

              <h2 className="font-syne font-bold text-2xl text-white mt-8 mb-4">User Responsibilities</h2>
              <p>
                [Content to be added by user]
              </p>

              <h2 className="font-syne font-bold text-2xl text-white mt-8 mb-4">Intellectual Property</h2>
              <p>
                [Content to be added by user]
              </p>

              <h2 className="font-syne font-bold text-2xl text-white mt-8 mb-4">Limitation of Liability</h2>
              <p>
                [Content to be added by user]
              </p>

              <h2 className="font-syne font-bold text-2xl text-white mt-8 mb-4">Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>Email: business@smartxsolutions.in</li>
                <li>Phone: +91 91005 90377</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}