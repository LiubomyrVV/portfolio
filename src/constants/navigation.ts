const contactPosition = document.body.scrollHeight;

const NAVIGATION = [
    {
        name: 'Header',
        position: 0,
        isInNav: false,
    },
    {
        name: 'Main',
        position: 100,
        isInNav: false,
    },
    {
        name: 'About',
        position: 775,
    },
    {
        name: 'Experience',
        position: 1460,
    },
    {
        name: 'Projects',
        position: 2038,
    },
    {
        name: 'Contact',
        position: contactPosition,
    },
]
export default NAVIGATION;