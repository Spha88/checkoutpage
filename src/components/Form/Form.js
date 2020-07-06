import React from 'react'
import classes from './Form.module.scss'

const Form = () => {
    return (
        <form className={classes.Form}>
            <h3>Contact information</h3>
            <div className={classes.FormGroup}>
                <label htmlFor="email">E-mail</label>
                <div className={classes.InputContainer}>
                    <i className="material-icons">email</i>
                    <input name="email" type="email" placeholder="Enter your email..." />
                </div>
            </div>
            <div className={classes.FormGroup}>
                <label htmlFor="phone">Phone</label>
                <div className={classes.InputContainer}>
                    <i className="material-icons">phone</i>
                    <input name="phone" type="phone" placeholder="Enter your number..." />
                </div>
            </div>

            <h3 className={classes.ShippingHeading}>Shipping address</h3>
            <div className={classes.FormGroup}>
                <label htmlFor="fullName">Full name</label>
                <div className={classes.InputContainer}>
                    <i className="material-icons">person</i>
                    <input name="fullName" type="text" placeholder="Enter your name..." />
                </div>

            </div>
            <div className={classes.FormGroup}>
                <label htmlFor="address">Address</label>
                <div className={classes.InputContainer}>
                    <i className="material-icons">house</i>
                    <input name="address" type="text" placeholder="Your address.." />
                </div>

            </div>
            <div className={classes.FormGroup}>
                <label htmlFor="city">City</label>
                <div className={classes.InputContainer}>
                    <i className="material-icons">location_city</i>
                    <input name="city" type="text" placeholder="Your city.." />
                </div>

            </div>

            <div className={classes.TwoFormGroups}>
                <div className={classes.FormGroup}>
                    <label htmlFor="country">Country</label>
                    <div className={classes.InputContainer}>
                        <i className="material-icons">public</i>
                        <span className={classes.SelectDropdown}><i className="material-icons" id="dropdown">expand_more</i></span>
                        <select name="country">
                            <option>Your country ..</option>
                            <option value="South Africa">South Africa</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Canada">Canada</option>
                        </select>
                    </div>
                </div>
                <div className={classes.FormGroup}>
                    <label htmlFor="postalCode">Postal Code</label>
                    <div className={classes.InputContainer}>
                        <i className="material-icons">markunread_mailbox</i>
                        <input name="postalCode" type="text" placeholder="Your postal code.." />
                    </div>

                </div>

            </div>
            <div className={classes.FormGroup + ' ' + classes.CheckBox}>
                <input type="checkbox" name="save" id="postalCode" />
                <span className={classes.CustomCheckbox}></span>
                <label htmlFor="save">Save this information for next</label>
            </div>
            <footer>
                <input type="submit" value="Continue" />
            </footer>
        </form>
    )
}

export default Form
