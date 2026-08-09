import React, { useState } from 'react';
import { Icons } from '../ui/Icons';
import { Badge } from '../ui/Badge';

export const HeroTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'security' | 'performance'>('architecture');
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: 'architecture', label: 'Architecture.ts', icon: <Icons.Layers className="w-3.5 h-3.5" /> },
    { id: 'security', label: 'SecurityGuard.ts', icon: <Icons.Shield className="w-3.5 h-3.5" /> },
    { id: 'performance', label: 'CoreTelemetry.json', icon: <Icons.Zap className="w-3.5 h-3.5" /> },
  ] as const;

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-2xl bg-obsidian-900/95 border border-white/[0.12] shadow-2xl backdrop-blur-xl overflow-hidden text-left font-mono">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-obsidian-950/80 border-b border-white/[0.08]">
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-obsidian-900 p-1 rounded-lg border border-white/[0.06]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs transition-all ${
                activeTab === tab.id
                  ? 'bg-brand-600 text-white shadow-sm font-semibold'
                  : 'text-obsidian-400 hover:text-obsidian-200 hover:bg-white/[0.04]'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Action button */}
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md text-obsidian-400 hover:text-white hover:bg-white/[0.06] transition-colors text-xs flex items-center gap-1"
          title="Copy Code"
        >
          {copied ? (
            <Icons.Check className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <Icons.Terminal className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Terminal Content Area */}
      <div className="p-5 sm:p-6 text-xs text-obsidian-300 overflow-x-auto leading-relaxed bg-obsidian-900/60 min-h-[160px]">
        {activeTab === 'architecture' && (
          <div className="space-y-1 animate-fade-in">
            <div><span className="text-obsidian-500">// 2026 Core Architecture Definition</span></div>
            <div>
              <span className="text-brand-400">export const</span> <span className="text-emerald-400">PrimeEngine</span> = &#123;
            </div>
            <div className="pl-4">
              tier: <span className="text-amber-300">&apos;Multi-Tenant Modular Enterprise&apos;</span>,
            </div>
            <div className="pl-4">
              frontend: [<span className="text-amber-300">&apos;React 19&apos;</span>, <span className="text-amber-300">&apos;Strict TypeScript&apos;</span>, <span className="text-amber-300">&apos;Tailwind Tokens&apos;</span>],
            </div>
            <div className="pl-4">
              backend: [<span className="text-amber-300">&apos;Node.js&apos;</span>, <span className="text-amber-300">&apos;Express REST&apos;</span>, <span className="text-amber-300">&apos;MongoDB Aggregations&apos;</span>],
            </div>
            <div className="pl-4">
              assistive: [<span className="text-amber-300">&apos;Web Speech API&apos;</span>, <span className="text-amber-300">&apos;WiFi Presence Probes&apos;</span>],
            </div>
            <div className="pl-4">
              status: <span className="text-emerald-400 font-bold">&apos;READY_FOR_ENGAGEMENT&apos;</span>
            </div>
            <div>&#125;;</div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-1 animate-fade-in">
            <div><span className="text-obsidian-500">// Zero-Trust Cryptographic Guard Middleware</span></div>
            <div>
              <span className="text-brand-400">async function</span> <span className="text-emerald-400">enforceRoleGuards</span>(req: <span className="text-cyan-400">Request</span>) &#123;
            </div>
            <div className="pl-4">
              <span className="text-brand-400">const</span> token = req.headers.get(<span className="text-amber-300">&apos;Authorization&apos;</span>);
            </div>
            <div className="pl-4">
              <span className="text-brand-400">const</span> verified = <span className="text-brand-400">await</span> jwt.verify(token, process.env.JWT_SECRET);
            </div>
            <div className="pl-4">
              <span className="text-brand-400">if</span> (!verified.role.includes(<span className="text-amber-300">&apos;ADMIN&apos;</span>)) <span className="text-rose-400">throw new SecurityException()</span>;
            </div>
            <div className="pl-4 text-emerald-400">
              return &#123; authorized: true, user: verified.id &#125;;
            </div>
            <div>&#125;</div>
          </div>
        )}

        {activeTab === 'performance' && (
          <div className="space-y-1 animate-fade-in">
            <div><span className="text-obsidian-500">// Core Web Vitals & Telemetry Output</span></div>
            <div>&#123;</div>
            <div className="pl-4">&quot;firstContentfulPaint&quot;: <span className="text-emerald-400">&quot;0.42s&quot;</span>,</div>
            <div className="pl-4">&quot;cumulativeLayoutShift&quot;: <span className="text-emerald-400">&quot;0.000&quot;</span>,</div>
            <div className="pl-4">&quot;interactionToNextPaint&quot;: <span className="text-emerald-400">&quot;&lt; 16ms&quot;</span>,</div>
            <div className="pl-4">&quot;bundleTypeSafety&quot;: <span className="text-emerald-400">&quot;100% Strict&quot;</span>,</div>
            <div className="pl-4">&quot;uptimeSLA&quot;: <span className="text-emerald-400">&quot;99.98%&quot;</span></div>
            <div>&#125;</div>
          </div>
        )}
      </div>

      {/* Terminal Footer Status Bar */}
      <div className="px-5 py-2.5 bg-obsidian-950/80 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-obsidian-400">
        <div className="flex items-center gap-2">
          <Badge variant="success" size="sm" dot pulse>Live Session</Badge>
          <span className="hidden sm:inline">UTF-8 • Strict Mode</span>
        </div>
        <span className="text-brand-400 font-mono">PrimeDev v2026</span>
      </div>
    </div>
  );
};
