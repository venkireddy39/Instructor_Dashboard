import React, { useState } from 'react';
import {
    Users,
    BookOpen,
    ClipboardCheck,
    Search,
    Bell,
    MoreHorizontal,
    Layout,
    FileText,
    MessageSquare,
    Settings,
    LogOut,
    Plus,
    ArrowUpRight,
    GraduationCap,
    Video,
    FileDown,
    Globe,
    Lock,
    Eye,
    CheckCircle,
    Clock,
    Edit3,
    Trash2,
    Tag,
    Layers,
    DollarSign,
    Calendar,
    BarChart,
    UserX,
    UserCheck,
    Mail,
    Download,
    Filter,
    Activity,
    Star,
    Award,
    ChevronRight,
    TrendingUp,
    Zap,
    Briefcase
} from 'lucide-react';

const TeacherDashboard = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');

    const stats = [
        { label: 'Total Sales', value: '$24,580', icon: DollarSign, trend: '+12.5%', color: '#6366f1', bg: 'rgba(99, 102, 241, 0.1)' },
        { label: 'Active Students', value: '1,842', icon: Users, trend: '+1.2k', color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
        { label: 'Avg. Rating', value: '4.8', icon: Star, trend: '+0.2', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)' },
        { label: 'Completion', value: '76%', icon: Award, trend: '+4%', color: '#ec4899', bg: 'rgba(236, 72, 153, 0.1)' }
    ];

    const courses = [
        { id: 1, title: 'Advanced React Architecture 2024', category: 'Development', status: 'Published', students: 450, rating: 4.9, sales: '$8,400', progress: 85, color: '#6366f1' },
        { id: 2, title: 'Premium UI/UX Design Masterclass', category: 'Design', status: 'Published', students: 820, rating: 4.7, sales: '$12,200', progress: 60, color: '#ec4899' },
        { id: 3, title: 'Node.js Backend Deep Dive', category: 'Backend', status: 'Draft', students: 212, rating: 0, sales: '$0', progress: 0, color: '#f59e0b' }
    ];

    return (
        <div className="dashboard-container">
            {/* Premium Navbar */}
            <nav className="top-navbar">
                <div className="logo">
                    <div className="logo-icon">
                        <GraduationCap size={24} strokeWidth={2.5} />
                    </div>
                    <span style={{ fontSize: '1.1rem' }}>Instructor<span style={{ fontWeight: 400, opacity: 0.8 }}>Hub</span></span>
                </div>

                <div className="nav-links">
                    <button onClick={() => setActiveTab('Dashboard')} className={`nav-item ${activeTab === 'Dashboard' ? 'active' : ''}`} style={{ fontSize: '0.85rem' }}>
                        <Layout size={20} /> <span>Overview</span>
                    </button>
                    <button onClick={() => setActiveTab('Course Management')} className={`nav-item ${activeTab === 'Course Management' ? 'active' : ''}`} style={{ fontSize: '0.85rem' }}>
                        <Layers size={20} /> <span>Management</span>
                    </button>
                    <button onClick={() => setActiveTab('Student Management')} className={`nav-item ${activeTab === 'Student Management' ? 'active' : ''}`} style={{ fontSize: '0.85rem' }}>
                        <Users size={20} /> <span>Students</span>
                    </button>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                        <button className="nav-item" style={{ padding: '0.6rem', background: 'var(--bg-subtle)' }}>
                            <Bell size={20} color="var(--text-muted)" />
                        </button>
                        <span style={{ position: 'absolute', top: -4, right: -4, width: 10, height: 10, background: '#ef4444', borderRadius: '50%', border: '2px solid white' }}></span>
                    </div>
                    <div className="user-profile" style={{ padding: '2px', border: '1px solid var(--border-light)', borderRadius: '14px', background: 'white' }}>
                        <div className="avatar" style={{ borderRadius: '12px', width: '38px', height: '38px', background: 'var(--primary-gradient)', fontWeight: 800 }}>MA</div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="main-content">
                {activeTab === 'Dashboard' && (
                    <>
                        <div className="page-header">
                            <div className="header-title">
                                <h1>Dashboard Overview</h1>
                                <p>Monitor your educational ecosystem and earnings performance.</p>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                                    <Download size={16} style={{ marginRight: '6px' }} /> Export
                                </button>
                                <button className="btn-primary" onClick={() => setActiveTab('Course Management')} style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}>
                                    <Plus size={18} style={{ marginRight: '6px' }} /> Create New Course
                                </button>
                            </div>
                        </div>

                        {/* Premium Stats Grid */}
                        <div className="stats-grid">
                            {stats.map((stat, i) => (
                                <div key={i} className="stat-card" style={{ '--stat-color': stat.color, '--stat-bg': stat.bg, '--stat-overlay': stat.color }}>
                                    <div className="stat-icon-box">
                                        <stat.icon size={28} strokeWidth={2.5} />
                                    </div>
                                    <div className="stat-value">{stat.value}</div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div className="stat-label">{stat.label}</div>
                                        <div style={{ color: '#10b981', fontWeight: 800, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <TrendingUp size={14} /> {stat.trend}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="dashboard-grid">
                            {/* Revenue Visualization */}
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Earnings Growth</h3>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Daily</button>
                                        <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', background: 'var(--primary)', color: 'white', border: 'none' }}>Monthly</button>
                                    </div>
                                </div>
                                <div style={{ height: '350px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '1rem 0', position: 'relative' }}>
                                    {[60, 45, 85, 55, 100, 75, 95, 65, 88, 72, 80, 92].map((h, i) => (
                                        <div key={i} style={{ width: '6%', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                                            <div style={{ width: '100%', height: `${h * 2.5}px`, background: 'var(--primary-gradient)', borderRadius: '8px', opacity: 0.8, transition: 'all 0.3s ease' }} className="chart-bar"></div>
                                            <span style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-dim)' }}>{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Side Cards */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div className="card" style={{ background: 'var(--primary-gradient)', color: 'white', border: 'none' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                        <Zap size={32} />
                                        <Award size={24} style={{ opacity: 0.5 }} />
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>Pro Instructor Status</h3>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '1.5rem' }}>You've reached the top 5% of instructors this month. Keep up the great work!</p>
                                    <button style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', color: 'white', fontWeight: 700, cursor: 'pointer' }}>View Benefits</button>
                                </div>

                                <div className="card">
                                    <div className="card-header"><h3 className="card-title" style={{ fontSize: '1.1rem' }}>Recent Reviews</h3></div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        {[
                                            { user: 'Sarah K.', text: 'Amazing React course! Loved the deep dive.', rating: 5 },
                                            { user: 'Joel M.', text: 'Very clear explanations on UI/UX.', rating: 5 }
                                        ].map((r, i) => (
                                            <div key={i} style={{ paddingBottom: '1rem', borderBottom: i === 0 ? '1px solid var(--border-light)' : 'none' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                                    <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>{r.user}</span>
                                                    <div style={{ color: '#f59e0b', display: 'flex', gap: '2px' }}>{[...Array(r.rating)].map((_, i) => <Star key={i} size={12} fill="#f59e0b" />)}</div>
                                                </div>
                                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>"{r.text}"</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {activeTab === 'Course Management' && (
                    <>
                        <div className="page-header">
                            <div className="header-title">
                                <h1>Course Management</h1>
                                <p>Refine your curriculum and manage educational assets.</p>
                            </div>
                            <button className="btn-primary">
                                <Plus size={20} style={{ marginRight: '8px' }} /> Create Course
                            </button>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">All Content</h3>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div className="user-profile" style={{ padding: '0.5rem 1rem', background: 'var(--bg-subtle)' }}>
                                        <Search size={18} color="var(--text-dim)" />
                                        <input type="text" placeholder="Search content..." style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.9rem', marginLeft: '0.5rem' }} />
                                    </div>
                                </div>
                            </div>

                            <div className="course-list">
                                {courses.map(course => (
                                    <div key={course.id} className="course-item">
                                        <div className="course-thumb">
                                            <Video size={32} />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
                                                <span className="nav-item active" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '6px' }}>{course.category}</span>
                                                <span style={{ fontSize: '0.7rem', background: '#e2e8f0', padding: '0.2rem 0.6rem', borderRadius: '6px', fontWeight: 700 }}>{course.status}</span>
                                            </div>
                                            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, letterSpacing: '-0.3px', marginBottom: '0.2rem' }}>{course.title}</h4>
                                            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                                                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}><Users size={14} /> {course.students} Enrolled</span>
                                                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}><Star size={14} color="#f59e0b" fill="#f59e0b" /> {course.rating} Rating</span>
                                                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-main)' }}>Earnings: {course.sales}</span>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                                            <button className="btn-secondary" style={{ padding: '0.6rem' }} title="Edit Curriculum"><Layers size={20} color="var(--primary)" /></button>
                                            <button className="btn-secondary" style={{ padding: '0.6rem' }} title="Analytics"><TrendingUp size={20} color="#10b981" /></button>
                                            <button className="btn-secondary" style={{ padding: '0.6rem', background: '#fff1f2', border: 'none' }} title="Delete"><Trash2 size={20} color="#f43f5e" /></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {activeTab === 'Student Management' && (
                    <>
                        <div className="page-header">
                            <div className="header-title">
                                <h1>Student Ecosystem</h1>
                                <p>Manage access, monitor progress, and engage with your community.</p>
                            </div>
                            <button className="btn-primary">
                                <Mail size={18} style={{ marginRight: '8px' }} /> Bulk Broadcast
                            </button>
                        </div>

                        <div className="card">
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                                <div className="user-profile" style={{ flex: 1, padding: '0.75rem 1.5rem', background: 'var(--bg-subtle)' }}>
                                    <Search size={20} color="var(--text-dim)" />
                                    <input type="text" placeholder="Search by name, email, or course..." style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', marginLeft: '1rem', fontSize: '1rem' }} />
                                </div>
                                <button className="btn-secondary"><Filter size={18} /> Advanced Filter</button>
                                <button className="btn-secondary"><Download size={18} /> Export Data</button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    { name: 'Alex Thompson', email: 'alex@react.com', course: 'Advanced React', progress: 92, status: 'Active' },
                                    { name: 'Elena Gilbert', email: 'elena@design.com', course: 'UI/UX Masterclass', progress: 45, status: 'Active' },
                                    { name: 'Sarah Miller', email: 'sarah@web.com', course: 'Backend Deep Dive', progress: 10, status: 'Idle' }
                                ].map((s, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '2rem', padding: '1.25rem', background: 'var(--bg-subtle)', borderRadius: '18px', border: '1px solid transparent', transition: 'all 0.3s ease' }} className="student-row">
                                        <div className="avatar" style={{ width: '44px', height: '44px', background: 'var(--accent-gradient)', fontWeight: 800 }}>{s.name.charAt(0)}</div>
                                        <div style={{ flex: 1 }}>
                                            <h4 style={{ fontSize: '0.85rem', fontWeight: 800 }}>{s.name}</h4>
                                            <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{s.email}</p>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>{s.course}</span>
                                        </div>
                                        <div style={{ width: '150px' }}>
                                            <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '10px', overflow: 'hidden' }}>
                                                <div style={{ width: `${s.progress}%`, height: '100%', background: 'var(--primary-gradient)' }}></div>
                                            </div>
                                        </div>
                                        <div style={{ minWidth: '80px' }}>
                                            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: s.status === 'Active' ? '#10b981' : '#f59e0b' }}>{s.status}</span>
                                        </div>
                                        <button className="btn-secondary" style={{ padding: '0.5rem', borderRadius: '10px' }}><MoreHorizontal size={18} /></button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </main>

            <style>{`
        .chart-bar:hover {
          transform: scaleX(1.1);
          filter: brightness(1.2);
          opacity: 1 !important;
        }
        .student-row:hover {
          background: white;
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
          transform: translateX(10px);
        }
      `}</style>
        </div>
    );
};

export default TeacherDashboard;
