import { Calendar, MapPin, PenTool, User } from "lucide-react";

export default function AboutCard() {
    return(
        <section className="about-card-container">

            <header className="about-card-container-header">

                <div className="about-card-container-box"></div>
                
                <span>about_me.txt</span>
            </header>

            <div className="about-card-container-content">
                
                <div className="about-card-container-image">
                    <img src="/src/assets/images/image.jpg" alt="profile"/>
                </div>

                
                <div className="about-card-container-details">
                    <div className="about-card-container-description">
                        <span> Currently Available</span>
                    </div>

                    <div className="about-detail">
                        <h3>Name <User size={14}/></h3>
                        <p>John Paul A. Jacob</p>
                    </div>

                    <div className="about-detail">
                        <h3>Age <Calendar size={14}/></h3>
                        <p>21 Years Old</p>
                    </div>

                    <div className="about-detail">
                        <h3>Hobbies <PenTool size={14}/></h3>
                        <p>Drawing, Playing Computer Games, &amp; Coding random projects.</p>
                    </div>

                    <div className="about-detail">
                        <h3>Location <MapPin size={14}/></h3>
                        <p>Naga City, Camarines Sur Philippines</p>
                    </div>
                </div>
            </div>
        </section>
    );
}