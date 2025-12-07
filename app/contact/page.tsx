import Footer from "@/components/Footer";
import Contact from "@/components/home/Contact";

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen pt-14">
        <Contact />

        <div className="px-8 lg:px-16 text-center">
          <p>
            Thank you for having interest in us. Feel free to have a visit. Our
            team is ready to assist you with any questions or inquiries.
          </p>
        </div>

        <section className="h-auto w-full p-8 lg:p-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103711.19364096288!2d69.58651788079965!3d23.250875687512725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950e209000b6f17%3A0x7077f358af0774a6!2sBhuj%2C%20Gujarat!5e1!3m2!1sen!2sin!4v1765029525171!5m2!1sen!2sin"
            //   width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-lg"
          ></iframe>
        </section>

        <Footer />
      </main>
    </>
  );
}
