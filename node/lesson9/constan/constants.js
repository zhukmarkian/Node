module.exports = {
    CURRENT_YEAR: new Date().getFullYear(),
    AUTHORIZATION: 'Authorization',
    USER: 'User',
    O_Auth: 'O_Auth',
    CAR: 'Cars',
    PHOTO_MAX_SIZE: 2 * 1024 * 1024, // 2MB
    FILE_MAX_SIZE: 5 * 1024 * 1024, // 10MB
    VIDEO_MAX_SIZE: 15 * 1024 * 1024, // 15MB

    PHOTOS_MIMETYPES: [
        'image/gif',
        'image/jpeg',
        'image/pjpeg',
        'image/png',
        'image/tiff',
        'image/webp',
        'image/bmp',
        'image/pict',
        'image/tiff',
        'image/x-tiff'
    ],

    DOCS_MIMETYPES: [
        'application/msword', // DOC 1997-2003
        'application/pdf', // PDF
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // XLS
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // DOC 2007
    ],
    VIDEOS_MIMETYPES: [
        'video/mpeg',
        'video/mp4',
    ]
};
