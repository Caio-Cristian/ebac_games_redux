import { PreloadedState } from '@reduxjs/toolkit'
import { RenderOptions, render } from '@testing-library/react'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { AppStore, RootState, configuraStore } from '../store'
import carrinhoReducer from '../store/reducers/carrinho'
import api from '../services/api'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

const defaultPreloadedState = {
  carrinho: {
    itens: []
  },
  [api.reducerPath]: api.reducer(undefined, { type: 'INIT' })
}

export function renderizaComProvider(
  elemento: React.ReactElement,
  {
    preloadedState = defaultPreloadedState,
    store = configuraStore({
      reducer: {
        carrinho: carrinhoReducer,
        [api.reducerPath]: api.reducer
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
      preloadedState
    }),
    ...opcoesAdicionais
  }: ExtendedRenderOptions = {}
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Encapsulador({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return {
    store,
    ...render(elemento, {
      wrapper: Encapsulador,
      ...opcoesAdicionais
    })
  }
}
