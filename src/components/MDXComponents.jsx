import { CheckCircle2, Info, Sparkles, TrendingUp } from "lucide-react";

export const mdxComponents = {
    h1: (props) => <h1 className="text-4xl md:text-6xl font-black text-brand-blue mt-16 mb-8 tracking-tight leading-[1.1]" {...props} />,
    h2: (props) => (
        <h2 className="text-3xl md:text-4xl font-black text-brand-blue mt-16 mb-6 tracking-tight flex items-center gap-3">
            <span className="w-10 h-1 bg-brand-orange rounded-full hidden md:block" />
            {props.children}
        </h2>
    ),
    h3: (props) => (
        <h3 className="text-2xl font-black text-brand-blue mt-10 mb-4 px-4 py-2 bg-gray-50 border-l-4 border-brand-blue rounded-r-xl inline-block" {...props} />
    ),
    p: (props) => <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-medium" {...props} />,
    ul: (props) => <ul className="grid grid-cols-1 gap-4 mb-10" {...props} />,
    li: (props) => (
        <li className="flex gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="mt-1 flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-brand-orange" />
            </div>
            <div className="text-lg text-gray-700 font-bold leading-snug">{props.children}</div>
        </li>
    ),
    strong: (props) => <strong className="font-black text-brand-blue bg-brand-blue/5 px-1 rounded-sm" {...props} />,
    blockquote: ({ className, ...props }) => (
        <div className="relative my-12 p-8 md:p-16 bg-brand-blue rounded-[30px] md:rounded-[40px] text-white shadow-2xl overflow-hidden group border-b-8 border-brand-orange">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-[100px]" />
            <div className="relative z-10">
                <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-brand-orange mb-6 md:mb-8" />
                <blockquote
                    className={`italic text-xl md:text-4xl font-black leading-[1.2] md:leading-[1.1] mb-8 !text-white tracking-tight ${className || ''}`}
                    {...props}
                />
                <div className="flex items-center gap-3">
                    <div className="h-0.5 w-12 bg-brand-orange" />
                    <div className="text-brand-orange font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">Triuss Strategy Insight</div>
                </div>
            </div>
        </div>
    ),
    hr: () => <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent my-16" />,
    img: (props) => (
        <div className="my-12 relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-gray-50">
            <img {...props} className="w-full h-auto object-cover" alt={props.alt || "Triuss Digital Blog Image"} />
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-3 rounded-2xl text-xs font-bold text-brand-blue text-center border border-white/20">
                {props.alt}
            </div>
        </div>
    ),
    Callout: ({ children, type = "info" }) => (
        <div className={`my-10 p-6 rounded-3xl flex gap-4 ${type === 'tip' ? 'bg-orange-50 border border-brand-orange/20' : 'bg-blue-50 border border-brand-blue/20'}`}>
            <div className="flex-shrink-0">
                {type === 'tip' ? <Sparkles className="w-6 h-6 text-brand-orange" /> : <Info className="w-6 h-6 text-brand-blue" />}
            </div>
            <div className={`text-base font-bold ${type === 'tip' ? 'text-orange-900' : 'text-blue-900'}`}>{children}</div>
        </div>
    )
};
