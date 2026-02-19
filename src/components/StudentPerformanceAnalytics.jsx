import React, { useState } from 'react';
import {
    TrendingUp,
    TrendingDown,
    Award,
    BookOpen,
    CheckCircle,
    Clock,
    Download,
    Filter,
    Search,
    Users,
    AlertTriangle,
    ChevronRight,
    BarChart2,
    PieChart,
    Activity,
    FileText,
    Zap,
    Star
} from 'lucide-react';

const StudentPerformanceAnalytics = () => {
    const [selectedCourse, setSelectedCourse] = useState('All Courses');
    const [timeRange, setTimeRange] = useState('This Month');

    const performanceStats = [
        { label: 'Avg. Course Completion', value: '78%', icon: CheckCircle, trend: '+5.2%', color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
        { label: 'Avg. Quiz Score', value: '82/100', icon: Zap, trend: '+2.4%', color: '#6366f1', bg: 'rgba(99, 102, 241, 0.1)' },
        { label: 'Avg. Assignment Score', value: '88/100', icon: FileText, trend: '+1.8%', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)' },
        { label: 'Overall Attendance', value: '94%', icon: Users, trend: '-0.5%', color: '#ec4899', bg: 'rgba(236, 72, 153, 0.1)' }
    ];

    const topStudents = [
        { id: 1, name: 'Alex Thompson', score: 98, course: 'React Architecture', progress: 100, avatar: 'AT' },
        { id: 2, name: 'Sarah Chen', score: 96, course: 'UI/UX Design', progress: 95, avatar: 'SC' },
        { id: 3, name: 'Michael Ross', score: 94, course: 'Node.js Backend', progress: 92, avatar: 'MR' },
        { id: 4, name: 'Emma Wilson', score: 92, course: 'React Architecture', progress: 88, avatar: 'EW' }
    ];

    const weakStudents = [
        { id: 1, name: 'John Doe', score: 42, course: 'Node.js Backend', issue: 'Low Quiz Scores', avatar: 'JD' },
        { id: 2, name: 'Elena Gilbert', score: 45, course: 'UI/UX Design', issue: 'Incomplete Assignments', avatar: 'EG' },
        { id: 3, name: 'Stefan Salvatore', score: 38, course: 'React Architecture', issue: 'Low Attendance', avatar: 'SS' }
    ];

    const modulePerformance = [
        { module: 'Module 1: Fundamentals', score: 92 },
        { module: 'Module 2: Advanced Hooks', score: 78 },
        { module: 'Module 3: State Management', score: 85 },
        { module: 'Module 4: Performance', score: 64 },
        { module: 'Module 5: Testing', score: 72 }
    ];

    const progressData = [45, 52, 48, 70, 65, 85, 78, 92, 88, 95];

    return (
        <div className="analytics-container">
            <div className="page-header">
                <div className="header-title">
                    <h1>Performance Analytics</h1>
                    <p>In-depth insights into student progress, scores, and engagement metrics.</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <select
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        className="select-input"
                    >
                        <option>All Courses</option>
                        <option>Advanced React Architecture</option>
                        <option>Premium UI/UX Masterclass</option>
                        <option>Node.js Backend Deep Dive</option>
                    </select>
                    <button className="btn-primary">
                        <Download size={18} style={{ marginRight: '8px' }} /> Export Reports
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
                {performanceStats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <div key={i} className="stat-card" style={{ '--stat-color': stat.color, '--stat-bg': stat.bg, '--stat-overlay': stat.color }}>
                            <div className="stat-icon-box">
                                <Icon size={24} strokeWidth={2.5} />
                            </div>
                            <div className="stat-value">{stat.value}</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div className="stat-label">{stat.label}</div>
                                <div style={{
                                    color: stat.trend.startsWith('+') ? '#10b981' : '#ef4444',
                                    fontWeight: 800,
                                    fontSize: '0.85rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                }}>
                                    {stat.trend.startsWith('+') ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                                    {stat.trend}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="dashboard-grid">
                {/* Progress Graph */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Student Progress Trends</h3>
                        <div className="tab-buttons">
                            <button className="small-tab active">Completion</button>
                            <button className="small-tab">Engagement</button>
                        </div>
                    </div>
                    <div className="chart-container">
                        <div className="line-chart-mock">
                            {progressData.map((val, i) => (
                                <div key={i} className="chart-column-wrapper">
                                    <div
                                        className="chart-column"
                                        style={{ height: `${val}%`, background: 'var(--primary-gradient)' }}
                                    >
                                        <div className="chart-tooltip">{val}%</div>
                                    </div>
                                    <span className="chart-label">W{i + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Module-wise Performance */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Module-wise Performance</h3>
                        <Activity size={20} color="var(--text-dim)" />
                    </div>
                    <div className="module-list">
                        {modulePerformance.map((mod, i) => (
                            <div key={i} className="module-perf-item">
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{mod.module}</span>
                                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: mod.score > 80 ? '#10b981' : mod.score > 60 ? '#f59e0b' : '#ef4444' }}>{mod.score}%</span>
                                </div>
                                <div className="progress-bar-bg">
                                    <div
                                        className="progress-bar-fill"
                                        style={{
                                            width: `${mod.score}%`,
                                            background: mod.score > 80 ? 'var(--accent-gradient)' : mod.score > 60 ? 'var(--primary-gradient)' : 'var(--secondary-gradient)'
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="dashboard-grid" style={{ marginTop: '2.5rem', gridTemplateColumns: '1.2fr 1fr' }}>
                {/* Top Performing Students */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Top Performing Students</h3>
                        <Award size={20} color="#f59e0b" />
                    </div>
                    <div className="student-table">
                        <div className="table-header">
                            <div style={{ flex: 2 }}>Student</div>
                            <div style={{ flex: 1.5 }}>Course</div>
                            <div style={{ flex: 1 }}>Score</div>
                            <div style={{ flex: 1 }}>Progress</div>
                        </div>
                        {topStudents.map(student => (
                            <div key={student.id} className="table-row">
                                <div style={{ flex: 2, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div className="avatar small" style={{ background: 'var(--accent-gradient)' }}>{student.avatar}</div>
                                    <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>{student.name}</span>
                                </div>
                                <div style={{ flex: 1.5, fontSize: '0.8rem', color: 'var(--text-muted)' }}>{student.course}</div>
                                <div style={{ flex: 1, fontWeight: 800, color: '#10b981' }}>{student.score}%</div>
                                <div style={{ flex: 1 }}>
                                    <div className="mini-progress">
                                        <div className="mini-progress-fill" style={{ width: `${student.progress}%`, background: '#10b981' }}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Weak Students List */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Students Needing Support</h3>
                        <AlertTriangle size={20} color="#ef4444" />
                    </div>
                    <div className="weak-student-list">
                        {weakStudents.map(student => (
                            <div key={student.id} className="weak-student-card">
                                <div className="avatar small" style={{ background: 'var(--secondary-gradient)' }}>{student.avatar}</div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h4 style={{ fontSize: '0.85rem', fontWeight: 800 }}>{student.name}</h4>
                                        <span className="score-pill">{student.score}%</span>
                                    </div>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>{student.course}</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ef4444', fontSize: '0.7rem', fontWeight: 700 }}>
                                        <AlertTriangle size={12} /> {student.issue}
                                    </div>
                                </div>
                                <button className="icon-btn-circle"><ChevronRight size={16} /></button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="dashboard-grid" style={{ marginTop: '2.5rem', gridTemplateColumns: '1fr 1fr' }}>
                {/* Quiz & Assignment Analytics */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Assessment Analytics</h3>
                        <PieChart size={20} color="var(--primary)" />
                    </div>
                    <div className="assessment-grid">
                        <div className="assessment-item">
                            <div className="assessment-circle-box">
                                <svg viewBox="0 0 36 36" className="circular-chart blue">
                                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path className="circle" strokeDasharray="82, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <text x="18" y="20.35" className="percentage">82%</text>
                                </svg>
                                <span>Quiz Avg.</span>
                            </div>
                        </div>
                        <div className="assessment-item">
                            <div className="assessment-circle-box">
                                <svg viewBox="0 0 36 36" className="circular-chart orange">
                                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path className="circle" strokeDasharray="88, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <text x="18" y="20.35" className="percentage">88%</text>
                                </svg>
                                <span>Assignment Avg.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Attendance vs Performance */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Attendance vs Performance</h3>
                        <TrendingUp size={20} color="#10b981" />
                    </div>
                    <div className="scatter-plot-mock">
                        <div className="y-axis">Score</div>
                        <div className="x-axis">Attendance</div>
                        <div className="plot-area">
                            {[
                                { x: 95, y: 98, s: 12 }, { x: 90, y: 85, s: 10 }, { x: 85, y: 70, s: 8 },
                                { x: 98, y: 92, s: 11 }, { x: 70, y: 40, s: 6 }, { x: 80, y: 65, s: 9 },
                                { x: 92, y: 88, s: 10 }, { x: 60, y: 35, s: 7 }, { x: 75, y: 55, s: 8 }
                            ].map((p, i) => (
                                <div
                                    key={i}
                                    className="dot"
                                    style={{
                                        left: `${p.x}%`,
                                        bottom: `${p.y}%`,
                                        width: `${p.s}px`,
                                        height: `${p.s}px`,
                                        opacity: 0.6 + (p.y / 200)
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .analytics-container {
                    animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                .select-input {
                    padding: 0.75rem 1.25rem;
                    border-radius: 14px;
                    border: 1px solid var(--border-light);
                    background: var(--bg-card);
                    color: var(--text-main);
                    font-weight: 600;
                    outline: none;
                    cursor: pointer;
                    font-family: var(--font-main);
                }

                .chart-container {
                    height: 250px;
                    display: flex;
                    align-items: flex-end;
                    padding: 1rem 0;
                }

                .line-chart-mock {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    gap: 10px;
                }

                .chart-column-wrapper {
                    flex: 1;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: center;
                    gap: 0.5rem;
                }

                .chart-column {
                    width: 100%;
                    max-width: 40px;
                    border-radius: 8px 8px 0 0;
                    position: relative;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .chart-column:hover {
                    filter: brightness(1.2);
                    transform: scaleY(1.05);
                }

                .chart-tooltip {
                    position: absolute;
                    top: -30px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: var(--text-main);
                    color: white;
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-size: 0.7rem;
                    font-weight: 700;
                    opacity: 0;
                    transition: opacity 0.3s;
                    pointer-events: none;
                }

                .chart-column:hover .chart-tooltip {
                    opacity: 1;
                }

                .chart-label {
                    font-size: 0.65rem;
                    font-weight: 700;
                    color: var(--text-dim);
                }

                .module-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                }

                .module-perf-item {
                    display: flex;
                    flex-direction: column;
                }

                .progress-bar-bg {
                    height: 8px;
                    background: var(--bg-subtle);
                    border-radius: 4px;
                    overflow: hidden;
                }

                .progress-bar-fill {
                    height: 100%;
                    border-radius: 4px;
                }

                .student-table {
                    display: flex;
                    flex-direction: column;
                }

                .table-header {
                    display: flex;
                    padding: 0.75rem 0;
                    border-bottom: 2px solid var(--border-light);
                    font-size: 0.75rem;
                    font-weight: 800;
                    color: var(--text-muted);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .table-row {
                    display: flex;
                    align-items: center;
                    padding: 1.25rem 0;
                    border-bottom: 1px solid var(--border-light);
                    transition: background 0.3s;
                }

                .table-row:last-child {
                    border-bottom: none;
                }

                .avatar.small {
                    width: 32px;
                    height: 32px;
                    font-size: 0.75rem;
                }

                .mini-progress {
                    height: 6px;
                    background: #e2e8f0;
                    border-radius: 10px;
                }

                .mini-progress-fill {
                    height: 100%;
                    border-radius: 10px;
                }

                .weak-student-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .weak-student-card {
                    background: var(--bg-subtle);
                    padding: 1rem;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    transition: all 0.3s;
                }

                .weak-student-card:hover {
                    background: white;
                    box-shadow: var(--shadow-md);
                    transform: scale(1.02);
                }

                .score-pill {
                    background: #fff1f2;
                    color: #ef4444;
                    padding: 2px 8px;
                    border-radius: 6px;
                    font-size: 0.7rem;
                    font-weight: 800;
                }

                .icon-btn-circle {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    border: 1px solid var(--border-light);
                    background: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s;
                }

                .icon-btn-circle:hover {
                    border-color: var(--primary);
                    color: var(--primary);
                }

                .assessment-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                    height: 100%;
                    padding: 1rem 0;
                }

                .assessment-item {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .assessment-circle-box {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    font-weight: 700;
                    font-size: 0.9rem;
                    color: var(--text-muted);
                }

                .circular-chart {
                    display: block;
                    margin: 10px auto;
                    max-width: 120px;
                    max-height: 250px;
                }

                .circle-bg {
                    fill: none;
                    stroke: var(--bg-subtle);
                    stroke-width: 3;
                }

                .circle {
                    fill: none;
                    stroke-width: 3;
                    stroke-linecap: round;
                    animation: progress 1s ease-out forwards;
                }

                @keyframes progress {
                    0% { stroke-dasharray: 0 100; }
                }

                .circular-chart.blue .circle { stroke: #6366f1; }
                .circular-chart.orange .circle { stroke: #f59e0b; }

                .percentage {
                    fill: var(--text-main);
                    font-size: 0.5rem;
                    font-weight: 800;
                    text-anchor: middle;
                }

                .scatter-plot-mock {
                    height: 250px;
                    border-left: 2px solid var(--border-light);
                    border-bottom: 2px solid var(--border-light);
                    position: relative;
                    margin: 20px 0 20px 30px;
                }

                .y-axis {
                    position: absolute;
                    left: -40px;
                    top: 50%;
                    transform: rotate(-90deg) translateY(-50%);
                    font-size: 0.65rem;
                    font-weight: 800;
                    color: var(--text-dim);
                    text-transform: uppercase;
                }

                .x-axis {
                    position: absolute;
                    bottom: -30px;
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 0.65rem;
                    font-weight: 800;
                    color: var(--text-dim);
                    text-transform: uppercase;
                }

                .plot-area {
                    width: 100%;
                    height: 100%;
                    position: relative;
                }

                .dot {
                    position: absolute;
                    background: var(--primary);
                    border-radius: 50%;
                    transform: translate(-50%, 50%);
                    transition: all 0.3s;
                    cursor: pointer;
                }

                .dot:hover {
                    opacity: 1 !important;
                    transform: translate(-50%, 50%) scale(1.5);
                    box-shadow: 0 0 10px var(--primary);
                }

                .small-tab {
                    padding: 0.4rem 1rem;
                    border-radius: 8px;
                    border: 1px solid var(--border-light);
                    background: white;
                    font-size: 0.75rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s;
                }

                .small-tab.active {
                    background: var(--primary);
                    color: white;
                    border-color: var(--primary);
                }

                .tab-buttons {
                    display: flex;
                    gap: 0.5rem;
                }
            `}</style>
        </div>
    );
};

export default StudentPerformanceAnalytics;
