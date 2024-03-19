import we from './companies_img/top companies.webp'
import we1 from './companies_img/webde.jpg'
import we2 from './companies_img/css.jpg'
const Companies =() => {
    return(
        <>
        <center><h1 style={{color:"Red"}}>Top Companies In India</h1>
        <br/>
        <img src={we} alt='ss' style={{width:"800px",height:"500px"}} /></center>
        <br/>
        <center>
        <br/>
        <img src={we1} alt='ss' style={{width:"80%",height:"400px"}} />
        <br/>
        <br/>
        <h1 style={{color:"Red"}} > Top companies for the Cloudcomputing</h1></center>
        <br/>
       <center> <h3>Amazon Web Services</h3>
        <h3>Microsoft Azure</h3>
        <h3>Google Cloud Platform</h3>
        <h3>IBM Cloud</h3></center>
        <center><img src={we2} alt='ss' style={{width:"80%",height:"600px"}} /></center>
        <br/>
        <center><h1 style={{color:"Red"}} > Top companies for the Cloudcomputing</h1></center>
        <br/>
       <center> <h3>Amazon Web Services</h3>
        <h3>Microsoft Azure</h3>
        <h3>Google Cloud Platform</h3>
        <h3>IBM Cloud</h3></center>
        
        </>
    )
}
export default Companies;