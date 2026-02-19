import React, { useState } from 'react';
import {
    Mail,
    MessageSquare,
    MessageCircle,
    ClipboardList,
    History,
    Plus,
    Send,
    Users,
    BookOpen,
    HelpCircle,
    ChevronRight,
    Search,
    Filter,
    MoreHorizontal,
    Bell,
    CheckCircle,
    Clock,
    User,
    Download,
    Eye
} from 'lucide-react';

const CommunicationManagement = () => {
    const [activeSubTab, setActiveSubTab] = useState('Create Announcement');
    const [selectedType, setSelectedType] = useState('Course-wise');
    const [announcementSearchQuery, setAnnouncementSearchQuery] = useState('');

    const announcements = [
        { id: 1, title: 'Exam Schedule Released', type: 'Course-wise', target: 'Advanced React', date: '2024-03-18', status: 'Sent' },
        { id: 2, title: 'Holiday Notice', type: 'Batch-wise', target: 'Summer 2024', date: '2024-03-15', status: 'Draft' },
        { id: 3, title: 'New Reference Materials', type: 'Global', target: 'All Students', date: '2024-03-10', status: 'Sent' }
    ];

    const discussions = [
        { id: 1, student: 'Alex Thompson', topic: 'Issue with useMemo in Module 4', replies: 3, time: '2h ago' },
        { id: 2, student: 'Elena Gilbert', topic: 'Tailwind config best practices', replies: 0, time: '5h ago' }
    ];

    const renderCreateAnnouncement = () => (
        <div className="comm-section animate-fade-in">
            <div className="section-header">
                <div>
                    <h2 className="section-title">New Announcement</h2>
                    <p className="section-desc">Push notifications, emails, or SMS to your students.</p>
                </div>
            </div>

            <div className="comm-grid">
                <div className="comm-form-card">
                    <div className="type-selector">
                        <button
                            className={`type-btn ${selectedType === 'Course-wise' ? 'active' : ''}`}
                            onClick={() => setSelectedType('Course-wise')}
                        >
                            Course-wise
                        </button>
                        <button
                            className={`type-btn ${selectedType === 'Batch-wise' ? 'active' : ''}`}
                            onClick={() => setSelectedType('Batch-wise')}
                        >
                            Batch-wise
                        </button>
                    </div>

                    <div className="form-group-comm">
                        <label>Target {selectedType.split('-')[0]}</label>
                        <select className="premium-input-comm">
                            <option>Select Target...</option>
                            <option>Advanced React Architecture</option>
                            <option>UI/UX Design Masterclass</option>
                        </select>
                    </div>

                    <div className="form-group-comm">
                        <label>Announcement Title</label>
                        <input type="text" placeholder="e.g. Schedule Update for Lab Session" className="premium-input-comm" />
                    </div>

                    <div className="form-group-comm">
                        <label>Message Content</label>
                        <textarea placeholder="Write your announcement details here..." className="premium-textarea-comm"></textarea>
                    </div>

                    <div className="delivery-channels">
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-muted)' }}>DELIVERY CHANNELS</h4>
                        <div className="channel-grid">
                            <div className="channel-item active">
                                <Bell size={18} />
                                <span>In-App</span>
                            </div>
                            <div className="channel-item">
                                <Mail size={18} />
                                <span>Email</span>
                            </div>
                            <div className="channel-item">
                                <MessageCircle size={18} />
                                <span>WhatsApp/SMS</span>
                            </div>
                        </div>
                    </div>

                    <div className="comm-actions">
                        <button className="btn-secondary">Save Draft</button>
                        <button className="btn-primary-comm"><Send size={18} /> Send Announcement Now</button>
                    </div>
                </div>

            </div>
        </div>
    );

    const renderHistory = () => (
        <div className="comm-section animate-fade-in">
            <div className="section-header">
                <h2 className="section-title">Announcement History</h2>
                <div className="header-actions-comm">
                    <div className="search-container" style={{ maxWidth: '280px' }}>
                        <Search size={18} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search history..."
                            value={announcementSearchQuery}
                            onChange={(e) => setAnnouncementSearchQuery(e.target.value)}
                        />
                        <div className="search-shortcut">
                            <span>ALT</span>
                            <span>S</span>
                        </div>
                    </div>
                    <button className="btn-secondary small"><Download size={16} /></button>
                </div>
            </div>

            <div className="history-table-container">
                <table className="comm-table">
                    <thead>
                        <tr>
                            <th>Announcement Title</th>
                            <th>Type</th>
                            <th>Target Group</th>
                            <th>Date Sent</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {announcements.map(a => (
                            <tr key={a.id}>
                                <td style={{ fontWeight: 700 }}>{a.title}</td>
                                <td><span className="type-pill">{a.type}</span></td>
                                <td>{a.target}</td>
                                <td style={{ color: 'var(--text-muted)' }}>{a.date}</td>
                                <td>
                                    <span className={`status-comm ${a.status.toLowerCase()}`}>
                                        {a.status === 'Sent' ? <CheckCircle size={12} /> : <Clock size={12} />} {a.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="table-actions">
                                        <button className="icon-btn-comm"><Eye size={16} /></button>
                                        <button className="icon-btn-comm"><MoreHorizontal size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
    const renderDoubtPanel = () => (
        <div className="comm-section animate-fade-in">
            <div className="section-header">
                <h2 className="section-title">Doubt Discussion Panel</h2>
                <div className="filter-group-comm">
                    <button className="filter-btn active">Unresolved (12)</button>
                    <button className="filter-btn">Solved (145)</button>
                </div>
            </div>

            <div className="doubt-list">
                {discussions.map(d => (
                    <div key={d.id} className="doubt-card">
                        <div className="doubt-user-side">
                            <div className="avatar-comm">{d.student.charAt(0)}</div>
                        </div>
                        <div className="doubt-content">
                            <div className="doubt-header">
                                <span className="student-name">{d.student}</span>
                                <span className="doubt-time">{d.time}</span>
                            </div>
                            <p className="doubt-text">{d.topic}</p>
                            <div className="doubt-footer">
                                <button className="reply-btn"><MessageSquare size={14} /> {d.replies} Replies</button>
                                <button className="solve-btn">Mark as Solved</button>
                            </div>
                        </div>
                        <ChevronRight size={18} color="var(--text-dim)" />
                    </div>
                ))}
            </div>
        </div>
    );

    const renderNoticeBoard = () => (
        <div className="comm-section animate-fade-in">
            <div className="section-header">
                <h2 className="section-title">Digital Notice Board</h2>
                <button className="btn-primary-comm"><Plus size={18} /> Post New Notice</button>
            </div>

            <div className="notice-grid">
                {[1, 2, 3].map(i => (
                    <div key={i} className={`notice-item-${i}`}>
                        <div className="notice-pin"></div>
                        <div className="notice-paper">
                            <h4 style={{ margin: i === 1 ? '0 0 10px' : '0 0 5px' }}>{i === 1 ? 'Library Hours Update' : 'New Workshop'}</h4>
                            <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>Campus library will now remain open until 10 PM on weekends starting this month...</p>
                            <span className="notice-date">Expires: Mar 30, 2024</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderMessaging = () => (
        <div className="comm-section animate-fade-in">
            <div className="messaging-layout">
                <div className="chat-sidebar">
                    <div className="search-container" style={{ margin: '1rem', width: 'auto' }}>
                        <Search size={16} className="search-icon" />
                        <input type="text" placeholder="Search chats..." style={{ padding: '0.6rem 2.5rem' }} />
                        <div className="search-shortcut">
                            <span>K</span>
                        </div>
                    </div>
                    <div className="chat-list">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className={`chat-item ${i === 1 ? 'active' : ''}`}>
                                <div className="avatar-mini-comm">U</div>
                                <div className="chat-info-mini">
                                    <div className="chat-name">Student {i}</div>
                                    <div className="chat-last-msg">Sent a file...</div>
                                </div>
                                <span className="chat-time-mini">10:45</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="chat-main">
                    <div className="chat-main-header">
                        <div className="chat-user-header">
                            <div className="avatar-comm">S</div>
                            <div>
                                <h4 style={{ fontSize: '0.95rem', fontWeight: 800 }}>Sarah Miller</h4>
                                <span className="online-indicator">Online</span>
                            </div>
                        </div>
                    </div>
                    <div className="chat-bubble-area">
                        <div className="msg-bubble incoming">Hello Professor, I had a question about the last assignment.</div>
                        <div className="msg-bubble outgoing">Sure Sarah, happy to help. What's on your mind?</div>
                    </div>
                    <div className="chat-input-area">
                        <input type="text" placeholder="Type your message..." />
                        <button className="chat-send-btn"><Send size={18} /></button>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderEmailSection = () => (
        <div className="comm-section animate-fade-in">
            <div className="section-header">
                <div>
                    <h2 className="section-title">Compose Direct Email</h2>
                    <p className="section-desc">Send professional, rich-text emails directly to your selected student base.</p>
                </div>
            </div>

            <div className="comm-grid">
                <div className="comm-form-card">
                    <div className="form-group-comm">
                        <label>To: Select Recipients</label>
                        <select className="premium-input-comm">
                            <option>All Enrolled Students</option>
                            <option>High Performing Students</option>
                            <option>Students with Low Attendance</option>
                        </select>
                    </div>

                    <div className="form-group-comm">
                        <label>Email Subject</label>
                        <input type="text" placeholder="Enter strictly professional subject line..." className="premium-input-comm" />
                    </div>

                    <div className="form-group-comm">
                        <label>Email Body (Rich Text)</label>
                        <textarea placeholder="Dear Student, we are writing to inform you..." className="premium-textarea-comm" style={{ height: '300px' }}></textarea>
                    </div>

                    <div className="comm-actions">
                        <button className="btn-secondary">Send Test Mail</button>
                        <button className="btn-primary-comm" style={{ background: 'var(--accent-gradient)' }}><Mail size={18} /> Blast Email Campaign</button>
                    </div>
                </div>

                <div className="comm-preview-card">
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 800, marginBottom: '1.5rem' }}>Desktop Preview</h4>
                    <div className="desktop-email-mock">
                        <div className="email-header-mock">
                            <div className="dot-red"></div>
                            <div className="dot-yellow"></div>
                            <div className="dot-green"></div>
                        </div>
                        <div className="email-body-mock">
                            <div className="subject-line">Subject: Your Course Progress Update</div>
                            <div className="content-line"></div>
                            <div className="content-line"></div>
                            <div className="content-line short"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderSMSSection = () => (
        <div className="comm-section animate-fade-in">
            <div className="section-header">
                <div>
                    <h2 className="section-title">SMS & WhatsApp Broadcast</h2>
                    <p className="section-desc">Instantly reach students on their mobile devices for urgent updates.</p>
                </div>
            </div>

            <div className="comm-grid">
                <div className="comm-form-card">
                    <div className="form-group-comm">
                        <label>Recipient List</label>
                        <div className="input-with-icon-comm">
                            <Users size={16} />
                            <input type="text" placeholder="Course B-24, Module 2 Students..." className="premium-input-comm icon-pad" />
                        </div>
                    </div>

                    <div className="form-group-comm">
                        <label>SMS Body (Max 160 Chars)</label>
                        <textarea placeholder="Urgent: The live session for today has been rescheduled to 4 PM..." className="premium-textarea-comm" style={{ height: '120px' }}></textarea>
                        <div className="char-count">120/160 characters left</div>
                    </div>

                    <div className="form-group-comm">
                        <label>Preferred Protocol</label>
                        <div className="protocol-select">
                            <button className="protocol-btn active"><MessageCircle size={16} /> WhatsApp API</button>
                            <button className="protocol-btn"><MessageSquare size={16} /> Standard SMS</button>
                        </div>
                    </div>

                    <div className="comm-actions">
                        <button className="btn-primary-comm" style={{ background: '#25D366' }}><Send size={18} /> Broadcast Now</button>
                    </div>
                </div>

                <div className="comm-preview-card">
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 800, marginBottom: '1.5rem' }}>WhatsApp Preview</h4>
                    <div className="whatsapp-preview">
                        <div className="wa-bubble">
                            <span className="wa-text">Urgent: The live session for today has been rescheduled to 4 PM...</span>
                            <span className="wa-time">12:30 PM ✓✓</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeSubTab) {
            case 'Create Announcement': return renderCreateAnnouncement();
            case 'Student Chat / Messaging': return renderMessaging();
            case 'Doubt Discussion Panel': return renderDoubtPanel();
            case 'Notice Board': return renderNoticeBoard();
            case 'Announcement History': return renderHistory();
            case 'Direct Email': return renderEmailSection();
            case 'SMS & WhatsApp': return renderSMSSection();
            default: return renderCreateAnnouncement();
        }
    };

    const menuItems = [
        { name: 'Create Announcement', icon: Plus },
        { name: 'Announcement History', icon: History },
        { name: 'Student Chat / Messaging', icon: MessageSquare },
        { name: 'Doubt Discussion Panel', icon: HelpCircle },
        { name: 'Notice Board', icon: ClipboardList },
        { name: 'Direct Email', icon: Mail },
        { name: 'SMS & WhatsApp', icon: MessageCircle },
    ];

    return (
        <div className="comm-container">
            <div className="page-header">
                <div className="header-title">
                    <h1>Communication Center</h1>
                    <p>Manage announcements, broadcast notifications, and engage with students.</p>
                </div>
                <div className="comm-stats-mini">
                    <div className="mini-stat">
                        <span className="mini-label">Sms Sent</span>
                        <span className="mini-val">450</span>
                    </div>
                    <div className="mini-stat">
                        <span className="mini-label">Email Open Rate</span>
                        <span className="mini-val">92%</span>
                    </div>
                </div>
            </div>

            <div className="comm-layout">
                <aside className="secondary-sidebar-comm">
                    <div className="sidebar-menu-comm">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => setActiveSubTab(item.name)}
                                    className={`sidebar-btn-comm ${activeSubTab === item.name ? 'active' : ''}`}
                                >
                                    <Icon size={18} className="btn-icon" />
                                    <span>{item.name}</span>
                                    {activeSubTab === item.name && <ChevronRight size={14} style={{ marginLeft: 'auto' }} />}
                                </button>
                            );
                        })}
                    </div>

                    <div className="promo-card-comm">
                        <Bell size={32} color="white" />
                        <h4>Global Broadcast</h4>
                        <p>Announce to all registered students with one click.</p>
                        <button className="promo-btn-comm">Launch Global Alert</button>
                    </div>
                </aside>

                <div className="comm-content">
                    {renderContent()}
                </div>
            </div>

            <style>{`
                .comm-container { animation: slideUp 0.4s ease-out; }
                
                .search-container {
                  position: relative;
                  display: flex;
                  align-items: center;
                  width: 100%;
                  background: var(--bg-subtle);
                  border: 1.5px solid var(--border-light);
                  border-radius: 14px;
                  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .search-container:focus-within {
                  border-color: var(--primary);
                  background: white;
                  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
                  transform: translateY(-1px);
                }
                .search-icon {
                  position: absolute;
                  left: 1rem;
                  color: var(--text-dim);
                  transition: 0.3s;
                }
                .search-container:focus-within .search-icon {
                  color: var(--primary);
                  transform: scale(1.1);
                }
                .search-container input {
                  width: 100%;
                  padding: 0.8rem 3rem;
                  border: none;
                  background: transparent;
                  outline: none;
                  font-weight: 700;
                  font-size: 0.85rem;
                  color: var(--text-main);
                }
                .search-shortcut {
                  position: absolute;
                  right: 0.75rem;
                  display: flex;
                  gap: 4px;
                }
                .search-shortcut span {
                  background: white;
                  border: 1px solid var(--border-light);
                  padding: 2px 6px;
                  border-radius: 6px;
                  font-size: 0.65rem;
                  font-weight: 800;
                  color: var(--text-dim);
                  box-shadow: 0 2px 0 var(--border-light);
                }
                .comm-layout { display: grid; grid-template-columns: 280px 1fr; gap: 2rem; margin-top: 1.5rem; }

                .comm-stats-mini { display: flex; gap: 2rem; background: var(--bg-subtle); padding: 0.75rem 1.5rem; border-radius: 16px; border: 1.5px solid var(--border-light); }
                .mini-stat { display: flex; flex-direction: column; }
                .mini-label { font-size: 0.65rem; color: var(--text-dim); font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; }
                .mini-val { font-size: 1.1rem; font-weight: 800; color: var(--primary); }

                .secondary-sidebar-comm { display: flex; flex-direction: column; gap: 1.5rem; }
                .sidebar-menu-comm { background: white; border-radius: 24px; padding: 1.25rem; border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); }
                .sidebar-btn-comm {
                    width: 100%; padding: 0.9rem 1.25rem; display: flex; align-items: center; gap: 14px;
                    border: none; background: transparent; border-radius: 14px; color: var(--text-muted);
                    font-weight: 600; font-size: 0.85rem; cursor: pointer; transition: all 0.2s ease; margin-bottom: 0.4rem;
                }
                .sidebar-btn-comm:hover { background: var(--bg-subtle); color: var(--primary); }
                .sidebar-btn-comm.active { background: var(--primary-gradient); color: white; }

                .promo-card-comm { background: var(--secondary-gradient); padding: 1.5rem; border-radius: 24px; color: white; }
                .promo-card-comm h4 { margin: 10px 0 5px; font-weight: 800; }
                .promo-card-comm p { font-size: 0.75rem; opacity: 0.9; margin-bottom: 1.25rem; }
                .promo-btn-comm { width: 100%; padding: 0.7rem; border-radius: 12px; border: none; background: white; color: var(--text-main); font-weight: 800; font-size: 0.8rem; cursor: pointer; }

                .comm-content { background: white; border-radius: 28px; padding: 2.5rem; border: 1px solid var(--border-light); min-height: 750px; box-shadow: var(--shadow-sm); }

                .comm-grid { display: grid; grid-template-columns: 1fr; gap: 2.5rem; margin-top: 1.5rem; }

                @media (max-width: 1200px) {
                    .comm-layout { grid-template-columns: 1fr; }
                    .secondary-sidebar-comm { flex-direction: row; gap: 1rem; }
                    .sidebar-menu-comm { flex: 1; display: flex; flex-wrap: wrap; gap: 0.5rem; padding: 0.75rem; }
                    .sidebar-btn-comm { width: auto; margin-bottom: 0; padding: 0.6rem 1rem; }
                    .promo-card-comm { display: none; }
                    .comm-grid { grid-template-columns: 1fr; }
                }

                @media (max-width: 768px) {
                    .comm-content { padding: 1.5rem; }
                    .messaging-layout { grid-template-columns: 1fr; height: auto; }
                    .chat-sidebar { border-right: none; border-bottom: 1px solid var(--border-light); height: 300px; }
                    .notice-grid { grid-template-columns: 1fr; }
                }

                .type-selector { display: flex; gap: 0.5rem; background: var(--bg-subtle); padding: 0.4rem; border-radius: 12px; margin-bottom: 2rem; }
                .type-btn { flex: 1; border: none; background: transparent; padding: 0.6rem; border-radius: 8px; font-size: 0.85rem; font-weight: 700; color: var(--text-muted); cursor: pointer; transition: 0.2s; }
                .type-btn.active { background: white; color: var(--primary); box-shadow: var(--shadow-sm); }

                .form-group-comm { margin-bottom: 1.5rem; }
                .form-group-comm label { display: block; font-size: 0.75rem; font-weight: 800; margin-bottom: 8px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; }
                .premium-input-comm { width: 100%; padding: 0.85rem 1.25rem; border-radius: 12px; border: 1.5px solid var(--border-light); background: var(--bg-subtle); font-weight: 600; outline: none; }
                .premium-textarea-comm { width: 100%; height: 160px; padding: 1.25rem; border-radius: 12px; border: 1.5px solid var(--border-light); background: var(--bg-subtle); font-weight: 600; outline: none; resize: none; }
                
                .delivery-channels { margin: 2rem 0; }
                .channel-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
                .channel-item { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 1.25rem; border-radius: 16px; border: 1.5px solid var(--border-light); cursor: pointer; color: var(--text-muted); transition: 0.2s; }
                .channel-item.active { border-color: var(--primary); background: rgba(99, 102, 241, 0.05); color: var(--primary); }
                .channel-item span { font-size: 0.75rem; font-weight: 700; }

                .comm-actions { display: flex; gap: 1rem; margin-top: 2.5rem; }
                .btn-primary-comm { flex: 1; background: var(--primary-gradient); color: white; border: none; padding: 1rem; border-radius: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 10px; cursor: pointer; }

                .comm-preview-card { background: var(--bg-subtle); border-radius: 24px; padding: 1.5rem; border: 1px solid var(--border-light); }
                .mobile-preview-container { background: white; border-radius: 32px; border: 8px solid #0f172a; height: 500px; padding: 1.5rem; position: relative; }
                .mobile-header { font-size: 0.65rem; font-weight: 800; opacity: 0.3; text-transform: uppercase; margin-bottom: 2rem; text-align: center; }
                .preview-title { font-weight: 800; font-size: 0.95rem; margin-bottom: 0.5rem; }
                .preview-text { font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; }

                .comm-table { width: 100%; border-collapse: separate; border-spacing: 0 10px; margin-top: 1rem; }
                .comm-table th { padding: 1rem; text-align: left; font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1.5px solid var(--border-light); }
                .comm-table td { padding: 1.25rem 1rem; background: var(--bg-subtle); vertical-align: middle; }
                .comm-table tr td:first-child { border-radius: 14px 0 0 14px; }
                .comm-table tr td:last-child { border-radius: 0 14px 14px 0; }

                .status-comm { padding: 4px 10px; border-radius: 8px; font-size: 0.7rem; font-weight: 800; display: flex; align-items: center; gap: 6px; width: fit-content; }
                .status-comm.sent { background: #ecfdf5; color: #10b981; }
                .status-comm.draft { background: #f1f5f9; color: var(--text-muted); }

                .doubt-card { display: flex; gap: 1.5rem; padding: 1.75rem; background: var(--bg-subtle); border-radius: 20px; border: 1.5px solid transparent; transition: 0.3s; margin-bottom: 1.25rem; align-items: center; cursor: pointer; }
                .doubt-card:hover { border-color: var(--primary); background: white; box-shadow: var(--shadow-md); transform: translateX(8px); }
                .avatar-comm { width: 44px; height: 44px; border-radius: 12px; background: var(--accent-gradient); color: white; display: flex; align-items: center; justify-content: center; font-weight: 800; }
                .doubt-header { display: flex; justify-content: space-between; margin-bottom: 4px; }
                .student-name { font-weight: 800; font-size: 0.95rem; }
                .doubt-time { font-size: 0.75rem; color: var(--text-dim); }
                .doubt-text { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 12px; }
                .doubt-footer { display: flex; gap: 1rem; }
                .reply-btn { background: white; border: 1px solid var(--border-light); padding: 4px 10px; border-radius: 8px; font-size: 0.75rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 4px; }
                .solve-btn { background: transparent; border: none; font-size: 0.75rem; font-weight: 800; color: #10b981; cursor: pointer; }

                .notice-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; margin-top: 1.5rem; }
                .notice-paper { background: #fffde7; padding: 2rem; border-radius: 4px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1); position: relative; min-height: 200px; transform: rotate(-1deg); }
                .notice-item-2 .notice-paper { background: #e3f2fd; transform: rotate(1deg); }
                .notice-item-3 .notice-paper { background: #fce4ec; transform: rotate(-0.5deg); }
                .notice-pin { width: 14px; height: 14px; background: #f44336; border-radius: 50%; position: absolute; top: 10px; left: 50%; transform: translateX(-50%); z-index: 2; box-shadow: 0 2px 4px rgba(0,0,0,0.2); }
                .notice-date { position: absolute; bottom: 1.5rem; right: 1.5rem; font-size: 0.7rem; font-weight: 800; opacity: 0.5; font-style: italic; }

                .messaging-layout { display: grid; grid-template-columns: 320px 1fr; height: 600px; border: 1px solid var(--border-light); border-radius: 20px; overflow: hidden; }
                .chat-sidebar { border-right: 1px solid var(--border-light); background: var(--bg-subtle); display: flex; flex-direction: column; }
                .chat-search { padding: 1rem; border-bottom: 1px solid var(--border-light); display: flex; align-items: center; gap: 8px; background: white; }
                .chat-search input { border: none; outline: none; font-size: 0.85rem; width: 100%; }
                .chat-item { padding: 1.25rem; border-bottom: 1px solid var(--border-light); display: flex; gap: 12px; cursor: pointer; transition: 0.2s; }
                .chat-item:hover { background: white; }
                .chat-item.active { background: white; border-left: 4px solid var(--primary); }
                .chat-name { font-weight: 800; font-size: 0.85rem; }
                .chat-last-msg { font-size: 0.75rem; color: var(--text-dim); }
                .chat-time-mini { font-size: 0.65rem; color: var(--text-dim); margin-left: auto; }

                .chat-main { display: flex; flex-direction: column; background: white; }
                .chat-main-header { padding: 1rem 1.5rem; border-bottom: 1px solid var(--border-light); }
                .online-indicator { font-size: 0.7rem; color: #10b981; font-weight: 700; display: flex; align-items: center; gap: 4px; }
                .online-indicator::before { content: ''; width: 6px; height: 6px; background: #10b981; border-radius: 50%; }
                .chat-bubble-area { flex: 1; padding: 2rem; display: flex; flex-direction: column; gap: 1rem; background: var(--bg-subtle); overflow-y: auto; }
                .msg-bubble { max-width: 70%; padding: 1rem; border-radius: 16px; font-size: 0.85rem; line-height: 1.5; }
                .incoming { background: white; align-self: flex-start; border-radius: 4px 16px 16px 16px; box-shadow: var(--shadow-sm); }
                .outgoing { background: var(--primary); color: white; align-self: flex-end; border-radius: 16px 16px 4px 16px; }
                .chat-input-area { padding: 1.5rem; border-top: 1px solid var(--border-light); display: flex; gap: 1rem; }
                .chat-input-area input { flex: 1; border: 1.5px solid var(--border-light); padding: 0.75rem 1.25rem; border-radius: 12px; outline: none; font-weight: 600; }
                .chat-send-btn { background: var(--primary); color: white; border: none; width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; cursor: pointer; }

                .input-with-icon-comm { position: relative; display: flex; align-items: center; }
                .input-with-icon-comm svg { position: absolute; left: 1rem; color: var(--text-dim); }
                .icon-pad { padding-left: 2.75rem !important; }
                
                .char-count { font-size: 0.7rem; font-weight: 700; color: var(--text-dim); text-align: right; margin-top: 5px; }
                
                .protocol-select { display: flex; gap: 0.5rem; background: var(--bg-subtle); padding: 0.4rem; border-radius: 12px; }
                .protocol-btn { flex: 1; border: none; background: transparent; padding: 0.6rem; border-radius: 8px; font-size: 0.8rem; font-weight: 800; color: var(--text-muted); cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; }
                .protocol-btn.active { background: white; color: var(--primary); box-shadow: var(--shadow-sm); }

                /* Email Preview Mock */
                .desktop-email-mock { background: white; border-radius: 12px; border: 1.5px solid var(--border-light); overflow: hidden; box-shadow: var(--shadow-md); }
                .email-header-mock { background: #f1f5f9; padding: 8px 12px; display: flex; gap: 6px; }
                .dot-red, .dot-yellow, .dot-green { width: 8px; height: 8px; border-radius: 50%; }
                .dot-red { background: #ff5f56; } .dot-yellow { background: #ffbd2e; } .dot-green { background: #27c93f; }
                .email-body-mock { padding: 1.5rem; display: flex; flex-direction: column; gap: 10px; }
                .subject-line { font-size: 0.8rem; font-weight: 800; margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid #eee; }
                .content-line { height: 10px; background: #f1f5f9; border-radius: 4px; width: 100%; }
                .content-line.short { width: 60%; }

                /* WhatsApp Preview Mock */
                .whatsapp-preview { background: #e5ddd5; height: 300px; border-radius: 20px; padding: 1.5rem; position: relative; overflow: hidden; box-shadow: inset 0 0 20px rgba(0,0,0,0.05); }
                .wa-bubble { background: #dcf8c6; padding: 10px; border-radius: 8px 0 8px 8px; max-width: 85%; align-self: flex-end; position: absolute; right: 1.5rem; top: 2rem; box-shadow: 0 1px 2px rgba(0,0,0,0.1); }
                .wa-text { font-size: 0.8rem; display: block; line-height: 1.4; color: #303030; }
                .wa-time { font-size: 0.6rem; color: #888; text-align: right; display: block; margin-top: 4px; }

                @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
                .animate-fade-in { animation: fadeIn 0.4s ease-out; }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            `}</style>
        </div>
    );
};

export default CommunicationManagement;
