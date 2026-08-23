import "../../styles/common/statusbar.css";

interface StatusProps {
    index: string  
}

export default function StatusBar({index}: StatusProps) {

    return (
        <div className="status-bar" aria-hidden="true">
            <div className="status-bar-inner">
                <span>{index}</span>

                <div className="status-bar-controls">
                    <span />
                    <span />
                    <span />
                </div>
            </div>
        </div>
    );
}
