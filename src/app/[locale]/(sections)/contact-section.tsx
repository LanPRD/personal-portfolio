import { SectionWrapper } from "@/components/section-wrapper";
import { cn } from "@/lib/css";
import { useTranslations } from "next-intl";
import { PiEnvelopeSimple, PiMapPin, PiPhone } from "react-icons/pi";
import { ContactForm } from "../(components)/contact/contact-form";
import { ContactInfo } from "../(components)/contact/contact-info";

export function ContactSection() {
  const t = useTranslations("contact");

  return (
    <SectionWrapper id="contact" title={t("title")} subtitle={t("subtitle")}>
      <div className={cn("container grid gap-y-12", "sm:grid-cols-2")}>
        <div>
          <ContactInfo icon={<PiPhone />} title={t("call")} subtitle="+55 (11) 9 8949-0063" />
          <ContactInfo icon={<PiEnvelopeSimple />} title="Email" subtitle="prdev.solutions@gmail.com" />
          <ContactInfo icon={<PiMapPin />} title={t("location")} subtitle="Campinas - SP, Brazil" />
        </div>

        <ContactForm
          translations={{
            name: t("name"),
            project: t("project"),
            message: t("message"),
            sendMessage: t("sendMessage"),
            sending: t("sending")
          }}
        />
      </div>
    </SectionWrapper>
  );
}
