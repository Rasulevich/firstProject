import { sendMessage,updateNewMessage } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../hoc/withAuthRedirect';


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps,{updateNewMessage, sendMessage })(AuthRedirectComponent);
export default DialogsContainer;