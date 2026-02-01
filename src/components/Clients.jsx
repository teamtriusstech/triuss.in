import { Slack, Code2 } from "lucide-react";

export default function Clients() {
  return (
    <section className="bg-dark py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12">
        <div className="text-white text-2xl font-bold opacity-90">meUndies</div>
        <div className="text-white flex items-center gap-2 opacity-90">
          <Slack className="w-6 h-6" />
          <span className="text-xl font-bold">slack</span>
        </div>
        <div className="text-white text-xl font-bold opacity-90">WooCommerce</div>
        <div className="text-white text-2xl font-bold opacity-90 flex items-center">
          amazon
          <span className="text-xs align-top">⌄</span>
        </div>
        <div className="text-white flex items-center gap-2 opacity-90">
          <Code2 className="w-5 h-5" />
          <span className="text-xl font-bold">sitepoint</span>
        </div>
      </div>
    </section>
  );
}
