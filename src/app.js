import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import routes from './router/routes';

ReactDOM.render(routes, document.getElementById('app'));
