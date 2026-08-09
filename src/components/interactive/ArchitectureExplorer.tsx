import React, { useState } from 'react';
import { Icons } from '../ui/Icons';
import { Badge } from '../ui/Badge';
import { SpotlightCard } from '../ui/Card';

interface TechNode {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  latency: string;
  protocol: string;
  description: string;
  features: string[];
}

const NODES: TechNode[] = [
  {
    id: 'client',
    name: 'Client Presentation Layer',
    category: 'Frontend Tier',
    icon: <Icons.LayoutGrid className="w-5 h-5 text-brand-400" />,
    latency: '< 16ms render',
    protocol: 'HTTPS / HTTP/3',
    description: 'React 19 with strict TypeScript and atomic Tailwind tokens. Sub-second initial paint times and zero layout shift.',
    features: ['Component token binding', 'Optimistic UI updates', 'Accessible WCAG AAA primitives'],
  },
  {
    id: 'gateway',
    name: 'API Gateway & Controllers',
    category: 'Routing & Middleware',
    icon: <Icons.Server className="w-5 h-5 text-emerald-400" />,
    latency: '< 35ms TTFB',
    protocol: 'RESTful / JSON',
    description: 'Stateless Express microservice routing with strict schema validation, request throttling, and CORS guards.',
    features: ['Rate limiting', 'Payload schema validation', 'Centralized error logging'],
  },
  {
    id: 'auth',
    name: 'Zero-Trust Security Guard',
    category: 'Security & Auth',
    icon: <Icons.Shield className="w-5 h-5 text-amber-400" />,
    latency: '< 2ms verify',
    protocol: 'HMAC-SHA256 JWT',
    description: 'Cryptographically signed tokens with granular role-based access control (Student, Staff, Admin, Super Admin).',
    features: ['Bcrypt password hashing', 'Route-level middleware guards', 'Audit log retention'],
  },
  {
    id: 'data',
    name: 'Data & PDF Synthesis Engine',
    category: 'Storage & Documents',
    icon: <Icons.Terminal className="w-5 h-5 text-cyan-400" />,
    latency: '< 45ms query',
    protocol: 'Mongoose / Aggregation',
    description: 'Indexed document schemas for fast aggregation calculations and dynamic client/server jsPDF invoice generation.',
    features: ['High-throughput pipelines', 'Automated bill reconciliation', 'Instant PDF export'],
  },
  {
    id: 'assistive',
    name: 'Assistive Tech & Network Probes',
    category: 'Hardware & A11y',
    icon: <Icons.Cpu className="w-5 h-5 text-purple-400" />,
    latency: '< 25ms speech audio',
    protocol: 'Web Speech / WiFi Probes',
    description: 'Continuous voice recognition pipelines for visually impaired learners and network probe request packet loggers.',
    features: ['Hands-free voice loop', 'PDF.js text parsing', 'WiFi presence tracking'],
  },
];

export const ArchitectureExplorer: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<TechNode>(NODES[0]);

  return (
    <div className="w-full space-y-6">
      {/* Node selection tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        {NODES.map((node) => {
          const isSelected = selectedNode.id === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node)}
              className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between gap-2 ${
                isSelected
                  ? 'bg-obsidian-850 border-brand-500/50 shadow-glow-sm'
                  : 'bg-obsidian-900/60 border-white/[0.06] hover:border-white/[0.12] hover:bg-obsidian-850/60'
              }`}
            >
              <div className="flex items-center justify-between">
                {node.icon}
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-ping" />
                )}
              </div>
              <div>
                <span className="text-[10px] font-mono text-obsidian-400 block uppercase">
                  {node.category}
                </span>
                <span className="text-xs font-bold text-obsidian-100 block truncate">
                  {node.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Node Details Box */}
      <SpotlightCard className="p-6 sm:p-8 border-brand-500/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent" size="sm" dot>
                {selectedNode.category}
              </Badge>
              <Badge variant="default" size="sm" className="font-mono">
                Latency: {selectedNode.latency}
              </Badge>
              <Badge variant="outline" size="sm" className="font-mono">
                {selectedNode.protocol}
              </Badge>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {selectedNode.name}
            </h3>

            <p className="text-sm text-obsidian-300 leading-relaxed">
              {selectedNode.description}
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {selectedNode.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-obsidian-950/80 border border-white/[0.06] text-xs text-obsidian-200"
                >
                  <Icons.Check className="w-3.5 h-3.5 text-brand-400" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 p-5 rounded-xl bg-obsidian-950/90 border border-white/[0.08] font-mono text-xs text-obsidian-300 space-y-2">
            <div className="text-[10px] text-obsidian-500 uppercase border-b border-white/[0.06] pb-1">
              Node Telemetry
            </div>
            <div className="flex justify-between">
              <span className="text-obsidian-400">Status:</span>
              <span className="text-emerald-400">ACTIVE_HEALTHY</span>
            </div>
            <div className="flex justify-between">
              <span className="text-obsidian-400">Execution:</span>
              <span className="text-white">{selectedNode.latency}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-obsidian-400">Protocol:</span>
              <span className="text-brand-300">{selectedNode.protocol}</span>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};
