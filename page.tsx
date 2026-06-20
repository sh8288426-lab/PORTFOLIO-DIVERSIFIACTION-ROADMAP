'use client';
import React, { useState, useMemo } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { Shield, TrendingUp, DollarSign, Activity, PieChart as PieIcon, RefreshCw, Layers, Sliders, User, Briefcase, ChevronRight, Download, Share2, HelpCircle } from 'lucide-react';

// ==========================================
// STATIC INITIAL DATA FRAMEWORK
// ==========================================
const DEFAULT_STOCKS = [
  { id: '1', name: 'NVIDIA Corporation', ticker: 'NVDA', allocation: 40, notes: 'AI infrastructure market capture' },
  { id: '2', name: 'Microsoft Corp', ticker: 'MSFT', allocation: 30, notes: 'Enterprise software & cloud dominance' },
  { id: '3', name: 'Apple Inc.', ticker: 'AAPL', allocation: 30, notes: 'Premium consumer ecosystem & global cash flows' },
];

export default function PremiumWealthApp() {
  const [activeTab, setActiveTab] = useState<'landing' | 'app'>('landing');
  const [currentRole, setRole] = useState<'advisor' | 'client' | 'admin'>('advisor');
  const [advisorNotes, setAdvisorNotes] = useState('Client maintains strong corporate allocations. Core tactical focus shifted to diversified international index hedges alongside liquid precious metal stability pools.');

  // Client Profile Unified State
  const [clientProfile, setClientProfile] = useState({
    name: 'Alexander Vance',
    age: 42,
    gender: 'Male',
    mobile: '+1 (555) 893-2300',
    email: 'a.vance@vancecapital.io',
    occupation: 'Technology Executive',
    annualIncome: 450000,
    monthlySavings: 15000,
    existingInvestments: 1200000,
    existingLiabilities: 350000,
    emergencyFundStatus: 'Fully Funded (6 Months)',
    investmentAmount: 500000,
    investmentGoal: 'Generational Wealth Architecture',
    investmentHorizon: 15,
    targetCorpus: 3000000,
    riskScore: 7,
  });

  const [stockRecommendations, setStockRecommendations] = useState(DEFAULT_STOCKS);

  const updateProfile = (key: string, value: any) => {
    setClientProfile(prev => ({ ...prev, [key]: value }));
  };

  const updateStockNotes = (id: string, text: string) => {
    setStockRecommendations(prev => prev.map(s => s.id === id ? { ...s, notes: text } : s));
  };

  const updateStockAlloc = (id: string, val: number) => {
    setStockRecommendations(prev => prev.map(s => s.id === id ? { ...s, allocation: val } : s));
  };

  // ==========================================
  // REAL-TIME MATHEMATICAL COMPUTE ENGINE
  // ==========================================
  const metrics = useMemo(() => {
    const amt = clientProfile.investmentAmount;
    
    // Risk Matrix Classification Logic
    let riskCat: 'Conservative' | 'Moderate' | 'Aggressive' = 'Moderate';
    if (clientProfile.riskScore <= 4) riskCat = 'Conservative';
    else if (clientProfile.riskScore >= 8) riskCat = 'Aggressive';

    // Mutual Fund Allocation Sub-Engine
    let mfAllocations = [];
    const mfTotalAmt = amt * 0.50;

    if (riskCat === 'Conservative') {
      mfAllocations = [
        { name: 'Nippon India Large Cap Fund', percentage: 40, amount: mfTotalAmt * 0.40 },
        { name: 'Parag Parikh Flexi Cap Fund', percentage: 30, amount: mfTotalAmt * 0.30 },
        { name: 'Motilal Oswal Midcap Fund', percentage: 15, amount: mfTotalAmt * 0.15 },
        { name: 'Bandhan Small Cap Fund', percentage: 5, amount: mfTotalAmt * 0.05 },
        { name: 'SBI Healthcare Opportunities Fund', percentage: 5, amount: mfTotalAmt * 0.05 },
        { name: 'HDFC Defence Fund', percentage: 5, amount: mfTotalAmt * 0.05 },
      ];
    } else if (riskCat === 'Moderate') {
      mfAllocations = [
        { name: 'Nippon India Large Cap Fund', percentage: 30, amount: mfTotalAmt * 0.30 },
        { name: 'Parag Parikh Flexi Cap Fund', percentage: 25, amount: mfTotalAmt * 0.25 },
        { name: 'Motilal Oswal Midcap Fund', percentage: 20, amount: mfTotalAmt * 0.20 },
        { name: 'Bandhan Small Cap Fund', percentage: 15, amount: mfTotalAmt * 0.15 },
        { name: 'SBI Healthcare Opportunities Fund', percentage: 5, amount: mfTotalAmt * 0.05 },
        { name: 'HDFC Defence Fund', percentage: 5, amount: mfTotalAmt * 0.05 },
      ];
    } else {
      mfAllocations = [
        { name: 'Nippon India Large Cap Fund', percentage: 20, amount: mfTotalAmt * 0.20 },
        { name: 'Parag Parikh Flexi Cap Fund', percentage: 20, amount: mfTotalAmt * 0.20 },
        { name: 'Motilal Oswal Midcap Fund', percentage: 20, amount: mfTotalAmt * 0.20 },
        { name: 'Bandhan Small Cap Fund', percentage: 20, amount: mfTotalAmt * 0.20 },
        { name: 'SBI Healthcare Opportunities Fund', percentage: 10, amount: mfTotalAmt * 0.10 },
        { name: 'HDFC Defence Fund', percentage: 10, amount: mfTotalAmt * 0.10 },
      ];
    }

    // Macro Asset Class Yield Curves
    const yields = {
      mf: riskCat === 'Conservative' ? 0.11 : riskCat === 'Moderate' ? 0.135 : 0.16,
      usEtf: 0.11,
      goldSilver: 0.09,
      p2p: 0.17,
      bonds: 0.075,
      stocks: 0.15
    };

    const coreAllocations = {
      mutualFunds: { percentage: 50, amount: amt * 0.50, expectedCAGR: yields.mf },
      usIndexEtfs: { percentage: 10, amount: amt * 0.10, expectedCAGR: yields.usEtf },
      goldSilver: { percentage: 10, amount: amt * 0.10, expectedCAGR: yields.goldSilver },
      p2pLending: { percentage: 10, amount: amt * 0.10, expectedCAGR: yields.p2p },
      bondsFixed: { percentage: 10, amount: amt * 0.10, expectedCAGR: yields.bonds },
      directStocks: { percentage: 10, amount: amt * 0.10, expectedCAGR: yields.stocks },
    };

    // Blended Global CAGR Formula Matrix
    const portfolioCAGR = (
      (coreAllocations.mutualFunds.percentage * coreAllocations.mutualFunds.expectedCAGR) +
      (coreAllocations.usIndexEtfs.percentage * coreAllocations.usIndexEtfs.expectedCAGR) +
      (coreAllocations.goldSilver.percentage * coreAllocations.goldSilver.expectedCAGR) +
      (coreAllocations.p2pLending.percentage * coreAllocations.p2pLending.expectedCAGR) +
      (coreAllocations.bondsFixed.percentage * coreAllocations.bondsFixed.expectedCAGR) +
      (coreAllocations.directStocks.percentage * coreAllocations.directStocks.expectedCAGR)
    ) / 100;

    const expectedAnnualReturn = amt * portfolioCAGR;
    const monthlyReturnEquivalent = expectedAnnualReturn / 12;

    // Compounding Growth Trajectory Generation Loop
    const calculateGrowth = (years: number, variance: number) => {
      return amt * Math.pow(1 + (portfolioCAGR * variance), years);
    };

    const projections = [5, 10, 15, 20].map(y => ({
      year: `Year ${y}`,
      conservative: Math.round(calculateGrowth(y, 0.82)),
      base: Math.round(calculateGrowth(y, 1.00)),
      best: Math.round(calculateGrowth(y, 1.22)),
    }));

    const portfolioHealthScore = Math.min(99, Math.round(78 + (clientProfile.riskScore * 1.6) + (clientProfile.investmentHorizon > 12 ? 7 : 3)));

    return {
      riskCat,
      coreAllocations,
      mfAllocations,
      portfolioCAGR,
      expectedAnnualReturn,
      monthlyReturnEquivalent,
      projections,
      portfolioHealthScore,
      diversificationScore: 96
    };
  }, [clientProfile]);

  return (
    <div className="min-h-screen bg-[#070708] text-white font-sans antialiased selection:bg-[#D4AF37] selection:text-black">
      
      {/* HEADER PLATFORM CONTROL SUITE */}
      <nav className="border-b border-[#1c1c22] bg-[#0d0d11]/80 backdrop-blur-xl sticky top-0 z-50 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            <Shield size={15} className="text-black stroke-[2.5]" />
          </div>
          <span className="text-xl font-serif tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF] to-[#AA7C11]">
            AUREUM
          </span>
          <span className="text-[9px] tracking-widest border border-[#D4AF37]/30 px-2 py-0.5 rounded text-[#D4AF37] uppercase font-mono">
            WEALTH OS
          </span>
        </div>
        
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <div className="flex bg-[#121216] p-1 rounded-lg border border-[#22222a]">
            <button 
              onClick={() => setActiveTab('landing')} 
              className={`px-4 py-1 text-xs tracking-widest uppercase transition-all duration-200 rounded font-mono ${activeTab === 'landing' ? 'bg-[#D4AF37] text-black font-bold' : 'text-gray-400 hover:text-white'}`}
            >
              Landing
            </button>
            <button 
              onClick={() => setActiveTab('app')} 
              className={`px-4 py-1 text-xs tracking-widest uppercase transition-all duration-200 rounded font-mono ${activeTab === 'app' ? 'bg-[#D4AF37] text-black font-bold' : 'text-gray-400 hover:text-white'}`}
            >
              Terminal
            </button>
          </div>

          {activeTab === 'app' && (
            <div className="flex bg-[#121216] rounded-lg border border-[#22222a] overflow-hidden">
              {(['advisor', 'client', 'admin'] as const).map((role) => (
                <button
                  key={role}
                  onClick={() => setRole(role)}
                  className={`px-3 py-1 text-[10px] font-mono uppercase tracking-wider transition-all ${currentRole === role ? 'bg-[#1c1c24] text-[#D4AF37] font-bold border-b-2 border-[#D4AF37]' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  {role}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* RENDER INTERACTIVE SECTIONS */}
      {activeTab === 'landing' ? (
        <div className="relative min-h-[calc(100vh-75px)] flex flex-col justify-between overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center px-6 pt-24 pb-16 space-y-8 relative z-10 my-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/20 bg-gradient-to-r from-black to-[#19150e]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest font-mono text-[#D4AF37]">Premium Capital Optimization Matrix</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight text-white leading-[1.15]">
              Architecting Sovereignty <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF] to-[#AA7C11]">
                Over Private Capital
              </span>
            </h1>

            <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
              Synthesize multi-asset allocation metrics instantly. Share secure wealth vectors with your clients through a single unified digital matrix terminal.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <button 
                onClick={() => setActiveTab('app')}
                className="w-full px-8 py-3.5 bg-gradient-to-r from-[#AA7C11] via-[#D4AF37] to-[#AA7C11] text-black font-mono tracking-widest text-xs font-bold uppercase rounded shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:opacity-90 transition-all duration-300"
              >
                Launch Wealth Blueprint
              </button>
            </div>
          </div>

          <div className="border-t border-[#1c1c22] bg-[#09090c]/90 py-8 relative z-10">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-1">
                <div className="text-[#D4AF37] font-serif text-xs tracking-widest uppercase flex items-center gap-2">
                  <Sliders size={12} /> Real-Time Telemetry
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">Reactive mathematical modelling engine scales macro allocations instantaneously with zero data lag.</p>
              </div>
              <div className="space-y-1">
                <div className="text-[#D4AF37] font-serif text-xs tracking-widest uppercase flex items-center gap-2">
                  <Shield size={12} /> Multi-Asset Guardrails
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">Blends global indices, premium sovereign physical metals, and high-yield alternative assets in perfect equilibrium.</p>
              </div>
              <div className="space-y-1">
                <div className="text-[#D4AF37] font-serif text-xs tracking-widest uppercase flex items-center gap-2">
                  <Layers size={12} /> Institutional Output
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">Pruned typography matching high-end private banking aesthetics suitable for global asset governance.</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 sm:p-6 max-w-[1650px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT SIDE PROFILE DATA ADJUSTER (4 COLUMNS) */}
          <div className="lg:col-span-4 bg-[#0d0d11]/90 border border-[#1c1c22] rounded-xl p-5 sm:p-6 backdrop-blur-md shadow-2xl space-y-6 self-start">
            <div className="border-b border-[#1c1c22] pb-4 flex justify-between items-start">
              <div>
                <h2 className="text-lg font-serif text-white tracking-wide">Client Vector Telemetry</h2>
                <p className="text-[11px] text-gray-400">Modulate metric fields for immediate distribution modeling.</p>
              </div>
              <User size={18} className="text-[#D4AF37]" />
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-400 font-mono uppercase tracking-wider mb-1">Client Identity Identity</label>
                <input 
                  type="text" 
                  value={clientProfile.name}
                  onChange={(e) => updateProfile('name', e.target.value)}
                  className="w-full bg-[#050507] border border-[#22222a] rounded px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37] transition-all text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-400 font-mono uppercase tracking-wider mb-1">Target Horizon (Yrs)</label>
                  <input 
                    type="number" 
                    value={clientProfile.investmentHorizon}
                    onChange={(e) => updateProfile('investmentHorizon', Number(e.target.value))}
                    className="w-full bg-[#050507] border border-[#22222a] rounded px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 font-mono uppercase tracking-wider mb-1">Target Corpus ($)</label>
                  <input 
                    type="number" 
                    value={clientProfile.targetCorpus}
                    onChange={(e) => updateProfile('targetCorpus', Number(e.target.value))}
                    className="w-full bg-[#050507] border border-[#22222a] rounded px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="p-4 bg-black rounded-lg border border-[#1c1c22] space-y-3">
                <div className="flex justify-between items-center font-mono">
                  <span className="text-[#D4AF37] tracking-wider uppercase text-[11px]">Investment Principal</span>
                  <span className="text-sm font-bold text-white">${clientProfile.investmentAmount.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min={25000} 
                  max={5000000} 
                  step={25000}
                  value={clientProfile.investmentAmount}
                  onChange={(e) => updateProfile('investmentAmount', Number(e.target.value))}
                  className="w-full accent-[#D4AF37] bg-gray-800 h-1 rounded cursor-pointer"
                />
              </div>

              <div className="p-4 bg-black rounded-lg border border-[#1c1c22] space-y-3">
                <div className="flex justify-between items-center font-mono">
                  <span className="text-[#D4AF37] tracking-wider uppercase text-[11px]">Risk Tolerance Threshold</span>
                  <span className="text-xs font-bold px-2 py-0.5 bg-[#121216] text-white border border-[#2a2a35] rounded font-mono">
                    Index {clientProfile.riskScore} / 10
                  </span>
                </div>
                <input 
                  type="range" 
                  min={1} 
                  max={10} 
                  step={1}
                  value={clientProfile.riskScore}
                  onChange={(e) => updateProfile('riskScore', Number(e.target.value))}
                  className="w-full accent-[#D4AF37] bg-gray-800 h-1 rounded cursor-pointer"
                />
                <div className="flex justify-between text-[9px] text-gray-500 font-mono uppercase">
                  <span>Sovereign (1)</span>
                  <span>Balanced (5)</span>
                  <span>Leveraged (10)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-gray-400 font-mono uppercase tracking-wider mb-1">Annual Yield Inflow</label>
                  <input 
                    type="number" 
                    value={clientProfile.annualIncome}
                    onChange={(e) => updateProfile('annualIncome', Number(e.target.value))}
                    className="w-full bg-[#050507] border border-[#22222a] rounded px-3 py-1.5 text-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 font-mono uppercase tracking-wider mb-1">Monthly Liquid Savings</label>
                  <input 
                    type="number" 
                    value={clientProfile.monthlySavings}
                    onChange={(e) => updateProfile('monthlySavings', Number(e.target.value))}
                    className="w-full bg-[#050507] border border-[#22222a] rounded px-3 py-1.5 text-gray-300"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#121216] to-black border border-[#D4AF37]/20 p-4 rounded-lg space-y-1">
              <span className="text-[9px] uppercase font-mono tracking-widest text-[#D4AF37] block">Automated Allocation Strategy</span>
              <div className="text-xl font-serif tracking-wide text-white">{metrics.riskCat} Target Protocol</div>
              <p className="text-[11px] text-gray-400 leading-relaxed pt-1">Algorithmic risk matching engine configured to scale target vectors without localized systemic drag.</p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <button 
                onClick={() => window.print()}
                className="w-full bg-gradient-to-r from-[#AA7C11] via-[#D4AF37] to-[#AA7C11] text-black font-mono tracking-wider font-bold text-xs py-2.5 rounded hover:opacity-90 transition-all uppercase flex items-center justify-center gap-2"
              >
                <Download size={12} /> Compile PDF
              </button>
              <button 
                onClick={() => alert(`Strategic sync token compiled:\nhttps://aureum.io/secure/blueprint_token_vce893`)}
                className="w-full bg-[#121216] text-white border border-[#22222a] font-mono tracking-wider text-xs py-2.5 rounded hover:bg-[#1a1a24] transition-all uppercase flex items-center justify-center gap-2"
              >
                <Share2 size={12} /> Share Node
              </button>
            </div>
          </div>

          {/* RIGHT SIDE MASTER ANALYTICAL HUD (8 COLUMNS) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* REAL TIME METRIC INDEX CARDS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-[#0d0d11] border border-[#1c1c22] p-4 rounded-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 h-full w-0.5 bg-gradient-to-b from-[#D4AF37] to-transparent" />
                <div className="text-[9px] uppercase text-gray-400 font-mono tracking-widest flex items-center gap-1">
                  <DollarSign size={10} className="text-[#D4AF37]" /> Capital Mass
                </div>
                <div className="text-base sm:text-lg font-serif text-white mt-1">${clientProfile.investmentAmount.toLocaleString()}</div>
              </div>

              <div className="bg-[#0d0d11] border border-[#1c1c22] p-4 rounded-xl">
                <div className="text-[9px] uppercase text-gray-400 font-mono tracking-widest flex items-center gap-1">
                  <TrendingUp size={10} className="text-[#D4AF37]" /> Blended CAGR
                </div>
                <div className="text-base sm:text-lg font-serif text-[#D4AF37] mt-1">{(metrics.portfolioCAGR * 100).toFixed(2)}%</div>
              </div>

              <div className="bg-[#0d0d11] border border-[#1c1c22] p-4 rounded-xl">
                <div className="text-[9px] uppercase text-gray-400 font-mono tracking-widest flex items-center gap-1">
                  <Activity size={10} className="text-[#D4AF37]" /> Monthly Pro-Rata
                </div>
                <div className="text-base sm:text-lg font-serif text-white mt-1">${Math.round(metrics.monthlyReturnEquivalent).toLocaleString()}</div>
              </div>

              <div className="bg-[#0d0d11] border border-[#1c1c22] p-4 rounded-xl">
                <div className="text-[9px] uppercase text-gray-400 font-mono tracking-widest flex items-center gap-1">
                  <Layers size={10} className="text-[#D4AF37]" /> Health Index
                </div>
                <div className="text-base sm:text-lg font-serif text-emerald-400 mt-1">{metrics.portfolioHealthScore} <span className="text-[10px] text-gray-500 font-mono">/99</span></div>
              </div>
            </div>

            {/* DYNAMIC VISUAL GRAPH PACKAGES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Asset Class Pie Chart Layout */}
              <div className="bg-[#0d0d11] border border-[#1c1c22] p-4 rounded-xl flex flex-col justify-between">
                <div className="text-xs uppercase text-gray-400 font-mono tracking-widest mb-4 flex justify-between items-center">
                  <span className="flex items-center gap-1.5"><RefreshCw size={12} className="text-[#D4AF37] animate-spin-slow" /> Structural Target Weights</span>
                  <span className="text-[10px] bg-[#121216] px-2 py-0.5 border border-[#22222a] rounded text-gray-400 font-mono">Dynamic</span>
                </div>
                <div className="h-[210px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Mutual Funds', value: metrics.coreAllocations.mutualFunds.amount },
                          { name: 'US Index ETFs', value: metrics.coreAllocations.usIndexEtfs.amount },
                          { name: 'Physical Gold/Silver', value: metrics.coreAllocations.goldSilver.amount },
                          { name: 'P2P Income Engine', value: metrics.coreAllocations.p2pLending.amount },
                          { name: 'Sovereign Debt Bonds', value: metrics.coreAllocations.bondsFixed.amount },
                          { name: 'Direct Equities', value: metrics.coreAllocations.directStocks.amount },
                        ]}
                        cx="50%" cy="50%"
                        innerRadius={50} outerRadius={75}
                        paddingAngle={3} dataKey="value"
                      >
                        {['#D4AF37', '#AA7C11', '#FFFFFF', '#66667a', '#262630', '#948363'].map((color, idx) => (
                          <Cell key={`cell-${idx}`} fill={color} stroke="#070708" strokeWidth={2} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#0d0d11', border: '1px solid #1c1c22', borderRadius: '6px', fontSize: '11px', color: '#fff' }} 
                        itemStyle={{ color: '#fff' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-3 gap-2 text-[9px] font-mono text-gray-400 border-t border-[#1c1c22] pt-3 mt-2">
                  <div><span className="inline-block w-1.5 h-1.5 bg-[#D4AF37] mr-1 rounded-sm" />MF 50%</div>
                  <div><span className="inline-block w-1.5 h-1.5 bg-[#AA7C11] mr-1 rounded-sm" />US 10%</div>
                  <div><span className="inline-block w-1.5 h-1.5 bg-[#FFFFFF] mr-1 rounded-sm" />Metal 10%</div>
                  <div><span className="inline-block w-1.5 h-1.5 bg-[#66667a] mr-1 rounded-sm" />P2P 10%</div>
                  <div><span className="inline-block w-1.5 h-1.5 bg-[#262630] mr-1 rounded-sm" />Bond 10%</div>
                  <div><span className="inline-block w-1.5 h-1.5 bg-[#948363] mr-1 rounded-sm" />Stock 10%</div>
                </div>
              </div>

              {/* Compounding Projections Asset Yield Curve */}
              <div className="bg-[#0d0d11] border border-[#1c1c22] p-4 rounded-xl">
                <div className="text-xs uppercase text-gray-400 font-mono tracking-widest mb-4 flex items-center gap-1.5">
                  <PieIcon size={12} className="text-[#D4AF37]" /> Compounded Wealth Curve Projections
                </div>
                <div className="h-[210px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={metrics.projections} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1c1c22" />
                      <XAxis dataKey="year" stroke="#444452" style={{ fontSize: '9px', fontFamily: 'monospace' }} />
                      <YAxis stroke="#444452" style={{ fontSize: '9px', fontFamily: 'monospace' }} tickFormatter={(val) => `$${(val / 1000000).toFixed(1)}M`} />
                      <Tooltip contentStyle={{ backgroundColor: '#0d0d11', border: '1px solid #1c1c22', fontSize: '11px', color: '#fff' }} />
                      <Legend wrapperStyle={{ fontSize: '9px', fontFamily: 'monospace', paddingTop: '10px' }} />
                      <Line type="monotone" dataKey="best" name="Bull Execution" stroke="#FFFFFF" strokeWidth={1} dot={false} />
                      <Line type="monotone" dataKey="base" name="Base Scenario" stroke="#D4AF37" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="conservative" name="Bear Hedges" stroke="#444452" strokeWidth={1} dot={false} strokeDasharray="3 3" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* LOWER STRATIFIED SPECIFIC ASSET METRICS */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase border-b border-[#1c1c22] pb-1 flex items-center gap-2">
                <Layers size={12} /> Underpinning Security Registries
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* MF Metrics Pod */}
                <div className="bg-[#0d0d11] border border-[#1c1c22] p-4 rounded-xl">
                  <div className="flex justify-between items-center mb-3 border-b border-[#1c1c22] pb-2">
                    <h4 className="text-xs uppercase font-mono tracking-wider text-white font-bold">Mutual Fund Mandate (50%)</h4>
                    <span className="text-xs font-mono text-[#D4AF37] font-bold">${metrics.coreAllocations.mutualFunds.amount.toLocaleString()}</span>
                  </div>
                  <div className="space-y-2.5">
                    {metrics.mfAllocations.map((mf, index) => (
                      <div key={index} className="flex justify-between items-center text-xs">
                        <span className="text-gray-400 max-w-[210px] truncate">{mf.name}</span>
                        <div className="font-mono text-right flex items-center gap-2">
                          <span className="text-white font-medium">${Math.round(mf.amount).toLocaleString()}</span>
                          <span className="text-[10px] text-[#D4AF37] bg-[#121216] px-1.5 py-0.2 rounded border border-[#22222a]">{mf.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Combined Hard and Alternative Allocation Pod */}
                <div className="bg-[#0d0d11] border border-[#1c1c22] p-4 rounded-xl space-y-4">
                  <div>
                    <div className="flex justify-between items-center text-xs font-mono border-b border-[#1c1c22] pb-1.5">
                      <span className="text-white tracking-wider font-bold">US INDEX VECTOR (10%)</span>
                      <span className="text-[#D4AF37] font-bold">${metrics.coreAllocations.usIndexEtfs.amount.toLocaleString()}</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">Deploys via VOO & QQQ architectures. Delivers solid systemic international dollar currency expansion protection.</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-xs font-mono border-b border-[#1c1c22] pb-1.5">
                      <span className="text-white tracking-wider font-bold">PRECIOUS METALS (10%)</span>
                      <span className="text-[#D4AF37] font-bold">${metrics.coreAllocations.goldSilver.amount.toLocaleString()}</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">7% Gold / 3% Silver structure. Serves as physical liquidity insurance pool against long-tail debt macro-degradation.</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-xs font-mono border-b border-[#1c1c22] pb-1.5">
                      <span className="text-white tracking-wider font-bold">ALTERNATIVE LIQUID P2P (10%)</span>
                      <span className="text-amber-600 font-bold">${metrics.coreAllocations.p2pLending.amount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-gray-400 mt-1">
                      <span>Targets 17% yield capture envelope.</span>
                      <span className="text-[9px] font-mono bg-amber-950/40 text-amber-300 border border-amber-900/60 px-1 rounded uppercase">Illiquid Class</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Editable Discretionary Equities Deck */}
              <div className="bg-[#0d0d11] border border-[#1c1c22] p-4 rounded-xl">
                <div className="flex justify-between items-center mb-3 border-b border-[#1c1c22] pb-2">
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider text-white font-bold">Direct Discretionary Equities (10%)</h4>
                    <p className="text-[10px] text-gray-500 font-mono">Aggregate Allocation Boundary: ${metrics.coreAllocations.directStocks.amount.toLocaleString()}</p>
                  </div>
                  <span className="text-[9px] bg-[#121216] px-2 py-1 border border-[#22222a] font-mono text-[#D4AF37] rounded tracking-wide uppercase">Advisor Override Active</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="text-gray-500 border-b border-[#1c1c22]">
                        <th className="pb-2 font-medium">Asset Identity</th>
                        <th className="pb-2 font-medium">Ticker</th>
                        <th className="pb-2 font-medium text-center">Mass Weight %</th>
                        <th className="pb-2 text-right">Capital Mass</th>
                        <th className="pb-2 pl-4 font-medium">Strategic Rationale</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#16161e]">
                      {stockRecommendations.map((stock) => (
                        <tr key={stock.id} className="text-gray-300">
                          <td className="py-2.5 font-sans text-white font-medium">{stock.name}</td>
                          <td className="py-2.5 text-[#D4AF37] font-mono">{stock.ticker}</td>
                          <td className="py-2.5 text-center">
                            <input 
                              type="number" 
                              value={stock.allocation}
                              disabled={currentRole !== 'advisor'}
                              onChange={(e) => updateStockAlloc(stock.id, Number(e.target.value))}
                              className="bg-[#050507] border border-[#22222a] rounded w-12 py-0.5 text-center text-white font-mono text-xs disabled:opacity-40"
                            />%
                          </td>
                          <td className="py-2.5 text-white font-mono text-right">${Math.round(metrics.coreAllocations.directStocks.amount * (stock.allocation / 100)).toLocaleString()}</td>
                          <td className="py-2.5 pl-4 text-xs font-sans text-gray-400">
                            {currentRole === 'advisor' ? (
                              <input 
                                type="text"
                                value={stock.notes}
                                onChange={(e) => updateStockNotes(stock.id, e.target.value)}
                                className="bg-[#050507] border border-[#1c1c22] rounded px-2 py-0.5 w-full text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                              />
                            ) : (
                              stock.notes
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* AI SYSTEM SYNTHESIS READOUT */}
            <div className="bg-gradient-to-r from-black via-[#0d0d12] to-[#14120f] border border-[#D4AF37]/20 p-5 rounded-xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-ping" />
                <h4 className="text-[10px] tracking-widest font-mono text-[#D4AF37] uppercase font-bold">AUREUM AI Analysis System Feed</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-[11px] leading-relaxed text-gray-400">
                <p>
                  Client risk matrices signal highly optimized asset placement parameters. The strategic model registers a top-tier compliance score of {metrics.portfolioHealthScore}/99. Physical gold structures are acting correctly as systemic downside hedges.
                </p>
                <p>
                  System directives suggest routine vector evaluation every 180 standard trading days. Capital shifts should focus on moving excess direct equity windfalls into underlying sovereign bond shields to capture programmatic gains.
                </p>
              </div>
            </div>

            {/* ADVISOR STRATEGIC DIRECTIVE MEMORANDUM */}
            <div className="bg-[#0d0d11] border border-[#1c1c22] p-4 rounded-xl space-y-2">
              <label className="block text-[10px] uppercase tracking-wider font-mono text-gray-400 font-bold flex items-center gap-1">
                <Briefcase size={10} className="text-[#D4AF37]" /> Advisor Strategic Directive Memorandum
              </label>
              {currentRole === 'advisor' ? (
                <textarea 
                  value={advisorNotes}
                  onChange={(e) => setAdvisorNotes(e.target.value)}
                  rows={2}
                  className="w-full bg-[#050507] text-xs text-white p-3 rounded border border-[#22222a] focus:outline-none focus:border-[#D4AF37] font-sans leading-relaxed"
                />
              ) : (
                <p className="text-xs text-gray-300 italic bg-black p-3 rounded border border-[#16161c] leading-relaxed">
                  "{advisorNotes}"
                </p>
              )}
            </div>

            {/* COMPLIANCE CORE DISCLOSURES */}
            <div className="text-[9px] text-gray-600 font-mono uppercase text-center tracking-wider pt-2 space-y-1">
              <p>Aureum Network Cloud Node: Fully Enforced Node Security Protocols Active.</p>
              <p>All calculations serve as strategic projection heuristics. Performance indices are not guaranteed future vectors.</p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
