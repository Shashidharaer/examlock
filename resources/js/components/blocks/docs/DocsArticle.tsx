export default function DocsArticle() {
  return (
    <article className="flex-1 min-w-0 max-w-none">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
        How can I renew my registration certificate?
      </h1>

      {/* Video Player */}
      <div className="mb-8 rounded-lg overflow-hidden bg-black aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/Bm7Oi_2hI5E"
          title="How to renew registration certificate"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Article Content */}
      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to renew your registration certificate
          </h2>
          <p className="mb-4">
            Renewing your registration certificate is a straightforward process
            that can be completed in a few simple steps. Follow the instructions
            below to renew your certificate.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Step 1: Login to your account
          </h3>
          <p className="mb-4">
            First, navigate to the ExamLock login page and enter your
            credentials to access your account. If you don&apos;t remember your
            password, you can use the &quot;Forgot Password&quot; link to reset
            it.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Step 2: Navigate to the registration page
          </h3>
          <p className="mb-4">
            Once logged in, go to your dashboard and click on the
            &quot;Registration&quot; section in the navigation menu. This will
            take you to the registration page where you can view your current
            certificate status.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Step 3: Renew your certificate
          </h3>
          <p className="mb-4">
            On the registration page, you will see an option to renew your
            certificate. Click on the &quot;Renew Certificate&quot; button and
            fill out the required information in the renewal form. Make sure all
            information is accurate before proceeding.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Step 4: Complete the payment
          </h3>
          <p className="mb-4">
            After filling out the renewal form, you will be redirected to the
            payment gateway. Complete the payment process using your preferred
            payment method. Once the payment is confirmed, your certificate
            renewal will be processed.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Step 5: Download your certificate
          </h3>
          <p className="mb-4">
            After successful payment, you will be able to download your renewed
            certificate from the registration page. The certificate will be
            available in PDF format and can be downloaded immediately.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Step 6: Verify your certificate
          </h3>
          <p className="mb-4">
            Once downloaded, verify that all the information on your certificate
            is correct, including your name, registration number, and expiration
            date. If you notice any errors, contact our support team
            immediately.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Step 7: Contact support
          </h3>
          <p className="mb-4">
            If you encounter any issues during the renewal process or have
            questions about your certificate, please don&apos;t hesitate to
            contact our support team. We&apos;re here to help you every step of
            the way.
          </p>
        </section>

        {/* Note Section */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md mt-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-blue-800">Note</h4>
              <p className="mt-2 text-sm text-blue-700">
                If you experience any issues during the renewal process or if
                your certificate has already expired, please contact our support
                team for assistance. We recommend renewing your certificate at
                least 30 days before the expiration date to avoid any
                interruptions in service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

