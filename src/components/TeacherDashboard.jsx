import React, { useState, useEffect, useRef } from 'react';
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
    Briefcase,
    Megaphone
} from 'lucide-react';
import AttendanceTracking from './AttendanceTracking';
import AssignmentManagement from './AssignmentManagement';
import QuizExamManagement from './QuizExamManagement';
import StudentPerformanceAnalytics from './StudentPerformanceAnalytics';
import LiveClassManagement from './LiveClassManagement';
import CommunicationManagement from './CommunicationManagement';
import CertificationManagement from './CertificationManagement';



const TeacherDashboard = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const [isCreateCourseModalOpen, setIsCreateCourseModalOpen] = useState(false);
    const [newCourseData, setNewCourseData] = useState({ title: '', category: 'Development', status: 'Draft', pricing: '' });
    const [studentSearchQuery, setStudentSearchQuery] = useState('');
    const [courseSearchQuery, setCourseSearchQuery] = useState('');
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
    const [activeSettingsTab, setActiveSettingsTab] = useState('General Info');
    const [profileData, setProfileData] = useState({
        name: 'Venkatesh Kumar',
        email: 'venkatesh@instructor.lms',
        headline: 'Senior Lead Instructor & Curriculum Architect',
        bio: 'Passionate about React ecosystem and modern web architectures. Helping thousands of students master fullstack development.',
        notifications: {
            email: true,
            browser: true,
            assignments: true
        }
    });

    const toggleNotification = (id) => {
        setProfileData(prev => ({
            ...prev,
            notifications: {
                ...prev.notifications,
                [id]: !prev.notifications[id]
            }
        }));
    };

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowProfileDropdown(false);
            }
        };

        if (showProfileDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showProfileDropdown]);

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

    const students = [
        { name: 'Alex Thompson', email: 'alex@react.com', course: 'Advanced React', progress: 92, status: 'Active' },
        { name: 'Elena Gilbert', email: 'elena@design.com', course: 'UI/UX Masterclass', progress: 45, status: 'Active' },
        { name: 'Sarah Miller', email: 'sarah@web.com', course: 'Backend Deep Dive', progress: 10, status: 'Idle' }
    ];

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(courseSearchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(courseSearchQuery.toLowerCase())
    );

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(studentSearchQuery.toLowerCase()) ||
        student.email.toLowerCase().includes(studentSearchQuery.toLowerCase()) ||
        student.course.toLowerCase().includes(studentSearchQuery.toLowerCase())
    );

    return (
        <div className="dashboard-container">
            {/* Premium Navbar */}
            <nav className="top-navbar">
                <div className="logo">
                    <div className="logo-icon">
                        <GraduationCap size={24} strokeWidth={2.5} />
                    </div>
                </div>

                <div className="nav-links">
                    <button onClick={() => setActiveTab('Dashboard')} className={`nav-item ${activeTab === 'Dashboard' ? 'active' : ''}`} style={{ fontSize: '0.85rem' }}>
                        <Layout size={20} /> <span>Overview</span>
                    </button>
                    <button onClick={() => setActiveTab('Student Management')} className={`nav-item ${activeTab === 'Student Management' ? 'active' : ''}`} style={{ fontSize: '0.85rem' }}>
                        <Users size={20} /> <span>Students</span>
                    </button>
                    <button onClick={() => setActiveTab('Attendance')} className={`nav-item ${activeTab === 'Attendance' ? 'active' : ''}`} style={{ fontSize: '0.85rem' }}>
                        <ClipboardCheck size={20} /> <span>Attendance</span>
                    </button>
                    <button onClick={() => setActiveTab('Assignments')} className={`nav-item ${activeTab === 'Assignments' ? 'active' : ''}`} style={{ fontSize: '0.85rem' }}>
                        <FileText size={20} /> <span>Assignments</span>
                    </button>
                    <button onClick={() => setActiveTab('Quizzes')} className={`nav-item ${activeTab === 'Quizzes' ? 'active' : ''}`} style={{ fontSize: '0.85rem' }}>
                        <Zap size={20} /> <span>Quizzes</span>
                    </button>
                    <button onClick={() => setActiveTab('Live')} className={`nav-item ${activeTab === 'Live' ? 'active' : ''}`} style={{ fontSize: '0.85rem' }}>
                        <Video size={20} /> <span>Live Classes</span>
                    </button>
                    <button onClick={() => setActiveTab('Communication')} className={`nav-item ${activeTab === 'Communication' ? 'active' : ''}`} style={{ fontSize: '0.8rem' }}>
                        <Megaphone size={20} /> <span>Announcements</span>
                    </button>
                    <button onClick={() => setActiveTab('Certifications')} className={`nav-item ${activeTab === 'Certifications' ? 'active' : ''}`} style={{ fontSize: '0.8rem' }}>
                        <Award size={20} /> <span>Certificates</span>
                    </button>
                </div>

                <div
                    style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', position: 'relative' }}
                    ref={dropdownRef}
                >
                    <div
                        className="user-profile"
                        style={{ cursor: 'pointer', padding: '2px', background: 'transparent' }}
                        onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop"
                            alt="User Profile"
                            style={{ borderRadius: '10px', width: '36px', height: '36px', objectFit: 'cover', border: '2px solid var(--border-light)' }}
                        />
                    </div>

                    {showProfileDropdown && (
                        <div className="profile-dropdown animate-slide-up">
                            <div className="dropdown-header">
                                <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 800 }}>Venkatesh Kumar</h4>
                                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>Senior Lead Instructor</p>
                            </div>
                            <div className="dropdown-divider"></div>
                            <button className="dropdown-item" onClick={() => { setIsSettingsModalOpen(true); setShowProfileDropdown(false); }}><Settings size={16} /> Account Settings</button>
                            <button className="dropdown-item" onClick={() => setShowProfileDropdown(false)}><LogOut size={16} /> Sign Out</button>
                        </div>
                    )}
                </div>
            </nav>

            {/* Main Content */}
            <main className="main-content">
                {activeTab === 'Dashboard' && (
                    <>
                        <div className="page-header">
                            <div className="header-title">
                                <h1>Operations Overview</h1>
                                <p>Comprehensive view of curriculum management and performance analytics.</p>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button className="btn-secondary btn-sm" onClick={() => setActiveTab('Communication')}>
                                    <Megaphone size={16} /> Broadcast Update
                                </button>
                                <button className="btn-primary" onClick={() => setIsCreateCourseModalOpen(true)}>
                                    <Plus size={20} style={{ marginRight: '8px' }} /> Create New Course
                                </button>
                            </div>
                        </div>

                        <div className="stats-grid">
                            {stats.map((stat, i) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={i} className="stat-card" style={{ '--stat-color': stat.color, '--stat-bg': stat.bg, '--stat-overlay': stat.color }}>
                                        <div className="stat-icon-box">
                                            <Icon size={28} strokeWidth={2.5} />
                                        </div>
                                        <div className="stat-value">{stat.value}</div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div className="stat-label">{stat.label}</div>
                                            <div style={{ color: '#10b981', fontWeight: 800, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                <TrendingUp size={14} /> {stat.trend}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
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

                        {/* Integrated Management & Analysis Sections */}
                        <div style={{ marginTop: '3rem' }}>
                            <div className="card" style={{ marginBottom: '2.5rem' }}>
                                <div className="card-header" style={{ marginBottom: '2rem' }}>
                                    <h3 className="card-title">Curriculum Registry</h3>
                                    <div className="search-container" style={{ maxWidth: '300px' }}>
                                        <Search size={18} className="search-icon" />
                                        <input
                                            type="text"
                                            placeholder="Search courses..."
                                            value={courseSearchQuery}
                                            onChange={(e) => setCourseSearchQuery(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="course-list">
                                    {filteredCourses.map(course => (
                                        <div key={course.id} className="course-item">
                                            <div className="course-thumb">
                                                <Video size={32} />
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
                                                    <span className="category-badge" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '6px', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', fontWeight: 700 }}>{course.category}</span>
                                                    <span style={{ fontSize: '0.7rem', background: '#e2e8f0', padding: '0.2rem 0.6rem', borderRadius: '6px', fontWeight: 700 }}>{course.status}</span>
                                                </div>
                                                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, letterSpacing: '-0.3px', marginBottom: '0.2rem' }}>{course.title}</h4>
                                                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}><Users size={14} /> {course.students} Enrolled</span>
                                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}><Star size={14} color="#f59e0b" fill="#f59e0b" /> {course.rating} Rating</span>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                                <button className="btn-secondary" style={{ padding: '0.6rem' }} title="Edit"><Edit3 size={18} /></button>
                                                <button className="btn-secondary" style={{ padding: '0.6rem' }} title="View Analytics"><TrendingUp size={18} color="var(--primary)" /></button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="analysis-section" style={{ background: 'var(--bg-subtle)', borderRadius: '28px', padding: '2.5rem', border: '1px solid var(--border-light)' }}>
                                <div style={{ marginBottom: '2rem' }}>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '0.5rem' }}>Performance Analysis</h3>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Real-time student progress and engagement metrics.</p>
                                </div>
                                <StudentPerformanceAnalytics />
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
                        </div>

                        <div className="card">
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem', alignItems: 'center' }}>
                                <div className="search-container" style={{ maxWidth: '400px' }}>
                                    <Search size={20} className="search-icon" />
                                    <input
                                        type="text"
                                        placeholder="Search by name, email, or course..."
                                        value={studentSearchQuery}
                                        onChange={(e) => setStudentSearchQuery(e.target.value)}
                                    />
                                    <div className="search-shortcut">
                                        <span>ALT</span>
                                        <span>F</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', marginLeft: 'auto' }}>
                                    <button className="btn-secondary btn-sm"><Filter size={16} /> Advanced Filter</button>
                                    <button className="btn-secondary btn-sm"><Download size={16} /> Export Data</button>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {filteredStudents.map((s, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '2rem', padding: '1.25rem', background: 'var(--bg-subtle)', borderRadius: '18px', border: '1px solid transparent', transition: 'all 0.3s ease' }} className="student-row">
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

                {activeTab === 'Attendance' && (
                    <AttendanceTracking />
                )}

                {activeTab === 'Assignments' && (
                    <AssignmentManagement />
                )}

                {activeTab === 'Quizzes' && (
                    <QuizExamManagement />
                )}


                {activeTab === 'Live' && (
                    <LiveClassManagement />
                )}

                {activeTab === 'Communication' && (
                    <CommunicationManagement />
                )}

                {activeTab === 'Certifications' && (
                    <CertificationManagement />
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

        .profile-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 1rem;
          width: 200px;
          background: white;
          border-radius: 18px;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-lg);
          padding: 1rem;
          z-index: 2000;
        }
        .dropdown-header {
          padding-bottom: 0.75rem;
        }
        .dropdown-divider {
          height: 1px;
          background: var(--border-light);
          margin: 0.5rem 0;
        }
        .dropdown-item {
          width: 100%;
          padding: 0.6rem 0.75rem;
          display: flex;
          align-items: center;
          gap: 10px;
          border: none;
          background: transparent;
          border-radius: 10px;
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: 0.2s;
        }
        .dropdown-item:hover {
          background: var(--bg-subtle);
          color: var(--primary);
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          animation: fadeIn 0.3s ease-out;
        }
        .modal-card {
          background: white;
          width: 100%;
          max-width: 550px;
          border-radius: 32px;
          padding: 3rem;
          box-shadow: 0 40px 80px -15px rgba(0, 0, 0, 0.2);
          position: relative;
        }
        .modal-close {
          position: absolute;
          top: 2rem;
          right: 2rem;
          background: var(--bg-subtle);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: 0.3s;
        }
        .modal-close:hover {
          background: #fee2e2;
          color: #ef4444;
          transform: rotate(90deg);
        }
        .modal-header { margin-bottom: 2.5rem; }
        .modal-header h2 { font-size: 1.75rem; font-weight: 900; letter-spacing: -1px; margin-bottom: 0.5rem; }
        .modal-header p { color: var(--text-muted); font-size: 0.95rem; }
        
        .form-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .form-group label { font-size: 0.75rem; font-weight: 900; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.5px; }
        .premium-input { 
          padding: 1rem 1.25rem; 
          border-radius: 16px; 
          border: 1.5px solid var(--border-light); 
          background: var(--bg-subtle); 
          font-weight: 650; 
          outline: none; 
          transition: 0.3s; 
        }
        .premium-input:focus { border-color: var(--primary); background: white; box-shadow: 0 0 0 5px rgba(99, 102, 241, 0.08); }
        
        .modal-actions { display: flex; gap: 1rem; margin-top: 3rem; }
        .modal-actions button { flex: 1; padding: 1rem; border-radius: 16px; font-weight: 800; cursor: pointer; transition: 0.3s; }
        .btn-cancel { background: var(--bg-subtle); border: none; }
        .btn-submit { background: var(--primary-gradient); color: white; border: none; box-shadow: var(--shadow-glow); }
        .btn-submit:hover { filter: brightness(1.1); transform: translateY(-2px); }
      `}</style>

            {isCreateCourseModalOpen && (
                <div className="modal-overlay" onClick={() => setIsCreateCourseModalOpen(false)}>
                    <div className="modal-card animate-slide-up" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setIsCreateCourseModalOpen(false)}>
                            <Plus size={20} style={{ transform: 'rotate(45deg)' }} />
                        </button>
                        <div className="modal-header">
                            <h2>Create New Course</h2>
                            <p>Set up the foundations for your next educational masterpiece.</p>
                        </div>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Course Title</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Mastering Advanced Microservices"
                                    className="premium-input"
                                    value={newCourseData.title}
                                    onChange={e => setNewCourseData({ ...newCourseData, title: e.target.value })}
                                />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div className="form-group">
                                    <label>Category</label>
                                    <select
                                        className="premium-input"
                                        value={newCourseData.category}
                                        onChange={e => setNewCourseData({ ...newCourseData, category: e.target.value })}
                                    >
                                        <option>Development</option>
                                        <option>Design</option>
                                        <option>Backend</option>
                                        <option>Marketing</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Price (USD)</label>
                                    <input
                                        type="number"
                                        placeholder="49.99"
                                        className="premium-input"
                                        value={newCourseData.pricing}
                                        onChange={e => setNewCourseData({ ...newCourseData, pricing: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Course Status</label>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    {['Draft', 'Published'].map(status => (
                                        <button
                                            key={status}
                                            onClick={() => setNewCourseData({ ...newCourseData, status })}
                                            style={{
                                                flex: 1, padding: '0.75rem', borderRadius: '12px',
                                                border: '1.5px solid',
                                                borderColor: newCourseData.status === status ? 'var(--primary)' : 'var(--border-light)',
                                                background: newCourseData.status === status ? 'rgba(99, 102, 241, 0.05)' : 'white',
                                                color: newCourseData.status === status ? 'var(--primary)' : 'var(--text-muted)',
                                                fontWeight: 800, cursor: 'pointer'
                                            }}
                                        >
                                            {status}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="modal-actions">
                            <button className="btn-cancel" onClick={() => setIsCreateCourseModalOpen(false)}>Cancel</button>
                            <button className="btn-submit" onClick={() => {
                                // Close modal and reset
                                setIsCreateCourseModalOpen(false);
                                alert(`Course "${newCourseData.title}" created successfully!`);
                            }}>Create Course</button>
                        </div>
                    </div>
                </div>
            )}
            {isSettingsModalOpen && (
                <div className="modal-overlay" onClick={() => setIsSettingsModalOpen(false)}>
                    <div className="modal-card animate-slide-up" style={{ maxWidth: '750px' }} onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setIsSettingsModalOpen(false)}>
                            <Plus size={20} style={{ transform: 'rotate(45deg)' }} />
                        </button>
                        <div className="modal-header">
                            <h2>Instructor Profile Studio</h2>
                            <p>Configure your public presence and security parameters.</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem' }}>
                            <div className="settings-sidebar">
                                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                    <div style={{ position: 'relative', display: 'inline-block' }}>
                                        <img
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
                                            alt="Profile"
                                            style={{ width: '120px', height: '120px', borderRadius: '30px', objectFit: 'cover', border: '4px solid var(--border-light)' }}
                                        />
                                        <button style={{ position: 'absolute', bottom: '-10px', right: '-10px', width: '36px', height: '36px', borderRadius: '12px', background: 'var(--primary)', color: 'white', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyCenter: 'center', display: 'flex', justifyContent: 'center' }}>
                                            <Edit3 size={16} />
                                        </button>
                                    </div>
                                    <h4 style={{ marginTop: '1.5rem', fontWeight: 800 }}>Profile Identity</h4>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {['General Info', 'Account Security', 'Notification Engine'].map(tab => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveSettingsTab(tab)}
                                            style={{
                                                padding: '0.8rem 1.25rem',
                                                border: 'none',
                                                background: activeSettingsTab === tab ? 'var(--primary-gradient)' : 'transparent',
                                                color: activeSettingsTab === tab ? 'white' : 'var(--text-muted)',
                                                borderRadius: '14px',
                                                fontWeight: 700,
                                                fontSize: '0.85rem',
                                                textAlign: 'left',
                                                cursor: 'pointer',
                                                transition: '0.3s'
                                            }}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="settings-content">
                                {activeSettingsTab === 'General Info' && (
                                    <div className="form-grid">
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <input type="text" className="premium-input" value={profileData.name} onChange={e => setProfileData({ ...profileData, name: e.target.value })} />
                                        </div>
                                        <div className="form-group">
                                            <label>Email Horizon</label>
                                            <input type="email" className="premium-input" value={profileData.email} onChange={e => setProfileData({ ...profileData, email: e.target.value })} />
                                        </div>
                                        <div className="form-group">
                                            <label>Professional Insight</label>
                                            <input type="text" className="premium-input" value={profileData.headline} onChange={e => setProfileData({ ...profileData, headline: e.target.value })} />
                                        </div>
                                        <div className="form-group">
                                            <label>Biography</label>
                                            <textarea className="premium-input" style={{ height: '100px', resize: 'none' }} value={profileData.bio} onChange={e => setProfileData({ ...profileData, bio: e.target.value })}></textarea>
                                        </div>
                                    </div>
                                )}

                                {activeSettingsTab === 'Account Security' && (
                                    <div className="form-grid">
                                        <div className="form-group">
                                            <label>Current Gateway Key</label>
                                            <input type="password" placeholder="••••••••" className="premium-input" />
                                        </div>
                                        <div className="form-group">
                                            <label>New Security Key</label>
                                            <input type="password" placeholder="Min. 8 adaptive characters" className="premium-input" />
                                        </div>
                                        <div className="form-group">
                                            <label>Confirm Identity Key</label>
                                            <input type="password" placeholder="Repeat new key" className="premium-input" />
                                        </div>
                                        <div style={{ background: 'rgba(245, 158, 11, 0.05)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(245, 158, 11, 0.2)', fontSize: '0.8rem', color: '#b45309' }}>
                                            <strong>Security Protocol:</strong> Changing your key will terminate all other active portal sessions.
                                        </div>
                                    </div>
                                )}

                                {activeSettingsTab === 'Notification Engine' && (
                                    <div className="form-grid">
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                            {[
                                                { id: 'email', label: 'Email Broadcasts', desc: 'Receive curriculum updates and student alerts via email.' },
                                                { id: 'browser', label: 'Real-time Signal', desc: 'Instant desktop notifications for live interactions.' },
                                                { id: 'assignments', label: 'Submission Alerts', desc: 'Get notified as soon as a student uploads work.' }
                                            ].map(pref => (
                                                <div key={pref.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', background: 'var(--bg-subtle)', borderRadius: '20px', border: '1px solid var(--border-light)' }}>
                                                    <div style={{ flex: 1 }}>
                                                        <h4 style={{ fontSize: '0.9rem', fontWeight: 800, marginBottom: '4px' }}>{pref.label}</h4>
                                                        <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: 0 }}>{pref.desc}</p>
                                                    </div>
                                                    <div
                                                        onClick={() => toggleNotification(pref.id)}
                                                        className={`toggle-switch ${profileData.notifications[pref.id] ? 'active' : ''}`}
                                                        style={{
                                                            width: '44px', height: '24px', borderRadius: '100px',
                                                            background: profileData.notifications[pref.id] ? 'var(--primary)' : '#e2e8f0',
                                                            cursor: 'pointer', position: 'relative', transition: '0.3s',
                                                            flexShrink: 0, marginLeft: '2rem'
                                                        }}
                                                    >
                                                        <div style={{
                                                            width: '18px', height: '18px', borderRadius: '50%', background: 'white',
                                                            position: 'absolute', top: '3px',
                                                            left: profileData.notifications[pref.id] ? '23px' : '3px',
                                                            transition: '0.3s'
                                                        }}></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="modal-actions" style={{ marginTop: '2.5rem' }}>
                                    <button className="btn-cancel" onClick={() => setIsSettingsModalOpen(false)}>Discard</button>
                                    <button className="btn-submit" onClick={() => {
                                        setIsSettingsModalOpen(false);
                                        alert('Profile synchronization complete!');
                                    }}>Sync Changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeacherDashboard;
