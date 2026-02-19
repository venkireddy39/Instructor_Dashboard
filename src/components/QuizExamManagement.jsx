import React, { useState } from 'react';
import {
    Plus,
    PlusCircle,
    FileText,
    HelpCircle,
    Clock,
    MinusCircle,
    Shuffle,
    RotateCcw,
    CheckCircle,
    Award,
    BarChart,
    ChevronRight,
    Search,
    Filter,
    Eye,
    Trophy,
    MoreHorizontal,
    Layout,
    Settings,
    AlertCircle,
    UserCheck,
    CheckSquare,
    ClipboardList,
    TrendingUp,
    Check,
    X,
    MessageSquare,
    Download,
    ChevronLeft
} from 'lucide-react';

const QuizExamManagement = () => {
    const [activeSubTab, setActiveSubTab] = useState('Quiz List');
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [gradingStudent, setGradingStudent] = useState(null);
    const [creationStep, setCreationStep] = useState(1); // 1: Settings, 2: Questions

    const assessments = [
        { id: 1, title: 'React Performance Quiz', type: 'Quiz', course: 'Advanced React', duration: '30m', totalQuestions: 15, attempts: 42, status: 'Active' },
        { id: 2, title: 'UI/UX Design Mid-Term', type: 'Quiz', course: 'UI/UX Masterclass', duration: '90m', totalQuestions: 40, attempts: 38, status: 'Closed' },
        { id: 3, title: 'Backend Architecture Final', type: 'Quiz', course: 'Node.js Deep Dive', duration: '120m', totalQuestions: 50, attempts: 45, status: 'Draft' },
    ];

    const questions = [
        { id: 1, text: 'What is the purpose of useMemo hook?', type: 'MCQ', difficulty: 'Medium', points: 2 },
        { id: 2, text: 'React uses a Virtual DOM. (True/False)', type: 'T/F', difficulty: 'Easy', points: 1 },
        { id: 3, text: 'Explain the reconciliation process in React.', type: 'Descriptive', difficulty: 'Hard', points: 10 },
    ];

    const results = [
        { id: 101, rank: 1, student: 'Elena Gilbert', score: '98/100', percentage: '98%', time: '72m', status: 'Graded' },
        { id: 102, rank: 2, student: 'Alex Thompson', score: '95/100', percentage: '95%', time: '85m', status: 'Graded' },
        { id: 103, rank: 3, student: 'Sarah Miller', score: '??/100', percentage: '--', time: '90m', status: 'Pending Manual Eval' },
    ];

    const renderList = () => (
        <div className="quiz-section animate-fade-in">
            <div className="section-header">
                <div>
                    <h2 className="section-title">Quizzes</h2>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Manage your assessments and track student participation.</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn-primary" onClick={() => { setActiveSubTab('Create Quiz'); setCreationStep(1); }}>
                        <PlusCircle size={18} style={{ marginRight: '8px' }} /> Create Quiz
                    </button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
                {assessments.map(item => (
                    <div key={item.id} className="assessment-card">
                        <div className="card-top">
                            <span className={`type-badge ${item.type.toLowerCase()}`}>{item.type}</span>
                            <div className={`status-dot ${item.status.toLowerCase()}`}></div>
                            <span className="status-text">{item.status}</span>
                            <button className="icon-btn" style={{ marginLeft: 'auto' }}><MoreHorizontal size={18} /></button>
                        </div>
                        <h4 className="item-title">{item.title}</h4>
                        <p className="item-course">{item.course}</p>

                        <div className="item-meta">
                            <div className="meta-box">
                                <Clock size={14} />
                                <span>{item.duration}</span>
                            </div>
                            <div className="meta-box">
                                <HelpCircle size={14} />
                                <span>{item.totalQuestions} Qs</span>
                            </div>
                            <div className="meta-box">
                                <ClipboardList size={14} />
                                <span>{item.attempts} Attempts</span>
                            </div>
                        </div>

                        <div className="card-actions">
                            <button className="btn-subtle" onClick={() => setActiveSubTab('Evaluation')}>
                                Grade <ChevronRight size={14} />
                            </button>
                            <button className="btn-primary-small" onClick={() => setActiveSubTab('Results & Ranking')}>
                                Results
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderCreationForm = (type) => (
        <div className="quiz-section animate-fade-in">
            <div className="section-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button className="icon-btn-subtle" onClick={() => setActiveSubTab('Quiz List')}><ChevronLeft size={20} /></button>
                    <h2 className="section-title">Configure Quiz</h2>
                </div>
                <div className="step-indicator">
                    <span className={creationStep === 1 ? 'active' : ''}>1. Settings</span>
                    <ChevronRight size={14} />
                    <span className={creationStep === 2 ? 'active' : ''}>2. Questions</span>
                </div>
            </div>

            {creationStep === 1 ? (
                <div className="creation-grid">
                    <div className="settings-panel">
                        <div className="form-group full">
                            <label>{type} Topic/Title</label>
                            <input type="text" placeholder={`e.g., Final ${type} - Module 5`} className="premium-input" />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Duration (Minutes)</label>
                                <div className="input-with-icon">
                                    <Clock size={16} />
                                    <input type="number" placeholder="60" className="premium-input" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Attempt Limit</label>
                                <div className="input-with-icon">
                                    <RotateCcw size={16} />
                                    <input type="number" placeholder="1" className="premium-input" />
                                </div>
                            </div>
                        </div>

                        <h4 className="config-subtitle">Advanced Config</h4>
                        <div className="config-grid">
                            <div className="config-item">
                                <div className="config-info">
                                    <div className="config-label"><MinusCircle size={14} /> Negative Marking</div>
                                    <div className="config-desc">Deduct marks for wrong answers</div>
                                </div>
                                <div className="toggle-switch active"></div>
                            </div>
                            <div className="config-item">
                                <div className="config-info">
                                    <div className="config-label"><Shuffle size={14} /> Randomize Questions</div>
                                    <div className="config-desc">Unique question order for students</div>
                                </div>
                                <div className="toggle-switch active"></div>
                            </div>
                            <div className="config-item">
                                <div className="config-info">
                                    <div className="config-label"><Layout size={14} /> Auto-Submit</div>
                                    <div className="config-desc">Submit automatically when timer hits zero</div>
                                </div>
                                <div className="toggle-switch active"></div>
                            </div>
                        </div>
                    </div>

                    <div className="side-tips">
                        <div className="tip-card">
                            <AlertCircle size={20} color="var(--primary)" />
                            <p>Pro-Tip: Use <strong>Negative Marking</strong> to reduce guessing and improve accuracy.</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="question-builder">
                    <div className="builder-header">
                        <button className="btn-secondary"><Plus size={16} /> Add from Question Bank</button>
                        <div style={{ flex: 1 }}></div>
                        <div className="builder-stats">
                            <span>Total Qs: 0</span>
                            <span>Points: 0</span>
                        </div>
                    </div>

                    <div className="builder-canvas">
                        <div className="empty-builder">
                            <HelpCircle size={48} color="var(--border-light)" />
                            <h3>No questions added yet</h3>
                            <p>Start building your quiz by adding questions manually or from your repository.</p>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                                <button className="btn-secondary">Add MCQ</button>
                                <button className="btn-secondary">Add True/False</button>
                                <button className="btn-secondary">Add Descriptive</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="form-actions-fixed">
                <button className="btn-secondary" onClick={() => creationStep === 2 ? setCreationStep(1) : setActiveSubTab('Quiz List')}>
                    {creationStep === 2 ? 'Back to Settings' : 'Discard'}
                </button>
                <button className="btn-primary" onClick={() => creationStep === 1 ? setCreationStep(2) : setActiveSubTab('Quiz List')}>
                    {creationStep === 1 ? 'Save & Add Questions' : 'Finish & Publish'}
                </button>
            </div>
        </div>
    );

    const renderQuestionBank = () => (
        <div className="quiz-section animate-fade-in">
            <div className="section-header">
                <div>
                    <h2 className="section-title">Question Repository</h2>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Central storage for all assessment types.</p>
                </div>
                <button className="btn-primary"><Plus size={18} /> Add Question</button>
            </div>

            <div className="bank-toolbar">
                <div className="search-container">
                    <Search size={18} className="search-icon" />
                    <input type="text" placeholder="Search questions..." />
                    <div className="search-shortcut">
                        <span>ALT</span>
                        <span>Q</span>
                    </div>
                </div>
                <div className="filter-group">
                    <select className="pill-select"><option>All Types</option><option>MCQ</option><option>Descriptive</option></select>
                    <select className="pill-select"><option>All Difficulty</option><option>Hard</option><option>Easy</option></select>
                </div>
            </div>

            <div className="question-list">
                {questions.map(q => (
                    <div key={q.id} className="q-item">
                        <div className={`q-type-pill ${q.type.toLowerCase().replace('/', '')}`}>{q.type}</div>
                        <div className="q-body">
                            <p className="q-text">{q.text}</p>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '4px' }}>
                                <span className="q-diff">Difficulty: {q.difficulty}</span>
                                <span className="q-diff">Points: {q.points}</span>
                            </div>
                        </div>
                        <div className="q-actions">
                            <button className="btn-icon-subtle"><Eye size={18} /></button>
                            <button className="btn-icon-subtle"><MoreHorizontal size={18} /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderEvaluation = () => (
        <div className="quiz-section animate-fade-in">
            <div className="section-header">
                <h2 className="section-title">Evaluation Center</h2>
                <div className="eval-tabs">
                    <div className="eval-tab active">Pending Manual Eval (1)</div>
                    <div className="eval-tab">Auto Graded (45)</div>
                </div>
            </div>

            <div className="eval-grid-detailed">
                <div className="eval-row header">
                    <span>Student</span>
                    <span>Quiz</span>
                    <span>Submission</span>
                    <span>Action</span>
                </div>
                <div className="eval-row-item">
                    <div className="std-cell">
                        <div className="avatar-mini">SM</div>
                        <span>Sarah Miller</span>
                    </div>
                    <span>UI/UX Mid-Term</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Today, 11:20 AM</span>
                    <button className="btn-primary-small" onClick={() => setGradingStudent({ name: 'Sarah Miller', exam: 'UI/UX Mid-Term' })}>Grade Now</button>
                </div>
            </div>

            {gradingStudent && (
                <div className="grading-overlay animate-fade-in">
                    <div className="grading-modal">
                        <div className="modal-header">
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Manual Evaluation</h3>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Descriptive Question Review for {gradingStudent.name}</p>
                            </div>
                            <button className="close-btn" onClick={() => setGradingStudent(null)}><X size={24} /></button>
                        </div>
                        <div className="modal-body">
                            <div className="question-review-card">
                                <div className="q-header">
                                    <span className="q-number">Q 15.</span>
                                    <p className="q-text">Explain the role of Typography in modern UI design system.</p>
                                    <span className="q-points">[Max: 10 Points]</span>
                                </div>
                                <div className="student-answer">
                                    <h5 style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '8px' }}>Student Answer:</h5>
                                    <p>Typography is the foundation of digital hierarchies. It guides the user's eye and establishes brand identity. In a design system, typography defines scales for headers, bodies, and utility text...</p>
                                </div>
                                <div className="eval-input-grid">
                                    <div className="input-group">
                                        <label>Assign Marks</label>
                                        <input type="number" placeholder="/ 10" className="premium-input-small" />
                                    </div>
                                    <div className="input-group">
                                        <label>Feedback</label>
                                        <textarea placeholder="Great depth, could use more examples..." className="premium-textarea-small"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-secondary" onClick={() => setGradingStudent(null)}>Save Draft</button>
                            <button className="btn-primary">Submit Grade</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    const renderResults = () => (
        <div className="quiz-section animate-fade-in">
            <div className="section-header">
                <div>
                    <h2 className="section-title">Results & Rankings</h2>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Leaderboard for: React Performance Quiz</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div className="tab-pills">
                        <button className={`pill ${activeSubTab === 'Quiz List' ? 'active' : ''}`} onClick={() => setActiveSubTab('Quiz List')}>List View</button>
                        <button className={`pill ${activeSubTab === 'Leaderboard' ? 'active' : ''}`} onClick={() => setActiveSubTab('Leaderboard')}>Leaderboard</button>
                    </div>
                    <button className="btn-secondary"><TrendingUp size={16} /> View Full Report</button>
                </div>
            </div>

            <div className="leaderboard">
                <div className="leader-stats">
                    <div className="stat-p">
                        <Trophy size={32} color="#f59e0b" />
                        <div>
                            <span className="p-label">Average Score</span>
                            <h3 className="p-val">84.5%</h3>
                        </div>
                    </div>
                    <div className="stat-p">
                        <UserCheck size={32} color="#10b981" />
                        <div>
                            <span className="p-label">Passing Rate</span>
                            <h3 className="p-val">92%</h3>
                        </div>
                    </div>
                </div>

                <div className="premium-table-container">
                    <table className="premium-table">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Student</th>
                                <th>Score</th>
                                <th>Time Taken</th>
                                <th>Status</th>
                                <th>Answer Sheet</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map(r => (
                                <tr key={r.id} className={r.rank <= 3 ? 'top-rank' : ''}>
                                    <td>
                                        {r.rank === 1 ? <Trophy size={18} color="#f59e0b" /> :
                                            r.rank === 2 ? <Trophy size={18} color="#94a3b8" /> :
                                                r.rank === 3 ? <Trophy size={18} color="#b45309" /> : r.rank}
                                    </td>
                                    <td style={{ fontWeight: 700 }}>{r.student}</td>
                                    <td>
                                        <div style={{ fontWeight: 800, color: 'var(--primary)' }}>{r.score}</div>
                                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{r.percentage}</div>
                                    </td>
                                    <td style={{ fontSize: '0.85rem' }}>{r.time}</td>
                                    <td>
                                        <span className={`status-pill ${r.status.toLowerCase().includes('pending') ? 'pending' : 'success'}`}>
                                            {r.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="btn-action-view" onClick={() => setSelectedQuiz(r)}>
                                            <Eye size={16} /> View Sheet
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {selectedQuiz && (
                <div className="sheet-overlay animate-fade-in">
                    <div className="sheet-modal">
                        <div className="modal-header">
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Student Answer Sheet</h3>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Reviewing attempt from {selectedQuiz.student}</p>
                            </div>
                            <button className="close-btn" onClick={() => setSelectedQuiz(null)}><X size={24} /></button>
                        </div>
                        <div className="sheet-body">
                            <div className="sheet-q-item correct">
                                <div className="q-marker"><Check size={14} /></div>
                                <div className="q-content">
                                    <p className="q-text">1. What is the main benefit of React.memo?</p>
                                    <div className="ans-grid">
                                        <div className="opt selected correct">Prevents unnecessary re-renders of functional components.</div>
                                        <div className="opt">Increases the size of the bundle.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="sheet-q-item incorrect">
                                <div className="q-marker"><X size={14} /></div>
                                <div className="q-content">
                                    <p className="q-text">2. Virtual DOM is a literal copy of the real DOM.</p>
                                    <div className="ans-grid">
                                        <div className="opt selected incorrect">True</div>
                                        <div className="opt correct-highlight">False</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-secondary" onClick={() => window.print()}><Download size={16} /> Download Copy</button>
                            <button className="btn-primary" onClick={() => setSelectedQuiz(null)}>Close Review</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    const renderReports = () => (
        <div className="quiz-section animate-fade-in">
            <div className="section-header">
                <h2 className="section-title">Quiz Analytics Report</h2>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="btn-secondary">Export Excel</button>
                    <button className="btn-primary">Download PDF</button>
                </div>
            </div>

            <div className="report-grid">
                <div className="card">
                    <h3 className="card-title">Performance Distribution</h3>
                    <div className="chart-placeholder">
                        <div className="bar-set">
                            {[20, 45, 80, 100, 65].map((h, i) => (
                                <div key={i} className="bar-wrapper">
                                    <div className="bar-grow" style={{ height: `${h}%` }}></div>
                                    <span className="bar-label">{['<40', '50', '70', '90', '100'][i]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="card">
                    <h3 className="card-title">Detailed Metrics</h3>
                    <div className="topic-list">
                        {[
                            { name: 'Average Score', val: '72.4', diff: '+2.1' },
                            { name: 'Top Score', val: '98', diff: '0' },
                            { name: 'Passing Rate', val: '92%', diff: '+5%' }
                        ].map((m, i) => (
                            <div key={i} className="metric-row">
                                <span className="m-label">{m.name}</span>
                                <div style={{ textAlign: 'right' }}>
                                    <div className="m-val">{m.val}</div>
                                    <div className="m-diff">{m.diff}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeSubTab) {
            case 'Quiz List': return renderList();
            case 'Create Quiz': return renderCreationForm('Quiz');
            case 'Question Bank': return renderQuestionBank();
            case 'Evaluation': return renderEvaluation();
            case 'Results & Ranking': return renderResults();
            case 'Quiz Reports': return renderReports();
            default: return renderList();
        }
    };

    const menuItems = [
        { name: 'Quiz List', icon: ClipboardList, badge: 3 },
        { name: 'Question Bank', icon: HelpCircle },
        { name: 'Evaluation', icon: CheckSquare, badge: 1 },
        { name: 'Results & Ranking', icon: Trophy },
        { name: 'Quiz Reports', icon: BarChart },
        { name: 'Quiz Settings', icon: Settings },
    ];

    return (
        <div className="quiz-container">
            <div className="page-header">
                <div className="header-title">
                    <h1>Quizzes</h1>
                    <p>Track student mastery through advanced assessment tools and analytics.</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn-secondary">Batch Actions</button>
                    <button className="btn-primary" onClick={() => setActiveSubTab('Results & Ranking')}>Global Ranking</button>
                </div>
            </div>

            <div className="quiz-layout">
                <aside className="secondary-sidebar">
                    <div className="sidebar-menu">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => setActiveSubTab(item.name)}
                                    className={`sidebar-btn ${activeSubTab === item.name || (activeSubTab.includes('Create') && item.name === 'Quiz List') ? 'active' : ''}`}
                                >
                                    <Icon size={18} className="btn-icon" />
                                    <span>{item.name}</span>
                                    {item.badge && <span className="btn-badge">{item.badge}</span>}
                                    {(activeSubTab === item.name) && <ChevronRight size={14} style={{ marginLeft: 'auto' }} />}
                                </button>
                            );
                        })}
                    </div>

                    <div className="sidebar-promo">
                        <Award size={32} color="white" />
                        <h4>Pro Features</h4>
                        <p>Unlock AI Question Generation.</p>
                        <button className="promo-btn">Upgrade</button>
                    </div>
                </aside>

                <div className="quiz-content">
                    {renderContent()}
                </div>
            </div>

            <style>{`
                .quiz-container { animation: slideUp 0.4s ease-out; }
                .quiz-layout { display: grid; grid-template-columns: 280px 1fr; gap: 2rem; margin-top: 1.5rem; }
                
                .secondary-sidebar { display: flex; flex-direction: column; gap: 1.5rem; }
                .sidebar-menu { background: white; border-radius: 24px; padding: 1.25rem; border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); }
                
                .sidebar-btn {
                    width: 100%; padding: 0.9rem 1.25rem; display: flex; align-items: center; gap: 14px;
                    border: none; background: transparent; border-radius: 14px; color: var(--text-muted);
                    font-weight: 600; font-size: 0.85rem; cursor: pointer; transition: all 0.2s ease; margin-bottom: 0.4rem;
                    position: relative;
                }
                .sidebar-btn:hover { background: var(--bg-subtle); color: var(--primary); }
                .sidebar-btn.active { background: var(--primary-gradient); color: white; }
                .btn-badge { position: absolute; right: 40px; background: #ef4444; color: white; font-size: 0.65rem; padding: 2px 6px; border-radius: 10px; font-weight: 800; }

                .sidebar-promo { background: var(--secondary-gradient); border-radius: 24px; padding: 1.5rem; color: white; position: relative; overflow: hidden; }
                .sidebar-promo h4 { font-size: 1rem; font-weight: 800; margin: 10px 0 5px; }
                .sidebar-promo p { font-size: 0.8rem; opacity: 0.9; margin-bottom: 1.25rem; }
                .promo-btn { width: 100%; padding: 0.7rem; border-radius: 12px; border: none; background: white; color: var(--text-main); font-weight: 800; font-size: 0.8rem; cursor: pointer; }

                .quiz-content {
                    background: white; border-radius: 28px; padding: 2.5rem; border: 1px solid var(--border-light); 
                    min-height: 750px; box-shadow: var(--shadow-sm);
                }

                .assessment-card {
                    background: var(--bg-subtle); border-radius: 24px; padding: 1.75rem; border: 1px solid transparent; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .assessment-card:hover { background: white; border-color: var(--primary); transform: translateY(-8px); box-shadow: var(--shadow-lg); }

                .tab-pills { display: flex; gap: 0.5rem; background: var(--bg-subtle); padding: 0.4rem; border-radius: 12px; }
                .pill { border: none; background: transparent; padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); cursor: pointer; transition: 0.2s; }
                .pill.active { background: white; color: var(--primary); box-shadow: var(--shadow-sm); }
                
                .card-top { display: flex; align-items: center; gap: 12px; margin-bottom: 1.25rem; }
                .type-badge { padding: 4px 12px; border-radius: 8px; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; }
                .type-badge.quiz { background: rgba(99, 102, 241, 0.1); color: #6366f1; }
                .type-badge.exam { background: rgba(244, 63, 94, 0.1); color: #f43f5e; }
                
                .status-dot { width: 8px; height: 8px; border-radius: 50%; }
                .status-dot.active { background: #10b981; box-shadow: 0 0 8px #10b981; }
                .status-dot.closed { background: #ef4444; }
                .status-dot.draft { background: #94a3b8; }
                .status-text { font-size: 0.75rem; font-weight: 700; color: var(--text-muted); }

                .item-title { font-size: 1.15rem; font-weight: 800; margin-bottom: 6px; letter-spacing: -0.6px; color: var(--text-main); }
                .item-course { font-size: 0.85rem; color: var(--text-muted); font-weight: 600; margin-bottom: 1.5rem; }

                .item-meta { display: flex; gap: 1.25rem; margin-bottom: 1.75rem; flex-wrap: wrap; }
                .meta-box { display: flex; align-items: center; gap: 8px; font-size: 0.8rem; color: var(--text-dim); font-weight: 600; }

                .card-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
                .btn-subtle { border: 1.5px solid var(--border-light); background: white; padding: 0.75rem; border-radius: 12px; font-weight: 700; font-size: 0.85rem; display: flex; align-items: center; justify-content: center; gap: 6px; cursor: pointer; transition: 0.2s; }
                .btn-subtle:hover { border-color: var(--primary); color: var(--primary); }
                .btn-primary-small { background: var(--primary-gradient); color: white; border: none; padding: 0.75rem; border-radius: 12px; font-weight: 700; font-size: 0.85rem; cursor: pointer; transition: 0.2s; }
                .btn-primary-small:hover { filter: brightness(1.1); transform: scale(1.02); }

                .step-indicator { display: flex; align-items: center; gap: 12px; color: var(--text-dim); font-size: 0.8rem; font-weight: 700; background: var(--bg-subtle); padding: 6px 16px; border-radius: 20px; }
                .step-indicator span.active { color: var(--primary); }

                .creation-grid { display: grid; grid-template-columns: 1fr 320px; gap: 3rem; margin-top: 2rem; }
                .settings-panel { display: flex; flex-direction: column; gap: 1.75rem; }
                .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.75rem; }
                
                .config-subtitle { font-size: 1rem; font-weight: 800; margin-top: 1rem; color: var(--text-main); }
                .config-grid { display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
                .config-item { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem; background: var(--bg-subtle); border-radius: 20px; border: 1.5px solid var(--border-light); }
                .config-label { font-size: 0.9rem; font-weight: 800; display: flex; align-items: center; gap: 10px; color: var(--text-main); }
                .config-desc { font-size: 0.75rem; color: var(--text-muted); margin-top: 4px; margin-left: 24px; }

                .tip-card { background: rgba(99, 102, 241, 0.05); padding: 1.5rem; border-radius: 20px; border-left: 4px solid var(--primary); }
                .tip-card p { font-size: 0.85rem; color: var(--text-main); line-height: 1.6; margin-top: 10px; }

                .question-builder { margin-top: 1.5rem; }
                .builder-header { display: flex; align-items: center; gap: 2rem; margin-bottom: 2rem; padding: 1rem; background: var(--bg-subtle); border-radius: 16px; }
                .builder-stats { display: flex; gap: 2rem; font-weight: 700; font-size: 0.9rem; color: var(--text-main); }
                .empty-builder { border: 2.5px dashed var(--border-light); border-radius: 24px; padding: 5rem 2rem; text-align: center; margin-top: 2rem; }
                .empty-builder h3 { margin: 1.5rem 0 0.5rem; font-weight: 800; }
                .empty-builder p { color: var(--text-dim); font-size: 0.9rem; max-width: 400px; margin: 0 auto; }

                .q-item { display: flex; gap: 1.5rem; padding: 1.75rem; border-bottom: 1px solid var(--border-light); transition: background 0.3s; }
                .q-item:hover { background: var(--bg-subtle); }
                .q-type-pill { width: 90px; height: 34px; flex-shrink: 0; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; }
                .q-type-pill.mcq { background: #e0e7ff; color: #4338ca; }
                .q-type-pill.tf { background: #ecfdf5; color: #047857; }
                .q-type-pill.descriptive { background: #fdf2f8; color: #be185d; }
                .q-text { font-size: 1rem; font-weight: 700; color: var(--text-main); margin-bottom: 8px; }
                .q-diff { font-size: 0.8rem; color: var(--text-dim); font-weight: 700; background: var(--bg-card); padding: 2px 8px; border-radius: 6px; }

                .eval-grid-detailed { margin-top: 1.5rem; border-radius: 20px; border: 1px solid var(--border-light); overflow: hidden; }
                .eval-row { display: grid; grid-template-columns: 1.5fr 1fr 1fr 120px; padding: 1.25rem 2rem; background: var(--bg-subtle); font-weight: 700; color: var(--text-dim); font-size: 0.8rem; text-transform: uppercase; }
                .eval-row-item { display: grid; grid-template-columns: 1.5fr 1fr 1fr 120px; padding: 1.5rem 2rem; background: white; border-bottom: 1px solid var(--border-light); align-items: center; }
                .std-cell { display: flex; align-items: center; gap: 12px; font-weight: 800; color: var(--text-main); }
                .avatar-mini { width: 34px; height: 34px; border-radius: 10px; background: var(--accent-gradient); color: white; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.9rem; }

                .grading-overlay, .sheet-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(8px); z-index: 3000; display: flex; align-items: center; justify-content: center; padding: 2.5rem; }
                .grading-modal, .sheet-modal { background: white; border-radius: 28px; width: 100%; max-width: 900px; display: flex; flex-direction: column; overflow: hidden; box-shadow: var(--shadow-lg); animation: slideUp 0.3s ease-out; }
                .modal-header { padding: 1.75rem 2.5rem; border-bottom: 1.5px solid var(--border-light); display: flex; justify-content: space-between; align-items: center; }
                .modal-body, .sheet-body { padding: 2.5rem; overflow-y: auto; max-height: 70vh; background: var(--bg-subtle); }
                .modal-footer { padding: 1.5rem 2.5rem; border-top: 1.5px solid var(--border-light); display: flex; justify-content: flex-end; gap: 1.25rem; }

                .question-review-card { background: white; border-radius: 20px; padding: 2rem; box-shadow: var(--shadow-sm); border: 1px solid var(--border-light); }
                .q-header { margin-bottom: 1.5rem; }
                .q-number { font-weight: 800; color: var(--primary); font-size: 1.1rem; }
                .q-points { font-size: 0.75rem; color: var(--text-dim); font-weight: 700; }
                .student-answer { background: var(--bg-subtle); padding: 1.5rem; border-radius: 16px; border-left: 4px solid var(--primary); margin-bottom: 2rem; line-height: 1.7; }
                
                .eval-input-grid { display: grid; gap: 1.5rem; }
                .premium-input-small { width: 120px; padding: 0.75rem 1rem; border-radius: 10px; border: 1.5px solid var(--border-light); font-weight: 800; font-size: 1rem; color: var(--primary); text-align: center; }
                .premium-textarea-small { width: 100%; min-height: 80px; padding: 1rem; border-radius: 12px; border: 1.5px solid var(--border-light); font-weight: 600; font-size: 0.9rem; }

                .sheet-q-item { background: white; border-radius: 20px; padding: 1.75rem; margin-bottom: 1.5rem; display: flex; gap: 1.25rem; border: 1.5px solid transparent; }
                .sheet-q-item.correct { border-color: rgba(16, 185, 129, 0.2); }
                .sheet-q-item.incorrect { border-color: rgba(239, 68, 68, 0.2); }
                .q-marker { width: 32px; height: 32px; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; flex-shrink: 0; }
                .correct .q-marker { background: #10b981; }
                .incorrect .q-marker { background: #ef4444; }
                
                .ans-grid { margin-top: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem; }
                .opt { padding: 0.85rem 1.25rem; border-radius: 10px; background: var(--bg-subtle); font-size: 0.9rem; font-weight: 600; color: var(--text-muted); }
                .opt.selected { background: #f1f5f9; color: var(--text-main); }
                .opt.selected.correct { background: rgba(16, 185, 129, 0.1); color: #10b981; border: 1px solid #10b981; }
                .opt.selected.incorrect { background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid #ef4444; }
                .opt.correct-highlight { border: 1px dashed #10b981; color: #10b981; }

                .leaderboard { margin-top: 2.5rem; }
                .leader-stats { display: flex; gap: 4rem; padding: 2rem; background: var(--bg-subtle); border-radius: 24px; margin-bottom: 2.5rem; }
                .stat-p { display: flex; align-items: center; gap: 1.25rem; }
                .p-label { font-size: 0.85rem; font-weight: 700; color: var(--text-dim); }
                .p-val { font-size: 1.75rem; font-weight: 800; color: var(--text-main); }

                .status-pill { padding: 4px 12px; border-radius: 20px; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; }
                .status-pill.success { background: #ecfdf5; color: #047857; }
                .status-pill.pending { background: #fff7ed; color: #9a3412; }

                .report-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 2.5rem; margin-top: 1.5rem; }
                .chart-placeholder { height: 280px; background: var(--bg-subtle); border-radius: 24px; padding: 2rem; position: relative; }
                .bar-set { display: flex; height: 100%; align-items: flex-end; justify-content: space-around; }
                .bar-wrapper { width: 10%; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end; }
                .bar-grow { width: 100%; background: var(--primary-gradient); border-radius: 8px 8px 0 0; animation: barGrow 1s ease-out; }
                .bar-label { font-size: 0.7rem; font-weight: 800; margin-top: 10px; color: var(--text-dim); }

                .metric-row { display: flex; justify-content: space-between; align-items: center; padding: 1.25rem 0; border-bottom: 1.5px solid var(--bg-subtle); }
                .m-label { font-weight: 700; color: var(--text-muted); font-size: 0.9rem; }
                .m-val { font-size: 1.25rem; font-weight: 800; color: var(--text-main); }
                .m-diff { font-size: 0.7rem; font-weight: 800; color: #10b981; }

                @keyframes barGrow { from { height: 0; } }

                .form-actions-fixed {
                    position: sticky; bottom: -2.5rem; left: -2.5rem; right: -2.5rem;
                    background: white; padding: 1.5rem 2.5rem; border-top: 1.5px solid var(--border-light);
                    display: flex; justify-content: flex-end; gap: 1.25rem; z-index: 100;
                    margin: 2.5rem -2.5rem -2.5rem; border-radius: 0 0 28px 28px;
                }
                
                @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
            `}</style>
        </div>
    );
};

export default QuizExamManagement;
