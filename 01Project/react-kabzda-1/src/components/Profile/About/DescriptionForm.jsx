import React from 'react';
import { reduxForm } from 'redux-form';
import { requiredField } from '../../../utils/validators/validators';
import { CreateField } from '../../common/FormsControls/FormsControls';
import s from './About.module.css';

const DescriptionForm = ({ handleSubmit }) => {
    // const saveChanges = () => {
    //     deactivateEditMode();
    // }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className={s.aboutMe}>
                    <b>Full name:</b> {CreateField("text", "Full Name", "fullName", [requiredField])}
                </div>
                <div className={s.aboutMe}>
                    <b>About me:</b> {CreateField("text", "About me", "aboutMe", [requiredField])}
                </div>
                <div className={s.userJob}>
                    <b>Looking for a job: </b> {CreateField("checkbox", null, "lookingForAJob", [requiredField])}
                    <b>Description: </b> {CreateField("text", "Professional skills", "lookingForAJobDescription", [requiredField], "textarea")}
                </div>
                <button className={s.editEndButton}>Confirm Changes</button>
            </form>
            Form

        </div>
    )
}
const DescriptionReduxForm = reduxForm({ form: 'editProfile' })(DescriptionForm);
export default DescriptionReduxForm;