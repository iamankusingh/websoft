import Footer from "@/components/Footer";
import Contact from "@/components/home/Contact";
import SEO from "@/components/SEO";

export default function SupportPage() {
  return (
    <>
      <SEO
        title="Help & Support Websoft Solution"
        description="Get help and support about our producta and services at Websoft Sollution Bhuj"
        // keywords={["keyword1", "keyword2"]}
      />

      <main>
        <div className="px-8 lg:px-16 pt-16">
          <h2 className="text-3xl font-semibold mb-2">Help and Support</h2>
          <p className="text-muted-foreground">
            If you have any query just fill up the form bellow, we will contact
            you soon or you can have a visit with us at our office
          </p>
        </div>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
