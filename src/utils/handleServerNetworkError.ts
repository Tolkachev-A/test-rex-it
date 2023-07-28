// import axios, { AxiosError } from 'axios';
//
// import { setError } from 'store/actions';

// export const handleServerNetworkError = (
//   e: Error | AxiosError<{ error: string }>,
//   dispatch: any,
// ): void => {
//   if (axios.isAxiosError(e)) {
//     const error = e.response?.data ? e.response.data.message : e.message;
//
//     dispatch(setError(error));
//   } else {
//     dispatch(setError(`Native error ${e.message}`));
//   }
// };
export const handleServerNetworkError = () => {};
