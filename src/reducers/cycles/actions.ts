import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED'
}

interface AddNewCycleActionType {
  type: ActionTypes.ADD_NEW_CYCLE
  payload: { newCycle: Cycle }
}

interface MarkCurrentCycleAsFinishedActionType {
  type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED
}

interface InterruptedCurrentCycleActionType {
  type: ActionTypes.INTERRUPT_CURRENT_CYCLE
}

export type ActionData =
  | AddNewCycleActionType
  | MarkCurrentCycleAsFinishedActionType
  | InterruptedCurrentCycleActionType

export function addNewCycleAction(newCycle: Cycle): AddNewCycleActionType {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle
    }
  }
}

export function markCurrentCycleAsFinishedAction(): MarkCurrentCycleAsFinishedActionType {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED
  }
}

export function interruptCurrentCycleAction(): InterruptedCurrentCycleActionType {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE
  }
}
