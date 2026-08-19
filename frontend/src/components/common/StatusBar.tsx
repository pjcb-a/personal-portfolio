import "../../styles/statusbar.css";

export default function ProfileStatusBar() {
    const profileTag = "profile.env.example";

    return (
        <div className="profile-status-bar" aria-hidden="true">
            <div className="profile-status-bar-inner">
                <span>{profileTag}</span>

                <div className="profile-status-bar-controls">
                    <span />
                    <span />
                    <span />
                </div>
            </div>
        </div>
    );
}
