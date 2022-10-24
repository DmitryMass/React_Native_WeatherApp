import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { TypeRootState } from '../../store/store';

const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector;

export default useTypedSelector;
