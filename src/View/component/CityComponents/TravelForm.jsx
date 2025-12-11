import { Fragment } from "react"
import TravelFormStyle from "../../../resourses/Css/cssModules/travelForm.module.css";

const TravelForm = () =>{
   return(
      <Fragment>
         <div className={TravelFormStyle.body}>
      <div className={TravelFormStyle.formContainer}>
        <h2>Travel Registration Form</h2>
        <p className={TravelFormStyle.subtitle}>Complete your booking details </p>
        <form>
            <div className={TravelFormStyle.formGroup}> 
               <label for="full-name">Full Name</label>
               <input type="text" id="full-name" placeholder="Enter your name"required />
            </div>
            <div className={TravelFormStyle.formGroup}>   
               <label for="email">Email</label>
               <input type="email" id="email" placeholder="Enter your email" required />
            </div> 
            <div className={TravelFormStyle.formGroup}>  
               <label for="phone">Phone Number</label>
               <input type="tel" id="phone" placeholder="Enter your phone" required />
            </div>
            <div className={TravelFormStyle.formGroup}>   
               <label for="travel-date">Travel Date</label>
               <input type="date" id="travel-date" required />
            </div>
            <div className={TravelFormStyle.formGroup}>   
               <label for="travelers">Number of Travelers</label>
               <input type="number" id="travrlers" min="1" value="1"required />
            </div>
            <div className={TravelFormStyle.formGroup}>   
               <label for="notes">Notes (Optional)</label>
               <textarea id="notes" placeholder="write any other details..."></textarea>
            </div>
               <button type="submit" className={TravelFormStyle.submitBtn}>Submit Booking</button>
        </form>
    </div>
    </div>
      </Fragment>
   )
};
export default TravelForm;
