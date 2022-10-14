import User from '../../auth/types/User';

interface ModalAction { type: '/user/changed'; payload: User }

export default ModalAction;
