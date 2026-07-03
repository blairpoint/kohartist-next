import Script from 'next/script';

export default function PricingPage() {
  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000',
      minHeight: '100vh',
      padding: '20px',
      color: '#ffffff'
    }}>
      {/* Load the Stripe script safely using Next.js optimization wrapper */}
      <Script 
        src="https://js.stripe.com/v3/pricing-table.js" 
        strategy="afterInteractive" 
      />

      <div style={{
        width: '100%',
        maxWidth: '480px',
        backgroundColor: '#000000',
        borderRadius: '16px',
        padding: '24px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
      }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: '700', 
          textAlign: 'center', 
          marginBottom: '24px' 
        }}>
          Choose Your Kohartist Plan
        </h1>

        {/* The Stripe pricing table element embedded directly */}
        <stripe-pricing-table 
          pricing-table-id="prctbl_1TovERKEbwiqQxArxwjjm3MA"
          publishable-key="pk_live_51THowuKEbwiqQxArUJlzPJ8048cR5JccpPSR65IksNzHbVLGY3DMTcCdAYNaWjGx1pbedh55RoUo3ddSq1V9awFr001kkOyNaq"
        />
      </div>
    </main>
  );
}
