import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footer.css";
function Footer() {
  return (
    <div>
       
    <footer className="footer">
<div className="footerFirstDiv">
    <div className="socialMidiya">
    <ul>
    <li> <FacebookOutlinedIcon /></li>
    <li> <InstagramIcon /></li>
    <li> <YouTubeIcon /></li>
</ul>
    </div>
    <div className="footerNave">
        <div className="frowOne">
            <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Loegal Notice</li>
                <li><span className="footerRectangl"> Service Code</span></li>
                <li> <span> &copy;</span> 1979-2024 Netflix,Inc.</li>
            </ul>
        </div>
        <div className="frowTwo">
            <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Prifernces</li>
            </ul>
        </div>
        <div className="frowThree">
            <ul>
                <li>Gift Cared</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
            </ul>
        </div>
        <div className="frowFour">
            <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>

</div>
</footer>
    
    </div>
  )
}

export default Footer