import React from "react";
import { Link  } from 'react-router-dom';
import './FriendMayKnow.css';

function FriendMayKnow() {
    return (
        <>
            <div className="friend-may-know-container">
                <h5>Những người bạn có thể biết</h5>
                <div className="footer-friend">
                    <div className="friend-may-know-content">
                        <div className="friend-may-know-avatar">
                            <img src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-0/p600x600/124371023_158263119338300_8708530876578632504_o.jpg?_nc_cat=102&ccb=2&_nc_sid=ca434c&_nc_ohc=ZvScfpEpuGoAX_Oj8N6&_nc_ht=scontent-xsp1-2.xx&tp=6&oh=986573a626d925e79fb52e1926abcd70&oe=5FCD2BA7" />
                        </div>
                        <Link to="/">Lê Vũ Hoài My Lê Vũ Hoài My  </Link>
                        <div className="footer-friend-button">
                            <button>Thêm bạn bè</button>
                        </div>
                    </div>
                    <div className="friend-may-know-content">
                        <div className="friend-may-know-avatar">
                            <img src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-0/p600x600/124371023_158263119338300_8708530876578632504_o.jpg?_nc_cat=102&ccb=2&_nc_sid=ca434c&_nc_ohc=ZvScfpEpuGoAX_Oj8N6&_nc_ht=scontent-xsp1-2.xx&tp=6&oh=986573a626d925e79fb52e1926abcd70&oe=5FCD2BA7" />
                        </div>
                        <Link to="/">Lê Vũ Hoài My  </Link>
                        <div className="footer-friend-button">
                            <button>Thêm bạn bè</button>
                        </div>
                    </div>
                    <div className="friend-may-know-content">
                        <div className="friend-may-know-avatar">
                            <img src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-0/p600x600/124371023_158263119338300_8708530876578632504_o.jpg?_nc_cat=102&ccb=2&_nc_sid=ca434c&_nc_ohc=ZvScfpEpuGoAX_Oj8N6&_nc_ht=scontent-xsp1-2.xx&tp=6&oh=986573a626d925e79fb52e1926abcd70&oe=5FCD2BA7" />
                        </div>
                        <Link to="/">Lê Vũ Hoài My  </Link>
                        <div className="footer-friend-button">
                            <button>Thêm bạn bè</button>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </>
    );
}

export default FriendMayKnow;