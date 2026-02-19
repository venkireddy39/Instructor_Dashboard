import React, { useState } from 'react';
import {
    Award,
    FileText,
    Settings,
    Download,
    Search,
    Users,
    CheckCircle,
    RefreshCcw,
    BarChart,
    Plus,
    Trash2,
    Eye,
    ShieldCheck,
    ChevronRight,
    DownloadCloud,
    Share2,
    Printer,
    Layers,
    Clock,
    Filter,
    Play,
    X,
    UserPlus,
    FileSpreadsheet,
    Calendar as CalendarIcon,
    BookOpen
} from 'lucide-react';

const CertificationManagement = () => {
    const [activeSubTab, setActiveSubTab] = useState('Certificate List');
    const [selectedTemplate, setSelectedTemplate] = useState(1);
    const [isExportModalOpen, setIsExportModalOpen] = useState(false);
    const [manualIssueData, setManualIssueData] = useState({ student: '', course: '', date: '', template: 1 });

    const templates = [
        { id: 1, name: 'Professional Growth', type: 'Modern', color: '#6366f1' },
        { id: 2, name: 'Academic Excellence', type: 'Classic', color: '#10b981' },
        { id: 3, name: 'Completion Standard', type: 'Minimalist', color: '#f59e0b' }
    ];

    const studentCertificates = [
        { id: 1, name: 'Alex Thompson', course: 'React Architecture', score: '94%', date: '2024-03-15', status: 'Issued', verifyId: 'CRT-RX-9821' },
        { id: 2, name: 'Sarah Chen', course: 'UI/UX Design', score: '88%', date: '2024-03-18', status: 'Pending', verifyId: 'N/A' },
        { id: 3, name: 'Michael Ross', score: '92%', course: 'Node.js Backend', date: '2024-03-10', status: 'Issued', verifyId: 'CRT-NB-1029' }
    ];

    const renderManualIssue = () => (
        <div className="cert-section animate-slide-up">
            <div className="section-header-cert">
                <div>
                    <h2 className="cert-title">Issue Manual Certificate</h2>
                    <p className="cert-desc">Override system automation to grant certificates for special achievements or prior learning.</p>
                </div>
            </div>

            <div className="manual-issue-layout">
                <div className="issue-form-card">
                    <div className="form-group-cert">
                        <label><Users size={14} /> RECIPIENT STUDENT</label>
                        <div className="input-with-search">
                            <Search size={16} />
                            <input
                                type="text"
                                placeholder="Search by name or email..."
                                value={manualIssueData.student}
                                onChange={(e) => setManualIssueData({ ...manualIssueData, student: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="form-row-cert">
                        <div className="form-group-cert">
                            <label><BookOpen size={14} /> SELECT COURSE</label>
                            <select className="premium-select-cert">
                                <option>Advanced React Architecture</option>
                                <option>UI/UX Design Masterclass</option>
                                <option>Fullstack Node.js Backend</option>
                            </select>
                        </div>
                        <div className="form-group-cert">
                            <label><CalendarIcon size={14} /> CONFERRAL DATE</label>
                            <input type="date" className="premium-input-cert" />
                        </div>
                    </div>

                    <div className="form-group-cert">
                        <label><Layers size={14} /> CHOOSE TEMPLATE</label>
                        <div className="template-grid-mini">
                            {templates.map(t => (
                                <div
                                    key={t.id}
                                    className={`mini-tpl-card ${manualIssueData.template === t.id ? 'active' : ''}`}
                                    onClick={() => setManualIssueData({ ...manualIssueData, template: t.id })}
                                >
                                    <div className="tpl-swatch" style={{ background: t.color }}></div>
                                    <span>{t.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="form-group-cert">
                        <label><FileText size={14} /> CUSTOM NOTE (OFFICIAL RECORD)</label>
                        <textarea placeholder="e.g. Awarded for exceptional contribution to the open-source module project..." className="premium-textarea-cert"></textarea>
                    </div>

                    <div className="issue-actions-cert">
                        <button className="preview-btn">Draft Preview</button>
                        <button className="issue-btn"><Award size={18} /> Sign & Issue Certificate</button>
                    </div>
                </div>

                <div className="issue-guidelines">
                    <div className="guideline-card">
                        <ShieldCheck size={24} color="var(--primary)" />
                        <h4>Official Guidelines</h4>
                        <ul>
                            <li>Manual certificates generate a unique CRT-ID.</li>
                            <li>The operation is logged in the system audit trail.</li>
                            <li>A notification will be sent to the student.</li>
                            <li>This will bypass current completion criteria.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderTemplateDesigner = () => (
        <div className="cert-section animate-slide-up">
            <div className="section-header-cert">
                <div>
                    <h2 className="cert-title">Template Designer</h2>
                    <p className="cert-desc">Design and customize the visual identity of your course certificates.</p>
                </div>
                <button className="primary-cert-btn"><Plus size={18} /> New Template</button>
            </div>

            <div className="template-editor-grid">
                <div className="template-canvas-card">
                    <div className="certificate-preview" style={{ '--primary-clr': templates.find(t => t.id === selectedTemplate)?.color || '#6366f1' }}>
                        <div className="cert-border-outer">
                            <div className="cert-border-inner">
                                <div className="cert-layout">
                                    <div className="cert-header-visual">
                                        <Award size={48} className="cert-medal" />
                                        <div className="cert-brand">INSTRUCTOR<span>HUB</span></div>
                                    </div>
                                    <h1 className="cert-main-head">CERTIFICATE</h1>
                                    <h2 className="cert-sub-head">OF COMPLETION</h2>
                                    <p className="cert-presented">This is proudly presented to</p>
                                    <div className="cert-student-name">STUDENT NAME</div>
                                    <p className="cert-achievement">For successfully completing the comprehensive course on</p>
                                    <div className="cert-course-name">COURSE TITLE & MASTERCLASS</div>
                                    <div className="cert-footer-visual">
                                        <div className="cert-sign-box">
                                            <div className="sign-line"></div>
                                            <span>COURSE INSTRUCTOR</span>
                                        </div>
                                        <div className="cert-seal">
                                            <ShieldCheck size={40} />
                                            <span>VERIFIED</span>
                                        </div>
                                        <div className="cert-sign-box">
                                            <div className="sign-line"></div>
                                            <span>ACADEMIC DIRECTOR</span>
                                        </div>
                                    </div>
                                    <div className="cert-id">Verification ID: #CRT-XXXX-XXXX</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="template-controls">
                    <h4 className="control-label">ACTIVE TEMPLATES</h4>
                    <div className="template-selector-list">
                        {templates.map(t => (
                            <div
                                key={t.id}
                                className={`template-option ${selectedTemplate === t.id ? 'active' : ''}`}
                                onClick={() => setSelectedTemplate(t.id)}
                            >
                                <div className="template-thumb" style={{ background: t.color }}></div>
                                <div className="template-info">
                                    <span className="name">{t.name}</span>
                                    <span className="type">{t.type} Style</span>
                                </div>
                                {selectedTemplate === t.id && <CheckCircle size={16} color="var(--primary)" />}
                            </div>
                        ))}
                    </div>

                    <div className="design-customizer">
                        <h4 className="control-label">CUSTOMIZE DESIGN</h4>
                        <div className="customizer-item">
                            <label>Primary Brand Color</label>
                            <div className="color-picker-row">
                                {['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#0f172a'].map(c => (
                                    <div key={c} className="color-dot" style={{ background: c }}></div>
                                ))}
                            </div>
                        </div>
                        <div className="customizer-item">
                            <label>Border Style</label>
                            <select className="premium-select">
                                <option>Double Ornate</option>
                                <option>Modern Minimal</option>
                                <option>Classic Diploma</option>
                            </select>
                        </div>
                        <button className="save-design-btn">Update All Certificates</button>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderCriteria = () => (
        <div className="cert-section animate-slide-up">
            <div className="section-header-cert">
                <h2 className="cert-title">Completion Criteria Setup</h2>
                <div className="header-status-pill">System Status: Active</div>
            </div>

            <div className="criteria-grid">
                {[
                    { title: 'Quiz Score Threshold', desc: 'Minimum average score across all quizzes', value: '80%', icon: Award },
                    { title: 'Video Watch Depth', desc: 'Percentage of course duration students must watch', value: '100%', icon: Play },
                    { title: 'Assignment Submission', desc: 'All mandatory tasks must be approved', value: 'Mandatory', icon: FileText },
                    { title: 'Final Exam Passing', desc: 'Score required in the capstone assessment', value: '75%', icon: ShieldCheck }
                ].map((c, i) => (
                    <div key={i} className="criteria-card">
                        <div className="criteria-icon-box">
                            <c.icon size={24} />
                        </div>
                        <div className="criteria-info">
                            <h4>{c.title}</h4>
                            <p>{c.desc}</p>
                            <div className="criteria-value-editor">
                                <span className="current-val">{c.value}</span>
                                <button className="edit-link">Adjust</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="auto-gen-logic">
                <div className="promo-box-cert">
                    <RefreshCcw size={32} />
                    <div>
                        <h3>Auto-Generation Engine</h3>
                        <p>When enabled, our AI automatically issues, notifies, and delivers certificates to students as soon as they meet all the criteria above.</p>
                    </div>
                    <div className="switch-container">
                        <div className="switch active"></div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderCertificateList = () => (
        <div className="cert-section animate-slide-up">
            <div className="section-header-cert">
                <h2 className="cert-title">Student Certificate Registry</h2>
                <div className="registry-actions">
                    <div className="search-container">
                        <Search size={16} className="search-icon" />
                        <input type="text" placeholder="Search by name or CRT ID..." />
                        <div className="search-shortcut">
                            <span>ALT</span>
                            <span>C</span>
                        </div>
                    </div>
                    <button className="filter-btn-cert"><Filter size={16} /></button>
                </div>
            </div>

            <div className="registry-table-container">
                <table className="cert-table">
                    <thead>
                        <tr>
                            <th>Student Identity</th>
                            <th>Course Domain</th>
                            <th>Grade/Score</th>
                            <th>Issued Date</th>
                            <th>Status/ID</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentCertificates.map(c => (
                            <tr key={c.id}>
                                <td>
                                    <div className="student-profile-mini">
                                        <div className="avatar-mini">{c.name.charAt(0)}</div>
                                        <span className="name">{c.name}</span>
                                    </div>
                                </td>
                                <td>{c.course}</td>
                                <td><span className="score-pill">{c.score}</span></td>
                                <td className="date-cell">{c.date}</td>
                                <td>
                                    {c.status === 'Issued' ? (
                                        <div className="id-badge">
                                            <CheckCircle size={12} color="#10b981" /> {c.verifyId}
                                        </div>
                                    ) : (
                                        <span className="status-pending">PENDING APPROVAL</span>
                                    )}
                                </td>
                                <td>
                                    <div className="cert-op-row">
                                        <button className="op-icon-btn" title="View Preview"><Eye size={16} /></button>
                                        <button className="op-icon-btn" title="Download PDF"><Download size={16} /></button>
                                        <button className="op-icon-btn" title="Share Link"><Share2 size={16} /></button>
                                        <button className="op-icon-btn red" title="Revoke"><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderReports = () => (
        <div className="cert-section animate-slide-up">
            <div className="section-header-cert">
                <h2 className="cert-title">Certification Insights</h2>
            </div>

            <div className="cert-stats-row">
                {[
                    { label: 'Total Issued', val: '1,452', trend: '+12%', color: 'var(--primary)' },
                    { label: 'Pending Approval', val: '38', trend: '-5%', color: '#f59e0b' },
                    { label: 'Reprint Requests', val: '12', trend: '+2%', color: '#6366f1' },
                    { label: 'Verification Rate', val: '98%', trend: '+0.4%', color: '#10b981' }
                ].map((s, i) => (
                    <div key={i} className="mini-stat-card-cert">
                        <span className="label">{s.label}</span>
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
                            <span className="value" style={{ color: s.color }}>{s.val}</span>
                            <span className="trend">{s.trend}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="reports-grid">
                <div className="chart-placeholder-cert">
                    <BarChart size={48} color="var(--border-light)" />
                    <p>Issue Volume (Last 30 Days)</p>
                </div>
                <div className="recent-activity-cert">
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 800, marginBottom: '1.5rem' }}>RECENT OPERATIONS</h4>
                    {[1, 2, 3].map(i => (
                        <div key={i} className="activity-item-cert">
                            <RefreshCcw size={16} color="var(--text-dim)" />
                            <div className="activity-info">
                                <span className="text"><strong>Alex Thompson</strong>'s certificate was re-issued.</span>
                                <span className="time">10 minutes ago</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeSubTab) {
            case 'Templates': return renderTemplateDesigner();
            case 'Generation Criteria': return renderCriteria();
            case 'Certificate List': return renderCertificateList();
            case 'Manual Issue': return renderManualIssue();
            case 'Insights & Reports': return renderReports();
            default: return renderCertificateList();
        }
    };

    const sidebarItems = [
        { name: 'Templates', icon: Layers },
        { name: 'Certificate List', icon: FileText },
        { name: 'Generation Criteria', icon: Settings },
        { name: 'Manual Issue', icon: Printer },
        { name: 'Verification Hub', icon: ShieldCheck },
        { name: 'Insights & Reports', icon: BarChart }
    ];

    return (
        <div className="cert-management-container">
            {isExportModalOpen && (
                <div className="export-modal-overlay">
                    <div className="export-modal-card animate-slide-up">
                        <div className="modal-header-cert">
                            <h3>Export Records</h3>
                            <button className="close-btn" onClick={() => setIsExportModalOpen(false)}><X size={20} /></button>
                        </div>
                        <div className="export-options">
                            <div className="export-group">
                                <label>SELECT FORMAT</label>
                                <div className="format-grid">
                                    <div className="format-btn active"><FileSpreadsheet size={20} /> Excel / CSV</div>
                                    <div className="format-btn"><FileText size={20} /> Portable PDF</div>
                                </div>
                            </div>
                            <div className="export-group">
                                <label>DATA RANGE</label>
                                <select className="premium-select-cert">
                                    <option>All Lifetime Records</option>
                                    <option>Last 30 Days</option>
                                    <option>Custom Range...</option>
                                </select>
                            </div>
                            <div className="export-group">
                                <label>INCLUDE COLUMNS</label>
                                <div className="columns-grid">
                                    <label><input type="checkbox" defaultChecked /> Student Details</label>
                                    <label><input type="checkbox" defaultChecked /> Issue Dates</label>
                                    <label><input type="checkbox" defaultChecked /> CRT-ID Codes</label>
                                    <label><input type="checkbox" /> Grade Scores</label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer-cert">
                            <button className="cancel-btn" onClick={() => setIsExportModalOpen(false)}>Close</button>
                            <button className="download-btn-main"><DownloadCloud size={18} /> Generate & Download</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="page-header-main">
                <div className="header-info-main">
                    <h1>Certification Hub</h1>
                    <p>Orchestrate, validate, and manage your students' professional success markers.</p>
                </div>
                <div className="header-actions-main">
                    <button className="glass-btn-export" onClick={() => setIsExportModalOpen(true)}>
                        <DownloadCloud size={18} /> <span>Export Records</span>
                    </button>
                    <button className="primary-issue-btn" onClick={() => setActiveSubTab('Manual Issue')}>
                        <Plus size={18} /> <span>Issue Manual Certificate</span>
                    </button>
                </div>
            </div>


            <div className="cert-layout-main">
                <aside className="cert-sidebar">
                    <div className="sidebar-menu-cert">
                        {sidebarItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => setActiveSubTab(item.name)}
                                    className={`sidebar-btn-cert ${activeSubTab === item.name ? 'active' : ''}`}
                                >
                                    <Icon size={18} />
                                    <span>{item.name}</span>
                                    {activeSubTab === item.name && <ChevronRight size={14} style={{ marginLeft: 'auto' }} />}
                                </button>
                            );
                        })}
                    </div>

                    <div className="cert-promo-card">
                        <Award size={32} color="white" />
                        <h4>Blockchain Verified</h4>
                        <p>Secure your certificates with immutable digital validation.</p>
                        <button className="promo-btn-cert">Enable Web3 Security</button>
                    </div>
                </aside>

                <div className="cert-content-area">
                    {renderContent()}
                </div>
            </div>

            <style>{`
                .cert-management-container { animation: fadeIn 0.4s ease-out; position: relative; }
                .page-header-main { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2.5rem; }
                .header-info-main h1 { font-size: 1.8rem; font-weight: 950; letter-spacing: -1.2px; margin-bottom: 0.4rem; color: #0f172a; }
                .header-info-main p { color: var(--text-muted); font-size: 0.95rem; }
                
                .header-actions-main { display: flex; gap: 1rem; }
                .glass-btn-export { 
                    display: flex; align-items: center; gap: 8px; padding: 0.85rem 1.5rem; 
                    background: white; border: 1.5px solid var(--border-light); border-radius: 16px;
                    font-weight: 800; color: var(--text-main); cursor: pointer; transition: 0.3s;
                }
                .glass-btn-export:hover { background: var(--bg-subtle); border-color: var(--primary); transform: translateY(-2px); }
                
                .primary-issue-btn {
                    display: flex; align-items: center; gap: 8px; padding: 0.85rem 1.75rem;
                    background: var(--primary-gradient); color: white; border: none; border-radius: 16px;
                    font-weight: 800; cursor: pointer; transition: 0.3s; box-shadow: var(--shadow-glow);
                }
                .primary-issue-btn:hover { filter: brightness(1.1); transform: translateY(-2px); }

                .cert-layout-main { display: grid; grid-template-columns: 280px 1fr; gap: 2.5rem; }
                
                .cert-sidebar { display: flex; flex-direction: column; gap: 1.5rem; }
                .sidebar-menu-cert { background: white; border-radius: 28px; padding: 1.25rem; border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); }
                .sidebar-btn-cert {
                    width: 100%; padding: 1rem 1.25rem; display: flex; align-items: center; gap: 14px;
                    border: none; background: transparent; border-radius: 18px; color: var(--text-muted);
                    font-weight: 750; font-size: 0.9rem; cursor: pointer; transition: 0.2s; margin-bottom: 0.5rem;
                }
                .sidebar-btn-cert:hover { background: var(--bg-subtle); color: var(--primary); }
                .sidebar-btn-cert.active { background: var(--primary-gradient); color: white; box-shadow: 0 8px 15px rgba(99, 102, 241, 0.25); }

                .cert-promo-card { 
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); 
                    padding: 1.75rem; border-radius: 28px; color: white; position: relative; overflow: hidden;
                }
                .cert-promo-card h4 { margin: 12px 0 6px; font-weight: 850; font-size: 1.1rem; }
                .cert-promo-card p { font-size: 0.8rem; opacity: 0.75; line-height: 1.5; margin-bottom: 1.5rem; }
                .promo-btn-cert { 
                    width: 100%; padding: 0.8rem; border-radius: 14px; border: none; 
                    background: white; color: #0f172a; font-weight: 800; font-size: 0.85rem; cursor: pointer; 
                }

                .cert-content-area { background: white; border-radius: 36px; padding: 3rem; border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); min-height: 850px; }

                /* Manual Issue View */
                .manual-issue-layout { display: grid; grid-template-columns: 1fr 300px; gap: 3rem; margin-top: 2rem; }
                .issue-form-card { display: flex; flex-direction: column; gap: 2rem; }
                .form-group-cert { display: flex; flex-direction: column; gap: 10px; }
                .form-group-cert label { font-size: 0.75rem; font-weight: 900; color: var(--text-dim); display: flex; align-items: center; gap: 6px; letter-spacing: 0.5px; }
                
                .input-with-search { position: relative; display: flex; align-items: center; }
                .input-with-search svg { position: absolute; left: 1.25rem; color: var(--text-dim); }
                .input-with-search input { 
                    width: 100%; padding: 1rem 1.25rem 1rem 3.5rem; border-radius: 16px; 
                    border: 1.5px solid var(--border-light); background: var(--bg-subtle); 
                    font-weight: 650; outline: none; transition: 0.3s;
                }
                .input-with-search input:focus { border-color: var(--primary); background: white; box-shadow: 0 0 0 5px rgba(99, 102, 241, 0.08); }
                
                .form-row-cert { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
                .premium-select-cert, .premium-input-cert { 
                    padding: 1rem 1.25rem; border-radius: 16px; border: 1.5px solid var(--border-light); 
                    background: var(--bg-subtle); font-weight: 650; outline: none;
                }
                
                .template-grid-mini { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
                .mini-tpl-card { 
                    padding: 1rem; border-radius: 16px; border: 1.5px solid var(--border-light); 
                    text-align: center; cursor: pointer; transition: 0.3s; background: var(--bg-subtle);
                }
                .mini-tpl-card.active { border-color: var(--primary); background: rgba(99, 102, 241, 0.05); }
                .tpl-swatch { height: 6px; border-radius: 10px; margin-bottom: 8px; }
                .mini-tpl-card span { font-size: 0.75rem; font-weight: 800; }
                
                .premium-textarea-cert { 
                    width: 100%; height: 120px; padding: 1.25rem; border-radius: 18px; 
                    border: 1.5px solid var(--border-light); background: var(--bg-subtle); 
                    font-weight: 600; outline: none; resize: none;
                }
                
                .issue-actions-cert { display: flex; gap: 1.25rem; margin-top: 1rem; }
                .preview-btn { 
                    flex: 0.5; padding: 1rem; border-radius: 16px; border: 1.5px solid var(--border-light);
                    background: white; font-weight: 800; cursor: pointer;
                }
                .issue-btn { 
                    flex: 1; padding: 1rem; border-radius: 16px; border: none;
                    background: var(--primary-gradient); color: white; font-weight: 800;
                    display: flex; align-items: center; justify-content: center; gap: 10px; cursor: pointer; box-shadow: var(--shadow-glow);
                }
                
                .guideline-card { padding: 2rem; background: #f8fafc; border-radius: 24px; border: 1px solid var(--border-light); }
                .guideline-card h4 { margin: 15px 0 10px; font-weight: 850; font-size: 1rem; }
                .guideline-card ul { padding-left: 1.25rem; display: flex; flex-direction: column; gap: 8px; }
                .guideline-card li { font-size: 0.8rem; color: var(--text-muted); line-height: 1.4; }

                /* Export Modal Styles */
                .export-modal-overlay { 
                    position: fixed; inset: 0; background: rgba(15, 23, 42, 0.7); 
                    backdrop-filter: blur(8px); z-index: 1000; display: flex; align-items: center; justify-content: center; 
                }
                .export-modal-card { 
                    background: white; width: 100%; max-width: 500px; border-radius: 32px; 
                    padding: 2.5rem; box-shadow: 0 30px 60px rgba(0,0,0,0.25); 
                }
                .modal-header-cert { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
                .modal-header-cert h3 { font-size: 1.5rem; font-weight: 900; letter-spacing: -0.5px; }
                .close-btn { background: var(--bg-subtle); border: none; padding: 10px; border-radius: 50%; cursor: pointer; transition: 0.2s; }
                .close-btn:hover { background: #fee2e2; color: #ef4444; transform: rotate(90deg); }
                
                .export-options { display: flex; flex-direction: column; gap: 2rem; }
                .export-group label { display: block; font-size: 0.7rem; font-weight: 950; color: var(--text-dim); margin-bottom: 12px; letter-spacing: 1px; }
                
                .format-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
                .format-btn { 
                    padding: 1.25rem; border-radius: 20px; border: 2px solid var(--border-light); 
                    text-align: center; cursor: pointer; transition: 0.2s; display: flex; flex-direction: column; align-items: center; gap: 8px; 
                    font-weight: 800; font-size: 0.85rem; color: var(--text-muted);
                }
                .format-btn.active { border-color: var(--primary); background: rgba(99, 102, 241, 0.04); color: var(--primary); }
                
                .columns-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
                .columns-grid label { display: flex; align-items: center; gap: 10px; font-size: 0.85rem; font-weight: 650; color: var(--text-main); font-variant: initial; letter-spacing: normal; margin-bottom: 0; }
                
                .modal-footer-cert { display: flex; gap: 1rem; margin-top: 3rem; }
                .cancel-btn { flex: 0.4; padding: 1rem; border-radius: 16px; border: none; background: var(--bg-subtle); font-weight: 800; cursor: pointer; }
                .download-btn-main { 
                    flex: 1; padding: 1rem; border-radius: 16px; border: none; 
                    background: var(--primary-gradient); color: white; font-weight: 800; 
                    display: flex; align-items: center; justify-content: center; gap: 10px; cursor: pointer;
                }

                /* Rest of the original styles optimized */
                .template-editor-grid { display: grid; grid-template-columns: 1fr 340px; gap: 3rem; margin-top: 2rem; }
                .certificate-preview { 
                    width: 100%; aspect-ratio: 1.414 / 1; border-radius: 12px; 
                    background: white; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15);
                    position: relative; overflow: hidden;
                }
                .cert-border-outer { 
                    height: 100%; padding: 20px; 
                    border: 15px solid var(--primary-clr); 
                    position: relative; box-sizing: border-box;
                }
                .cert-border-inner { 
                    height: 100%; border: 3px solid var(--primary-clr); 
                    padding: 30px; display: flex; flex-direction: column; 
                    align-items: center; text-align: center; box-sizing: border-box;
                    justify-content: space-between;
                }
                .cert-layout { 
                    display: flex; flex-direction: column; align-items: center; 
                    width: 100%; height: 100%; justify-content: space-between;
                }
                .cert-header-visual { margin-bottom: 0.5rem; }
                .cert-medal { color: var(--primary-clr); }
                .cert-main-head { font-size: 2.2rem; font-weight: 900; letter-spacing: 6px; margin: 0.5rem 0; color: #111; line-height: 1; }
                .cert-sub-head { 
                    color: var(--primary-clr); font-size: 1rem; font-weight: 800; 
                    letter-spacing: 3px; border-bottom: 2px solid var(--primary-clr); 
                    padding-bottom: 5px; margin-bottom: 1rem; 
                }
                .cert-presented { font-size: 0.8rem; margin: 0.5rem 0; opacity: 0.8; }
                .cert-student-name { 
                    font-family: 'Playfair Display', serif; font-size: 2.4rem; 
                    font-weight: 800; margin: 0.5rem 0; color: var(--primary-clr); 
                    line-height: 1.2; word-break: break-word; max-width: 90%;
                }
                .cert-achievement { font-size: 0.75rem; margin: 0.5rem 0; max-width: 80%; opacity: 0.8; }
                .cert-course-name { 
                    font-weight: 800; font-size: 1.1rem; margin: 0.5rem 0; color: #333; 
                    max-width: 90%; line-height: 1.2;
                }
                .cert-footer-visual { 
                    width: 100%; display: flex; justify-content: space-between; 
                    align-items: flex-end; margin-top: 1rem; padding: 0 10px;
                }
                .cert-sign-box { width: 120px; text-align: center; }
                .sign-line { border-bottom: 1px solid #aaa; margin-bottom: 5px; }
                .cert-sign-box span { font-size: 0.55rem; font-weight: 800; color: #999; }
                .cert-seal { 
                    display: flex; flex-direction: column; align-items: center; 
                    gap: 2px; color: #fbbf24; font-weight: 900; font-size: 0.5rem; 
                }
                .cert-id { font-size: 0.55rem; font-weight: 700; opacity: 0.4; margin-top: 5px; }

                .cert-table { width: 100%; border-collapse: separate; border-spacing: 0 12px; }
                .cert-table th { padding: 1.25rem 1rem; text-align: left; font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase; font-weight: 900; }
                .cert-table td { padding: 1.5rem 1rem; background: #f9fafb; vertical-align: middle; border-top: 1px solid rgba(0,0,0,0.02); border-bottom: 1px solid rgba(0,0,0,0.02); }
                .cert-table tr td:first-child { border-radius: 20px 0 0 20px; border-left: 1px solid rgba(0,0,0,0.02); }
                .cert-table tr td:last-child { border-radius: 0 20px 20px 0; border-right: 1px solid rgba(0,0,0,0.02); }

                .criteria-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
                .criteria-card { padding: 2rem; border-radius: 28px; background: #ffffff; border: 1.5px solid var(--border-light); box-shadow: var(--shadow-sm); }
                
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </div>
    );
};

export default CertificationManagement;
