import { ProgramActions, ProgramActionTypes } from '../actions/program.actions';
import { Program } from '../../models/programs.model';

export interface ProgramState {
  loading: boolean;
  loaded: boolean;
  errorMessage: string;
  entities: { [id: string]: Program };
}

const initialState: ProgramState = {
  loading: false,
  loaded: false,
  errorMessage: null,
  entities: {}
};

export function reducer(state = initialState, action: ProgramActions): ProgramState {
  switch (action.type) {
    case ProgramActionTypes.LOAD_PROGRAMS: {
      return {
        ...state,
        loading: true
      };
    }

    case ProgramActionTypes.LOAD_PROGRAMS_SUCCESS: {
      const entities = action.payload;
      return {
        ...state,
        entities
      };
    }

    case ProgramActionTypes.LOAD_PROGRAMS_FAIL: {
      const errorMessage = action.error;
      return {
        ...state,
        errorMessage
      };
    }

    default: {
      return state;
    }
  }
}

export const selectProgramLoaded = (state: ProgramState) => state.loaded;
export const selectProgramLoading = (state: ProgramState) => state.loading;
export const selectProgramEntities = (state: ProgramState) => state.entities;
