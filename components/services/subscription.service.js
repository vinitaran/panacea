import axios from 'axios';

export const saveSubscription = ({name, email}) => {
    return axios
        .post("https://asian-aces-staging-api.herokuapp.com/subscription/", [{
            name: name,
            email: email,
        }]);
};

export default { saveSubscription };