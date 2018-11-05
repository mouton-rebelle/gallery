// @flow
export function promiseActionCreator({
  dispatch,
  payload = null,
  promise,
  actionName,
  successCallback,
  errorCallback
}: {
  dispatch: Dispatch,
  payload?: any,
  promise: Promise<any>,
  actionName: string,
  successCallback?: (result: any) => void,
  errorCallback?: (result: any) => void
}): Promise<any> {
  dispatch({ type: actionName, payload })
  console.log(promise)
  return promise.then(
    (result: any) => {
      dispatch({ type: `${actionName}_SUCCESS`, payload: result })
      if (typeof successCallback === 'function') {
        successCallback(result)
      }
      return result
    },
    error => {
      dispatch({ type: `${actionName}_FAILURE`, payload: error })

      if (typeof errorCallback === 'function') {
        errorCallback()
      }

      throw error
    }
  )
}
