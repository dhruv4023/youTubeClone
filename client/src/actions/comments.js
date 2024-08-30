import axios from 'axios';

export const postComment = async (commentData, token) => {
    try {
        const config = {
            headers: {
                Authorization: `${token}`,
                "Content-Type": "application/json",
            },
        };
        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/comments/post`, commentData, config)
        return data;
    } catch (error) {
        console.log(error);
    }
}
export const editComment = async (commentData, token) => {
    try {
        const config = {
            headers: {
                Authorization: `${token}`,
                "Content-Type": "application/json",
            },
        };

        const { id, commentBody } = commentData;

        const { data } = await axios.patch(
            `${process.env.REACT_APP_SERVER}/comments/edit/${id}`,
            { commentBody },
            config
        );

        return data;
    } catch (error) {
        console.log(error);
    }
}
export const deleteComment = async (id, token) => {
    try {
        const config = {
            headers: {
                Authorization: `${token}`,
            },
        };

        const { data } = await axios.delete(
            `${process.env.REACT_APP_SERVER}/comments/delete/${id}`,
            config
        );

        return data;
    } catch (error) {
        console.log(error);
    }
}
