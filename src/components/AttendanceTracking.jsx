import React, { useState } from 'react';
import {
    Users,
    Calendar,
    CheckCircle,
    XCircle,
    Clock,
    Search,
    Filter,
    Download,
    Video,
    History as HistoryIcon,
    FileText,
    BarChart,
    Bell,
    ChevronRight,
    MoreHorizontal,
    UserCheck,
    UserX,
    ClipboardList,
    TrendingUp,
    ArrowUpRight,
    Award,
    BookOpen
} from 'lucide-react';

const AttendanceTracking = () => {
    const [activeSubTab, setActiveSubTab] = useState('Mark Attendance');
    const [selectedCourse, setSelectedCourse] = useState('Advanced React Architecture 2024');

    const courses = [
        'Advanced React Architecture 2024',
        'Premium UI/UX Design Masterclass',
        'Node.js Backend Deep Dive'
    ];

    const students = [
        { id: 1, name: 'Alex Thompson', email: 'alex@react.com', status: 'Present', lastAttendance: '2024-03-18', progress: 92 },
        { id: 2, name: 'Elena Gilbert', email: 'elena@design.com', status: 'Absent', lastAttendance: '2024-03-18', progress: 45 },
        { id: 3, name: 'Sarah Miller', email: 'sarah@web.com', status: 'Late', lastAttendance: '2024-03-18', progress: 10 },
        { id: 4, name: 'Michael Chen', email: 'michael@code.com', status: 'Present', lastAttendance: '2024-03-18', progress: 88 },
        { id: 5, name: 'Sofa Rodriguez', email: 'sofia@dev.com', status: 'Present', lastAttendance: '2024-03-18', progress: 75 },
    ];

    const renderMarkAttendance = () => (
        <div className="attendance-section animate-fade-in">
            <div className="section-header">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <h2 className="section-title">Manual Attendance Tracking</h2>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <select
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        className="premium-select"
                    >
                        {courses.map(course => <option key={course} value={course}>{course}</option>)}
                    </select>
                    <button className="btn-primary">
                        <CheckCircle size={18} style={{ marginRight: '8px' }} /> Save Attendance
                    </button>
                </div>
            </div>

            <div className="stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                <div className="attendance-stat-card">
                    <span className="stat-label">Total Students</span>
                    <span className="stat-value">124</span>
                    <Users size={20} className="stat-icon" color="#6366f1" />
                </div>
                <div className="attendance-stat-card">
                    <span className="stat-label">Present</span>
                    <span className="stat-value" style={{ color: '#10b981' }}>112</span>
                    <UserCheck size={20} className="stat-icon" color="#10b981" />
                </div>
                <div className="attendance-stat-card">
                    <span className="stat-label">Absent</span>
                    <span className="stat-value" style={{ color: '#ef4444' }}>8</span>
                    <UserX size={20} className="stat-icon" color="#ef4444" />
                </div>
                <div className="attendance-stat-card">
                    <span className="stat-label">Late</span>
                    <span className="stat-value" style={{ color: '#f59e0b' }}>4</span>
                    <Clock size={20} className="stat-icon" color="#f59e0b" />
                </div>
            </div>

            <div className="premium-table-container">
                <table className="premium-table">
                    <thead>
                        <tr>
                            <th>Student</th>
                            <th>Current Course</th>
                            <th>Status</th>
                            <th>Progress</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.id}>
                                <td>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div className="avatar-small">{student.name.charAt(0)}</div>
                                        <div>
                                            <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>{student.name}</div>
                                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{student.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ fontSize: '0.8rem' }}>{selectedCourse}</td>
                                <td>
                                    <div className="status-toggle-group">
                                        <button className={`status-toggle present ${student.status === 'Present' ? 'active' : ''}`}>P</button>
                                        <button className={`status-toggle late ${student.status === 'Late' ? 'active' : ''}`}>L</button>
                                        <button className={`status-toggle absent ${student.status === 'Absent' ? 'active' : ''}`}>A</button>
                                    </div>
                                </td>
                                <td>
                                    <div style={{ width: '100px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <div className="progress-bar-small">
                                            <div className="progress-fill" style={{ width: `${student.progress}%` }}></div>
                                        </div>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{student.progress}%</span>
                                    </div>
                                </td>
                                <td>
                                    <button className="icon-btn-subtle"><MoreHorizontal size={18} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderAutoAttendance = () => (
        <div className="attendance-section animate-fade-in">
            <div className="section-header">
                <div>
                    <h2 className="section-title">Live Class Auto-Attendance</h2>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Automated tracking based on live session participation.</p>
                </div>
                <button className="btn-primary" style={{ background: '#10b981' }}>
                    <Video size={18} style={{ marginRight: '8px' }} /> Sync with Zoom/Meet
                </button>
            </div>

            <div className="card" style={{ padding: '2rem', textAlign: 'center', background: 'var(--bg-subtle)', border: '2px dashed var(--border-light)' }}>
                <div style={{ marginBottom: '1.5rem', display: 'inline-flex', padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '50%', color: 'var(--primary)' }}>
                    <Video size={48} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Active Session: Introduction to Hooks</h3>
                <p style={{ color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto 2rem' }}>Attendance is being tracked automatically for the ongoing session. 42 students detected.</p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem' }}>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>42/45</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Participating</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10b981' }}>94%</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Avg. Attentiveness</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f59e0b' }}>12:45</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Elapsed Time</div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderHistory = () => (
        <div className="attendance-section animate-fade-in">
            <div className="section-header">
                <h2 className="section-title">Attendance History Logs</h2>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="btn-secondary"><Filter size={16} /> Filter Logs</button>
                    <button className="btn-secondary"><Download size={16} /> Export Logs</button>
                </div>
            </div>

            <div className="history-list">
                {[
                    { date: 'Mar 18, 2024', course: 'Advanced React', status: 'Completed', present: 112, total: 124 },
                    { date: 'Mar 17, 2024', course: 'UI/UX Masterclass', status: 'Completed', present: 85, total: 90 },
                    { date: 'Mar 16, 2024', course: 'Backend Deep Dive', status: 'Completed', present: 58, total: 60 },
                    { date: 'Mar 15, 2024', course: 'Advanced React', status: 'Completed', present: 110, total: 124 },
                ].map((item, i) => (
                    <div key={i} className="history-item">
                        <div className="history-icon-box">
                            <HistoryIcon size={20} color="var(--primary)" />
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{item.date}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.course}</div>
                        </div>
                        <div style={{ marginRight: '2rem', textAlign: 'right' }}>
                            <div style={{ fontWeight: 700, color: '#10b981' }}>{item.present}/{item.total}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Attended</div>
                        </div>
                        <button className="btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}>View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderReports = () => (
        <div className="attendance-section animate-fade-in">
            <div className="section-header">
                <h2 className="section-title">Analytics & Reports</h2>
                <div className="tab-pills">
                    <button className="pill active">Daily</button>
                    <button className="pill">Weekly</button>
                    <button className="pill">Monthly</button>
                </div>
            </div>

            <div className="dashboard-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div className="card">
                    <h3 className="card-title" style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <TrendingUp size={18} color="var(--primary)" /> Attendance Trend
                    </h3>
                    <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '1rem 0' }}>
                        {[40, 65, 55, 80, 75, 90, 85].map((h, i) => (
                            <div key={i} style={{ width: '10%', height: `${h}%`, background: 'var(--primary-gradient)', borderRadius: '4px', position: 'relative' }}>
                                <span style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.6rem', color: 'var(--text-dim)' }}>
                                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card">
                    <h3 className="card-title" style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <BarChart size={18} color="#ec4899" /> Course Breakdown
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { name: 'Advanced React', val: '92%', color: '#6366f1' },
                            { name: 'UI/UX Design', val: '88%', color: '#ec4899' },
                            { name: 'Backend Deep Dive', val: '95%', color: '#f59e0b' }
                        ].map((c, i) => (
                            <div key={i}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
                                    <span style={{ fontWeight: 600 }}>{c.name}</span>
                                    <span style={{ color: 'var(--text-muted)' }}>{c.val}</span>
                                </div>
                                <div style={{ height: '8px', background: 'var(--bg-subtle)', borderRadius: '4px', overflow: 'hidden' }}>
                                    <div style={{ width: c.val, height: '100%', background: c.color }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderStudentWise = () => (
        <div className="attendance-section animate-fade-in">
            <div className="section-header">
                <h2 className="section-title">Student-wise Records</h2>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <div className="premium-search">
                        <Search size={16} />
                        <input type="text" placeholder="Search student name..." />
                    </div>
                </div>
            </div>

            <div className="premium-table-container">
                <table className="premium-table">
                    <thead>
                        <tr>
                            <th>Student</th>
                            <th>Overall Attendance</th>
                            <th>Classes Attended</th>
                            <th>Last Seen</th>
                            <th>Record</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.id}>
                                <td>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div className="avatar-small" style={{ background: 'var(--accent-gradient)' }}>{student.name.charAt(0)}</div>
                                        <div>
                                            <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>{student.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div style={{ color: student.progress > 80 ? '#10b981' : '#f59e0b', fontWeight: 800 }}>{student.progress}%</div>
                                </td>
                                <td style={{ fontSize: '0.8rem' }}>45/50</td>
                                <td style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Yesterday</td>
                                <td>
                                    <button className="btn-secondary" style={{ padding: '0.3rem 0.7rem', fontSize: '0.7rem' }}>View Profile</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderCourseWise = () => (
        <div className="attendance-section animate-fade-in">
            <div className="section-header">
                <h2 className="section-title">Course-wise Analytics</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {courses.map((course, i) => (
                    <div key={i} className="course-attendance-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <div className="course-badge" style={{ background: i === 0 ? 'rgba(99, 102, 241, 0.1)' : i === 1 ? 'rgba(236, 72, 153, 0.1)' : 'rgba(245, 158, 11, 0.1)', color: i === 0 ? '#6366f1' : i === 1 ? '#ec4899' : '#f59e0b' }}>
                                {course.split(' ')[0]}
                            </div>
                            <MoreHorizontal size={18} color="var(--text-dim)" />
                        </div>
                        <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '1rem', height: '3rem', overflow: 'hidden' }}>{course}</h4>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <div>
                                <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>{85 + i * 4}%</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Avg. Attendance</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>124</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Students</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderNotifications = () => (
        <div className="attendance-section animate-fade-in">
            <div className="section-header">
                <h2 className="section-title">Absent Notifications</h2>
                <button className="btn-primary" style={{ background: '#f43f5e' }}>
                    <Bell size={18} style={{ marginRight: '8px' }} /> Configure Alerts
                </button>
            </div>

            <div className="notification-list">
                {[
                    { student: 'Elena Gilbert', reason: 'Unexcused Absence', date: 'Today, 2:30 PM', action: 'Sent Email' },
                    { student: 'Sarah Miller', reason: 'Consecutive Absent (3 days)', date: 'Today, 11:15 AM', action: 'Alert Parent' },
                    { student: 'John Doe', reason: 'Late Arrival (30 min)', date: 'Yesterday', action: 'Warning Sent' }
                ].map((n, i) => (
                    <div key={i} className="notification-card">
                        <div className={`notification-dot ${i < 2 ? 'active' : ''}`}></div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 700 }}>{n.student}</div>
                            <div style={{ fontSize: '0.75rem', color: '#f43f5e', fontWeight: 600 }}>{n.reason}</div>
                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{n.date}</div>
                        </div>
                        <div style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'var(--bg-subtle)', borderRadius: '6px', fontWeight: 600 }}>{n.action}</div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeSubTab) {
            case 'Mark Attendance': return renderMarkAttendance();
            case 'Auto Attendance': return renderAutoAttendance();
            case 'Attendance History': return renderHistory();
            case 'Attendance Report': return renderReports();
            case 'Student-wise': return renderStudentWise();
            case 'Course-wise': return renderCourseWise();
            case 'Absent Notifications': return renderNotifications();
            default: return renderMarkAttendance();
        }
    };

    const menuItems = [
        { name: 'Mark Attendance', icon: ClipboardList },
        { name: 'Auto Attendance', icon: Video },
        { name: 'Attendance History', icon: HistoryIcon },
        { name: 'Attendance Report', icon: BarChart },
        { name: 'Student-wise', icon: Users },
        { name: 'Course-wise', icon: BookOpen },
        { name: 'Absent Notifications', icon: Bell },
        { name: 'Attendance Export', icon: Download }
    ];

    return (
        <div className="attendance-container">
            <div className="page-header">
                <div className="header-title">
                    <h1>Attendance Tracking</h1>
                    <p>Monitor student participation across automated and manual systems.</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn-secondary" style={{ padding: '0.6rem 1.25rem' }}>
                        <ArrowUpRight size={18} style={{ marginRight: '6px' }} /> Live Overview
                    </button>
                </div>
            </div>

            <div className="attendance-layout">
                {/* Secondary Sidebar */}
                <aside className="secondary-sidebar">
                    <div className="sidebar-menu">
                        {menuItems.map((item) => {
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

                    <div className="sidebar-footer-card">
                        <Award size={24} color="white" style={{ marginBottom: '12px' }} />
                        <h4 style={{ color: 'white', marginBottom: '4px' }}>Attendance Goal</h4>
                        <div style={{ height: '6px', background: 'rgba(255,255,255,0.2)', borderRadius: '10px', marginTop: '12px' }}>
                            <div style={{ width: '85%', height: '100%', background: 'white', borderRadius: '10px' }}></div>
                        </div>
                        <p style={{ color: 'white', fontSize: '0.7rem', marginTop: '8px', opacity: 0.8 }}>85% Target reached for Q1</p>
                    </div>
                </aside>

                {/* Main Section Content */}
                <div className="attendance-content">
                    {renderContent()}
                </div>
            </div>

            <style>{`
                .attendance-container {
                    animation: slideUp 0.4s ease-out;
                }

                .attendance-layout {
                    display: grid;
                    grid-template-columns: 260px 1fr;
                    gap: 2rem;
                    margin-top: 1.5rem;
                }

                .secondary-sidebar {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .sidebar-menu {
                    background: white;
                    border-radius: 20px;
                    padding: 1rem;
                    border: 1px solid var(--border-light);
                    box-shadow: var(--shadow-sm);
                }

                .sidebar-btn {
                    width: 100%;
                    padding: 0.85rem 1rem;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    border: none;
                    background: transparent;
                    border-radius: 12px;
                    color: var(--text-muted);
                    font-weight: 600;
                    font-size: 0.85rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    margin-bottom: 0.5rem;
                }

                .sidebar-btn:last-child { margin-bottom: 0; }

                .sidebar-btn:hover {
                    background: var(--bg-subtle);
                    color: var(--primary);
                }

                .sidebar-btn.active {
                    background: var(--primary-gradient);
                    color: white;
                }

                .sidebar-footer-card {
                    background: var(--primary-gradient);
                    border-radius: 20px;
                    padding: 1.5rem;
                    color: white;
                }

                .attendance-content {
                    background: white;
                    border-radius: 24px;
                    padding: 2rem;
                    border: 1px solid var(--border-light);
                    box-shadow: var(--shadow-sm);
                    min-height: 600px;
                }

                .section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 2rem;
                }

                .section-title {
                    font-size: 1.25rem;
                    font-weight: 800;
                    letter-spacing: -0.5px;
                }

                .attendance-stat-card {
                    background: var(--bg-subtle);
                    padding: 1.5rem;
                    border-radius: 20px;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    border: 1px solid transparent;
                    transition: all 0.3s ease;
                }

                .attendance-stat-card:hover {
                    background: white;
                    border-color: var(--border-light);
                    box-shadow: var(--shadow-md);
                    transform: translateY(-4px);
                }

                .stat-label {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--text-muted);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .stat-value {
                    font-size: 1.5rem;
                    font-weight: 800;
                    margin-top: 4px;
                }

                .stat-icon {
                    position: absolute;
                    top: 1.5rem;
                    right: 1.5rem;
                    opacity: 0.8;
                }

                .premium-select {
                    padding: 0.6rem 1rem;
                    border-radius: 12px;
                    border: 1px solid var(--border-light);
                    background: var(--bg-subtle);
                    font-weight: 600;
                    font-size: 0.85rem;
                    outline: none;
                    cursor: pointer;
                }

                .premium-table-container {
                    overflow-x: auto;
                }

                .premium-table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .premium-table th {
                    text-align: left;
                    padding: 1rem;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: var(--text-dim);
                    border-bottom: 2px solid var(--bg-subtle);
                }

                .premium-table td {
                    padding: 1.25rem 1rem;
                    border-bottom: 1px solid var(--bg-subtle);
                }

                .avatar-small {
                    width: 32px;
                    height: 32px;
                    border-radius: 10px;
                    background: var(--primary-gradient);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.8rem;
                    font-weight: 800;
                }

                .status-toggle-group {
                    display: flex;
                    gap: 8px;
                }

                .status-toggle {
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    border: 1px solid var(--border-light);
                    background: white;
                    font-weight: 800;
                    font-size: 0.75rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .status-toggle.present:hover, .status-toggle.present.active { background: #10b981; color: white; border-color: #10b981; }
                .status-toggle.late:hover, .status-toggle.late.active { background: #f59e0b; color: white; border-color: #f59e0b; }
                .status-toggle.absent:hover, .status-toggle.absent.active { background: #ef4444; color: white; border-color: #ef4444; }

                .progress-bar-small {
                    flex: 1;
                    height: 4px;
                    background: #e2e8f0;
                    border-radius: 10px;
                    overflow: hidden;
                }

                .progress-fill {
                    height: 100%;
                    background: var(--primary-gradient);
                }

                .icon-btn-subtle {
                    background: transparent;
                    border: none;
                    color: var(--text-dim);
                    cursor: pointer;
                    padding: 4px;
                    border-radius: 6px;
                }

                .icon-btn-subtle:hover { background: var(--bg-subtle); color: var(--primary); }

                .history-item {
                    display: flex;
                    align-items: center;
                    gap: 1.25rem;
                    padding: 1rem;
                    border-radius: 16px;
                    background: var(--bg-subtle);
                    margin-bottom: 1rem;
                    transition: transform 0.2s ease;
                }

                .history-item:hover { transform: scale(1.01); }

                .history-icon-box {
                    width: 40px;
                    height: 40px;
                    border-radius: 12px;
                    background: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: var(--shadow-sm);
                }

                .tab-pills {
                    display: flex;
                    background: var(--bg-subtle);
                    padding: 4px;
                    border-radius: 12px;
                    gap: 4px;
                }

                .pill {
                    padding: 0.4rem 1rem;
                    border-radius: 8px;
                    border: none;
                    background: transparent;
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--text-muted);
                    cursor: pointer;
                }

                .pill.active {
                    background: white;
                    color: var(--primary);
                    box-shadow: var(--shadow-sm);
                }

                .notification-card {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1.25rem;
                    border-radius: 16px;
                    border: 1px solid var(--border-light);
                    margin-bottom: 1rem;
                    position: relative;
                }

                .notification-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #e2e8f0;
                }

                .notification-dot.active {
                    background: #ef4444;
                    box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.2);
                }

                .animate-fade-in {
                    animation: fadeIn 0.4s ease-out;
                }

                .premium-search {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    background: var(--bg-subtle);
                    padding: 0.6rem 1.25rem;
                    border-radius: 12px;
                    border: 1px solid var(--border-light);
                    min-width: 300px;
                }

                .premium-search input {
                    border: none;
                    background: transparent;
                    outline: none;
                    font-size: 0.85rem;
                    font-weight: 600;
                    width: 100%;
                }

                .course-attendance-card {
                    background: white;
                    padding: 1.5rem;
                    border-radius: 20px;
                    border: 1px solid var(--border-light);
                    transition: all 0.3s ease;
                }

                .course-attendance-card:hover {
                    box-shadow: var(--shadow-md);
                    transform: translateY(-5px);
                    border-color: var(--primary);
                }

                .course-badge {
                    padding: 4px 12px;
                    border-radius: 8px;
                    font-size: 0.7rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                @keyframes slideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default AttendanceTracking;
