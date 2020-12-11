// uso vue js per creare l'header con i vari link
const headerApp = new Vue ({
    el: '#headerApp',
    data: {
        languages: ['Italiano', 'French', 'Spanish', 'English'],
        menu_list: [
            'Home',
            'Pages',
            'Course formats',
            'Courses',
            'Demos'
        ],

        socialNetwork: [
            'img/icons/image_box_2.png',
            'img/icons/instagram_512x512.png',
            'img/icons/linkedin-5-xxl.png',
            'img/icons/twitter-4-xxl.png',
            'img/icons/youtube-xxl.png'
        ],

        thirdMenu: [
            'Business',
            'Design',
            'Development',
            'Lifestyle',
            'OfficeProductivity'
        ],

    }
});


const footerApp = new Vue ({
    el: '#footerApp',

    data: {
        social: [
            'img/icons/image_box_2.png',
            'img/icons/instagram_512x512.png',
            'img/icons/linkedin-5-xxl.png',
            'img/icons/twitter-4-xxl.png',
            'img/icons/youtube-xxl.png',
        ]
    }

});

