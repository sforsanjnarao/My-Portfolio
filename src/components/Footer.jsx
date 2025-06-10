import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-2 px-4 bg-card relative border-t border-border mt-12 pt-2 flex flex-wrap justify-between items-center">
      {" "}
      <a
        href="#hero"
        className="p-2 mx-auto rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
