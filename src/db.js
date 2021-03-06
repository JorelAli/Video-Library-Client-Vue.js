import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

export default {
    all_videos() {
        return instance.get('/library/videos');
    },
    all_tags() {
        return instance.get('/library/tags');
    },
    video_details(id) {
        return instance.get('library/video/'+id);
    },
    create_video(link) {
        return instance.post('library/video/create', {link: link})
    }
}
