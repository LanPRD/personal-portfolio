"use client";

import { ServicesModal } from "@/components/service-modal";
import { cn } from "@/lib/css";
import { useState } from "react";
import { PiArrowRight } from "react-icons/pi";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  moreLabel: string;
  services: string[];
}

export function ServiceCard({ icon, title, moreLabel, services }: ServiceCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className={cn(
        "relative bg-(--container-color) p-[5.6rem_0.8rem_2rem_2.4rem] rounded-[0.4rem]",
        "shadow-[0_2px_4px_rgba(0,0,0,0.15)] transition-shadow duration-300",
        "hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)]",
        "max-[350px]:pr-18"
      )}
    >
      <div>
        <div className={cn("block text-[2.4rem] text-(--first-color) mb-(--mb-1)", "md:text-[3.2rem]")}>{icon}</div>

        <h3 className="text-(length:--h3-font-size) mb-(--mb-1) font-(--font-medium)">{title}</h3>

        <button
          onClick={() => setShowModal(true)}
          className="button button--flex button--small button--link cursor-pointer text-(length:--small-font-size) group"
          type="button"
        >
          {moreLabel}
          <PiArrowRight className="button__icon transition-transform duration-300 group-hover:translate-x-[0.4rem]" />
        </button>

        {showModal && (
          <ServicesModal isVisible={showModal} onClose={() => setShowModal(false)} title={title} services={services} />
        )}
      </div>
    </div>
  );
}
