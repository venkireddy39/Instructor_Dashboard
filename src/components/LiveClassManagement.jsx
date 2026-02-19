import React, { useState } from 'react';
import {
    Calendar,
    Camera,
    CheckCircle,
    ChevronRight,
    Clock,
    Copy,
    Download,
    ExternalLink,
    Filter,
    Globe,
    History,
    Layout,
    Link as LinkIcon,
    MessageCircle,
    MessageSquare,
    Mic,
    Monitor,
    MoreHorizontal,
    Play,
    Plus,
    Radio,
    Search,
    Settings,
    Share2,
    Shield,
    StopCircle,
    Upload,
    Users,
    Video,
    Zap
} from 'lucide-react';

const LiveClassManagement = () => {
    const [activeSubTab, setActiveSubTab] = useState('Overview');
    const [isLive, setIsLive] = useState(false);
    const [sessions, setSessions] = useState([
        { id: 1, title: 'Mastering React Server Components', date: '2024-03-20', time: '10:00 AM', duration: '60 min', platform: 'Zoom', status: 'Scheduled', students: 45, thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&h=225&auto=format&fit=crop' },
        { id: 2, title: 'User Experience & Intentional Design', date: '2024-03-22', time: '02:00 PM', duration: '90 min', platform: 'Google Meet', status: 'Draft', students: 0, thumbnail: 'https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=400&h=225&auto=format&fit=crop' }
    ]);

    const pastSessions = [
        { id: 101, title: 'The Future of Web Tooling', date: 'Mar 15, 2024', duration: '55 min', participants: 42, recording: 'available' },
        { id: 102, title: 'Deep Dive into V8 Engine', date: 'Mar 12, 2024', duration: '120 min', participants: 38, recording: 'available' }
    ];

    const renderOverview = () => (
        <div className="live-content-wrapper animate-slide-up">
            <div className="studio-header">
                <div className="studio-brand">
                    <div className="live-icon-animated">
                        <Radio size={24} className="pulse-icon" />
                    </div>
                    <div>
                        <h2 className="studio-main-title">Live Studio</h2>
                        <p className="studio-subtitle">Professional broadcasting center for your courses.</p>
                    </div>
                </div>
                <div className="studio-actions">
                    <button className="glass-btn secondary"><Layout size={18} /> Templates</button>
                    <button className="primary-studio-btn" onClick={() => setActiveSubTab('Schedule')}>
                        <Plus size={18} /> <span>New Live Stream</span>
                    </button>
                </div>
            </div>

            <div className={`live-broadcast-card ${isLive ? 'live-active' : ''}`}>
                <div className="broadcast-visual">
                    {isLive ? (
                        <div className="live-stream-preview">
                            <div className="preview-overlay">
                                <div className="live-badge">LIVE</div>
                                <div className="viewer-count"><Users size={14} /> 1,240</div>
                            </div>
                            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&h=600&auto=format&fit=crop" alt="Live Preview" />
                            <div className="stream-stats-bar">
                                <span><Mic size={14} color="#10b981" /> 84% Vol</span>
                                <span><Globe size={14} /> Global Delivery (CDN)</span>
                                <span><Zap size={14} color="#f59e0b" /> Ultra Low Latency</span>
                            </div>
                        </div>
                    ) : (
                        <div className="stream-offline-placeholder">
                            <Video size={64} className="offline-icon" />
                            <h3>Ready to connect?</h3>
                            <p>Select a session or start an instant broadcast.</p>
                        </div>
                    )}
                </div>

                <div className="broadcast-controls">
                    <div className="session-detail-pane">
                        <h3 className="active-session-name">{isLive ? 'React Architecture Masterclass' : 'No Active Stream'}</h3>
                        <div className="session-badges">
                            <span className="platform-pill zoom">Zoom Integration</span>
                            <span className="encryption-badge"><Shield size={12} /> E2E Encrypted</span>
                        </div>
                    </div>

                    <div className="control-buttons">
                        {isLive ? (
                            <>
                                <button className="control-btn primary red" onClick={() => setIsLive(false)}><StopCircle size={20} /> End Stream</button>
                                <button className="control-btn circle"><MessageCircle size={20} /></button>
                                <button className="control-btn circle"><Share2 size={20} /></button>
                            </>
                        ) : (
                            <button className="control-btn primary green glow" onClick={() => setIsLive(true)}><Play size={20} /> Go Live Now</button>
                        )}
                    </div>
                </div>
            </div>

            <div className="secondary-grid">
                <div className="upcoming-sessions-column">
                    <div className="column-header">
                        <h3>Upcoming Operations</h3>
                        <button className="link-text">View Calendar</button>
                    </div>
                    <div className="session-card-list">
                        {sessions.map(session => (
                            <div key={session.id} className="live-op-card">
                                <div className="op-thumb">
                                    <img src={session.thumbnail} alt="thumb" />
                                    <div className="op-time-overlay">{session.time}</div>
                                </div>
                                <div className="op-info">
                                    <h4>{session.title}</h4>
                                    <div className="op-meta">
                                        <span><Calendar size={12} /> {session.date}</span>
                                        <span><Users size={12} /> {session.students} joined</span>
                                    </div>
                                    <div className="op-actions">
                                        <button className="op-btn share"><Copy size={14} /></button>
                                        <button className="op-btn main">Prepare Workspace</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="integration-column">
                    <div className="column-header">
                        <h3>Ecosystem Integrations</h3>
                        <Settings size={18} className="spin-hover" />
                    </div>
                    <div className="integration-cards">
                        <div className="int-card active">
                            <div className="int-icon zoom">Z</div>
                            <div className="int-details">
                                <span className="int-name">Zoom Business</span>
                                <span className="int-status">Operational</span>
                            </div>
                            <div className="status-glow green"></div>
                        </div>
                        <div className="int-card">
                            <div className="int-icon meet">G</div>
                            <div className="int-details">
                                <span className="int-name">Google Meet</span>
                                <span className="int-status">Disconnected</span>
                            </div>
                            <button className="btn-mini-connect">Link</button>
                        </div>
                        <div className="promo-box">
                            <Zap size={24} />
                            <h4>RTMP Support</h4>
                            <p>Stream directly to YouTube or Twitch via our secure tunnel.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderTracking = () => (
        <div className="live-content-wrapper animate-slide-up">
            <div className="section-header-compact">
                <h2 className="studio-main-title">Live Engagement Tracking</h2>
                <p className="studio-subtitle">Real-time attendance and participation metrics.</p>
            </div>

            <div className="stats-row-studio">
                <div className="stat-card-mini">
                    <Users size={18} />
                    <span>Active Learners: 1,240</span>
                </div>
                <div className="stat-card-mini">
                    <MessageSquare size={18} />
                    <span>Total Q&A: 42</span>
                </div>
                <div className="stat-card-mini">
                    <Zap size={18} />
                    <span>Avg. Engagement: 92%</span>
                </div>
            </div>

            <div className="tracking-list-card">
                <div className="list-header">
                    <span>Student Name</span>
                    <span>Join Time</span>
                    <span>Device</span>
                    <span>Status</span>
                </div>
                {[
                    { name: 'Alex Thompson', time: '10:02 AM', device: 'Desktop (Chrome)', status: 'Active' },
                    { name: 'Elena Gilbert', time: '10:05 AM', device: 'Mobile (iOS)', status: 'Away' },
                    { name: 'Sarah Miller', time: '10:08 AM', device: 'Tablet (iPad)', status: 'Active' }
                ].map((s, i) => (
                    <div key={i} className="list-item-row">
                        <div className="std-profile">
                            <div className="avatar-dot">{s.name.charAt(0)}</div>
                            <span>{s.name}</span>
                        </div>
                        <span className="time-val">{s.time}</span>
                        <span className="device-tag">{s.device}</span>
                        <span className={`status-pill-live ${s.status.toLowerCase()}`}>{s.status}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderHistory = () => (
        <div className="live-content-wrapper animate-slide-up">
            <div className="section-header-compact">
                <h2 className="studio-main-title">Session Archives</h2>
                <p className="studio-subtitle">Review previous broadcasts and manage recordings.</p>
            </div>

            <div className="history-grid-studio">
                {pastSessions.map(session => (
                    <div key={session.id} className="history-item-card">
                        <div className="history-visual">
                            <Play size={24} color="white" />
                            <div className="duration-tag">{session.duration}</div>
                        </div>
                        <div className="history-details">
                            <h4>{session.title}</h4>
                            <div className="h-meta">
                                <span><Calendar size={12} /> {session.date}</span>
                                <span><Users size={12} /> {session.participants} participants</span>
                            </div>
                            <div className="h-actions">
                                <button className="btn-icon-text"><Download size={14} /> Recording</button>
                                <button className="btn-icon-text"><BarChart size={14} /> Analytics</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderIntegrations = () => (
        <div className="live-content-wrapper animate-slide-up">
            <div className="section-header-compact">
                <h2 className="studio-main-title">Platform Integrations</h2>
                <p className="studio-subtitle">Connect your favorite streaming and conferencing tools.</p>
            </div>

            <div className="integrations-p-grid">
                <div className="integration-full-card active">
                    <div className="plat-logo zoom">Z</div>
                    <div className="plat-info">
                        <h3>Zoom Meetings</h3>
                        <p>Enterprise grade video conferencing with full LMS sync.</p>
                        <div className="plat-status">Verified & Connected</div>
                    </div>
                    <button className="btn-secondary-studio">Settings</button>
                </div>

                <div className="integration-full-card">
                    <div className="plat-logo meet">G</div>
                    <div className="plat-info">
                        <h3>Google Meet</h3>
                        <p>Seamlessly host live classes using your Google Workspace.</p>
                        <div className="plat-status disconnected">Not Connected</div>
                    </div>
                    <button className="btn-primary-studio-small">Connect Account</button>
                </div>

                <div className="integration-full-card">
                    <div className="plat-logo youtube">Y</div>
                    <div className="plat-info">
                        <h3>YouTube Live (RTMP)</h3>
                        <p>Broadcast to a global audience with low latency RTMP.</p>
                        <div className="plat-status disconnected">Not Connected</div>
                    </div>
                    <button className="btn-primary-studio-small">Connect Account</button>
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeSubTab) {
            case 'Overview': return renderOverview();
            case 'Schedule': return renderSchedule();
            case 'Tracking': return renderTracking();
            case 'History': return renderHistory();
            case 'Integrations': return renderIntegrations();
            default: return renderOverview();
        }
    };

    const menuItems = [
        { name: 'Overview', icon: Monitor },
        { name: 'Schedule', icon: Calendar },
        { name: 'Tracking', icon: Users },
        { name: 'History', icon: History },
        { name: 'Integrations', icon: ExternalLink }
    ];

    return (
        <div className="live-studio-container">
            <div className="studio-sidebar-nav">
                <div className="studio-nav-menu">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.name}
                                onClick={() => setActiveSubTab(item.name)}
                                className={`studio-nav-btn ${activeSubTab === item.name ? 'active' : ''}`}
                            >
                                <Icon size={20} />
                                <span>{item.name}</span>
                                {activeSubTab === item.name && <div className="active-dot"></div>}
                            </button>
                        );
                    })}
                </div>

                <div className="studio-promo">
                    <div className="promo-gradient-box">
                        <Zap size={28} />
                        <h5>Upgrade to Stream Pro</h5>
                        <p>Unlock 4K streaming and high bandwidth recording.</p>
                        <button className="btn-promo-action">View Plans</button>
                    </div>
                </div>
            </div>

            <div className="studio-main-content">
                {renderContent()}
            </div>

            <style>{`
                .live-studio-container { 
                    display: grid; 
                    grid-template-columns: 240px 1fr; 
                    gap: 0; 
                    min-height: 800px;
                    background: #fdfdfe;
                    border-radius: 32px;
                    overflow: hidden;
                    box-shadow: var(--shadow-lg);
                    border: 1px solid var(--border-light);
                }

                /* Sidebar Redesign */
                .studio-sidebar-nav {
                    background: var(--bg-subtle);
                    border-right: 1px solid var(--border-light);
                    padding: 2.5rem 1.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .studio-nav-menu { display: flex; flex-direction: column; gap: 0.5rem; }
                .studio-nav-btn {
                    display: flex; align-items: center; gap: 14px; padding: 0.85rem 1.25rem;
                    border: none; background: transparent; border-radius: 16px;
                    color: var(--text-muted); font-weight: 700; font-size: 0.9rem;
                    cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                }
                .studio-nav-btn:hover { background: rgba(99, 102, 241, 0.05); color: var(--primary); }
                .studio-nav-btn.active { background: white; color: var(--primary); box-shadow: var(--shadow-sm); }
                .active-dot { width: 6px; height: 6px; background: var(--primary); border-radius: 50%; position: absolute; right: 12px; }

                .promo-gradient-box {
                    background: var(--primary-gradient); padding: 1.5rem; border-radius: 24px; color: white;
                    display: flex; flex-direction: column; gap: 0.75rem;
                }
                .promo-gradient-box h5 { font-size: 1rem; font-weight: 800; margin: 0; }
                .promo-gradient-box p { font-size: 0.75rem; opacity: 0.85; line-height: 1.4; margin: 0; }
                .btn-promo-action {
                    padding: 0.6rem; border: none; background: white; color: var(--primary);
                    border-radius: 12px; font-weight: 800; font-size: 0.8rem; cursor: pointer;
                    margin-top: 0.5rem;
                }

                /* Main Studio Area */
                .studio-main-content { padding: 3rem; background: white; overflow-y: auto; max-height: 900px; }

                .studio-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2.5rem; }
                .studio-brand { display: flex; align-items: center; gap: 1.5rem; }
                .live-icon-animated {
                    width: 54px; height: 54px; background: rgba(239, 68, 68, 0.1);
                    border-radius: 16px; display: flex; align-items: center; justify-content: center;
                    color: #ef4444; border: 1.5px solid rgba(239, 68, 68, 0.2);
                }
                .pulse-icon { animation: studio-pulse 2s infinite; }
                @keyframes studio-pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.1); opacity: 0.6; } 100% { transform: scale(1); opacity: 1; } }

                .studio-main-title { font-size: 1.75rem; font-weight: 900; letter-spacing: -0.8px; margin: 0; }
                .studio-subtitle { font-size: 0.9rem; color: var(--text-muted); margin: 0; }
                .studio-actions { display: flex; gap: 1rem; }

                .primary-studio-btn {
                    background: var(--primary-gradient); color: white; border: none;
                    padding: 0.85rem 1.75rem; border-radius: 16px; font-weight: 800;
                    display: flex; align-items: center; gap: 10px; cursor: pointer;
                    transition: all 0.3s; box-shadow: var(--shadow-glow);
                }
                .primary-studio-btn:hover { transform: translateY(-3px); filter: brightness(1.1); }
                .glass-btn {
                   background: white; border: 1.5px solid var(--border-light);
                   padding: 0.85rem 1.5rem; border-radius: 16px; font-weight: 700;
                   display: flex; align-items: center; gap: 8px; cursor: pointer; 
                }

                /* Broadcast Card Redesign */
                .live-broadcast-card {
                    background: var(--bg-subtle); border-radius: 32px; border: 1px solid var(--border-light);
                    overflow: hidden; margin-bottom: 3rem; box-shadow: var(--shadow-md);
                }
                .live-active { border-color: #ef4444; box-shadow: 0 0 30px rgba(239, 68, 68, 0.15); }

                .broadcast-visual { height: 420px; position: relative; background: #0f172a; display: flex; align-items: center; justify-content: center; overflow: hidden; }
                .live-stream-preview img { width: 100%; height: 100%; object-fit: cover; opacity: 0.6; }
                .preview-overlay { position: absolute; top: 2rem; left: 2rem; right: 2rem; display: flex; justify-content: space-between; z-index: 2; }
                .live-badge { background: #ef4444; color: white; padding: 4px 12px; border-radius: 8px; font-weight: 900; font-size: 0.75rem; letter-spacing: 1px; }
                .viewer-count { background: rgba(0,0,0,0.6); backdrop-filter: blur(8px); color: white; padding: 4px 12px; border-radius: 8px; font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; gap: 6px; }
                
                .stream-stats-bar {
                    position: absolute; bottom: 0; left: 0; right: 0; padding: 1.25rem 2rem;
                    background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white;
                    display: flex; gap: 2rem; font-size: 0.75rem; font-weight: 700;
                }
                .stream-stats-bar span { display: flex; align-items: center; gap: 6px; }

                .stream-offline-placeholder { text-align: center; color: rgba(255,255,255,0.4); display: flex; flex-direction: column; align-items: center; gap: 1rem; }
                .offline-icon { opacity: 0.2; }
                .stream-offline-placeholder h3 { color: white; font-weight: 800; margin: 0; }
                .stream-offline-placeholder p { font-size: 0.9rem; }

                .broadcast-controls { padding: 2.5rem; display: flex; justify-content: space-between; align-items: center; background: white; }
                .active-session-name { font-size: 1.25rem; font-weight: 800; margin-bottom: 0.5rem; }
                .session-badges { display: flex; gap: 0.75rem; }
                .platform-pill { font-size: 0.7rem; font-weight: 800; padding: 4px 10px; border-radius: 6px; }
                .platform-pill.zoom { background: #e0f2ff; color: #2D8CFF; }
                .encryption-badge { font-size: 0.7rem; color: var(--text-dim); display: flex; align-items: center; gap: 4px; font-weight: 700; }

                .control-buttons { display: flex; gap: 1rem; align-items: center; }
                .control-btn { padding: 0.8rem 1.5rem; border-radius: 14px; font-weight: 800; border: none; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: 0.3s; }
                .control-btn.primary { color: white; }
                .control-btn.primary.green { background: #10b981; }
                .control-btn.primary.green.glow { box-shadow: 0 0 20px rgba(16, 185, 129, 0.4); }
                .control-btn.primary.red { background: #ef4444; }
                .control-btn.circle { width: 50px; height: 50px; padding: 0; border-radius: 50%; background: var(--bg-subtle); color: var(--text-main); display: flex; align-items: center; justify-content: center; border: 1.5px solid var(--border-light); }
                .control-btn.circle:hover { background: white; border-color: var(--primary); color: var(--primary); transform: rotate(15deg); }

                /* Secondary Grid */
                .secondary-grid { display: grid; grid-template-columns: 1fr 340px; gap: 2.5rem; }
                
                @media (max-width: 1200px) {
                    .live-studio-container { grid-template-columns: 1fr; }
                    .studio-sidebar-nav { flex-direction: row; padding: 1rem 2rem; border-right: none; border-bottom: 1px solid var(--border-light); }
                    .studio-nav-menu { flex-direction: row; flex-wrap: wrap; }
                    .studio-promo { display: none; }
                    .secondary-grid { grid-template-columns: 1fr; }
                }

                @media (max-width: 768px) {
                    .broadcast-controls { flex-direction: column; gap: 1.5rem; align-items: flex-start; }
                    .studio-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
                    .form-split { grid-template-columns: 1fr; gap: 2rem; }
                    .studio-main-content { padding: 1.5rem; }
                }
                .column-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
                .column-header h3 { font-size: 1.1rem; font-weight: 900; letter-spacing: -0.4px; }
                .link-text { background: transparent; border: none; color: var(--primary); font-weight: 800; font-size: 0.8rem; cursor: pointer; }

                .live-op-card { display: flex; gap: 1.5rem; padding: 1.25rem; background: white; border-radius: 24px; border: 1.5px solid var(--border-light); margin-bottom: 1rem; transition: 0.3s; }
                .live-op-card:hover { transform: translateY(-5px); border-color: var(--primary); box-shadow: var(--shadow-md); }
                .op-thumb { width: 140px; height: 90px; border-radius: 14px; overflow: hidden; position: relative; flex-shrink: 0; }
                .op-thumb img { width: 100%; height: 100%; object-fit: cover; }
                .op-time-overlay { position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.6); color: white; font-size: 0.65rem; font-weight: 900; padding: 2px 6px; border-radius: 4px; }
                .op-info h4 { font-size: 0.95rem; font-weight: 800; margin-bottom: 8px; }
                .op-meta { display: flex; gap: 1rem; color: var(--text-dim); font-size: 0.75rem; font-weight: 700; margin-bottom: 12px; }
                .op-meta span { display: flex; align-items: center; gap: 4px; }
                .op-actions { display: flex; gap: 0.75rem; }
                .op-btn { border: none; padding: 8px 12px; border-radius: 10px; font-weight: 800; font-size: 0.75rem; cursor: pointer; }
                .op-btn.main { background: var(--bg-subtle); color: var(--text-main); flex: 1; transition: 0.2s; }
                .op-btn.main:hover { background: var(--primary); color: white; }
                .op-btn.share { background: var(--bg-subtle); color: var(--text-dim); }

                .integration-cards { display: flex; flex-direction: column; gap: 0.75rem; }
                .int-card { display: flex; align-items: center; gap: 1rem; padding: 1.25rem; background: var(--bg-subtle); border-radius: 20px; position: relative; border: 1.5px solid transparent; transition: 0.3s; }
                .int-card.active { background: white; border-color: var(--border-light); }
                .int-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 900; }
                .int-icon.zoom { background: #2D8CFF; }
                .int-icon.meet { background: #00897B; }
                .int-name { display: block; font-weight: 800; font-size: 0.9rem; }
                .int-status { font-size: 0.7rem; color: var(--text-dim); font-weight: 700; }
                .status-glow { width: 8px; height: 8px; border-radius: 50%; position: absolute; right: 20px; }
                .status-glow.green { background: #10b981; box-shadow: 0 0 10px #10b981; }
                .btn-mini-connect { margin-left: auto; background: white; border: 1.5px solid var(--border-light); padding: 4px 12px; border-radius: 8px; font-weight: 800; font-size: 0.7rem; cursor: pointer; }

                .promo-box { background: #0f172a; color: white; padding: 1.75rem; border-radius: 24px; margin-top: 1rem; }
                .promo-box h4 { margin: 10px 0 5px; font-weight: 800; }
                .promo-box p { font-size: 0.75rem; opacity: 0.6; line-height: 1.5; margin: 0; }

                /* Form Design */
                .form-page-header { display: flex; gap: 1.5rem; align-items: center; margin-bottom: 3rem; }
                .back-btn-subtle { width: 44px; height: 44px; border-radius: 12px; border: 1.5px solid var(--border-light); background: transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.3s; }
                .back-btn-subtle:hover { background: var(--bg-subtle); border-color: var(--primary); color: var(--primary); }
                .glass-form-container { background: white; border-radius: 32px; border: 1px solid var(--border-light); padding: 3rem; box-shadow: var(--shadow-md); }
                .form-split { display: grid; grid-template-columns: 1fr 320px; gap: 4rem; }
                .field-group { margin-bottom: 2rem; }
                .field-group label { display: block; font-size: 0.75rem; font-weight: 900; margin-bottom: 10px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; }
                .premium-field { width: 100%; padding: 1rem 1.25rem; border-radius: 16px; border: 2px solid var(--border-light); background: var(--bg-subtle); font-weight: 600; font-size: 0.95rem; outline: none; transition: 0.3s; }
                .premium-field:focus { border-color: var(--primary); background: white; box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1); }
                .premium-field.area { height: 160px; resize: none; }
                .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
                .input-with-icon { position: relative; }
                .input-with-icon svg { position: absolute; left: 1.25rem; top: 50%; transform: translateY(-50%); color: var(--text-dim); }
                .icon-pad { padding-left: 3rem; }

                .stream-preview-config { margin-bottom: 2rem; }
                .preview-label { font-size: 0.75rem; font-weight: 900; margin-bottom: 10px; color: var(--text-muted); }
                .upload-zone { height: 180px; border: 2px dashed var(--border-light); border-radius: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; cursor: pointer; transition: 0.3s; color: var(--text-dim); }
                .upload-zone:hover { border-color: var(--primary); background: rgba(99, 102, 241, 0.05); color: var(--primary); }
                .upload-zone span { font-size: 0.8rem; font-weight: 800; }

                .toggle-list { display: flex; flex-direction: column; gap: 0.75rem; }
                .mini-toggle-card { padding: 1rem 1.25rem; background: var(--bg-subtle); border-radius: 16px; display: flex; justify-content: space-between; align-items: center; }
                .toggle-info { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 0.85rem; }
                .switch-pill { width: 44px; height: 24px; background: #e2e8f0; border-radius: 20px; position: relative; cursor: pointer; transition: 0.3s; }
                .switch-pill::after { content: ''; position: absolute; left: 4px; top: 4px; width: 16px; height: 16px; background: white; border-radius: 50%; transition: 0.3s; }
                .switch-pill.active { background: var(--primary); }
                .switch-pill.active::after { left: 24px; }

                .form-action-footer { margin-top: 4rem; padding-top: 2rem; border-top: 1.5px solid var(--border-light); display: flex; justify-content: flex-end; gap: 1.25rem; }
                .btn-glass { padding: 1rem 2rem; border: none; background: transparent; color: var(--text-muted); font-weight: 800; cursor: pointer; }
                .btn-primary-studio { background: var(--primary-gradient); color: white; border: none; padding: 1rem 2.5rem; border-radius: 16px; font-weight: 800; display: flex; align-items: center; gap: 12px; cursor: pointer; box-shadow: var(--shadow-glow); }

                /* New Views Styling */
                .section-header-compact { margin-bottom: 2.5rem; }
                .stats-row-studio { display: flex; gap: 1.5rem; margin-bottom: 2rem; }
                .stat-card-mini { background: var(--bg-subtle); padding: 1rem 1.5rem; border-radius: 12px; display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 0.85rem; color: var(--primary); }
                
                .tracking-list-card { background: white; border: 1px solid var(--border-light); border-radius: 20px; overflow: hidden; }
                .list-header { display: grid; grid-template-columns: 2fr 1fr 1.5fr 1fr; padding: 1rem 1.75rem; background: var(--bg-subtle); font-size: 0.75rem; font-weight: 900; color: var(--text-dim); text-transform: uppercase; }
                .list-item-row { display: grid; grid-template-columns: 2fr 1fr 1.5fr 1fr; padding: 1.25rem 1.75rem; border-bottom: 1px solid var(--border-light); align-items: center; }
                .std-profile { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 0.9rem; }
                .avatar-dot { width: 32px; height: 32px; border-radius: 50%; background: var(--accent-gradient); color: white; display: flex; align-items: center; justify-content: center; }
                .time-val { font-size: 0.85rem; color: var(--text-muted); font-weight: 600; }
                .device-tag { font-size: 0.8rem; color: var(--text-dim); }
                .status-pill-live { padding: 4px 10px; border-radius: 100px; font-size: 0.75rem; font-weight: 900; text-align: center; width: fit-content; }
                .status-pill-live.active { background: #ecfdf5; color: #10b981; }
                .status-pill-live.away { background: #fff7ed; color: #f59e0b; }

                .history-grid-studio { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }
                .history-item-card { background: white; border: 1px solid var(--border-light); border-radius: 20px; overflow: hidden; transition: 0.3s; }
                .history-item-card:hover { border-color: var(--primary); transform: translateY(-5px); }
                .history-visual { height: 160px; background: #0f172a; display: flex; align-items: center; justify-content: center; position: relative; }
                .duration-tag { position: absolute; bottom: 10px; right: 10px; background: rgba(0,0,0,0.6); color: white; font-size: 0.7rem; font-weight: 800; padding: 2px 6px; border-radius: 4px; }
                .history-details { padding: 1.5rem; }
                .history-details h4 { font-size: 1rem; font-weight: 800; margin-bottom: 10px; }
                .h-meta { display: flex; gap: 1rem; font-size: 0.75rem; color: var(--text-dim); margin-bottom: 1.5rem; }
                .h-actions { display: flex; gap: 0.75rem; }
                .btn-icon-text { flex: 1; padding: 10px; border-radius: 10px; border: 1px solid var(--border-light); background: transparent; display: flex; align-items: center; justify-content: center; gap: 6px; font-weight: 800; font-size: 0.75rem; cursor: pointer; transition: 0.2s; }
                .btn-icon-text:hover { border-color: var(--primary); color: var(--primary); background: var(--bg-subtle); }

                .integrations-p-grid { display: flex; flex-direction: column; gap: 1.5rem; }
                .integration-full-card { display: flex; align-items: center; gap: 2rem; padding: 2rem; background: var(--bg-subtle); border-radius: 24px; border: 1.5px solid transparent; transition: 0.3s; }
                .integration-full-card.active { background: white; border-color: var(--border-light); box-shadow: var(--shadow-sm); }
                .plat-logo { width: 60px; height: 60px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 900; color: white; flex-shrink: 0; }
                .plat-logo.zoom { background: #2D8CFF; }
                .plat-logo.meet { background: #00897B; }
                .plat-logo.youtube { background: #FF0000; }
                .plat-info { flex: 1; }
                .plat-info h3 { font-size: 1.15rem; font-weight: 800; margin-bottom: 4px; }
                .plat-info p { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 10px; }
                .plat-status { font-size: 0.75rem; font-weight: 800; color: #10b981; }
                .plat-status.disconnected { color: var(--text-dim); }
                .btn-primary-studio-small { background: var(--primary-gradient); color: white; border: none; padding: 10px 20px; border-radius: 10px; font-weight: 800; font-size: 0.8rem; cursor: pointer; }
                .btn-secondary-studio { background: white; border: 1.5px solid var(--border-light); padding: 10px 20px; border-radius: 10px; font-weight: 800; font-size: 0.8rem; cursor: pointer; }

                /* Animations */
                .animate-slide-up { animation: slideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
                @keyframes slideIn { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
                .spin-hover:hover { animation: spin 2s infinite linear; }
                @keyframes spin { from { transform: rotate(0); } to { transform: rotate(360deg); } }

            `}</style>
        </div>
    );
};

export default LiveClassManagement;
