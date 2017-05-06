import ComponentsListPage from '../../components/containers/ComponentsListPage';
import AvatarsPage from '../../components/containers/AvatarsPage';
import BarChartsPage from '../../components/containers/BarChartsPage';
import BottomDrawerPage from '../../components/containers/BottomDrawerPage';
import ButtonsPage from '../../components/containers/ButtonsPage';
import CheckBoxesPage from '../../components/containers/CheckBoxesPage';
import LineChartsPage from '../../components/containers/LineChartsPage';
import ListItemsPage from '../../components/containers/ListItemsPage';
import ModalsPage from '../../components/containers/ModalsPage';
import PickersPage from '../../components/containers/PickersPage';
import PieChartsPage from '../../components/containers/PieChartsPage';
import RadioButtonsPage from '../../components/containers/RadioButtonsPage';
import SpinnersPage from '../../components/containers/SpinnersPage';
import TextInputsPage from '../../components/containers/TextInputsPage';
import TopTabsPage from '../../components/containers/TopTabsPage';

export const ROUTE_COMPONENTS_HOME = 'ROUTE_COMPONENTS_HOME';
export const ROUTE_AVATARS = 'ROUTE_AVATARS';
export const ROUTE_BAR_CHART = 'ROUTE_BAR_CHART';
export const ROUTE_BOTTOM_DRAWER = 'ROUTE_BOTTOM_DRAWER';
export const ROUTE_BUTTON = 'ROUTE_BUTTON';
export const ROUTE_CHECKBOXES = 'ROUTE_CHECKBOXES';
export const ROUTE_LINE_CHART = 'ROUTE_LINE_CHART';
export const ROUTE_LIST_ITEM = 'ROUTE_LIST_ITEM';
export const ROUTE_MODALS = 'ROUTE_MODALS';
export const ROUTE_PICKERS = 'ROUTE_PICKERS';
export const ROUTE_PIE_CHART = 'ROUTE_PIE_CHART';
export const ROUTE_RADIO_BUTTONS = 'ROUTE_RADIO_BUTTONS';
export const ROUTE_SPINNERS = 'ROUTE_SPINNERS';
export const ROUTE_TEXT_INPUT = 'ROUTE_TEXT_INPUT';
export const ROUTE_TOP_TABS = 'ROUTE_TOP_TABS';

const componentsStackNavigation = {
  [ROUTE_COMPONENTS_HOME]: {
    title: 'Components',
    screen: ComponentsListPage,
  },
  [ROUTE_AVATARS]: {
    screen: AvatarsPage,
  },
  [ROUTE_BAR_CHART]: {
    screen: BarChartsPage,
  },
  [ROUTE_BOTTOM_DRAWER]: {
    screen: BottomDrawerPage,
  },
  [ROUTE_BUTTON]: {
    screen: ButtonsPage,
  },
  [ROUTE_CHECKBOXES]: {
    screen: CheckBoxesPage,
  },
  [ROUTE_LINE_CHART]: {
    screen: LineChartsPage,
  },
  [ROUTE_LIST_ITEM]: {
    screen: ListItemsPage,
  },
  [ROUTE_MODALS]: {
    screen: ModalsPage,
  },
  [ROUTE_PICKERS]: {
    screen: PickersPage,
  },
  [ROUTE_PIE_CHART]: {
    screen: PieChartsPage,
  },
  [ROUTE_RADIO_BUTTONS]: {
    screen: RadioButtonsPage,
  },
  [ROUTE_SPINNERS]: {
    screen: SpinnersPage,
  },
  [ROUTE_TEXT_INPUT]: {
    screen: TextInputsPage,
  },
  [ROUTE_TOP_TABS]: {
    screen: TopTabsPage,
  },
};

export default componentsStackNavigation;
