import { Tools } from "../../data/tools";

export default function AboutTools(){

    return(
        <div className="about-tools-container">
            {Tools.map((tool) => {
                const ToolIcon = tool.icon;

                return (
                    <div className="tool-card" 
                        key={tool.id}
                        style={{"--tool-color": tool.color,
                        } as React.CSSProperties}
                        >
                        <ToolIcon size={16}/>
                        <span>{tool.id}</span>
                    </div>
                );
            })}
        </div>
    );
}