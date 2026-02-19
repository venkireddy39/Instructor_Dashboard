import React, { useState } from 'react';
import {
    FilePlus,
    FileText,
    Upload,
    Calendar,
    Clock,
    Users,
    CheckCircle,
    XCircle,
    MessageSquare,
    BarChart,
    ChevronRight,
    Search,
    Filter,
    Download,
    Eye,
    Star,
    AlertCircle,
    RotateCcw,
    MoreHorizontal,
    ArrowUpRight,
    Layout,
    CheckSquare
} from 'lucide-react';

const AssignmentManagement = () => {
    const [activeSubTab, setActiveSubTab] = useState('Assignments Overview');
    const [selectedAssignment, setSelectedAssignment] = useState(null);

    const assignments = [
        { id: 1, title: 'React Hooks Deep Dive', course: 'Advanced React', dueDate: '2024-03-25', submissions: 42, total: 45, status: 'Active' },
        { id: 2, title: 'UI/UX Mobile Design System', course: 'UI/UX Masterclass', dueDate: '2024-03-22', submissions: 38, total: 40, status: 'Active' },
        { id: 3, title: 'Node.js Middleware Patterns', course: 'Backend Deep Dive', dueDate: '2024-03-20', submissions: 45, total: 45, status: 'Completed' },
    ];

    const submissions = [
        { id: 1, student: 'Alex Thompson', time: '2h ago', status: 'Pending', grade: null, file: 'hooks_submission.pdf' },
        { id: 2, student: 'Elena Gilbert', time: '5h ago', status: 'Graded', grade: '95/100', file: 'ui_ux_final.pdf' },
        { id: 3, student: 'Sarah Miller', time: '1d ago', status: 'Pending', grade: null, file: 'middleware_ref.doc' },
        { id: 4, student: 'Michael Chen', time: '1d ago', status: 'Graded', grade: '88/100', file: 'hooks_v2.pdf' },
    ];

    const renderOverview = () => (
        <div className="assignment-section animate-fade-in">
            <div className="section-header">
                <div>
                    <h2 className="section-title">Active Assignments</h2>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Manage and monitor student submissions.</p>
                </div>
                <button className="btn-primary" onClick={() => setActiveSubTab('Create Assignment')}>
                    <FilePlus size={18} style={{ marginRight: '8px' }} /> Create New
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
                {assignments.map(asgn => (
                    <div key={asgn.id} className="assignment-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <div className={`status-badge ${asgn.status.toLowerCase()}`}>{asgn.status}</div>
                            <button className="icon-btn"><MoreHorizontal size={18} /></button>
                        </div>
                        <h4 className="asgn-title">{asgn.title}</h4>
                        <p className="asgn-course">{asgn.course}</p>

                        <div className="asgn-meta-grid">
                            <div className="meta-item">
                                <Calendar size={14} />
                                <span>Due: {asgn.dueDate}</span>
                            </div>
                            <div className="meta-item">
                                <Users size={14} />
                                <span>{asgn.submissions}/{asgn.total} Submitted</span>
                            </div>
                        </div>

                        <div className="progress-container">
                            <div className="progress-bar-label">
                                <span>Completion</span>
                                <span>{Math.round((asgn.submissions / asgn.total) * 100)}%</span>
                            </div>
                            <div className="progress-track">
                                <div className="progress-fill" style={{ width: `${(asgn.submissions / asgn.total) * 100}%` }}></div>
                            </div>
                        </div>

                        <button className="btn-secondary-full" onClick={() => setActiveSubTab('Submissions List')}>
                            View Submissions <ArrowUpRight size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderCreate = () => (
        <div className="assignment-section animate-fade-in">
            <div className="section-header">
                <h2 className="section-title">Compose Assignment</h2>
            </div>

            <div className="creation-form">
                <div className="form-grid">
                    <div className="form-group full">
                        <label>Assignment Title</label>
                        <input type="text" placeholder="e.g., Module 4: State Management Patterns" className="premium-input" />
                    </div>

                    <div className="form-group full">
                        <label>Assignment Instructions</label>
                        <textarea placeholder="Describe the assignment requirements, objectives, and deliverables..." className="premium-textarea"></textarea>
                    </div>

                    <div className="form-group">
                        <label>Target Course</label>
                        <select className="premium-select">
                            <option>Advanced React Architecture 2024</option>
                            <option>Premium UI/UX Design Masterclass</option>
                            <option>Node.js Backend Deep Dive</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Due Date & Time</label>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <input type="date" className="premium-input" style={{ flex: 2 }} />
                            <input type="time" className="premium-input" style={{ flex: 1 }} />
                        </div>
                    </div>

                    <div className="form-group full">
                        <label>Upload Questions / Resources (PDF / Doc)</label>
                        <div className="upload-dropzone">
                            <Upload size={32} color="var(--primary)" />
                            <p>Drag & drop assignment files or <span>browse</span></p>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Max file size: 25MB</span>
                        </div>
                    </div>

                    <div className="rules-section">
                        <h4 className="rules-title">Submission Rules</h4>
                        <div className="rules-grid">
                            <div className="rule-toggle-item">
                                <div className="toggle-info">
                                    <span className="toggle-label">Late Submissions</span>
                                    <span className="toggle-desc">Allow students to submit after deadline</span>
                                </div>
                                <div className="toggle-switch active"></div>
                            </div>
                            <div className="rule-toggle-item">
                                <div className="toggle-info">
                                    <span className="toggle-label">Enable Resubmission</span>
                                    <span className="toggle-desc">Students can try again after feedback</span>
                                </div>
                                <div className="toggle-switch"></div>
                            </div>
                            <div className="rule-toggle-item">
                                <div className="toggle-info">
                                    <span className="toggle-label">Plagiarism Check</span>
                                    <span className="toggle-desc">Auto-scan for copied content</span>
                                </div>
                                <div className="toggle-switch active"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-actions">
                    <button className="btn-secondary">Save Draft</button>
                    <button className="btn-primary">Publish Assignment</button>
                </div>
            </div>
        </div>
    );

    const renderSubmissions = () => (
        <div className="assignment-section animate-fade-in">
            <div className="section-header">
                <div>
                    <h2 className="section-title">Submission Management</h2>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Review work, provide feedback, and assign grades.</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <div className="search-container">
                        <Search size={18} className="search-icon" />
                        <input type="text" placeholder="Search student..." />
                        <div className="search-shortcut">
                            <span>ALT</span>
                            <span>A</span>
                        </div>
                    </div>
                    <button className="btn-secondary"><Filter size={18} /></button>
                </div>
            </div>

            <div className="premium-table-container">
                <table className="premium-table">
                    <thead>
                        <tr>
                            <th>Student</th>
                            <th>Submission Time</th>
                            <th>File</th>
                            <th>Status</th>
                            <th>Grade</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submissions.map(sub => (
                            <tr key={sub.id} className="table-row-hover">
                                <td>
                                    <div className="student-info-cell">
                                        <div className="avatar-mini">{sub.student.charAt(0)}</div>
                                        <span>{sub.student}</span>
                                    </div>
                                </td>
                                <td style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{sub.time}</td>
                                <td>
                                    <div className="file-pill">
                                        <FileText size={14} />
                                        <span>{sub.file}</span>
                                    </div>
                                </td>
                                <td>
                                    <span className={`status-pill ${sub.status.toLowerCase()}`}>{sub.status}</span>
                                </td>
                                <td style={{ fontWeight: 800 }}>{sub.grade || '--'}</td>
                                <td>
                                    <button className="btn-action-view" onClick={() => setSelectedAssignment(sub)}>
                                        <Eye size={16} /> Grade
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedAssignment && (
                <div className="submission-overlay animate-fade-in">
                    <div className="submission-modal">
                        <div className="modal-header">
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Student Submission View</h3>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Reviewing work from {selectedAssignment.student}</p>
                            </div>
                            <button className="close-btn" onClick={() => setSelectedAssignment(null)}><XCircle size={24} /></button>
                        </div>

                        <div className="modal-content">
                            <div className="work-preview">
                                <div className="preview-header">
                                    <FileText size={24} color="var(--primary)" />
                                    <span>{selectedAssignment.file}</span>
                                    <button className="btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem', marginLeft: 'auto' }}>
                                        <Download size={14} /> Download
                                    </button>
                                </div>
                                <div className="preview-canvas">
                                    {/* Simulated File Preview Content */}
                                    <div className="preview-placeholder">
                                        <div className="line"></div>
                                        <div className="line short"></div>
                                        <div className="line"></div>
                                        <div className="line medium"></div>
                                        <div className="line"></div>
                                        <div className="line short"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="grading-panel">
                                <div className="grading-section">
                                    <label>Grade / Marks (Out of 100)</label>
                                    <input type="number" placeholder="Enter score" className="premium-input" />
                                </div>

                                <div className="grading-section">
                                    <label>Feedback & Comments</label>
                                    <textarea placeholder="Write constructive feedback for the student..." className="premium-textarea"></textarea>
                                </div>

                                <div className="grading-actions">
                                    <button className="btn-secondary-full" style={{ marginBottom: '1rem' }}>
                                        <RotateCcw size={16} /> Request Resubmission
                                    </button>
                                    <button className="btn-primary-full">Submit Grade</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    const renderReports = () => (
        <div className="assignment-section animate-fade-in">
            <div className="section-header">
                <div>
                    <h2 className="section-title">Assignment Analytics Portfolio</h2>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Deep-dive into submission performance and grading metrics.</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn-secondary btn-sm"><Download size={16} /> Export Detailed CSV</button>
                    <button className="btn-primary btn-sm">Generate PDF Report</button>
                </div>
            </div>

            <div className="stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div className="asgn-stat-card primary">
                    <CheckSquare size={20} className="stat-icon" />
                    <div>
                        <span className="stat-label">Assignments</span>
                        <h3 className="stat-val">12</h3>
                    </div>
                </div>
                <div className="asgn-stat-card success">
                    <Users size={20} className="stat-icon" />
                    <div>
                        <span className="stat-label">Submissions</span>
                        <h3 className="stat-val">486</h3>
                    </div>
                </div>
                <div className="asgn-stat-card warning">
                    <Star size={20} className="stat-icon" />
                    <div>
                        <span className="stat-label">Avg. Grade</span>
                        <h3 className="stat-val">88.5%</h3>
                    </div>
                </div>
                <div className="asgn-stat-card" style={{ background: 'rgba(139, 92, 246, 0.05)', color: '#8b5cf6', borderColor: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', borderRadius: '20px', border: '1px solid transparent' }}>
                    <TrendingUp size={20} className="stat-icon" />
                    <div>
                        <span className="stat-label">Grading Depth</span>
                        <h3 className="stat-val">96%</h3>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
                <div className="card" style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h3 className="card-title">Grade Distribution</h3>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <span style={{ fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)' }}><div style={{ width: 8, height: 8, borderRadius: 2, background: 'var(--primary-gradient)' }}></div> This Course</span>
                            <span style={{ fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)' }}><div style={{ width: 8, height: 8, borderRadius: 2, background: 'var(--border-light)' }}></div> Dept. Avg</span>
                        </div>
                    </div>
                    <div style={{ height: '300px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '1rem 0' }}>
                        {[20, 35, 80, 100, 65, 40].map((h, i) => (
                            <div key={i} style={{ width: '12%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '4px' }}>
                                <div style={{ height: `${h}%`, width: '100%', background: 'var(--primary-gradient)', borderRadius: '6px 6px 0 0', position: 'relative' }} className="chart-bar">
                                    <div style={{ position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50%)', fontSize: '0.65rem', fontWeight: 800 }}>{h}%</div>
                                </div>
                                <span style={{ textAlign: 'center', fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-dim)', marginTop: '8px' }}>
                                    {['<50', '50-60', '70-80', '80-90', '90-95', '95-100'][i]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card" style={{ padding: '2rem' }}>
                    <h3 className="card-title" style={{ marginBottom: '1.5rem' }}>Performance Insights</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {[
                            { label: 'Participation Rate', val: '92%', icon: Users, color: '#6366f1' },
                            { label: 'On-time Submissions', val: '85%', icon: Clock, color: '#10b981' },
                            { label: 'Avg. Feedback Wordcount', val: '124', icon: MessageSquare, color: '#f59e0b' },
                            { label: 'Re-submission Requests', val: '12', icon: RotateCcw, color: '#f43f5e' }
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--bg-subtle)', borderRadius: '14px' }}>
                                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'white', display: 'flex', alignItems: 'center', justifyCenter: 'center', color: item.color, boxShadow: '0 2px 4px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'center' }}>
                                    <item.icon size={18} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>{item.label}</div>
                                    <div style={{ fontSize: '1rem', fontWeight: 800 }}>{item.val}</div>
                                </div>
                                <ArrowUpRight size={16} color="var(--text-dim)" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeSubTab) {
            case 'Assignments Overview': return renderOverview();
            case 'Create Assignment': return renderCreate();
            case 'Submissions List': return renderSubmissions();
            case 'Assignment Report': return renderReports();
            default: return renderOverview();
        }
    };

    const sidebarItems = [
        { name: 'Assignments Overview', icon: FileText },
        { name: 'Create Assignment', icon: FilePlus },
        { name: 'Submissions List', icon: CheckSquare },
        { name: 'Assignment Report', icon: BarChart },
    ];

    return (
        <div className="assignment-container">
            <div className="page-header">
                <div className="header-title">
                    <h1>Assignments & Homework</h1>
                    <p>Track, manage, and evaluate student work efficiently.</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn-secondary btn-sm">Batch Download</button>
                    <button className="btn-primary btn-sm" onClick={() => setActiveSubTab('Assignment Report')}>Analytics</button>
                </div>
            </div>

            <div className="assignment-layout">
                <aside className="secondary-sidebar">
                    <div className="sidebar-menu">
                        {sidebarItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => setActiveSubTab(item.name)}
                                    className={`sidebar-btn ${activeSubTab === item.name ? 'active' : ''}`}
                                >
                                    <Icon size={18} className="btn-icon" />
                                    <span>{item.name}</span>
                                    {activeSubTab === item.name && <ChevronRight size={14} style={{ marginLeft: 'auto' }} />}
                                </button>
                            );
                        })}
                    </div>

                    <div className="sidebar-info-card">
                        <AlertCircle size={24} color="var(--primary)" style={{ marginBottom: '12px' }} />
                        <h4>Pending Review</h4>
                        <p>12 submissions across 3 assignments require grading.</p>
                        <button className="small-link" onClick={() => setActiveSubTab('Submissions List')}>Go to Submissions</button>
                    </div>
                </aside>

                <div className="assignment-content">
                    {renderContent()}
                </div>
            </div>

            <style>{`
                .assignment-container { animation: slideUp 0.4s ease-out; }
                .assignment-layout { display: grid; grid-template-columns: 280px 1fr; gap: 2rem; margin-top: 1.5rem; }
                
                .secondary-sidebar { display: flex; flex-direction: column; gap: 1.5rem; }
                .sidebar-menu { background: white; border-radius: 20px; padding: 1rem; border: 1px solid var(--border-light); }
                
                .sidebar-btn {
                    width: 100%; padding: 0.9rem 1.25rem; display: flex; align-items: center; gap: 14px;
                    border: none; background: transparent; border-radius: 12px; color: var(--text-muted);
                    font-weight: 600; font-size: 0.85rem; cursor: pointer; transition: all 0.2s ease; margin-bottom: 0.4rem;
                }
                .sidebar-btn:hover { background: var(--bg-subtle); color: var(--primary); }
                .sidebar-btn.active { background: var(--primary-gradient); color: white; }

                .sidebar-info-card {
                    background: var(--bg-subtle); padding: 1.5rem; border-radius: 20px; border: 1px solid var(--border-light);
                }
                .sidebar-info-card h4 { font-size: 0.95rem; font-weight: 800; margin-bottom: 0.5rem; }
                .sidebar-info-card p { font-size: 0.8rem; color: var(--text-muted); line-height: 1.4; margin-bottom: 1rem; }
                .small-link { background: none; border: none; color: var(--primary); font-weight: 700; font-size: 0.8rem; cursor: pointer; padding: 0; }

                .assignment-content {
                    background: white; border-radius: 24px; padding: 2.5rem; border: 1px solid var(--border-light); min-height: 650px;
                }

                .assignment-card {
                    background: var(--bg-subtle); padding: 1.5rem; border-radius: 20px; border: 1px solid transparent; transition: all 0.3s ease;
                }
                .assignment-card:hover { background: white; border-color: var(--primary); box-shadow: var(--shadow-md); transform: translateY(-5px); }
                
                .status-badge { padding: 4px 10px; border-radius: 6px; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; }
                .status-badge.active { background: rgba(16, 185, 129, 0.1); color: #10b981; }
                .status-badge.completed { background: #e2e8f0; color: var(--text-muted); }

                .asgn-title { font-size: 1.1rem; font-weight: 800; margin-bottom: 0.4rem; letter-spacing: -0.5px; }
                .asgn-course { font-size: 0.85rem; color: var(--text-muted); font-weight: 600; margin-bottom: 1.25rem; }

                .asgn-meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1.5rem; }
                .meta-item { display: flex; align-items: center; gap: 6px; font-size: 0.75rem; color: var(--text-dim); font-weight: 600; }

                .progress-track { height: 6px; background: #e2e8f0; border-radius: 10px; overflow: hidden; margin-bottom: 1.5rem; }
                .progress-fill { height: 100%; background: var(--primary-gradient); }
                .progress-bar-label { display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 700; margin-bottom: 6px; }

                .btn-secondary-full {
                    width: 100%; padding: 0.75rem; border-radius: 12px; border: 1px solid var(--border-light); 
                    background: white; color: var(--text-main); font-weight: 700; font-size: 0.85rem; cursor: pointer;
                    display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s ease;
                }
                .btn-secondary-full:hover { background: var(--bg-subtle); border-color: var(--primary); }

                /* Form Styles */
                .creation-form { display: flex; flex-direction: column; gap: 2rem; }
                .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
                .form-group.full { grid-column: span 2; }
                .form-group label { display: block; font-size: 0.85rem; font-weight: 700; margin-bottom: 0.6rem; color: var(--text-main); }
                .premium-input, .premium-textarea, .premium-select {
                    width: 100%; padding: 0.85rem 1.25rem; border-radius: 12px; border: 1.5px solid var(--border-light);
                    background: var(--bg-subtle); outline: none; font-size: 0.9rem; font-weight: 600; transition: all 0.2s ease;
                }
                .premium-textarea { min-height: 120px; resize: none; }
                .premium-input:focus, .premium-textarea:focus { border-color: var(--primary); background: white; }

                .upload-dropzone {
                    border: 2px dashed var(--border-light); border-radius: 16px; padding: 2.5rem; text-align: center;
                    cursor: pointer; transition: all 0.2s ease;
                }
                .upload-dropzone:hover { border-color: var(--primary); background: rgba(99, 102, 241, 0.02); }
                .upload-dropzone span { color: var(--primary); text-decoration: underline; font-weight: 700; }

                .rules-section { grid-column: span 2; margin-top: 1rem; }
                .rules-title { font-size: 1rem; font-weight: 800; margin-bottom: 1.25rem; }
                .rules-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
                .rule-toggle-item {
                    display: flex; align-items: center; justify-content: space-between; padding: 1rem;
                    background: var(--bg-subtle); border-radius: 14px; border: 1px solid var(--border-light);
                }
                .toggle-info { display: flex; flex-direction: column; gap: 2px; }
                .toggle-label { font-size: 0.8rem; font-weight: 700; }
                .toggle-desc { font-size: 0.65rem; color: var(--text-muted); }
                .toggle-switch { width: 36px; height: 18px; background: #e2e8f0; border-radius: 20px; position: relative; cursor: pointer; }
                .toggle-switch::after { content: ''; position: absolute; left: 2px; top: 2px; width: 14px; height: 14px; background: white; border-radius: 50%; transition: 0.2s; }
                .toggle-switch.active { background: var(--primary); }
                .toggle-switch.active::after { left: 20px; }

                /* Table Custom Styles */
                .student-info-cell { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 0.85rem; }
                .avatar-mini { width: 28px; height: 28px; border-radius: 8px; background: var(--accent-gradient); color: white; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 800; }
                .file-pill { display: inline-flex; align-items: center; gap: 6px; padding: 4px 8px; background: var(--bg-subtle); border-radius: 8px; font-size: 0.75rem; color: var(--primary); font-weight: 600; border: 1px solid rgba(99,102,241,0.1); }
                .status-pill { padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; }
                .status-pill.pending { background: #fffbeb; color: #f59e0b; }
                .status-pill.graded { background: #f0fdf4; color: #10b981; }

                /* Overlay & Modal */
                .submission-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 2rem; }
                .submission-modal { background: white; border-radius: 24px; width: 100%; max-width: 1000px; max-height: 90vh; display: flex; flex-direction: column; overflow: hidden; box-shadow: var(--shadow-lg); }
                .modal-header { padding: 1.5rem 2rem; border-bottom: 1px solid var(--border-light); display: flex; align-items: center; justify-content: space-between; }
                .modal-content { display: grid; grid-template-columns: 1fr 320px; gap: 0; overflow: hidden; flex: 1; }
                .work-preview { padding: 2rem; background: var(--bg-subtle); overflow-y: auto; }
                .grading-panel { padding: 2.5rem 2rem; border-left: 1px solid var(--border-light); display: flex; flex-direction: column; gap: 2rem; }
                
                .preview-header { display: flex; align-items: center; gap: 10px; margin-bottom: 1.5rem; padding: 1rem; background: white; border-radius: 12px; border: 1px solid var(--border-light); font-weight: 700; font-size: 0.9rem; }
                .preview-canvas { background: white; border-radius: 16px; padding: 2rem; box-shadow: var(--shadow-sm); min-height: 600px; }
                .preview-placeholder { display: flex; flex-direction: column; gap: 1rem; }
                .preview-placeholder .line { height: 8px; background: #f1f5f9; border-radius: 4px; }
                .preview-placeholder .line.short { width: 40%; }
                .preview-placeholder .line.medium { width: 70%; }

                .asgn-stat-card { padding: 1.5rem; border-radius: 20px; display: flex; align-items: center; gap: 1rem; border: 1px solid transparent; }
                .asgn-stat-card.primary { background: rgba(99, 102, 241, 0.05); color: #6366f1; border-color: rgba(99, 102, 241, 0.1); }
                .asgn-stat-card.success { background: rgba(16, 185, 129, 0.05); color: #10b981; border-color: rgba(16, 185, 129, 0.1); }
                .asgn-stat-card.warning { background: rgba(245, 158, 11, 0.05); color: #f59e0b; border-color: rgba(245, 158, 11, 0.1); }
                .asgn-stat-card .stat-icon { opacity: 0.8; }
                .asgn-stat-card .stat-label { font-size: 0.75rem; font-weight: 700; color: var(--text-dim); text-transform: uppercase; }
                .asgn-stat-card .stat-val { font-size: 1.5rem; font-weight: 800; color: inherit; }

                .close-btn { background: none; border: none; color: var(--text-dim); cursor: pointer; transition: 0.2s; }
                .close-btn:hover { color: #f43f5e; transform: rotate(90deg); }
                .btn-primary-full { width: 100%; padding: 1rem; border-radius: 14px; border: none; background: var(--primary-gradient); color: white; font-weight: 800; cursor: pointer; box-shadow: var(--shadow-sm); }
                
                @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
            `}</style>
        </div>
    );
};

export default AssignmentManagement;
