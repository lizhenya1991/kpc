import {_$, localize} from './components/utils';

/* generate start */

import {App} from './components/app';
import {Badge} from './components/badge';
import {Breadcrumb, BreadcrumbItem} from './components/breadcrumb';
import {Button, ButtonGroup} from './components/button';
import {Cascader} from './components/cascader';
import {Checkbox} from './components/checkbox';
import {Collapse, CollapseItem} from './components/collapse';
import {Datepicker} from './components/datepicker';
import {Dialog} from './components/dialog';
import {Dropdown, DropdownMenu, DropdownItem} from './components/dropdown';
import {Editable} from './components/editable';
import {Form, FormItem} from './components/form';
import {Input} from './components/input';
import {Link} from './components/link';
import {Message} from './components/message';
import {MoveWrapper} from './components/moveWrapper';
import {Pagination} from './components/pagination';
import {Progress} from './components/progress';
import {Radio} from './components/radio';
import {Row, Col} from './components/grid';
import {ScrollSelect} from './components/scrollSelect';
import {Select, Option, OptionGroup} from './components/select';
import {Slider} from './components/slider';
import {Spinner} from './components/spinner';
import {Steps, Step} from './components/steps';
import {Switch} from './components/switch';
import {Table, TableColumn} from './components/table';
import {Tabs, Tab} from './components/tabs';
import {Tag} from './components/tag';
import {Tooltip} from './components/tooltip';
import {Transfer} from './components/transfer';
import {Upload} from './components/upload';

export {
    App,
    Badge,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    ButtonGroup,
    Cascader,
    Checkbox,
    Col,
    Collapse,
    CollapseItem,
    Datepicker,
    Dialog,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Editable,
    Form,
    FormItem,
    Input,
    Link,
    Message,
    MoveWrapper,
    Option,
    OptionGroup,
    Pagination,
    Progress,
    Radio,
    Row,
    ScrollSelect,
    Select,
    Slider,
    Spinner,
    Step,
    Steps,
    Switch,
    Tab,
    Table,
    TableColumn,
    Tabs,
    Tag,
    Tooltip,
    Transfer,
    Upload
};

export const version = '0.5.0';

/* generate end */

export default function install(Vue) {
    if (install.installed) return;

    if (Vue) {
        for (let key in exports) {
            const code = key.charCodeAt(0);
            // the key which the first char is uppercase is a component
            if (code >= 65 && code <= 90) {
                Vue.component(`K${key}`, exports[key]);
            }
        }
    } else {
        for (let key in exports) {
            const code = key.charCodeAt(0);
            // the key which the first char is uppercase is a component
            if (code >= 65 && code <= 90) {
                global[`K${key}`] = exports[key];
            }
        }
    }
}

export {_$, localize, install};