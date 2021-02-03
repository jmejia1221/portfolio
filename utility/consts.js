// Libs
import { 
    faAngular,
    faCss3Alt,
    faHtml5,
    faJsSquare,
    faReact,
    faSass,
    faVuejs,
    faWordpress,
    faGit,
    faLess
} from '@fortawesome/free-brands-svg-icons';

export const LANGUAGES = [
    {name: 'Javascript', value: 'javascript', icon: faJsSquare}
];

export const MARKUP_CASCADE = [
    {name: 'HTML', value: 'html', icon: faHtml5},
    {name: 'CSS', value: 'css', icon: faCss3Alt}
];

export const FRAMEWORKS = [
    {name: 'Angularjs', value: 'angularjs', icon: faAngular},
    {name: 'Reactjs', value: 'reactjs', icon: faReact},
    {name: 'Vuejs', value: 'vuejs', icon: faVuejs},
    {name: 'jQuery', value: 'jquery'}
];

export const DESIGN_TOOLS = [
    {name: 'Illustrator', value: 'illustrator'},
    {name: 'Adobe XD', value: 'xd'}
];

export const OTHER = [
    {name: 'Wordpress', value: 'wordpress', icon: faWordpress},
    {name: 'Git', value: 'git', icon: faGit},
    {name: 'Sass', value: 'sass', icon: faSass},
    {name: 'Less', value: 'less', icon: faLess},
    {name: 'BEM', value: 'bem'},
    {name: 'Firebase', value: 'firebase'},
    {name: 'And More...', value: 'more'}
];