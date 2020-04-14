import * as React from 'react';
import {
  NavigationHelpers,
  NavigationState,
  ParamListBase,
  EventMapBase,
} from '@react-navigation/core';
import LinkingOptionsContext from './LinkingOptionsContext';

export default function useLinkBuilder<State extends NavigationState>(
  navigation: NavigationHelpers<ParamListBase, EventMapBase>
) {
  const getOptions = React.useContext(LinkingOptionsContext);

  const buildLink = React.useCallback(
    (name: string, params?: object) => {
      // We need to get the full navigation state from root
      let root = navigation;
      let current;

      while ((current = navigation.dangerouslyGetParent())) {
        root = current;
      }

      // const key = navigation.dangerouslyGetState().key;
      // const state = root.dangerouslyGetState();

      // // Traverse the navigation state and remove any nested state below this navigator
      // const state = { ...state };

      // state.routes = state.routes.map()

      // const options = getOptions();
      // const path = options?.getPathFromState
      //   ? options.getPathFromState(result, options?.config)
      //   : getPathFromState(state, options?.config);

      // return path;
      return '';
    },
    [getOptions, navigation, state]
  );

  return buildLink;
}
