import "../Components/styles.css"
import PersonIcon from '@mui/icons-material/Person';
import IceSkatingIcon from '@mui/icons-material/IceSkating';
import AirlineSeatLegroomExtraIcon from '@mui/icons-material/AirlineSeatLegroomExtra';

// Rendering of the middle column, where the output goes
export default function OutfitOutput() {
    return (
        <div className="outfitOutput"><p className="black">Outfit Result</p>
            <div className="third">
                <PersonIcon style={{ color: '#fb8500' }} sx={{ fontSize: "40px" }} className="iconOutput"/>
                <div className="result" id="shirtOutput"></div>
            </div>
            <div className="third">
                <AirlineSeatLegroomExtraIcon style={{ color: '#fb8500' }} sx={{ fontSize: "40px" }} className="iconOutput"/>
                <div className="result" id="pantOutput"></div>
            </div>
            <div className="third"> 
                <IceSkatingIcon style={{ color: '#fb8500' }} sx={{ fontSize: "40px" }} className="iconOutput"/>
                <div className="result" id="shoeOutput"></div>
            </div>
        </div>
        
    )
}