import React from "react";
import Button from "./button";
import { ArrowRight } from 'lucide-react';
const CTA = () => (
  <section className="py-20 md:py-28 bg-[#708993] dark:bg-[#708993] text-white transition-colors duration-500">
    <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#19183b] dark:text-[#19183b] mb-4 leading-tight">
        Ready to <span className="text-[#a1c2bd] dark:text-[#a1c2bd]">Revergent</span> Your Vision?
      </h2>
      <p className="text-lg text-[#19183b] dark:text-[#19183b] max-w-2xl mx-auto mb-10">
        Partner with our architects to redefine what's possible for your business. Let's discuss a roadmap for innovation.
      </p>
      <Button primary={true} className="text-lg">
        Book a Consultation <ArrowRight className="w-5 h-5 ml-2 inline-block" />
      </Button>
    </div>
  </section>
);

export default CTA;

